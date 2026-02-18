const express = require('express');
const router = express.Router();
const caseStudioController = require('../controllers/caseStudioController');

router.post('/complaint', caseStudioController.analyzeComplaint);

module.exports = router;
