const mongoose = require ('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

})

const model = mongoose.model('products', productSchema)

module.exports= model