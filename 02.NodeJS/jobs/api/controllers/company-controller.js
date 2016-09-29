'use strict';

const express = require('express');
const router = express.Router();
const Company = require('../model/company-model');

router.get('/companies', (req,res) => {
  res.Company.get();
});

module.exports = router;
