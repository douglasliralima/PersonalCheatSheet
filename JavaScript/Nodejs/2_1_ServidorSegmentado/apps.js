'use strict'

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

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const router = express.Router();


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title : "Node Store API",
        version : "0.0.1"
    });
});

app.use('/', route);

module.exports = app;