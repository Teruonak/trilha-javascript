'use strict';

require('./init-database');
const express = require('express');
const app = express();

app.use(require('./routes/company-route'));

app.use(require('./routes/user-route'));

module.exports = app;
