const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require("helmet");

const {render404Error} = require("./middleware/errorHandler/errorHandlerMiddleware");

const app = express();

// applying http headers
app.use(helmet())

// dot env config
require('dotenv').config({path: ".env"})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use((req,res,next) => {
  next(createError(404));
});

// error handler
app.use(render404Error);

module.exports = app;
