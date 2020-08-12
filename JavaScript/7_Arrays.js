// ---------- ARRAYS ----------
// Arrays aqui são quinemquigual ao python, com listas de tipos whatever
var tomSmith = ["Tom Smith", "123 Main", 120.50];

// acessando primeiro array
document.write("1st State : ", tomSmith[0], "<br />");

// Substituir um item
tomSmith[3] = "tsmith@aol.com";

// Convert an array into a string (Also use toString())
document.write("Array : ", tomSmith.valueOf(), "<br />");

// Convert an array into a string with separator
document.write("Array : ", tomSmith.join(", "), "<br />");

// Delete an index
delete tomSmith[3];

// Sort an array (reverse() for reverse sort)
// Works for sorting strings
tomSmith.sort();

// Sort numbers é um padrão aqui em JS, devemos fazer o seguinte
var numbers = [4,3,9,1,20,43];

// Descending sort(menor para o maior)
numbers.sort(function(x,y){ return x - y });
// Ascending Sorting(Maior para o menor)
numbers.sort(function(x,y){ return y - x });
document.write("Num Array : ", numbers.toString(), "<br />");

// Combine arrays
var combinedArray = numbers.concat(tomSmith);

// Remove the last item
tomSmith.pop();

// Add items to the end, podemos colocar mais de 1 de uma vez
tomSmith.push("555-1212", "US");

// Deletes the first item
tomSmith.shift();

// Adds item to the first index
tomSmith.unshift("Tom Smith");

//Modo arcaico de printar o array
for (var i = 0; i < tomSmith.length; i++) {
    document.write(tomSmith[i], "<br />");
}

//Temos três operações que podem ser feitas em um array por padrão: map, filter, reduce

var arr = [0,1,2,3,4,5]

//Map - Executa uma função para cada elemento do array
arr.map(function(x) {
    return x + 1;
});

//Filter - Filtra um elemento dependendo se ele retorna true ou false
arr.filter(function(x){
    return x > 1;
});

//Reduce - Tranforma tudo em um único valor, recebe como parametro um acumulador e o parametro
arr.reduce(function(acc, x){
    return acc + x;
});
console.log()