const fs = require('fs')


//Primeiro parametro é o nome do arquivo
//Segundo é o conteúdo
//Terceiro é um listener que vai retornar um bolean se aconteceu errou ou não
fs.writeFile(process.argv[2], process.argv[3], (error)=>{
    if(error) throw error
    console.log(`Arquivo ${process.argv[2]} foi salvo com sucesso.`)
})
