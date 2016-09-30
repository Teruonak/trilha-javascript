'use strict';

const Company = require('../model/company-model');
const ctrl = {};

ctrl.getCompanies = (req,res) => {
  res.send(Company.get(req.query.name));
};

ctrl.saveCompany = (req,res) => {
  new Company(
    req.body.name,
    req.body.segment,
    req.body.email,
    req.body.site,
    req.body.city,
    req.body.tecnologies
  ).save();

  res.send(req.body);
}

module.exports = ctrl;
