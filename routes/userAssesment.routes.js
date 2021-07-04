const express = require('express')
const router = express.Router()

const userAssesmentCreate = require('../controller/mobile/assesment/create.controller')
const userAssesmentList = require('../controller/mobile/assesment/history.controller')
const userAssesmentData = require('../controller/mobile/assesment/assesmentData.controller')
const userAssesmentDataLanjutan = require('../controller/mobile/assesment/assesmentDataLanjutan.controller')
const auth = require('../midleware/auth')

//routes
router.post('/', auth, async (req, res, next) => await new userAssesmentCreate().exec(req, res, next))

router.get('/history', auth, async (req, res, next) => await new userAssesmentList().exec(req, res, next))

router.get('/assesment-data', auth, async (req, res, next) => await new userAssesmentData().exec(req, res, next))

router.get('/assesment-data-lanjutan', auth, async (req, res, next) => await new userAssesmentDataLanjutan().exec(req, res, next))

module.exports = router