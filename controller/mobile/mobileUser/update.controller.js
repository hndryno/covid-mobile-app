const API = require('../../../core/index')
const MobileUser = require('../../../models').mobile_users

class updateMobileUser extends API{
    constructor(){
        super(MobileUser)
    }

    async exec(req, res, next){
        try{
            let id = req.user.id

            let { name, phone } = req.body

            let  request_data = { name, phone }

            let data = await this.update(id ,request_data)

            return res.status(200).json({
                status: 'success',
                message: 'data updated successfully',
                data
            })
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err.details
            })
        }
    }
}

module.exports = updateMobileUser