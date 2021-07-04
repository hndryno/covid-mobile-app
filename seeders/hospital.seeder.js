// let nodeGeocoder = require('node-geocoder');
// require("dotenv").config()
    
// const seed = async () => {
 
//     let options = {
//       provider: 'opencage',
//       apiKey: '0d855352b08e426bbb0680a82b9ced9b'
//     };
     
//     let geoCoder = await nodeGeocoder(options);geoCoder.geocode('RS UMUM DAERAH KABUPATEN SINJAI')
//       .then((res)=> {
//         console.log(res);
//       })
//       .catch((err)=> {
//         console.log(err);
//       });
// }

// module.exports = seed()
const hospital = require('../models').hospital

let hospital_data = [
  {
    "name": "RS UMUM DAERAH  DR. ZAINOEL ABIDIN",
    "address": "JL. TGK DAUD BEUREUEH, NO. 108 B. ACEH",
    "region": "KOTA BANDA ACEH, ACEH",
    "phone": "(0651) 34565",
    "province": "Aceh",
    "lat": 5.5637127,
    "long": 95.3375876
  },
  {
    "name": "RS UMUM DAERAH CUT MEUTIA KAB. ACEH UTARA",
    "address": "JL. BANDA ACEH-MEDAN KM.6 BULET RATA LHOKSEUMAWE",
    "region": "KOTA LHOKSEUMAWE, ACEH",
    "phone": "(0645) 46334",
    "province": "Aceh",
    "lat": 5.1221634,
    "long": 97.1213595
  },
  {
    "name": "RSUP SANGLAH",
    "address": "JL. DIPONEGORO DENPASAR BALI",
    "region": "KOTA DENPASAR, BALI",
    "phone": "(0361) 227912",
    "province": "Bali",
    "lat": -8.6758359,
    "long": 115.2127549
  },
  {
    "name": "RS UMUM DAERAH KAB. BULELENG",
    "address": "JL. NGURAH RAI 30 SINGARAJA",
    "region": "BULELENG, BALI",
    "phone": "(0362) 22046",
    "province": "Bali",
    "lat": -8.1198112,
    "long": 115.0924782
  },
  {
    "name": "RS UMUM DAERAH SANJIWANI GIANYAR",
    "address": "JL. CIUNG WENARA NO.2 GIANYAR",
    "region": "GIANYAR, BALI",
    "phone": "(0361) 943049",
    "province": "Bali",
    "lat": -8.5372626,
    "long": 115.3225423
  },
  {
    "name": "RS UMUM DAERAH TABANAN",
    "address": "JL. PAHLAWAN NO. 14 TABANAN",
    "region": "TABANAN, BALI",
    "phone": "(0361) 811027",
    "province": "Bali",
    "lat": -8.5391532,
    "long": 115.13221
  },
  {
    "name": "RS UMUM DAERAH KABUPATEN TANGERANG",
    "address": "JL. A YANI NO. 9 TANGERANG, KOTA TANGERANG",
    "region": "TANGERANG, BANTEN",
    "phone": "(021) 5523507 / (021)  5512948 / (021) 5513709",
    "province": "Banten",
    "lat": -6.1697843,
    "long": 106.6356113
  },
  {
    "name": "RS UMUM DAERAH DR. DRAJAT PRAWIRANEGARA",
    "address": "JL. TGK DAUD BEUREUEH, NO. 108 B. ACEH",
    "region": "TANGERANG, BANTEN",
    "phone": null,
    "province": "Banten",
    "lat": -6.1199015,
    "long": 106.1526228
  }
]


let hospital_data_insert = async () => {
  for(let i = 1; i < hospital_data.length; i++){
      await hospital.create(hospital_data[i])
      console.log('data berhasil ditambahkan!')
  }
}

hospital_data_insert();