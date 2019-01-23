/**
 * Um noSQL geralmente é schemeless, entretanto com o mongoose nós podemos ao menos
 * criar os esquemas para ao menos aplicar algumas validações de maneira que não seja
 * a moda caralhada
 */

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Vamos criar o esquema criando um JSON em que definimos como devem ser os campos
//Bem legal
const schema = new Schema({
    title: {
        type: String, //Definimos o tipo
        required: true, //Se é requirido ou não
        trim: true //Retiramos espaços antes e depois..
    },
    slug: { //Slug é o nome no URL, por exemplo, Cadeira Gamer = cadeira-gamer
        type: String,
        required: [true, 'O slug é obrigatório'], //Podemos colocar uma mensagem se der merd4
        trim: true,
        index: true, //Cria um indice para cada
        unique: true //Só permite um identificador, sem iguals
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true //Podemos fazer um default aos nossos campos
    },
    tags: [{ //Um array de strings, olha que foda!
        type: String,
        required: true
    }],
    image: {
        type: String,
        required: true,
        trim: true
    }
});

//Precisamos dar um nome a esse model
module.exports = mongoose.model('Product', schema);


    