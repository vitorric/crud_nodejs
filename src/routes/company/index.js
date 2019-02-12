var express = require('express');
var router = express.Router();
var company = require("../../controllers/company/index.js");

// Get all companies
router.get('/', company.list);

// Create company
router.get('/create', company.create);

// Save company
router.post('/save', company.save);

// Edit company
router.get('/edit/:id', company.edit);

// Edit update
router.post('/update/:id', company.update);

// Edit update
router.post('/delete/:id', company.delete);

module.exports = router;
