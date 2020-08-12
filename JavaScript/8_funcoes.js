//Essa é uma função definida lá no final, mas ela funciona aqui pelo efeito hoisting explicado em 2_
console.log("Factorial of 4 : ", factorial(4));

// ---------- FUNCTIONS ----------
// Funções são uma das cerejas no bojo do JavaScript, usa-las adequadamente é quase entender a linguagem

// Primeira coisa que vamos fazer é uma função bem mamão com açucar
function inArray(arrayToCheck, value){
    for(i = 0; i < arrayToCheck.length; i++){
        if(arrayToCheck[i] === value){
            return true;
        }
    }
    return false;
}

var randArray = [1,2,3,4,5];

console.log("In Array : ", inArray(randArray, 4));


// Aqui em JavaScript podemos passar uma função como parâmetro de outra
function times3(num){
    return num * 3;
}

function multiply(func, num){
    return func(num);
}

//Veja essa loucura
console.log("3 * 15 = ", multiply(times3, 15));

/*
Aqui nos podemos fazer a magia de passar funções a variáveis, armazena-las em arrays e 
passar como parâmetros assim como retornar em um return, pois uma função fica armazenada em
um espaço da memória, uma referência
*/
var triple = function(num){
    return num * 3;
};

console.log("3 * 45 = ", multiply(triple, 45));

// Podemos pegar todos os argumentos passados sem os especifica-los, "VAi dar merd4 isso", mas  é interessante
function getSum(){
    var sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log("Sum : ", getSum(1,2,3,4,5));

// Retorno de um array
function times2(theArray){
    var newArray = [];
    for(i = 0; i < theArray.length; i++){
        newArray.push(theArray[i] * 2);
    }
    return newArray;
}

console.log("Array Doubled : ", times2([1,2,3,4,5]).toString());

// Função recursiva factorial clássica
function factorial(num){
    if(num <= 1){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Toda função possui o elemento de hoisting, entretanto, se não queremos que uma função seja
// acessível globalmente, nos a definimos através de uma constante

const sayHello = (function () {
    var message = 'Hello!'
  
    function sayHello() {
      console.log(message)
    }
  
    return sayHello
  })()

// IIFEs can also be used to create variables that are inaccessible from the global
// scope
const counter = (function() {
  let count = 0

  return {
    inc: function() { count = count + 1 },
    get: function() { console.log(count) },
  }
})()

counter.get()
counter.inc()
counter.get()