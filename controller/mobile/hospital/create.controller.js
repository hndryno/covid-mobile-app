const API = require('../../../core/index')
const Hospital = require('../../../models').hospitals

class CreateHospital extends API{
    constructor(){
        super(Hospital)
    }

    async exec(req, res, next){
        try{
            let { name, address, region, phone, province, lat, long } = req.body

            let request_data = { name, address, region, province, lat, long, phone }

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

module.exports = CreateHospital