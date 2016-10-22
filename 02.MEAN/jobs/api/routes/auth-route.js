'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/auth-controller');

router.post('/auth', ctrl.authUser);

module.exports = router;
