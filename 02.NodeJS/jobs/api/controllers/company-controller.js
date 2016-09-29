'use strict';

const express = require('express');
const Company = require('../model/company-model');
const ctrl = {};
ctrl.getCompanies = (req,res) => {
  res.send(Company.get());
};

ctrl.saveCompany = (req,res) => {
  res.send('save');
}

module.exports = ctrl;
