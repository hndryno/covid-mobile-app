const getUpdateCases = require('../../../api/api-lib/case-per-day')
const link = `https://data.covid19.go.id/public/api/prov.json`

class ProvinceList extends getUpdateCases{
    constructor(){
        super(link)
    }
    async exec(req, res, next){
        try{

            let result = await this.updateCasesCovid()

            let result_data = result.data.list_data
            let tanggal = result.data.last_date

            let data = []

            for(let i = 0; i < result_data.length; i++){
                delete result_data[i].jenis_kelamin
                delete result_data[i].kelompok_umur
                delete result_data[i].lokasi
                delete result_data[i].doc_count
                result_data[i].tanggal = tanggal
                data.push(result_data[i])
            }

            data.splice(-2)

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

module.exports = ProvinceList