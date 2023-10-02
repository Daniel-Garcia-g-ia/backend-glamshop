const db = require('mongoose');

db.Promise = global.Promise

async function connect(url) {
    try {
        await db.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('[db] Conexión exitosa');
    } catch (error) {
        console.error('[db] Error de conexión:', error.message);
    }
}

module.exports = connect