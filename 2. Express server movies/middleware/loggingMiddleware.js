const {db} = require("../../globalHelper");

/**
 * Logging API to Database
 *
 * @param {Request<ParsedQs>} req
 * @param {Response|ServerResponse} res
 * @param {NextFunction} next
 */
exports.mysqlLogging = (req, res, next) => {
    db('log').insert({
        params: JSON.stringify(req.params),
        queryString: JSON.stringify(req.params),
        endpoint: req.path
    }).catch(console.log)

    next()
}
