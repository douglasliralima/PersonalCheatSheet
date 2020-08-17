//Import básico com o nodejs
const express = require('express');

const server = express();

server.get('/teste', (req,res) => {
    res.send("Hello World")
})

//Porta socket que vai estar ouvindo qualquer mensagem enviada para essa mquina
server.listen(3001);