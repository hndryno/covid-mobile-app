require('dotenv').config()
const jwt = require('jsonwebtoken')
const MobileUser = require('../models').mobile_users
const fs = require('fs')

const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '')

        let secret_key = await fs.readFileSync('./public/public.key')

        if(token) {
            let verify_token = await jwt.verify(token, secret_key)

            const user_data =  await MobileUser.findOne({where:{id: verify_token.user_id}})

            req.user = user_data

            return next()
        }else{
            throw new Error("Invalid header Token")
        }
    }catch(err){
        return res.status(401).json({
            status: 'error',
            message: err.message
        })
    }
}

module.exports = auth