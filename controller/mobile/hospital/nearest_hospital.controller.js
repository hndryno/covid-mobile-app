const API = require('../../../core/index')
const Hospital = require('../../../models').hospital

class nearestHospital extends API{
    constructor(){
        super(Hospital)
    }

    async exec(req, res, next){
        try{

            let province = req.query.province

            let data = await Hospital.findAll({where: {province: province},
                attributes: ['id', 'name', 'address', 'region', 'phone', 'province', 'lat', 'long'] 
            })

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

module.exports = nearestHospital