//Uma promise é criada de forma bem intuitiva, como esse objeto, nele definimos um processamento que acontecerá de forma asyncrona
let p = new Promise( (resolve, reject) => {
  let a = 1 + 1;
  if ( a = 1 ){
    resolve("Executou! \o/")
  }
  else {
    reject("Não foi dessa vez")
  }
})

//Para ver qual o resultado de fato dessa promise, fazemos como abaixo
p.then( (message) => {
  console.log(message)
})
.catch((err) => {
  console.log(err)
})

//Existem, claro, mais funcionalidades da promise, podemos esperar o resultado de um conjunto de promises para retornamos

let p2 = new Promise.resolve(2);
let p3 = new Promise.resolve(3);

//Se uma das funções rejeitar, nada dá certo, caso a gente queira ver, se pelo menos um dá certo, usamos o allSettled
Promise.all([p,p2,p3]).then(value => {
  //Eles vem todos em um array
  console.log(values)
});