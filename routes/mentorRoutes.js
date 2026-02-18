const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.post('/ask', mentorController.askMentor);

module.exports = router;
