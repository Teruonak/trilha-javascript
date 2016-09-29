'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/company-controller');

router.get('/companies', ctrl.getCompanies);
router.post('/company', ctrl.saveCompany);

module.exports = router;
