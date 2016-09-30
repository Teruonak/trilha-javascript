'use strict';

const User = require('../model/user-model');
const ctrl = {};

ctrl.getUsers = (req,res) => {
  res.send(User.get(req.query.name));
};

ctrl.saveUser = (req,res) => {
  new User(req.body.name, req.body.profile).save();
  res.send(req.body);
};

module.exports = ctrl;
