'use strict';

const User = require('../model/user-model');
const ctrl = {};

ctrl.getUsers = (req, res) => {
    User.get(req.query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

ctrl.getUser = (req, res) => {
    res.send(User.getById(req.params.id));
}

ctrl.saveUser = (req, res) => {
    User.save(req.body)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

ctrl.updateUser = (req, res) => {
    User.update(req.params.id, req.body)
      .then((data) => {
        res.status(200).send();
      })
      .catch((err) => {
        res.staus(500).send(err);
      });
}

ctrl.removeUser = (req, res) => {
    User.remove(req.params.id);
    res.send();
}

module.exports = ctrl;
