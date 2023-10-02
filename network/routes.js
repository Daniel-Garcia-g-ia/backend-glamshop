const express = require('express');
const ENV = require('../config/index')
const products =require('../src/components/products/network')



const routes = function (server) {
    server.use(ENV.config.url,products)
}

module.exports = routes;