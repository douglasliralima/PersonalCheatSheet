//Basicamente a gente importa todas as funcionalidades da biblioteca assim:
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
//Permite que aplicações em outros domínios acessem esse backend:
const cors = require('cors')
//Criação da aplicação principal
const app = express();

//Para a gente usar outros protocolos webs precisamos fazer essa gambiarra e usar o
//app em composição dos servers e protocolos, incluindo o http padrão
const server = require('http').Server(app)
const io = require('socket.io')(server);

//Para conectar basta passar o stringConnect, mandar um JSON falando q é o primeiro
mongoose.connect("mongodb+srv://douglasliralima:B9mZVSmmjSizBgr@instaomni-epfhp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser : true,
});

//Incorporamos do protocolo socket.io, para que possa observar as requições http
app.use((req, res, next) => {
    req.io = io
    next(); //Garante que os vá executar próximos middwares
})

app.use(cors())

//Aqui permitimos o uso de um cliente a acessar os arquivos de alguma pasta:
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

//Precisamos definir as rotas que a nossa aplicação vai usar
app.use(require('./routes'));

//Deixa ela olhando a porta 80
server.listen(3333);

