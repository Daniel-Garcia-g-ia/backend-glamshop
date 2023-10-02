const store = require('./store');


function getProducts(filterProducts) {
    return new Promise((resolve, reject) => { 
        
         store.getProducts(filterProducts)
            .then((products)=>{
                resolve(products)

            }).catch(e=>{
                reject(e)
            })
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