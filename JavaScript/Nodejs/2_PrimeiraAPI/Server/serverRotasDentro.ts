import * as restify from 'restify'
import {environment} from '../common/environment'
import { error } from 'util';

export class Server {

  application : restify.Server

  initRoutes(): Promise<any>{
    return new Promise((resolve, reject)=>{
      try{
      
      //Inicialização do servidor
      this.application = restify.createServer({
        name: 'meat-api',
        version: '1.0.0'
      })

      this.application.use(restify.plugins.queryParser()) 
      //Rotas

      this.application.get('/hello', (req, resp, next)=>{
        resp.status(400)
        resp.send({message:"Fala meu bom! o/"})
        return next()
      })

      this.application.get('/info', [ 
        (req, resp, next)=>{
          if(req.userAgent() && req.userAgent().includes('MSIE 7.0')){
          let error: any = new Error()
          error.statusCode = 400
          error.message = 'Please, update your browser'
          return next(error)
        }
        return next()
        }, (req, resp, next)=>{
        resp.json({
          browser: req.userAgent(),
          method: req.method,
          url: req.href(),
          path: req.path(),
          query: req.query
        })
        return next()
      }])
      //Definição da URL padrão

      //Aqui apenas definimos em qual socket o nosso servidor vai se instalar
      this.application.listen(environment.server, ()=>{
        resolve(this.application)
      })

      //this.application.on('error', (error) => { }) para tratar erros na abertura do socket

      }catch(error){
        reject(error)
      }
    })
  }


  bootstrap(): Promise<Server>{
      return this.initRoutes().then(()=> this)
  }

}
