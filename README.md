# 🚀 Multiuser Blog App

## 📌 Project Overview
The **Multiuser Blog App** is a full-stack web application that allows multiple users to register, create, edit, and share blog posts in a collaborative environment. It supports authentication, user roles, real-time updates, and an intuitive user interface for seamless blogging and content management.

This project demonstrates proficiency in modern web development technologies, backend APIs, user authentication, and database management — making it an excellent showcase for roles in full-stack development.

---

## 🛠️ Technology Stack
- **Frontend:** React.js, Tailwind CSS, Redux Toolkit
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens), bcrypt
- **Version Control:** Git & GitHub

---

## ✨ Key Features
- Secure user registration and login with JWT authentication.
- Personalized dashboards for each user.
- Create, edit, delete, and view blog posts.
- Responsive and intuitive user interface.
- RESTful API architecture for efficient data handling.
- Role-based access control for different user permissions.
- Real-time updates for collaborative blogging.
- Comprehensive error handling and input validation.
- Future-ready structure for adding comments, likes, and notifications.


---

## 📂 Project Structure
/client # React frontend
/server # Express backend
/models # Database schema definitions
/routes # API endpoints
/middleware # Auth & error handling

---


## ⚙️ Setup & Installation

Follow these steps to set up and run the Multiuser Blog App on your local machine:

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (local or MongoDB Atlas)
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
    cd ../frontend
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
      cd ../backend
      npm run dev
      ```
    - **Start the frontend client:**
      ```bash
      cd ../frontend
      npm run dev
      ```

6. **Access the App**
    - Open your browser and go to [http://localhost:3000](http://localhost:3000)


