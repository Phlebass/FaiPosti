function genera() {

  let str = "";
  let id_posto = ""
  let input_cols = document.getElementById("in_format").value.split("; ");
  let values = [];
  for (let c = 0; c < input_cols.length; c++) {
    values[c] = input_cols[c].split(" ");
    values[c] = values[c].map((x) => parseInt(x));
  }

  //console.log(values);

  for (let i = 0; i < input_cols.length; i++) {
    str += "<div class=\"colonna\">";
    for (let j = 0; j < values[i].length; j++) {
      str += "<div class=\"coppia\">";
      for (k = 0; k < values[i][j]; k++) {
        id_posto = "" + i + "-" + j + "-" + k;
        str += "<div> <input type=\"text\" class=\"testo_banco\" id=\"testo-" + id_posto + "\"></div>";
        //str += "<input type=\"checkbox\" id=\"cb-" + id_posto + "\"></input></div>";
      }
      str += "</div>"
    }
    str += "</div>";
  }

  document.querySelector("#piantina").innerHTML = str;

}

function inserisci_nomi() {
  let nomi = document.querySelector("#in_nomi").value.split(", ");
  let banchi = document.querySelectorAll(".testo_banco");
  let skip = 0;
  let i = 0;
  while (i < nomi.length) {
    if (banchi.item(i + skip) == null) {
      console.log("Non ci sono abbastanza banchi per inserire tutti i nomi");
      return;
    } else if (banchi.item(i + skip).value == "") {
      banchi.item(i + skip).value = nomi[i];
      i++;
    } else {
      skip++;
    }
  }
}

function shuffle() {
  let banchi = document.querySelectorAll("#piantina .testo_banco");
  let nomi = Array.from(banchi).map((x) => x.value);

  let i = nomi.length - 1;
  let j = 0;
  let aux = "";
  while (i > 0) {
    j = Math.floor(Math.random() * i);
    aux = nomi[i];
    nomi[i] = nomi[j];
    nomi[j] = aux;
    i--;
  }

  while (i < banchi.length) {
    banchi.item(i).value = nomi[i];
    i++;
  }
}

function stampa() {

  let nuova_piantina = document.querySelector("#piantina").cloneNode(true);
  nuova_piantina.id = "piantina2";
  document.querySelector("#piantine_stampa").appendChild(nuova_piantina);
  let nuovi_banchi = document.querySelectorAll("#piantina2 .coppia>div");
  for (let i = 0; i < nuovi_banchi.length; i++) {
    nuovi_banchi.item(i).textContent = nuovi_banchi.item(i).firstElementChild.value;
  }

  nuova_piantina = document.querySelector("#piantina2").cloneNode(true);
  nuova_piantina.id = "piantina_rev";
  document.querySelector("#piantine_stampa").appendChild(nuova_piantina);

  let print_window = window.open('', '', 'height=400,width=800');
  print_window.document.write("<html><head><title>Piantina</title><link rel=\"stylesheet\" href=\"styles.css\"></head><body><div id=\"piantina\">")
  print_window.document.write(document.querySelector("#piantine_stampa").innerHTML);
  print_window.document.write("</div></body>")

  document.querySelector("#piantine_stampa").innerHTML = "";

  print_window.document.close();
  print_window.print();

}

document.querySelector("#in_format").value = "2 2 2 2 2; 2 2 3 3 3; 2 2 2 2";
document.querySelector("#in_nomi").value = "Gauss K. F., Dedekind J. W. R.";