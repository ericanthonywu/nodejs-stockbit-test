const createError = require("http-errors");
const {MYSQL_ERROR, AXIOS_ERROR} = require("./errorType");
const fs = require('fs')
const path = require('path')

/**
 * 404 error handler
 *
 * @param {Error} err
 * @param {Request<ParsedQs>} req
 * @param {Response<any>} res
 */
exports.render404Error = (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');

    // res.status(err.status || 500).json({
    //     message: err.message,
    //     error: req.app.get('env') === 'development' ? err : {}
    // })
}

/**
 * global default error handler
 *
 * @param {Error} err
 * @param {Request<ParsedQs>} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {this | void}
 */
exports.defaultErrorhandler = (err, req, res, next) => {
    const {type, error} = err
    console.log(error)
    if (req.dest) {
        if (req.file) {
            fs.unlinkSync(path.join(__dirname, `../../uploads/${req.dest}/${req.file.filename}`))
        }

        if (req.files) {
            req.files.forEach(({filename}) => fs.unlinkSync(path.join(__dirname, `../../uploads/${req.dest}/${filename}`)))
        }
    }

    switch (type) {
        case MYSQL_ERROR:
            switch (error.code) {
                case "ER_DUP_ENTRY":
                    const splitMessageString = error.sqlMessage.split("'")
                    const getIndexName = splitMessageString[splitMessageString.length - 2].split(".")[1]
                    const splitIndexNameArray = getIndexName.split("_")
                    splitIndexNameArray.shift()
                    splitIndexNameArray.pop()
                    const getDuplicateField = splitIndexNameArray.join(" ")

                    res.status(403).json({
                        message: `${getDuplicateField} already exist`,
                        error: process.env.NODE_ENV === 'production' ? error.sqlMessage : undefined,
                    })
                    break;
                default:
                    res.status(500).json({
                        message: "Failed to execute query",
                        error
                    })
            }
            break;
        case AXIOS_ERROR:
            if (!error) {
                return res.status(503).json({message: "omdbapi server is down"})
            }

            const {response} = error
            return res.status(500).json({
                message: "failed to get movies data",
                error: {message: response.data.Error, status: response.status}
            })
            break;
        default:
            console.log("error unknown", err)
            res.status(500).json({
                message: "unknown error",
                error
            });
    }
}

/**
 * function for error handler syntax
 *
 * @param {string} type
 * @param {any} error
 * @return Object
 */
exports.errorHandlerSyntax = (type, error) => ({type, error})
