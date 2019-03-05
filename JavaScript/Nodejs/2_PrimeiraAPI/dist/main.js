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
//Simples requisição get, cada um desses parametros está descrito no documento do drive
server.get('/hello', (req, resp, next) => {
    //resp.json({message: 'hello'})
    resp.send({ message: "Fala meu bom! o/" });
    return next(); //Ao final de toda requisição http, nos sinalizamos no restify com next()
});
//Aqui apenas definimos em qual socket o nosso servidor vai se instalar
server.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});
