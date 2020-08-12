function makeFunctionArray() {
    const arr = []
  
    for (var i = 0; i < 5; i++) {
      arr.push(function () { console.log(i) })
    }
  
    return arr
  }
  
  const functionArr = makeFunctionArray()
  
  // Nos esperamos que aqui vá printar 0, mas não acontece, pois
  // armazenamos a função, só que o i fica atualizado e nos o acessamos
  // diretamente graças ao elemento de clojure
  functionArr[0]()
  
// Podemos entretanto criar uma Immediately invoked function expression(IIFE) armazenando cada 
// estado para um array, dessa forma ele fica vinculado ao parâmetro que já havia sido passado,
// como uma função anonima
function makeFunctionArray() {
    const arr = []
  
    for (var i = 0; i < 5; i++) {
      arr.push((function (x) {
        return function () { console.log(x) }
      })(i))
    }
  
    return arr
  }