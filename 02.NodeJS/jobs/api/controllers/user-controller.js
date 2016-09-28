'use strict';

const User = require('../model/user-model');
const router = require('../router');

router.get('/users', (req,res) => {
  res.write(JSON.stringify(User.get()));
  res.end();
});
