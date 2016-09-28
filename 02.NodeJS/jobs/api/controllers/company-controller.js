'use strict';

const Company = require('../model/company-model');
const router = require('../router');

router.get('/companies', (req,res) => {
  res.write(JSON.stringify(Company.get()));
  res.end();
});
