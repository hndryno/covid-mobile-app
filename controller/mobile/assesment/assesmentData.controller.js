
class Assesmentlist{
    async exec(req, res, next){
        try{
            let data = [
                {
                  "question": "Apakah Anda pernah kontak dengan pasien positif COVID-19, atau pernah berkunjung ke negara/daerah transmisi lokal COVID-19 dalam 14 hari terakhir?",
                  "currentAnswer": "",
                  "answers": [
                    { "value": "Ya", "point": 1 },
                    { "value": "Tidak", "point": 0 }
                  ]
                },
                {
                  "question": "Apakah Anda sedang atau pernah mengalami demam, batuk, pilek, batuk, sesak napas, lemah, nyeri kepala, tidak dapat mencium bau, nyeri tenggorokan, pilek, mual/muntah dan diare?",
                  "currentAnswer": "",
                  "answers": [
                    { "value": "Ya", "point": 1 },
                    { "value": "Tidak", "point": 0 }
                  ]
                },
                {
                  "question": "Apakah Anda sedang menjalani isolasi mandiri karena kontak dengan pasien positif COVID-19?",
                  "currentAnswer": "",
                  "answers": [
                    { "value": "Ya", "point": 1 },
                    { "value": "Tidak", "point": 0 }
                  ]
                },
                {
                  "question": "Apakah Anda sedang menunggu hasil tes COVID-19?",
                  "currentAnswer": "",
                  "answers": [
                    { "value": "Ya", "point": 1 },
                    { "value": "Tidak", "point": 0 }
                  ]
                }
              ]

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

module.exports = Assesmentlist