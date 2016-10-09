'use strict';

const User = require('../model/user-model');
const ctrl = {};

ctrl.authUser = (req, res) => {
    User.authUser(req.params)
        .then((data) => {
            res.status(200).send(`Bem vindo ${req.body.name}`);
        })
        .catch((err) => {
            res.status(500).send("Usuário ou senha inválidos!");
        });
}

module.exports = ctrl;
