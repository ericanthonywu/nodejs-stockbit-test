const express = require('express');
const {mysqlLogging} = require("../middleware/loggingMiddleware");
const {searchMovies, detailMovie} = require("../controller/apiController");
const router = express.Router();

/* GET home page. */
router.get('/search', mysqlLogging, searchMovies);

router.get('/detail/:id', mysqlLogging, detailMovie)

module.exports = router;
