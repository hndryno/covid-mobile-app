const API = require('../../../core/index')
const AssesmentResult = require('../../../models').user_assesment

class CreateAssesment extends API{
    constructor(){
        super(AssesmentResult)
    }

    async exec(req, res, next){
        try{
            let mobile_user_id = req.user.id

            let { assesment_point, assesment_result } = req.body

            let request_data = { mobile_user_id, assesment_point, assesment_result }

            const data = await this.create(request_data)

            return res.status(201).json({
                status: 'success',
                message: 'data berhasil dibuat',
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

module.exports = CreateAssesment