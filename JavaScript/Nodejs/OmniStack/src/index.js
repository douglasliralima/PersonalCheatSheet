//Basicamente a gente importa todas as funcionalidades da biblioteca assim:
const express = require('express');
const mongoose = require('mongoose');

//Criação da aplicação principal
const app = express();
//Para conectar basta passar o stringConnect, mandar um JSON falando q é o primeiro
mongoose.connect("mongodb+srv://douglasliralima:<password>@instaomni-epfhp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser : true,
});
//Podemos então deixar ele olhando rotas
//Esse segundo parametro é uma função de midware, ela fica indexada naquele endereço e consegue responder com os métodos de
//Res(response) e recolher parametros com os métodos de req(request)
app.get('/',  (req, res) => {
    return res.send('Hello ' + req.query.Name);
})

//Deixa ela olhando a porta 80
app.listen(3335);

