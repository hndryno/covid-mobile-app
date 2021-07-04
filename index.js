require('dotenv').config()
const http = require('http')
const {createApp} = require('./app')
const app = createApp()

const port = process.env.PORT
// const server = http.createServer(app)

app.listen(`${port}`, () => {
    console.log(`app listen on port ${port}`)
})