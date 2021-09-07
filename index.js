require('dotenv').config()
// const http = require('http')
const {createApp, isHttps} = require('./app')
const app = createApp()

const port = process.env.PORT
const httpsServer = isHttps(app)
// const server = http.createServer(app)

// app.listen(`${port}`, () => {
//     console.log(`app listen on port ${port}`)
// })

httpsServer.listen(port, () => {
	console.log(`HTTPS Server running on port ${port}`);
});