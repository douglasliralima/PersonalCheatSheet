const Post = require("../models/Post");

//Aqui dentro desse controller a gente só vai criar um objeto que exportar 
//os métodos do controller
module.exports = {
    //Como demora para fazer ações no DB e são middleware, a diferença é que a rota
    //ficará apenas para o routes.js anexar a esses métodos
    async index(req, res){

    },
    async store(req, res){
        //Acesso aos atributos padrão do JSON
        console.log(req.body);
        //Tipo arquivo enviado
        console.log(req.file);
        return res.json({ ok : true });
    }
};