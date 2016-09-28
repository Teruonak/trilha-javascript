'use strict';

const router = {
  'GET' : {}
};

module.exports.get = (route, controller) => {
  router.GET[route] = controller;
};

module.exports.proccessRequest = (req, res) => {
  router[req.method][req.url](req,res);
}
