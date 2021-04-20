const {AXIOS_ERROR} = require("../middleware/errorHandler/errorType");
const {errorHandlerSyntax} = require("../middleware/errorHandler/errorHandlerMiddleware");
const {Axios} = require("../globalHelper");

/**
 * Search Movies Controller
 *
 * @param {Request<ParsedQs>} req
 * @param {Response|ServerResponse} res
 * @param {NextFunction} next
 */
exports.searchMovies = async (req, res, next) => {
    const {keyword, page = 1} = req.query
    if (!keyword){
        return res.status(400).json({message: "Missing keyword"})
    }

    try {
        const moviesResult = await Axios.get('', {
            params: {
                s: keyword,
                page
            }
        })
        if (moviesResult.data.Response === "False"){
            return res.status(200).json({message: data.Error, data: null})
        }
        res.status(moviesResult.status).json({message: "Movies data", data: moviesResult.data})
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
exports.detailMovie = async (req, res, next) => {
    const {id} = req.params
    if (!id){
        return res.status(400).json({message: "Id of movie is required"})
    }
    try {
        const {data} = await Axios.get('', {
            params: {i: id}
        })

        if (data.Response === "False"){
            return res.status(200).json({message: data.Error, data: null})
        }

        res.status(200).json({message: "Movies detail data", data})
    } catch (e) {
        next(errorHandlerSyntax(AXIOS_ERROR, e))
    }
}
