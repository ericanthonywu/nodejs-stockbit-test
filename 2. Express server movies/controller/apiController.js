const {AXIOS_ERROR} = require("../middleware/errorHandler/errorType");
const {errorHandlerSyntax} = require("../middleware/errorHandler/errorHandlerMiddleware");
const {Axios} = require("../../globalHelper");

/**
 * Search Movies Controller
 *
 * @param {Request<ParsedQs>} req
 * @param {Response|ServerResponse} res
 * @param {NextFunction} next
 */
exports.searchMovies = async (req, res, next) => {
    const {keyword, page = 1} = req.query
    try {
        const moviesResult = await Axios.get('', {
            params: {
                s: keyword,
                page
            }
        })
        res.status(moviesResult.status).json({message: "Movies data", data: moviesResult})
    } catch (e) {
        next(errorHandlerSyntax(AXIOS_ERROR, e))
    }
}

/**
 * Get Single Movie Detail
 *
 * @param {Request<ParsedQs>} req
 * @param {Response|ServerResponse} res
 * @param {NextFunction} next
 */
exports.detailMovie = (req, res, next) => {

}
