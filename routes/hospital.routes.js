const express = require('express')
const router = express.Router()
const auth = require('../midleware/auth')

const getHospital = require('../controller/mobile/hospital/list.controller')
const postHospital = require('../controller/mobile/hospital/create.controller')
const hospitalLocation = require('../controller/mobile/hospital/hospitalLocation.controller')

//routes
router.get('/', auth, async (req, res, next) => await new getHospital().exec(req, res, next))

router.get('/location', auth, async (req, res, next) => await new hospitalLocation().exec(req, res, next))

router.post('/', auth,async (req, res, next) => await new postHospital().exec(req, res, next))

module.exports = router