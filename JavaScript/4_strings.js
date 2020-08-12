 //Combinação de string com o plus
 var randStr = "A long " + "string that " + "goes on and on";

 // String length
 document.write("String tamanho : ", randStr.length + "<br/>");

 document.write("Primeiro indice de \"goes\" : ", randStr.indexOf("goes"), "<br/>");

 // Retorna a substring de um indice de começo e um indice de fim
 document.write(randStr.slice(19, 23) + "<br/>");

 // Return everything after the start index
 document.write(randStr.slice(19) + "<br/>");

 // Retorna a substring a partir de um indice e falando o tamanho daquilo que se quer cortar, não o indice final
 document.write(randStr.substr(19, 4) + "<br/>");

 // Replaçar um string
 document.write(randStr.replace("and on", "forever") + "<br/>");

 // Pega o caracter no indice determinado
 document.write("At Index 2 : ", randStr.charAt(2) + "<br/>");

 // Splitão classiqueira
 var randStrArray = randStr.split(" ");

 // Trim remove espaços em branco do começo ou fim de uma string
 randStr = randStr.trim();

 // Convert to uppercase
 document.write(randStr.toUpperCase() + "<br/>");

 // Convert to lowercase
 document.write(randStr.toLowerCase() + "<br/>");

 // Podemos estilizar um dado string com javascript de várias maneiras a mais simples é só colocando a tag correspondente de modificação de estilo
 var strToStyle = "Random String";

 document.write("Big : ", strToStyle.big(), "<br />");
 document.write("Bold : ", strToStyle.bold(), "<br />");
 document.write("Font Color : ", strToStyle.fontcolor("blue"), "<br />");
 document.write("Font Size : ", strToStyle.fontsize("8em"), "<br />");
 document.write("Italics : ", strToStyle.italics(), "<br />");
 document.write("Google : ", strToStyle.link("http://google.com"), "<br />");
 document.write("Small : ", strToStyle.small(), "<br />");
 document.write("Strike : ", strToStyle.strike(), "<br />");
 document.write("Sub : ", strToStyle.sub(), "<br />");
 document.write("Sup : ", strToStyle.sup(), "<br />");