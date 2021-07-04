const API = require('../../../core/index')
const MobileUser = require('../../../models').mobile_users

class MobileUserShow extends API{
    constructor(){
        super(MobileUser)
    }

    async exec(req, res, next){
        try{
            let id = req.user.id

            let data = await MobileUser.findOne({where: {id: id},
                attributes: ['id', 'name', 'phone', 'email'] 
            })

            return res.status(200).json({
                status: 'success',
                message: 'Data berhasil ditampilkan',
                data,
            })
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

module.exports = MobileUserShow