# 🚀 MERN Task Tracker App

A full-stack Task Tracker application built using the MERN Stack. This project allows users to create, view, update, complete, and delete daily tasks with a clean and responsive interface.

---

## 📸 Project Screenshot

![Task Tracker Dashboard](screenshots/Screenshot%202026-06-28%20180200.png)

---

## ✨ Features

- ➕ Add New Task
- 📋 View All Tasks
- ✅ Mark Task as Completed
- 🗑 Delete Task
- 📊 Live Dashboard Statistics
- 📱 Responsive UI
- 🌐 REST API
- ☁ MongoDB Atlas Database

---

# 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- Lucide React

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Version Control
- Git
- GitHub

---

# 📁 Project Structure

```text
mern-task-tracker-app
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── AddTask.jsx
│   │   │   └── TaskList.jsx
│   │   ├── services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── taskController.js
│   ├── models
│   │   └── Task.js
│   ├── routes
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── screenshots
│   └── Screenshot 2026-06-28 180200.png
│
├── .gitignore
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Nitz981/mern-task-tracker-app.git
```

```bash
cd mern-task-tracker-app
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔐 Environment Variables

Create a **.env** file inside the **server** folder.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/tasks | Get All Tasks |
| POST | /api/tasks | Create Task |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---

# 💻 Commands Used

### Install Dependencies

```bash
npm install
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
npm run dev
```

### Git Commands

```bash
git init
git add .
git commit -m "Initial MERN Task Tracker App"
git branch -M main
git remote add origin https://github.com/Nitz981/mern-task-tracker-app.git
git push -u origin main
```

---

# 📄 .gitignore

```gitignore
node_modules
client/node_modules
server/node_modules

.env
client/.env
server/.env

dist
build

npm-debug.log*

.DS_Store
Thumbs.db
```

---

# ⚠ Challenges Faced

### MongoDB Atlas Connection

Initially MongoDB Atlas was not connecting because of an incorrect connection string and configuration.

### Solution

- Verified MongoDB connection string.
- Checked database credentials.
- Allowed network access in MongoDB Atlas.
- Stored the connection string in the `.env` file.
- Restarted the backend server.

---

### Frontend API Connection

Initially React was unable to communicate with the backend.

### Solution

- Added CORS middleware.
- Verified API routes.
- Fixed Axios requests.
- Restarted both frontend and backend servers.

---

### Tailwind CSS Issue

Tailwind styles were not loading correctly.

### Solution

- Checked Tailwind configuration.
- Restarted the Vite development server.

---

# 📌 Future Improvements

- Login & Register
- JWT Authentication
- Edit Task
- Search Tasks
- Filter Tasks
- User Profile
- Dark / Light Mode
- Deployment on Render & Vercel

---

# 📚 What I Learned

- React Components
- React Hooks
- Axios
- Express.js
- MongoDB Atlas
- Mongoose
- CRUD Operations
- REST APIs
- Git & GitHub
- Project Structure
- Frontend & Backend Integration

---

# 👨‍💻 Author

**Nitish Kumar**

GitHub:
https://github.com/Nitz981

Repository:
https://github.com/Nitz981/mern-task-tracker-app

---

⭐ If you found this project useful, consider giving it a Star.
