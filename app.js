const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const queryString = require('querystring');


const app = express();

middleware = function (req, res, next) {
    username = req.query.uname;
    if (!username) return next();
    let user = username.toLowerCase().trim();
    if (!user) return next();
    res.send('uname is: ' + user);
}

app.get("/", middleware, function (req, res) {
    res.send("No valid query string for uname");
});


module.exports = app;