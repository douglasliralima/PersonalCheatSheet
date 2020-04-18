// console.log(myName) // Isso vai
// console.log(MyScopeVar) // Isso não vai, entenda mais a baixo

// ---------- VARIABLES ----------
// Variáveis aqui são muito semelhantes a python, todas elas tem um único tipo abstrato que engloba a pohh4, com o tipo depedendo de como é a variável
var myName = "Derek";
var myAge = 40;

// Variáveis não são presas a um único tipo o que pode dar uns probleminhas
myName = 100;

//var entretanto são variáveis globais, elas não são excluidas em escopo e sempre ficam no topo(hosting)
//do seu código, por isso temos mais dois tipos de variáveis que possuem escopo

const MyConstantSister = "Isabella"; // Só pode ter 1 referência, até o fim
//Caso vc tenha um objeto ou uma lista, a referência a ela continuará a mesma, msm se colocarmos mais valores nela

let MyScopeVar = 40;

//funções também sofrem efeito de hosting