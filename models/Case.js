const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  law: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Criminal', 'Civil', 'Constitutional', 'Corporate', 'Family'],
    default: 'Civil'
  },
  year: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Case', CaseSchema);
