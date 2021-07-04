
class AssesmentlistLanjutan{
    async exec(req, res, next){
        try{
            let data = [
                {
                  "type": "multiple",
                  "question": "Apakah Anda memiliki gejala-gejala berikut?",
                  "currentAnswer": [],
                  "answers": [
                    { "value": "Tidak memiliki gejala", "point": 0 },
                    { "value": "Demam/menggigil", "point": 3 },
                    { "value": "Batuk", "point": 2 },
                    { "value": "Sulit bernafas", "point": 1 },
                    { "value": "Nyeri tenggorokan", "point": 0.1 },
                    { "value": "Pilek (nonalergi)", "point": 0.1 },
                    { "value": "Kesulitan mencium bebauan", "point": 1 },
                    { "value": "Kesulitan merasakan makanan", "point": 0.1 },
                    { "value": "Nyeri kepala", "point": 0.1 },
                    { "value": "Mual/muntah", "point": 0 },
                    { "value": "Diare", "point": 0 },
                    { "value": "Lemah", "point": 0.1 },
                    { "value": "Nyeri otot", "point": 0.1 }
                  ]
                },
                {
                  "type": "single",
                  "question": "Apakah Anda pernah melalukan kontak dengan pasien COVID-19?",
                  "currentAnswer": "",
                  "answers": [
                    { "value": "Ya", "point": 5 },
                    { "value": "Tidak", "point": 0 }
                  ]
                },
                {
                  "type": "single",
                  "question": "Apa jenis kelamin Anda?",
                  "currentAnswer": "",
                  "answers": [
                    { "value": "Pria", "point": 0.5 },
                    { "value": "Wanita", "point": 0 }
                  ]
                },
                {
                  "type": "single",
                  "question": "Berapkah usia Anda?",
                  "currentAnswer": "",
                  "answers": [
                    { "value": "Kurang dari 40 tahun", "point": 0 },
                    { "value": "Lebih dari 40 tahun", "point": 1 }
                  ]
                },
                {
                  "type": "single",
                  "question": "Apakah Anda pernah keluar rumah tanpa masker selama lebih dari 30 menit dan melakukan kontak sosial?",
                  "currentAnswer": "",
                  "answers": [
                    { "value": "Ya", "point": 3 },
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

module.exports = AssesmentlistLanjutan