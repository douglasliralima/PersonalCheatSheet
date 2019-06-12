//Basicamente a gente importa todas as funcionalidades da biblioteca assim:
const express = require('express');
const mongoose = require('mongoose');

//Criação da aplicação principal
const app = express();
//Para conectar basta passar o stringConnect, mandar um JSON falando q é o primeiro
mongoose.connect("mongodb+srv://douglasliralima:B9mZVSmmjSizBgr@instaomni-epfhp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser : true,
});

//Precisamos definir as rotas que a nossa aplicação vai usar
app.use(require('./routes'));

//Deixa ela olhando a porta 80
app.listen(3333);

