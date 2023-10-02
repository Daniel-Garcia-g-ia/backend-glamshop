const Model = require('./model');


let list = []

function getProducts() {
    return list
}

function addProducts(product) {

    const create = new Model(product);
    return create.save()
        .then((createProduct) => {
            return createProduct;
        }).catch(e => {
            throw e;
        })

}


module.exports = {
    addProducts,
    getProducts
}