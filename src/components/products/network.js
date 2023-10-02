const express = require('express');
const router = express.Router();
const response = require('../../../network/response')
const controller = require('./controller')

router.get('/', function (req, res) {

    const filterProducts = req.query.product || null  

    controller.getProducts(filterProducts)
        .then((products) =>
            response.succes(req, res, products, 200)

        ).catch(e => {
            response.error(req, res, 'No se pudo obtener toda la informacion', 400, 'Error en Callback Informacion')
        })
})


router.post('/', function (req, res) {

    controller.addProducts(req.body)
        .then((product) => {
            response.succes(req, res, product, 201,)
        }).catch(e => {
            response.error(req, res, 'Informacion incompleta o invalida', 400, 'Error en el contenido')
        })
})


module.exports = router;


