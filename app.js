const express = require('express')
const app = express()

const {db} = require('./config/index')
const helmet = require('helmet')
const cors = require('cors')
// const bodyParser = require('body-parser')

const createApp = (store) => {
    db.authenticate().then(() => console.log('database connected')).catch(err => console.log(err))
    app.use(helmet())
    app.use(express.urlencoded({extended: true}));
    app.use(express.json()) 
    // app.use(bodyParser.urlencoded({limit:'100mb', extended: true }))
    // app.use(bodyParser.json({limit: '100mb'}))
    app.use(cors())
    
    require('./routes/main.routes')(app)

    return app
}

module.exports = {createApp}