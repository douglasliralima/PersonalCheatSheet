const multer = require('multer');
const path = require('path'); //Formata caminho em win, unit, mac...

//Objeto com as configurações para o multer sobre como a gente vai salvar os files
module.exports = {
    storage : new multer.diskStorage({ //Salvar em disco
        //local onde salvar:
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, call){
            //Callback é chamada ao referenciar o nome do arquivo
            call(null, file.originalname);
            //Salvar a img com seu nome original pode fazer sobrescrita
        }
    })
}