const mongoose = require('mongoose');

//Para criar um model com schema é bem fácil usando o mongoose, basta criar um JSON,
//Com os nomes das colunas e seu tipo correspondente e outro JSON com configurações
//para esses registros
const PostSchema = new mongoose.Schema({
    author : String,
    place : String,
    description : String,
    hashtag : String,
    image : String, //Arquivos físicos, aqui só o nome
    likes : {
        type : Number,
        default : 0
    }
}, {
    timestamps : true, //Vai nos trazer as datas de criação ou update dos posts
})

//A gente exporta o modelo do schema definido acima
module.exports = mongoose.model('Post', PostSchema)