require ('dotenv').config();

const config ={
    port: process.env.PORT || 3000,
    url : process.env.URL || '/app/v1/products'
}

module.exports  = {
    config
}