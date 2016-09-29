'use strict';

const express = require('express');
const app = express();

app.use(require('./routes/company-route'));

module.exports = app;
