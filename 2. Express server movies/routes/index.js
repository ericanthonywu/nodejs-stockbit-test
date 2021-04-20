const express = require('express');
const {searchMovies, detailMovie} = require("../controller/apiController");
const router = express.Router();

/* GET home page. */
router.get('/search', searchMovies);

router.get('/detail', detailMovie)

module.exports = router;
