//Podemos definir um objeto de forma dinâmica no javascript

const o = new Object();
o.firstName = "Douglas";
o.lastName = "Lima";

//Métodos em javascript são na verdade chaves que guardam funções
o.saudacao = function(){
    console.log("Olá!");
}

const o2 = new Object();
//Podemos chamar tanto pela escrita normal pelo ponto, quanto por uma string estilo dicionario
//No final tudo é transformado em string
o2['firstName'] = "Douglas";
const key = 'lastName';
o2[key] = "Lima";
o2.saudacao = function(){
    console.log("Olá");
}

const o3 = {
    "firstName" : "Douglas",
    lastName : "Lima",
    saudacao : function(){
        // Todo objeto pode se auto referenciar com o this
        console.log("Olá" + this.firstName); 
    },  
    //Podemos ter objetos declarados dentro de objetos
    adress : {
        street : "Rua bacharel Irenaldo de albuquerque",
        numero : 201
    },
}

//Os identificadores são uma referência para os objetos, logo isso aqui

let o4 = o3;
o3.firstName = "Isabella"
//First name de o4 tbm foi mudado

//Se quiser um objeto totalmente diferente, podemos pegar novas chaves e faze-los apontar para o
//que estava apontada do outro objeto, no caso o o3
o4 = Object.assign({}, o3);

// ================= This - avançado
const person = {
    name: 'Jordan',
    greet: function() { console.log('Hi, ' + this.name) }
}

person.greet() // Hi, Jordan

// =====================================

const friend = {
    name: 'David',
}

friend.greet = person.greet

friend.greet() // Hi, david já que o david possui um name, então o this vai sempre referenciar o do seu objeto

// ====================================

const greetPerson = person.greet

greetPerson() // Hi, undefined pois aqui o this vai referenciar o do objeto flobal, q n possui um name
