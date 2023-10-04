const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../../network/response')
const controller = require('./controller')
const ENV = require ('../../../config')


const upload = multer({
    dest: ENV.config.urlUploads
})




router.get('/', function (req, res) {

    const filterProducts = req.query.product || null

    controller.getProducts(filterProducts)
        .then((products) =>
            response.succes(req, res, products, 200)

        ).catch(e => {
            response.error(req, res, 'No se pudo obtener toda la informacion', 400, 'Error en Callback Informacion')
        })
})


router.post('/', upload.single('file'), function (req, res) {



    controller.addProducts(req.body, req.file)
    
        .then((product) => {
            response.succes(req, res, product, 201)
        }).catch(e => {
            response.error(req, res, 'Informacion incompleta o invalida', 400, e)
        })
})


router.patch('/:id', function (req, res) {



    controller.updateProduct(req.params.id, req.body)
        .then((update) => {
            response.succes(req, res, update, 200)
        }).catch(e => {
            response.error(req, res, 'No se puede actualizar el producto', 400, e)
        })

})


router.delete('/:id', function (req,res){

    controller.deleteProduct (req.params.id)
        .then(()=>{
            response.succes(req, res, `Producto con el ID: ${req.params.id} eliminado`, 200 )

        }).catch(e=>{
            response.error(req, res, 'No se puede elimiar el producto', 400, e)
        })
        
})


module.exports = router;


