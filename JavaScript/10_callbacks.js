/*
  Callbacks são funções passadas como argumentos ou retornos, muito usados para lidar com a
  asyncronicidade do javascript
*/

// Essa é um exemplo de High Order Funcation como callback
function doSomethingWithOne(callback) {
  return callback(1)
}

doSomethingWithOne(console.log)

// this is the same thing, but done asynchronously
// (Lembrar da metodologia Event Loop -> Stack - API -> Function Queue)
function doSomethingWithOneAsync(callback) {
  setTimeout(() => callback(1), 1000)
}

doSomethingWithOneAsync(console.log)

// this simulates a database call that returns an object representing a person
// No passado faziamos essas funções que eram usadas quando um resultado estava possível
// Como isso poderia fazer um callback hell, com um monte de {} aninhado, inventaram a promise
function getUserFromDatabase(callback) {
    // simulates getting data from db
    setTimeout(() => callback({firstName: 'Jordan', lastName: 'Hayashi'}), 1000)
}
