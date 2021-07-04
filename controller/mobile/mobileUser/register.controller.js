const API = require('../../../core/index')
const MobileUser = require('../../../models').mobile_users
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const randtoken = require('rand-token')
const fs = require('fs')
const jwt = require('jsonwebtoken')

class RegisterMobileUser extends API{
    constructor(){
        super(MobileUser)
    }

    async exec(req, res, next){
        try{
            let { email, password } = req.body

            password = bcrypt.hashSync(password, 8)

            let request_data = { email, password }

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).send({
                    status: "Error",
                    message: errors.array()
                });
            }

            const data = await this.create(request_data)

            let payload = {
                user_id: data.id,
                user_name: data.name,
                user_email: data.email
            }

            let privateKey = fs.readFileSync('./public/private.key')

            let i  = 'henresearch';          // Issuer 
            let s  = 'hendriyono97@gmail.com';        // Subject 
            let a  = 'http://henresearch.in'; // Audience// SIGNING OPTIONS

            let signOptions = {
                issuer:  i,
                subject:  s,
                audience:  a,
                expiresIn:  60 * 60,
                algorithm:  "RS256"
            };

            let last_ip_login = req.connection.remoteAddress

            let last_login = new Date()

            let token = await jwt.sign(payload, privateKey, signOptions)

            let refresh_token = randtoken.uid(256)

            await MobileUser.update({last_ip_login, last_login, refresh_token },{where : {email: data.email}})

            return res.status(201).json({
                status: 'success',
                message: 'berhasil mendaftar',
                data: {
                    data,
                    token,
                    expiresIn: '5 hour',
                    refresh_token
                }
            })
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

module.exports = RegisterMobileUser