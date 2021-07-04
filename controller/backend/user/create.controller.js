const API = require('../../../core/index')
const User = require('../../../models').user

class CreateUser extends API{
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { fullname, username, email, password, phone } = req.body

            let last_login, ip = null

            let request_data = { fullname, username, email, password, phone, ip, last_login }

            const data = await this.create(request_data)

            return res.status(201).json({
                status: 'success',
                message: 'company berhasil dibuat',
                data
            })
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

module.exports = CreateUser