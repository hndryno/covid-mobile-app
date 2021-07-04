const user = require('./user.routes')
const mobileHospital = require('./hospital.routes')
const mobileUser = require('./mobileUser.routes')
const mobileAssesment = require('./userAssesment.routes')
const mobileCases = require('./cases.routes')
const index = require('./index.routes')

const api = '/api/v1'

const router = (app) => {
    app.use(`/`, index)
    app.use(`${api}/user`, user)
    app.use(`${api}/mobile-hospital`, mobileHospital)
    app.use(`${api}/mobile-user`, mobileUser)
    app.use(`${api}/mobile-assesment`, mobileAssesment)
    app.use(`${api}/mobile-cases`, mobileCases)
}

module.exports = router