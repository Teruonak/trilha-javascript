'use strict';

const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/basic-auth-middleware');
const i18nMiddleware = require('./middlewares/i18n-middleware');
const app = express();

// config Middlewares // the order of the middlewares counts
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(i18nMiddleware);
app.use(authMiddleware);

// config routes
app.use(require('./routes/company-route'));
app.use(require('./routes/user-route'));
app.use(require('./routes/auth-route'));

module.exports = app;
