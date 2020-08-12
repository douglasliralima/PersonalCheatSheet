const numeros = [1, 2, 3, 4, 5, 6, 7];

//Remove o primeiro elemento
const primeiroElemento = numeros.shift();

//Coloca o primeiro elemento
numeros.unshift(1);

//Foreach é um método do array
numeros.forEach( function(item){
        return item + 1;
    }
);

//Ver se um elemento está presente no array
numeros.includes(1); //retorna true

//Retorna true se pelo menos um elemento do array retornar true
numeros.some(function (item) {
    return item < 3
}) // retorna true

//Retorna true se todos os elementos tiverem retornado true
numeros.every(function (item) {
    return item < 10
}) // retorna true

numeros.filter(function (item) {
    return item < 3;
});

numeros.map(function (item) {
    return item - 1;
});

const total = numeros.reduce(function (total, valor) {
    return total + valor
})

console.log(total)