import {Server} from './Server/serverRotasDentro'

//Criamos o servidor
const server = new Server()
//Inicailizamos as rotas dando startup no servidor
server.bootstrap().then(server=>{
  //Endereço do servidor:
  console.log('Server is listening on:', server.application.address())
}).catch(error=>{
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})
