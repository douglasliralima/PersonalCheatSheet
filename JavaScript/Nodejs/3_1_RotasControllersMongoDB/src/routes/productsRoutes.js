
const express = require('express');
const router = express.Router();
//Usamos o controller para aqui ficar apenas as rotas
const controller = require('./ProductsController.js')

const create = router.post('/', controller.post);

const put = router.put('/:id', controller.put);

const del = router.delete('/', controller.delete);



module.exports = router;