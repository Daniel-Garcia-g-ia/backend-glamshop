const store = require('./store');


function getProducts() {
    return new Promise((resolve, reject) => {        

        
        resolve(store.getProducts())

    })

}

function addProducts(product) {
    return new Promise((resolve, reject) => {

        store.addProducts(product)

        resolve(product)
    })
}

module.exports = {
    getProducts,
    addProducts
}