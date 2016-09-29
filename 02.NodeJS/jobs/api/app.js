'use strict';

const express = require('express');
const app = express();

app.use(require('./controllers/company-controller'));

module.exports = app;
