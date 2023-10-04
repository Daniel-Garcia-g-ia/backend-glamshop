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
    },
  /*   fileUrl:{
        type: String,
        required: false
    }
 */
})

const model = mongoose.model('products', productSchema)

module.exports= model