let str = "";
let str_posto = ""

for(let i=0; i<3; i++) {
  str += "<div class=\"colonna\">";
  for (let j=0; j<5; j++) {
    let posti = 2;
    if (i==1 && (j==0 || j==1))
        posti=3;
    str+= "<div class=\"coppia\">";
    for(k=0; k<posti; k++) {
        str_posto = "<div> <input type=\"text\" id=\"b" +i+"b"+j+"b"+k+"\"></input></div>";
        str += str_posto;
    }
    str+="</div>"
  }
  str += "</div>";
}

document.querySelector("#content").innerHTML = str;