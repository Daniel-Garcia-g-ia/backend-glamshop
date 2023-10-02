const Model = require('./model');



async function getProducts(filterProducts) {

    let filter = {};
    if (filterProducts !== null) {
        filter = { title: filterProducts }
    };
    const products = await Model.find(filter);
    return products
};

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