var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const articlesRouter = require('./routes/articles');
const commentsRouter = require('./routes/comments');
const analyticsRouter = require('./routes/analytics')

var cors = require('cors')
var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/article', articlesRouter);
app.use('/article', commentsRouter);
app.use('/analytic', analyticsRouter)


module.exports = app;
