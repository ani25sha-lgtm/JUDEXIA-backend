const express = require('express');
const router = express.Router();
const draftNoticeController = require('../controllers/draftNoticeController');

router.post('/draft-notice', draftNoticeController.generateNotice);

module.exports = router;
