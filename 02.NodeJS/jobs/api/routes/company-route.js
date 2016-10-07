'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/company-controller');

// Retrieve
router.get('/companies', ctrl.getCompanies);
// Retrieve by id
router.get('/company/:id', ctrl.getCompany);
// Create
router.post('/company', ctrl.saveCompany);
// Update
router.put('/company/:id', ctrl.updateCompany); // the :id will change
// Delete
router.delete('/company/:id', ctrl.removeCompany);


module.exports = router;
