const API = require('../../../core/index')
const Hospital = require('../../../models').hospital

class hospitalList extends API{
    constructor(){
        super(Hospital)
    }

    async exec(req, res, next){
        try{
            
            const data = await Hospital.findAll({})

            return res.status(200).json({
                status: 'success',
                message: 'list data ditampilkan',
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

module.exports = hospitalList