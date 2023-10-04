const multer = require('multer');


function storage (){ 
    
    const up = multer({
        dest: 'uploads/'
    })
    return up

}



module.exports={
    storage
}