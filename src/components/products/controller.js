const store = require('./store');


function getProducts() {
    return new Promise((resolve, reject) => {        

        
        resolve(store.getProducts())

    })

}

function addProducts(product) {
    return new Promise((resolve, reject) => {
        store.addProducts(product)
            .then ((createProduct)=>{
                resolve(product)
            }).catch(e=>{
                reject(e)
            })        
    })
}

module.exports = {
    getProducts,
    addProducts
}