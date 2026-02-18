const express = require('express');
const router = express.Router();
const caseLibraryController = require('../controllers/caseLibraryController');

router.get('/case-library', caseLibraryController.getCases);

module.exports = router;
