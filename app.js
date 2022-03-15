const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const queryString = require('querystring');


const app = express();

middleware = function (req, res, next) {
    visitorfirst = req.query.uname;
    if (!visitorfirst) return next();
    let visitor = visitorfirst.toLowerCase().trim();
    if (!visitor) return next();
    res.send('uname is: ' + visitor);
}

app.get("/", middleware, function (req, res) {
    res.send("No valid query string for uname");
});


module.exports = app;