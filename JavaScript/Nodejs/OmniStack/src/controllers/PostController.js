const Post = require("../models/Post");
const sharp = require('sharp'); //Modulo para PDI
const path = require('path');
const fs = require('fs');
//Aqui dentro desse controller a gente só vai criar um objeto que exportar 
//os métodos do controller
module.exports = {
    //Como demora para fazer ações no DB e são middleware, a diferença é que a rota
    //ficará apenas para o routes.js anexar a esses métodos
    async index(req, res){
        //Poderia definir filtros de procura no bd no método find(), mas puxamos td
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts)
    },
    async store(req, res){
        //Acesso aos atributos padrão do JSON
        const {author, place, description, hashtag} = req.body; 
        //Nome do tipo arquivo enviado
        const {filename : image} = req.file;

        const [name] = image.split('.');

        const newImgName = name + '.jpg'
        //O req.file é um JSON com uma pohh4da de coisa
        //Vamos usar alguns de seus parâmetros abaixo
        //console.log(req.file) 
        
        //Vamos diminuir a imagem para ela n ficar muito pesada para celulares
        await sharp(req.file.path)
                .resize(500)
                .jpeg({quality:70})
                .toFile(
                    path.resolve(req.file.destination, 'resized', newImgName)
                );
        
        //Com a reshape img salva, apagamos sua antiga instância
        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author, 
            place, 
            description, 
            hashtag,
            newImgName
        })

        //Emite a todos os sockets conectados ao servidor nesse protocolo o novo post
        req.io.emit('post', post);

        return res.json(post);
    }
};