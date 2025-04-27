const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

// Routes
router.get('/cases', caseController.getAllCases);
router.post('/cases', caseController.addCase);

module.exports = router;
