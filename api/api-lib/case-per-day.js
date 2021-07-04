const apiGateway = require('../api-gateway/index')

class getData {
    constructor(URI) {
        this.uri = URI
    }

    async updateCasesCovid() {
        try {
            const api = await apiGateway(this.uri)

            let result = await api.get(this.uri)

            return result
            
        } catch(err) {
            throw err
        }
    }
}

module.exports = getData