const express = require('express');
const router = express.Router();
const response = require('../../../network/response')
const controller = require('./controller')

router.get('/', function (req, res) {

    controller.getProducts()
        .then((products) =>
            response.succes(req, res, products, 200)

        ).catch(e=>{
            console.log(e)
        })
})


router.post('/', function (req,res){
    
    controller.addProducts(req.body)
        .then((product)=>{            
            response.succes(req, res, product,  201,)
        }).catch(e=>{
            response.error(req,res,'Informacion incompleta o invalida',400 ,'Error en el contenido')
        })
})


module.exports = router;


