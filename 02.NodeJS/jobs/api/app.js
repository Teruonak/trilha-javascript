'use strict';

const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/basic-auth-middleware');
const app = express();

// config Middlewares
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(authMiddleware);

// config routes
app.use(require('./routes/company-route'));
app.use(require('./routes/user-route'));
app.use(require('./routes/auth-route'));

module.exports = app;
