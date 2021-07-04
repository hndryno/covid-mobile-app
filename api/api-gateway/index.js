const axios = require('axios')

const apiGateway = async (baseurl) => {
    
    let result = await axios.create({
        baseurl,
        headers: {
            'Content-Type': 'App/json'
        }
    })

    return result
}

module.exports = apiGateway