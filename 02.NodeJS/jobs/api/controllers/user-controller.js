'use strict';

const User = require('../model/user-model');
const ctrl = {};

ctrl.getUsers = (req,res) => {
  res.send(User.get(req.query.name));
};

ctrl.saveUser = (req,res) => {
  res.send('Save');
};

module.exports = ctrl;
