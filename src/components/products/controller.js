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


function updateProduct(id, body){

    return new Promise ((resolve, reject)=>{

        if (!id || !body){
            return reject('Información invalida')
        }


        store.updateProduct(id, body)
        .then ((update)=>{
            resolve()

        }).catch(e=>{
            reject(e)
        })
    })

}

function deleteProduct(id){
    return new Promise ((resolve, reject)=>{
        if (!id){
            return reject('ID no valido')
        }
        store.deleteProduct(id)
        .then(()=>{
            resolve()
        }).catch(e=>{
            reject(e)
        })



    })
}

module.exports = {
    getProducts,
    addProducts,
    updateProduct,
    deleteProduct
}