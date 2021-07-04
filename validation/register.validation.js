const { check } = require('express-validator')
const MobileUser = require('../models').mobile_users

class registerValidation{

    static CreateRegisterValidation = [ 
        check("email")
        .not()
        .isEmpty()
        .withMessage("Field email tidak boleh kosong")
        .custom(async (email) => { 
            //cek email
            const existingEmail =  
                await MobileUser.findOne({where:{email}}) 
                  
            if (existingEmail) { 
                throw new Error('Maaf silahkan pilih Email yang lain') 
            } 
        }),
        check("password")
        .not()
        .isEmpty()
        .withMessage("Field Password tidak boleh kosong")
    ]

}

module.exports = registerValidation