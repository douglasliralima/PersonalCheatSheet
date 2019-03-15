"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = __importStar(require("restify"));
const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
});
server.use(restify.plugins.queryParser()); //Plugin que permite identificar parametros de URLs
//Simples requisição get, cada um desses parametros está descrito no documento do drive
server.get('/hello', (req, resp, next) => {
    //resp.json({message: 'hello'})
    resp.status(400); //Simbolizar algum erro ou outra mensagem de protocolo
    resp.send({ message: "Fala meu bom! o/" });
    return next(); //Ao final de toda requisição http, nos sinalizamos no restify com next()
});
server.get('/info', [
    (req, resp, next) => {
        if (req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
            //resp.status(400)
            //resp.json({message: 'Please, update your browser'})
            let error = new Error(); //Define um objeto generico de erro
            error.statusCode = 400; //Setta um status code
            error.message = 'Please, update your browser'; //E uma mensagem
            return next(error);
        }
        return next();
    }, (req, resp, next) => {
        //Coisas que podemos ter com o request
        resp.json({
            browser: req.userAgent(),
            method: req.method,
            url: req.href(),
            path: req.path(),
            query: req.query //Parametros que forem passados pela URL
        });
        return next();
    }
]);
//Aqui apenas definimos em qual socket o nosso servidor vai se instalar
server.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});
