'use strict';

const Company = require('../model/company-model');
const ctrl = {};

ctrl.getCompany = (req,res) => {
  res.send(Company.getById(req.params.id));
}

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

  res.status(201).send(req.body);
}

ctrl.updateCompany = (req,res) => {
  let company = new Company(
    req.body.name,
    req.body.segment,
    req.body.email,
    req.body.site,
    req.body.city,
    req.body.tecnologies
  );

  company.id = req.params.id;

  company.update();

  res.send(req.body);
}


module.exports = ctrl;
