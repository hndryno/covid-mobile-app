const express = require('express')
const router = express.Router()

const getUser = require('../controller/backend/user/list.controller')
const postUser = require('../controller/backend/user/create.controller')

//routes
router.get('/', async (req, res, next) => await new getUser().exec(req, res, next))

router.post('/', async (req, res, next) => await new postUser().exec(req, res, next))

module.exports = router