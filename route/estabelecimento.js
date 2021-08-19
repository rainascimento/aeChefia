const route = require('express').Router();
const multer = require('multer');
const controller = require('../controllers/estabcontrol');


const storage = multer.diskStorage( {
    destination: ( req, file, cb ) => {
        cb( null, 'uploads/' )
    },
    filename: ( req, file, cb ) => {
        cb( null, file.originalname )
    }
} )
const upload = multer( { storage } )

route.get('/', (req, res) => {
    res.sendFile(__basedir + '/public/pages/estabelecimento.html');
})

route.get('/todos', controller.getEstabelecimento);

route.get('/verifica', controller.verifica);

route.delete('/remover', controller.deleteEstabelecimento);

route.patch('/atualizar', controller.patchEstabelecimento);

route.post( '/cadastro', upload.single('logo'), controller.postEstabelecimento );



module.exports = route;