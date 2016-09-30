'use strict';

const Company = require('../model/company-model');
const ctrl = {};

ctrl.getCompanies = (req,res) => {
  res.send(Company.get(req.query.name));
};

ctrl.saveCompany = (req,res) => {
  res.send('save');
}

module.exports = ctrl;
