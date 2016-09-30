'use strict';

require('./init-database');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// config Middlewares
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// config routes
app.use(require('./routes/company-route'));
app.use(require('./routes/user-route'));

module.exports = app;
