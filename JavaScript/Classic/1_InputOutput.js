// Criamos todas as variáveis, seja int, float o caralh0 com a variável var
//O prompt serve para abrir uma tela no navegador como um JOptionPane
var yourName = prompt("Qual seu nome?");

// If
if(yourName != null){

/*
Nos podemos pegar os elementos de html, referenciando no javascript e os manipulando com o
getElementById
*/
document.getElementById("sayHello").innerHTML = "Olá " + yourName;
} else {

// Alert opens a popup that contains a message
alert("Please Enter Your Name Next Time");
}