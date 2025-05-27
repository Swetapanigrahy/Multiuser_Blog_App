# 🚀 Multiuser Blog App

## 📌 Project Overview
The **Multiuser Blog App** is a full-stack web application that allows multiple users to register, create, edit, and share blog posts in a collaborative environment. It supports authentication, user roles, real-time updates, and an intuitive user interface for seamless blogging and content management.

This project demonstrates proficiency in modern web development technologies, backend APIs, user authentication, and database management — making it an excellent showcase for roles in full-stack development.

---

## 🛠️ Technology Stack
- **Frontend:** React.js, CSS3, HTML5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (NoSQL)
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** (Mention if deployed on any platform e.g., Heroku, Vercel)
- **Version Control:** Git & GitHub

---

## ✨ Key Features
- User Registration & Login with secure authentication using JWT.
- Multi-user support with personalized dashboards.
- Create, edit, delete, and view blog posts.
- Responsive and clean UI for an engaging user experience.
- RESTful API design ensuring scalable backend architecture.
- Role-based access control (if implemented).
- Real-time updates or notifications (if implemented).
- Error handling and validation for robust performance.

---

## 📂 Project Structure
/client # React frontend
/server # Express backend
/models # Database schema definitions
/routes # API endpoints
/middleware # Auth & error handling

yaml
Copy
Edit

---


## ⚙️ Setup & Installation

Follow these steps to set up and run the Multiuser Blog App on your local machine:

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local instance or cloud, e.g., MongoDB Atlas)
- **Git**

### Steps

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Swetapanigrahy/Multiuser_Blog_App.git
    cd Multiuser_Blog_App
    ```

2. **Install Backend Dependencies**
    ```bash
    cd backend
    npm install
    ```
3. **Install Frontend Dependencies**
    ```bash
    cd frontend
    npm install
    ```

4. **Configure Environment Variables**
    - In the `backend` directory, create a `.env` file.
    - Add your MongoDB connection string and JWT secret. Example:
      ```env
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      ```

5. **Run the Application**
    - **Start the backend server:**
      ```bash
      cd backend
      npm run dev
      ```
6. **Start the frontend client:**
      ```bash
    cd frontend
    npm run dev
    ```

    6. **Access the App**
        - Open your browser and go to [http://localhost:3000](http://localhost:3000)


