const getUpdateCases = require('../../../api/api-lib/case-per-day')
const link = `https://data.covid19.go.id/public/api/update.json`

class CasesUpdateList extends getUpdateCases{
    constructor(){
        super(link)
    }
    async exec(req, res, next){
        try{

            let result = await this.updateCasesCovid()

            let data_result = result.data

            let data = {
                update_hari_ini: {
                    jumlah_positif: data_result.update.penambahan.jumlah_positif,
                    jumlah_meninggal: data_result.update.penambahan.jumlah_meninggal,
                    jumlah_sembuh: data_result.update.penambahan.jumlah_sembuh,
                    jumlah_dirawat: data_result.update.penambahan.jumlah_dirawat,
                    tanggal: data_result.update.penambahan.tanggal,
                    created: data_result.update.penambahan.created,
                },
                total: {
                    jumlah_positif: data_result.update.total.jumlah_positif,
                    jumlah_dirawat: data_result.update.total.jumlah_dirawat,
                    jumlah_sembuh: data_result.update.total.jumlah_sembuh,
                    jumlah_meninggal: data_result.update.total.jumlah_meninggal,
                },
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

module.exports = CasesUpdateList