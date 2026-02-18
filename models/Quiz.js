const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctAnswer: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    default: 'General Law'
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  xpReward: {
    type: Number,
    default: 10
  }
});

module.exports = mongoose.model('Quiz', QuizSchema);
