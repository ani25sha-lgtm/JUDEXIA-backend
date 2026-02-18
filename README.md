# Judexia Backend API

A Node.js backend using Express.js for Judexia - an AI-powered legal platform that helps users with legal case analysis, document simplification, legal mentorship, and more.

## Features

- **User Authentication** - Signup and login with JWT tokens
- **Dashboard** - User stats, XP tracking, and activity feed
- **AI Case Studio** - Analyze legal complaints and get AI-powered recommendations
- **AI Legal Mentor** - Ask legal questions and get detailed answers
- **Quiz Platform** - Test legal knowledge and earn XP
- **Case Library** - Browse landmark legal cases with search and filtering
- **Document Simplifier** - Upload legal documents and get plain English summaries
- **Draft Notice Generator** - Generate legal notices (demand, eviction, cease & desist, etc.)

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (placeholder - not connected yet)
- **AI Integration:** Hugging Face API (placeholder functions ready)
- **File Upload:** Multer
- **Authentication:** JWT + bcryptjs

## Project Structure

```
judexia-backend/
├── controllers/          # Request handlers for each feature
│   ├── authController.js
│   ├── dashboardController.js
│   ├── caseStudioController.js
│   ├── mentorController.js
│   ├── quizController.js
│   ├── caseLibraryController.js
│   ├── docSimplifierController.js
│   └── draftNoticeController.js
├── models/               # Mongoose schemas (ready but commented)
│   ├── User.js
│   ├── Case.js
│   └── Quiz.js
├── routes/               # API route definitions
│   ├── authRoutes.js
│   ├── dashboardRoutes.js
│   ├── caseStudioRoutes.js
│   ├── mentorRoutes.js
│   ├── quizRoutes.js
│   ├── caseLibraryRoutes.js
│   ├── docSimplifierRoutes.js
│   └── draftNoticeRoutes.js
├── utils/                # Utility functions
│   └── aiService.js      # AI integration placeholders
├── db.js                 # Database connection placeholder
├── server.js             # Main application entry point
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd judexia-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   The `.env` file is already created with placeholder values:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/judexia
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. **Run the server**
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## API Endpoints

### Test Endpoint
```
GET /test
Response: { success: true, message: "Backend running without DB!" }
```

### Authentication

#### Signup
```
POST /api/auth/signup
Body: { "email": "user@example.com", "password": "password123" }
Response: { success: true, user: { id, email, xp, rank } }
```

#### Login
```
POST /api/auth/login
Body: { "email": "user@example.com", "password": "password123" }
Response: { success: true, token: "jwt_token", user: {...} }
```

### Dashboard
```
GET /api/dashboard
Response: { success: true, data: { user, stats, availableFeatures, recentActivity } }
```

### AI Case Studio
```
POST /api/case-studio/complaint
Body: { "title": "Property Dispute", "description": "Case details..." }
Response: { success: true, data: { legalAnalysis, recommendedActions, precedentCases } }
```

### AI Legal Mentor
```
POST /api/mentor/ask
Body: { "question": "What is Section 420 IPC?" }
Response: { success: true, data: { question, answer, relatedTopics, sources } }
```

### Quiz

#### Get Quiz Questions
```
GET /api/quiz
Response: { success: true, questions: [...], totalXP: 80 }
```

#### Submit Quiz Answers
```
POST /api/quiz
Body: { "answers": [1, 2, 0, 1, 3] }
Response: { success: true, results: { score, percentage, xpEarned, newRank } }
```

### Case Library
```
GET /api/case-library
Query Params: ?category=Constitutional&search=rights
Response: { success: true, total: 8, data: [...] }
```

### Document Simplifier
```
POST /api/doc-simplifier
Body: multipart/form-data with "document" file (PDF/DOCX/TXT)
Response: { success: true, data: { original, simplified, aiInsights } }
```

### Draft Notice Generator
```
POST /api/notice/draft-notice
Body: {
  "noticeType": "legal-notice",
  "recipientName": "John Doe",
  "senderName": "Jane Smith",
  "details": "Case description..."
}
Response: { success: true, data: { noticeContent, instructions, legalTips } }
```

## Notice Types Available

- `legal-notice` - General legal notice
- `demand-notice` - Payment demand notice
- `eviction-notice` - Tenant eviction notice
- `cease-and-desist` - Stop wrongful activity notice

## Database Setup (Optional)

The backend currently runs **without a database** using dummy data. To enable MongoDB:

1. **Install MongoDB** locally or get a MongoDB Atlas connection string

2. **Update `.env` file** with your MongoDB URI:
   ```
   MONGO_URI=mongodb://localhost:27017/judexia
   # OR
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/judexia
   ```

3. **Uncomment the database connection code** in `db.js`:
   ```javascript
   // Remove the early return statement
   // Uncomment the mongoose.connect() code block
   ```

4. **Restart the server**

The Mongoose models are already defined and ready to use once the database is connected.

## AI Integration (Optional)

To enable real AI responses instead of dummy data:

1. **Get a Hugging Face API key** from [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

2. **Update `.env` file**:
   ```
   HUGGINGFACE_API_KEY=hf_your_actual_api_key_here
   ```

3. **Integrate AI functions** in controllers by importing and using functions from `utils/aiService.js`

4. **Restart the server**

## Error Handling

All endpoints return consistent error responses:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (in development mode only)"
}
```

## File Upload Limits

- Maximum file size: 10MB
- Allowed formats: PDF, DOCX, DOC, TXT

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- CORS enabled for cross-origin requests
- Input validation on all endpoints
- File type validation for uploads

## Development

### Running Tests
```bash
npm test
```

### Scripts Available
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

## Future Enhancements

- [ ] Connect MongoDB database
- [ ] Implement real AI responses using Hugging Face
- [ ] Add authentication middleware for protected routes
- [ ] Implement rate limiting
- [ ] Add email verification
- [ ] Implement password reset functionality
- [ ] Add user profile management
- [ ] Implement case history tracking
- [ ] Add payment integration for premium features

## API Response Format

All successful responses follow this format:
```json
{
  "success": true,
  "message": "Operation description",
  "data": { ... }
}
```

## License

ISC

## Support

For issues and questions, please open an issue on the repository.

---

**Note:** This backend is designed to work independently without database initially, making it easy to test and deploy. All endpoints return meaningful dummy data for frontend integration and testing.
