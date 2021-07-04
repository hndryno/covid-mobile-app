require('dotenv').config()
const MobileUser = require('../../../models').mobile_users
const randtoken = require('rand-token')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const bcrypt = require('bcryptjs')

class LoginMobileUser{
    async exec(req, res, next){
        try{
            let last_ip_login = req.connection.remoteAddress
            let last_login = new Date()

            let {email, password} = req.body

            let data = await MobileUser.findOne({where:{email}})

            if(!data){
                throw new Error('oops ada sesuatu yang salah!')
            }

            let password_compare = await bcrypt.compare(
                password,
                data.password
            )

            if(!password_compare){
                throw new Error('oops ada sesuatu yang salah!')
            }

            let payload = {
                user_id: data.id,
                user_name: data.name,
                user_email: data.email,
            }

            let privateKey = fs.readFileSync('./public/private.key')

            let i  = 'henresearch';          // Issuer 
            let s  = 'hendriyono97@gmail.com';        // Subject 
            let a  = 'http://henresearch.in'; // Audience// SIGNING OPTIONS

            let signOptions = {
                issuer:  i,
                subject:  s,
                audience:  a,
                // expiresIn:  365 * 24 * 60 * 60,
                expiresIn:  60 * 60,
                algorithm:  "RS256"
            };

            let token = await jwt.sign(payload, privateKey, signOptions)

            let refresh_token = randtoken.uid(256)

            await MobileUser.update({last_ip_login, last_login, refresh_token },{where : {email: data.email}})

            return res.status(200).json({
                status: 'success',
                data: {
                    token,
                    expiresIn: '5 hours',
                    refresh_token
                },
                message: 'login successfull'
            })
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

module.exports = LoginMobileUser