//É nos controllers que vai o código de verdade, ele é um mecanismo
//para facilitar o trabalho das router dividindo trechos de códigos em vários controllers
'use strict'
const mongoose = require('mongoose');
//Para isso nomeamos o model, isso pega cria construtor que usaremos na hora de salvar nossos dados
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    /**
     * O primeiro jeito de fazer seria:
     * var product = new Product(req.body);
     * product.title = req.body.title;
     * Esse jeito é bom quando temos campos pré-preenchidos para evitar erros
     * de alguma mudança que a gente tenha feito
     */
    var product = new Product(req.body);
    //Isso retorna uma promise, então n tem garantia de execução instânea
    product.save()
    .then(x=>{
        //Mandando um json com a mensagem de sucesso ou falha
        res.status(201).send({
            message : "Produto Cadastrado com sucesso"
        });
    })
    .catch(e=>{
        res.status(400).send({
            message : "Falha ao cadastrar o produto",
             data : e
            });
    });
}

exports.put = (req,res,next) => {
    let id = req.params.id;
    res.status(201).send({
        id : id,
        item : req.body,
        "teste" : "Isso é um teste"
    })
}

exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
}