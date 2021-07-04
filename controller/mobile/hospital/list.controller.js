const API = require('../../../core/index')
const Hospital = require('../../../models').hospital
const sequelize = require('sequelize')

class hospitalList extends API{
    constructor(){
        super(Hospital)
    }

    async exec(req, res, next){
        try{
            let {page, hospital_name} = req.query
            
            page = parseInt(page)

            const options = {
                page: page || 1,
                paginate: 10,
                where: { 
                    name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + hospital_name + '%')
                }
            }

            const { docs, pages,total } = await Hospital.paginate(options)

            let data = docs

            return res.status(200).json({
                status: 'success',
                message: 'list data ditampilkan',
                data,
                page,
                pages,
                total
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