const API = require('../../../core/index')
const UserAssesment = require('../../../models').user_assesment

class mobileUserAssesment extends API{
    constructor(){
        super(UserAssesment)
    }

    async exec(req, res, next){
        try{
            let id = req.user.id

            let {page} = req.query

            const options = {
                page: parseInt(page) || 1,
                paginate: 10,
                where: { mobile_user_id: id }
            }

            const { docs, pages, total } = await UserAssesment.paginate(options)

            let data = {
                data: docs, pages, total
            }

            return res.status(200).json({
                status: 'success',
                message: 'list data ditampilkan',
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

module.exports = mobileUserAssesment