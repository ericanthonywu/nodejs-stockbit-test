/**
 * Movies Axios default config
 *
 * @type {AxiosInstance}
 */
exports.Axios = require('axios').create({
    baseURL: `http://www.omdbapi.com/?apikey=${process.env.apiKey}`,
})

/**
 * Database global connection
 *
 */
exports.db = require('knex')({
    client: process.env.DB_CONNECTION,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    }
})
