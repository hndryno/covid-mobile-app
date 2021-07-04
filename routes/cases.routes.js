const express = require('express')
const router = express.Router()
const auth = require('../midleware/auth')

const getCases = require('../controller/mobile/cases/response.controller')
const getProvince = require('../controller/mobile/cases/province.controller')

//routes
router.get('/', auth, async (req, res, next) => await new getCases().exec(req, res, next))

router.get('/province', auth, async (req, res, next) => await new getProvince().exec(req, res, next))


module.exports = router