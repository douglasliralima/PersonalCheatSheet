'use strict'

const express = require('express');
//import do body parser, existe vários usos para ele, vamos mostrar dois
//Fazemos uma variável rotadora, ela que dado o uso de uma URL em um navegador, chegem na gente
const router = express.Router();
//Definição de uma aplicação express comum
const app = express();

const bodyParser = require('body-parser');
//Permite transformar os body em json
app.use(bodyParser.json());
//Permite a decodificação de URL para o formato de texto normal
app.use(bodyParser.urlencoded({    extended: false  }));



const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title : "Node Store API",
        version : "0.0.2"
    });
});

//Vamos mandar o msm body do post que o usuário nos enviou, apenas para demonstrar
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

//Através do put pegamos alguma coisa da URL, nesse caso vamos pegar todo o resto que n for o URL 
//e considerar como id
const put = router.put('/:id', (req,res,next) => {
    //para pegarmos o id é simples
    let id = req.params.id;
    //Vamos então mandar para obedecer o TCP um JSON resposta
    res.status(201).send({
        id : id,
        item : req.body,
        "teste" : "Isso é um teste"
    });
})

//Só para mostrar o delete, ele não mostra o que fazer
const del = router.delete('/', (req, res, next) => {
    res.status(201).send(req.body);
});

app.use('/', route);
app.use("/create", create)
//Vamos usar o msm URL para fazer a demonstração
app.use("/create", put)
app.use("/create", del)

//Faz com que aquilo que seja pego quando damos um import nesse script seja justamente o app que configuramos acima
module.exports = app;