const express = require('express');
const bodyParser = require('body-parser');
const router = require ('../network/routes')
const ENV = require ('../config/index')



const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
router(app)

app.use('/app', express.static('public'));






app.listen(ENV.config.port, () => {
    console.log(`Servidor escuchando por le puerto ${ENV.config.port}`)
})
