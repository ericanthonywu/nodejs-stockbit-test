const Axios = require('axios')

exports.Axios = Axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params: {
        apikey: process.env.apiKey
    }
})
