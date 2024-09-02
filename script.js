function genera() {

  let str = "";
  let id_posto = ""
  let input_cols = document.getElementById("in_format").value.split("; ");
  let values = [];
  for (let c = 0; c < input_cols.length; c++) {
    values[c] = input_cols[c].split(" ");
    values[c] = values[c].map((x) => parseInt(x));
  }

  console.log(values);

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

document.querySelector("#in_format").value = "2 2 2 2 2; 2 2 3 3 3; 2 2 2 2";
document.querySelector("#in_nomi").value = "Sauro Dino, Coteca Pina";
