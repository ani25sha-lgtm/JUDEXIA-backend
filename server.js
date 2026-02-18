require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const caseStudioRoutes = require('./routes/caseStudioRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const quizRoutes = require('./routes/quizRoutes');
const caseLibraryRoutes = require('./routes/caseLibraryRoutes');
const docSimplifierRoutes = require('./routes/docSimplifierRoutes');
const draftNoticeRoutes = require('./routes/draftNoticeRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Backend running without DB!',
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.use('/api/auth', authRoutes);
app.use('/api', dashboardRoutes);
app.use('/api/case-studio', caseStudioRoutes);
app.use('/api/mentor', mentorRoutes);
app.use('/api', quizRoutes);
app.use('/api', caseLibraryRoutes);
app.use('/api', docSimplifierRoutes);
app.use('/api/notice', draftNoticeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.name === 'MulterError') {
    return res.status(400).json({
      success: false,
      message: 'File upload error',
      error: err.message
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║                                            ║
║          JUDEXIA BACKEND SERVER            ║
║                                            ║
║  Server running on port ${PORT}              ║
║  Environment: ${process.env.NODE_ENV || 'development'}                ║
║                                            ║
║  API Endpoints:                            ║
║  - POST /api/auth/signup                   ║
║  - POST /api/auth/login                    ║
║  - GET  /api/dashboard                     ║
║  - POST /api/case-studio/complaint         ║
║  - POST /api/mentor/ask                    ║
║  - GET  /api/quiz                          ║
║  - POST /api/quiz                          ║
║  - GET  /api/case-library                  ║
║  - POST /api/doc-simplifier                ║
║  - POST /api/notice/draft-notice           ║
║  - GET  /test                              ║
║                                            ║
╚════════════════════════════════════════════╝
  `);
});

module.exports = app;
