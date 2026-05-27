# Quizen — AI-Powered Quiz App

Quizen is a full-stack web application that uses the OpenAI API to generate personalised quizzes on-demand. Users can either pick a technology topic and have quiz questions generated on the fly, or upload their resume as a PDF and receive a tailored skills assessment based on their own experience.

---

## Features

- **Topic-based quiz generation** — choose from a wide range of technologies (AWS, Python, JavaScript, AI, Flutter, Salesforce, AR/VR, and more), set a difficulty level, and receive AI-generated multiple-choice questions instantly.
- **Resume-based skills test** — upload a PDF resume; the backend parses the document and generates a customised test targeting the skills listed in it.
- **AI-generated topic descriptions** — before each quiz, a short context summary is generated to prime the user without giving away answers.
- **Instant scoring and feedback** — answers are evaluated immediately, with per-question explanations shown at the end of the test.
- **User authentication** — sign-up and sign-in flows backed by JWT and bcrypt, with MongoDB storing user records.
- **Real-time room support** — Socket.IO integration for live multiplayer quiz sessions.
- **Student details page** — tracks and displays individual performance.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6, React Bootstrap, Socket.IO client |
| Backend | Node.js, Express, Socket.IO |
| AI | OpenAI API (GPT-3.5 Turbo) |
| Database | MongoDB via Mongoose |
| Auth | JWT, bcrypt |
| File handling | Multer, pdf-parse |

---

## Project Structure

```
Quizen-AI_Quiz_App/
├── backend/               # Express API server
│   ├── app.js             # Entry point; all API routes
│   ├── models/            # Mongoose schemas (User, UserDetails)
│   ├── controllers/       # User auth logic
│   ├── routes/            # Route handlers
│   └── authMiddleware/    # JWT verification middleware
│
├── frontend/              # React SPA
│   └── src/
│       ├── App.js         # Router setup
│       └── Components/
│           ├── quiz/      # TextGeneration, QuestionGeneration, ShowResult
│           ├── resumeTest/# PDF upload and resume-based test flow
│           ├── Details_page/ # Student performance view
│           └── Navigation/   # Navbar
│
└── databse/               # Standalone organisation/user-org microservice
    ├── App.js
    ├── models/
    ├── controllers/
    └── services/
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB instance (local or Atlas)
- OpenAI API key

### Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
```

Start the server:

```bash
npm start
```

The backend runs on `http://localhost:5000` by default.

### Frontend

```bash
cd frontend
npm install
npm start
```

The React app runs on `http://localhost:3000` and proxies API calls to the backend.

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| `POST` | `/SignUpUser` | Register a new user |
| `POST` | `/SignInUser` | Authenticate and receive a JWT |
| `POST` | `/api/DescriptionGeneration` | Generate a topic description pre-quiz |
| `POST` | `/api/SkillTestGeneration` | Generate quiz questions for a chosen skill/technology |
| `POST` | `/api/TestGeneration` | Generate a general topic-based quiz |
| `POST` | `/uploadResume` | Accept a PDF resume and return a tailored skills quiz |

---

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port for the Express server (default: `5000`) |
| `MONGO_URL` | MongoDB connection URI |
| `OPENAI_API_KEY` | Your OpenAI API key |
| `JWT_SECRET` | Secret used to sign JSON Web Tokens |

---

## Supported Quiz Topics

AWS, Azure, Google Cloud, Cloud Computing, Flutter, Full-stack Development, Gaming/Unity, AR/VR Technology, Salesforce, AI, Deep Learning, Python, JavaScript, Java, C, CSS, and more.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

This project is open source. See `LICENSE` for details.
