const express = require('express')
const router = express.Router()

const register = require('../controller/mobile/mobileUser/register.controller')
const login = require('../controller/mobile/mobileUser/login.controller')
const ownUser = require('../controller/mobile/mobileUser/auth.controller')
const updateUser = require('../controller/mobile/mobileUser/update.controller')
const validation = require('../validation/register.validation')
const changePassword = require('../controller/mobile/mobileUser/changePassword.controller')
const auth = require('../midleware/auth')

//routes
router.post('/register', validation.CreateRegisterValidation, async (req, res, next) => await new register().exec(req, res, next))

router.post('/login', async (req, res, next) => await new login().exec(req, res, next))

router.get('/', auth, async (req, res, next) => await new ownUser().exec(req, res, next))

router.put('/change-password', auth, async (req, res, next) => await new changePassword().exec(req, res, next))

router.put('/update-user', auth, async (req, res, next) => await new updateUser().exec(req, res, next))

module.exports = router