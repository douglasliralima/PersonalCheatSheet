import * as restify from 'restify'

const server = restify.createServer({
  name: 'meat-api',
  version: '1.0.0'
})

//Simples requisição get, cada um desses parametros está descrito no documento do drive
server.get('/hello', (req, resp, next)=>{
  //resp.json({message: 'hello'})
  resp.send({message:"Fala meu bom! o/"})
  return next() //Ao final de toda requisição http, nos sinalizamos no restify com next()
})

//Aqui apenas definimos em qual socket o nosso servidor vai se instalar
server.listen(3000, ()=>{
  console.log('API is running on http://localhost:3000')
})
