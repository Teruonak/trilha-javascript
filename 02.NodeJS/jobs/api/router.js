'use strict';

const router = {
  'GET' : {}
};

module.exports.get = (route, controller) => {
  router.GET[route] = controller;
};

module.exports.proccessRequest = (req, res) => {
  const action = router[req.method][req.url];
  if (action) {
    action(req,res);
  } else {
    res.end();
  }
}
