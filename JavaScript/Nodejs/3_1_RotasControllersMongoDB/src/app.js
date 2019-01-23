'use strict'

const express = require('express');
const router = express.Router();
//Mongoose fica sempre aberto no servidor, bom ter cuidado
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// Connecta ao banco pelo mesmo link
mongoose.connect("mongodb://douglasliralima:jujuba123@ds121543.mlab.com:21543/duraranlearning");

// Carrega os Models
const Product = require('./models/product');

//Vamos carregar todas as rotas aqui
const index = require("./routes/index.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({    extended: false  }));

//Todas as rotas estão aqui
const product = require("./routes/productsRoutes.js") 

app.use('/', index);
//Toda a crud tá no mesmo router
app.use("/create", product)

module.exports = app;