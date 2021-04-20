const express = require('express');
const {mysqlLogging} = require("../middleware/loggingMiddleware");
const {searchMovies, detailMovie} = require("../controller/apiController");
const router = express.Router();

// search movie API
router.get('/search', mysqlLogging, searchMovies);

// detail movie API
router.get('/detail/:id', mysqlLogging, detailMovie)

module.exports = router;
