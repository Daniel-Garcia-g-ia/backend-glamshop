require ('dotenv').config();

const config ={
    port: process.env.PORT || 3000,
    url : process.env.URL || '/app/v1/products',
    useName: process.env.USE_NAME ||'glamshop',
    dbPass: process.env.DB_PASSWORD || 'glamshop',
    dbName: process.env.DB_NAME || 'GlamShop',
    urlUploads: process.env.URL_UPLOADS || 'public/uploads/'
}

module.exports  = {
    config
}