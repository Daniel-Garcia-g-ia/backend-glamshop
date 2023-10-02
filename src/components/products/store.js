
const list=[]

function getProducts (){
    return list
}

function addProducts (product){
    list.push(product)   

} 


module.exports={
    addProducts,
    getProducts
}