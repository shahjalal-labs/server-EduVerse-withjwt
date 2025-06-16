# 🌐 EduVerse Server (with JWT)

A secure and scalable REST API backend for **EduVerse**, an online collaborative assignment and group-study platform. Built with **Express**, **MongoDB**, and **Bun**, this server provides JWT-based authentication, assignment management, and submission evaluation functionalities.

---

## 📌 Project Info

| Key                 | Value                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 🏷️ Project Name     | `server-EduVerse-withjwt`                                                                                              |
| 🧑‍💻 Developer        | [shahjalal-labs](https://github.com/shahjalal-labs)                                                                    |
| 🔗 GitHub Repo      | [https://github.com/shahjalal-labs/server-EduVerse-withjwt](https://github.com/shahjalal-labs/server-EduVerse-withjwt) |
| 🌍 Client Site      | [http://shahjalal-labs.surge.sh/](http://shahjalal-labs.surge.sh/)                                                     |
| 💼 Portfolio GitHub | [shahjalal-labs/shahjalal-portfolio](https://github.com/shahjalal-labs/shahjalal-portfolio)                            |
| 📅 Created          | `14/06/2025, 11:11 PM (GMT+6)`                                                                                         |
| 📍 Location         | Sharifpur, Gazipur, Dhaka                                                                                              |
| 🔗 LinkedIn         | [md-sj-825bb4341](https://www.linkedin.com/in/md-sj-825bb4341/)                                                        |
| 📘 Facebook         | [fb-profile](https://www.facebook.com/profile.php?id=61556383702555)                                                   |
| ▶️ YouTube          | [@muhommodshahjalal9811](https://www.youtube.com/@muhommodshahjalal9811)                                               |

---

## 🧰 Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/)
- **Authentication**: JWT-based, using HttpOnly cookies
- **Validation**: `zod` (via `validateRequest`)
- **Error Handling**: Centralized custom middleware
- **Deployment**: [Vercel](https://vercel.com)

---

## 📁 Folder Structure

```
.
├── bars.env.example          # Environment variable example file
├── bun.lock                  # Bun package lock
├── package.json              # Dependencies and scripts
├── README.md                 # Project overview
├── src
│   ├── App
│   │   ├── config
│   │   │   ├── corsOptions.js
│   │   │   └── db.js
│   │   ├── middlewires
│   │   │   ├── globalError.js
│   │   │   ├── notFound.js
│   │   │   └── validateRequest.js
│   │   ├── modules
│   │   │   ├── assignments
│   │   │   │   ├── assignmentData.json
│   │   │   │   ├── assignmentsApi.hur
│   │   │   │   ├── assignmentsApi.hurl
│   │   │   │   ├── assignments.controllers.js
│   │   │   │   ├── assignments.model.js
│   │   │   │   ├── assignments.route.js
│   │   │   │   ├── assignments.service.js
│   │   │   │   └── assignments.validation.js
│   │   │   ├── auth
│   │   │   │   ├── authApi.hurl
│   │   │   │   ├── auth.middleware.js
│   │   │   │   ├── auth.routes.js
│   │   │   │   ├── issueJwt.js
│   │   │   │   ├── jwt.js
│   │   │   │   └── verifyEmail.js
│   │   │   ├── root
│   │   │   │   ├── root.controller.js
│   │   │   │   └── root.route.js
│   │   │   └── submission
│   │   │       ├── submissionApi.hur
│   │   │       ├── submissionApi.hurl
│   │   │       ├── submission.controller.js
│   │   │       ├── submission.model.js
│   │   │       ├── submission.route.js
│   │   │       ├── submission.service.js
│   │   │       └── submission.validation.js
│   │   └── utils
│   │       ├── sendResponse.js
│   │       └── validateRequest.js
│   ├── app.js
│   └── server.js
├── structure.md              # Optional architectural reference
└── vercel.json               # Vercel deployment config
```

---

## 🔐 API Endpoints Overview

### Root

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| GET    | `/`      | Returns welcome message |

---

### Auth

| Method | Endpoint                  | Description                |
| ------ | ------------------------- | -------------------------- |
| POST   | `/api/v1/auth/create-jwt` | Issues JWT on login/signup |

---

### Assignments

| Method | Endpoint                                    | Description                            |
| ------ | ------------------------------------------- | -------------------------------------- |
| POST   | `/api/v1/assignments/create-assignment`     | ✅ Create assignment _(protected)_     |
| GET    | `/api/v1/assignments/`                      | 🔍 Get all assignments                 |
| GET    | `/api/v1/assignments/:id`                   | 🔍 Get single assignment _(protected)_ |
| PATCH  | `/api/v1/assignments/update-assignment/:id` | ✏️ Update assignment                   |
| DELETE | `/api/v1/assignments/delete-assignment/:id` | ❌ Delete assignment _(protected)_     |

---

### Submissions

| Method | Endpoint                                 | Description                              |
| ------ | ---------------------------------------- | ---------------------------------------- |
| GET    | `/api/v1/submission/signle/:id`          | 📝 Get single submission _(protected)_   |
| POST   | `/api/v1/submission/submit-assignment`   | 📤 Submit assignment _(protected)_       |
| GET    | `/api/v1/submission/my-submissions`      | 👤 View my submissions _(protected)_     |
| GET    | `/api/v1/submission/pending-submissions` | ⏳ Get pending submissions _(protected)_ |
| PATCH  | `/api/v1/submission/evaluate/:id`        | ✅ Evaluate submission _(protected)_     |

---

## 🔧 Environment Variables

Create a `.env` file based on `bars.env.example`. Required variables:

```
PORT=
DATABASE_URL=
ACCESS_TOKEN_SECRET=
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shahjalal-labs/server-EduVerse-withjwt.git
cd server-EduVerse-withjwt
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Create `.env` File

```bash
cp bars.env.example .env
```

Then add your values accordingly.

### 4. Start Development Server

```bash
bun run dev
```

---

## ☁️ Deployment (Vercel)

Ensure your `.vercel.json` is properly set up:

```json
{
  "builds": [{ "src": "src/server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "src/server.js" }]
}
```

---

## 💡 Features

- 🔐 JWT-based authentication
- 🎯 Assignment CRUD operations
- 📤 Assignment submission
- ✅ Evaluation with marks and feedback
- 🌐 CORS protected
- 🧠 Central error handling
- 🧪 Route validation with Zod
- 🧰 Bun for faster development

---

## 🧑‍🎓 Author

- **Name**: Md Shahjalal
- **GitHub**: [@shahjalal-labs](https://github.com/shahjalal-labs)
- **Facebook**: [@fb](https://www.facebook.com/profile.php?id=61556383702555)
- **LinkedIn**: [@md-sj-825bb4341](https://www.linkedin.com/in/md-sj-825bb4341/)
- **YouTube**: [@muhommodshahjalal9811](https://www.youtube.com/@muhommodshahjalal9811)

---

> “Study collaboratively, grow intellectually — EduVerse empowers your learning.”

```bash
# 👇 Star this project if you like it!
git clone https://github.com/shahjalal-labs/server-EduVerse-withjwt
```
