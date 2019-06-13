const Post = require("../models/Post");

//Explicações no PostController
module.exports = {
    async store(req, res){
        //Primeiro a gente acha o model do post no nosso mongoDB pelo id no request
        const post = await Post.findById(req.params.id);

        post.likes += 1;
        await post.save();

        //Socket.io detecta e emite o novo like em um post
        req.io.emit('like', post);

        return res.json(post);
        
    }
};