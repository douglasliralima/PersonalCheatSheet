'use strict'

//As três funções abaixo foram criadas pelo express-generator, a função em si é simples
//A função abaixo verifica se a porta que foi passada é válida, você verá o uso dela abaixo
function normalizePort(val){
    const port = parseInt(val, 10);
    if (isNaN(port)){
       return val;
    }else if( port >= 0){
        return port;
    }else{
       return false;
    }
}

//A função abaixo verifica algum erro que por ventura aconteceu em nosso servidor
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
    //Podemos pegar a documentação do node para tratar diferentemente algum outro erro
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

//A função abaixo serve para startar o debugger?
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

const http = require('http');
const debug = require('debug')('balta:server');
const express = require('Express');

//Para inicializar nossa aplicação vamos criar uma variável e o listener da porta
const app = express();
//Essa função abaixo vai passar ou uma porta separada pelo nodejs para a execução do programa
//Ou uma padrão que é a 3000
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Depois precisamos inicializar o nosso servidor baseado na app que criamos acima
const server = http.createServer(app);
//Fazemos uma variável rotadora, ela que dado o uso de uma URL em um navegador, chegam na gente
const router = express.Router();

/*
    Vamos criar agora que rota através do request get, lembrando que há o get, post, put e delete
    ganhando como parâmetros a URL padrão '/' que denota o localhost com a porta que a gente definiu(3000)
    e tambem uma função que ganha como parâmetro o request, response e next(vamos falar depois sobre cada),
    que envia para quem fez o request do tipo get um status code 200, vamos falar sobre status code também,
    mas por hora isso simboliza um okay do servidor mandando junto o título e a versão da nossa API
    */

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title : "Node Store API",
        version : "0.0.1"
    });
});

//Pronto, com a rota inicializada acima podemos settar ela na nossa aplicação
app.use('/', route);

//Junto com fazer o servidor ficar em modo listener
server.listen(port);
//Verificando se aconteceu algum erro na leitura do listener
server.on("error", onError)
//Starta o debugger
server.on("listening", onListening)
console.log("API Rodando na porta:", port);


