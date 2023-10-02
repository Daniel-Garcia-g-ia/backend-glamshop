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


async function updateProduct(id, body) {

    let foundProduct = await Model.findOne({
        _id: id
    });

    foundProduct.title = body.title;
    foundProduct.price = body.price;
    foundProduct.description = body.description;

    const update = await foundProduct.save();
    return update;
}


module.exports = {
    addProducts,
    getProducts,
    updateProduct
}