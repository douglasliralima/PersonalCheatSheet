/**
 * O AJAX é uma requisição assincrona para o servidor, de forma que a gente
 * não precise recarregar a página para atualizar a informação ou precisar
 * ficar travado na tela
 */
//Vamos para exemplificar usar essa classe que usa o conceito AJAX
var xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.github.com/users/douglasliralima")
xhr.send(null)

//Para executar alguma funcionalidade quando essa informação chega, basta criar
//Uma função abstrata
xhr.onreadystatechange = function() {
//4 é o número do readyState quando a requisição AJAX termina
if (xhr.readyState === 4) {
    //Precisamos transformar XML em JSON
    console.log(JSON.parse(xhr.responseText))
}
}

     
//Vamos para exemplificar usar a promise de uma execução AJAX
     //Veja que a gente cria uma função factory de promises
     var minhaPromise = function(){
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest()
  
          xhr.open("GET", "https://api.github.com/users/douglasliralima")
          xhr.send(null)
  
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
              //Ela funciona igual a diferença é que agora retornamos na variavel 
              //resolve em caso de dar bom e reject em caso de dar
              if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText))
              } else {
                reject("Erro de requisição")
              }
            }
          }
         });
       }
      
      //Definida a minha promise, nos podemos realizar operações de if e else para a
      //nossa requisição caso ela tenha dado certo (response vai invocar then) ou
      //errado(reject vai invocar error)
      
      minhaPromise()
              .then(function(response){
                console.log(response)
              })
              .catch(function(error){
                console.warn(error)
              })