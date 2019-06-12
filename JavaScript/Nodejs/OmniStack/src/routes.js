const express = require('express');
//Permite usar mult part form data(envio de img e vídeo) e arquivos
const multer = require('multer');

//Criação do objeto que vincula a execução com o caminhos das rotas
const routes = new express.Router();
const upload = multer()

//Podemos então deixar ele olhando rotas
//Esse segundo parametro é uma função de midware, ela fica indexada naquele endereço e consegue responder com os métodos de
//Res(response) e recolher parametros com os métodos de req(request)
routes.get('/',  (req, res) => {
    return res.send('Hello ' + req.query.Name);
})
 
const PostController = require('./controllers/PostController');

routes.post('/posts',
            upload.single('image'), //Definimos o que do request é um arquivo, resto vira JSON
            PostController.store);


module.exports = routes;