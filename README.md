Issue Tracker – Full Stack MERN Application
A full-stack Issue Tracker System built using the MERN stack that enables employees to raise issues and administrators to manage, track, and resolve them using role-based access control.
This project is designed to simulate a real-world corporate issue management workflow.

 Features

Authentication & Authorization
User Registration and Login
JWT-based authentication
Role-based access (Employee / Admin)
Protected routes using middleware

 Employee Module

Create new issues
View submitted issues
Track issue status (OPEN, IN_PROGRESS, RESOLVED)

Admin Module
View all issues
Update issue status
Admin-only access enforcement

User Interface
Centered login & registration with shadowed card
Colorful dashboards
Issue cards with status badges
Logout button fixed at top-right

Tech Stack
Frontend
React (Vite)
Axios
Custom CSS
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT (JSON Web Tokens)

Project Structure
issue-tracker/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── index.css
│   │   └── main.jsx
│
└── README.md

Installation & Setup

 Clone the Repository
git clone https://github.com/SAKTHI-R-22/issue-tracker.git
cd issue-tracker

  Backend Setup
cd backend
npm install
Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
 Run backend server:
npx nodemon server.js
 Backend URL:
http://localhost:5000
 Frontend Setup
cd ../frontend
npm install
npm run dev
Frontend URL:
http://localhost:5173

API Endpoints
Authentication
POST /auth/register – Register user
POST /auth/login – Login user
Issues
POST /issues – Create issue (Employee)
GET /issues – View issues (Protected)
PUT /issues/:id/status – Update issue status (Admin only)

Security
JWT-based authentication
Protected routes using middleware
Environment variables hidden using .gitignore

 Use Case
This application can be used by organizations to track employee-reported issues, manage resolution workflows, and maintain transparency between employees and administrators.

 Future Enhancements
Email notifications
File attachments
Pagination and search
Deployment to cloud platforms

 Author
Sakthi R
Full Stack MERN Developer

 License
This project is intended for educational purposes.