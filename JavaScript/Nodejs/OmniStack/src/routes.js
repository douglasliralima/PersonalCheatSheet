const express = require('express');
//Permite usar mult part form data(envio de img e vídeo) e arquivos
const multer = require('multer');

//Criação do objeto que vincula a execução com o caminhos das rotas
const routes = new express.Router();
//JSON com a forma que os arquivos serão carregados
const loaderConfig = require('./config/upload')
const upload = multer(loaderConfig)

//Podemos então deixar ele olhando rotas
//Esse segundo parametro é uma função de midware, ela fica indexada naquele endereço e consegue responder com os métodos de
//Res(response) e recolher parametros com os métodos de req(request)
routes.get('/',  (req, res) => {
    return res.send('Hello ' + req.query.Name);
})
 
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

//Retorno de posts no bd
routes.get('/posts', PostController.index);
//Upload de posts
routes.post('/posts',
            upload.single('image'), //Definimos o que do request é um arquivo, resto vira JSON
            PostController.store);

// Dois pontos demonstra que tem um parâmetro de url
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes;