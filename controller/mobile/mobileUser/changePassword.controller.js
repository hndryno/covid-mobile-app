const API = require('../../../core/index')
const MobileUser = require('../../../models').mobile_users
const bcrypt = require('bcryptjs')

class changePasswordMobileUser extends API{
    constructor(){
        super(MobileUser)
    }

    async exec(req, res, next){
        try{
            let id = req.user.id

            let findUser = await MobileUser.findOne({where: {id}})

            let user_old_password = findUser.password

            let { old_password, new_password, confirm_password } = req.body

            let ismatch = await bcrypt.compare(old_password, user_old_password)

            if(!ismatch){
                throw new Error('maaf password anda salah')
            }

            if(new_password != confirm_password){
                throw new Error('maaf password dan konfirmasi password tidak sesuai')
            }

            let password = bcrypt.hashSync(new_password, 8)

            let request_data = {password}

            let data = await this.update(id ,request_data)

            return res.status(200).json({
                status: 'success',
                message: 'data updated successfully',
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

module.exports = changePasswordMobileUser