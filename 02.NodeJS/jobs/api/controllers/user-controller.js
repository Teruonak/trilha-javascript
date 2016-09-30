'use strict';

const User = require('../model/user-model');
const ctrl = {};

ctrl.getUsers = (req,res) => {
  res.send(User.get());
};

ctrl.saveUser = (req,res) => {
  res.send('Save');
};

module.exports = ctrl;
