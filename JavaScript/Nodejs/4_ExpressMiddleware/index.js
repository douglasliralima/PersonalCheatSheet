const express = require('express');

const server = express();

server.use(express.json());


const pessoas = [];

/**
 * Um conceito fundametal no express são os middlewares, eles são funções feitas para processar os dados a partir do
 * request e response, mas sem estar vinculados a nenhum método http, eles so chamados de middlewares já que sua
 * principal funço é executar antes do método http
 */

 //o express tem um metodo chamado use que nos permite definir um middleware global
 //esse next executa o próximo middleware da fila, que pode ser outra funcao ou o metodo post
 server.use((req, res, next) =>{
    console.time("Request")
    console.log(`Metodo ${req.method} na url ${req.url}`);

    //vamos executar o proximo middleware q nesse caso e o proprio request, já q esse é o ultimo middleware global
    next()
    console.timeEnd("Request");
 })

server.get('/pessoas/', (req, res) => {

  return res.send(pessoas);
})

//podemos entretanto criar moddlewares genericos, esses que só serão executados em metodos especicos
function CheckPerson(req,res, next){
  //algo comum a se fazer aqui dentro é adiconar parametros dentro do campo req, pois essas novas anterações so
  //repasadas
  //req.user = user
  if(!req.body.name){
    return res.status(400).send("Metodo precisa receber uma json com parametro 'name'")
  } else{
    return next();
  }
}

//podemos ter varios middlewares seguidos, sendo enviados de parametro
server.post('/pessoas/', CheckPerson, (req, res) => {
  const { name } = req.body;
  console.log(req.body);

  pessoas.push(name);


  return res.status(200).send(`Usuario ${name} cadastrado:\n${pessoas}`);
});


server.listen(3001);
