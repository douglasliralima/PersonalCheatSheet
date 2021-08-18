var express = require("express")


let app = express();

//Precisamos passar algum interpretador de corpo de requisição, para conseguirmos ter acesso
//no .body o json(VEJA REQUEST)
app.use(express.json()); 

// app.METHOD(PATH, CALLBACKHANDLER)
app.get("/teste", function(response, request){
    console.log("Rota de teste no express")
})

// Response, métodos mais comuns neles:
// .send(): Envia uma resposta de vários tipos.
// .sendFile(): Envia um arquivo como resposta.
// .json(): Envia um resposta JSON.
// .redirect(): Redireciona uma solicitação.
// .status(): Define o status HTTP da resposta.
// .end(): Termina o processo de resposta.
app.get("/home", function(request, response){
    //Nome de um arquivo qualquer que seria mandado
    const fileName = "index.html";

    //Mandamos de opções o root de onde será acessáveil o arquivo
    const options = {
            root : __dirname
    }
    response.sendFile(fileName, options, function(error) {
        if (error){
            console.log("Erro ao escrever o arquivo");
        }
        response.status(200);
        console.log("Enviado " + fileName);
        response.end();
    })
})

app.get("/home/cliente", function(request, response){
    response.status(200);
    response.json({
        nome : "Douglas"
    })
})

// Request - 
// .body: O corpo da requisição. Por exemplo, quando usamos POST.
// .params: Parâmetros da requisição no formato /rota/:parametro.
// .query: Um objeto que contém uma propriedade para cada query na rota, no formato /rota?query=value.
// .method: O método HTTP da requisição, como GET, POST, DELETE, etc.
app.get("home/:id/:cliente", function(request, response){
    const {id, cliente} = request.params
    console.log(id);
    console.log(request.params.cliente);
    console.log(request.query.nascimento) //
    console.log(request.body)
})

app.listen(8080);