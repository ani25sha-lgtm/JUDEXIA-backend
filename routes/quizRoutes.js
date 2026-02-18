const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/quiz', quizController.getQuiz);

router.post('/quiz', quizController.submitQuiz);

module.exports = router;
