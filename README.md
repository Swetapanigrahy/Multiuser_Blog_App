# 📝 Multiuser Blog App

## 📌 Project Overview
The **Multiuser Blog App** is a full-stack web application where users can register, authenticate via Google, and create, edit, delete, or manage blog posts. It features role-based access, real-time updates, and a modern UI—highlighting skills in MERN stack development and authentication systems.

---

## 🛠️ Technology Stack
- **Frontend:** React.js, Tailwind CSS, Redux Toolkit
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:**  Google OAuth and JWT(JSON Web Tokens), bcrypt
- **Version Control:** Git & GitHub

---

## ✨ Key Features
- Secure login using Google OAuth alongside JWT-based authentication.
- Personalized dashboards for each user.
- Create, edit, delete, and view blog posts.
- Responsive and intuitive user interface.
- RESTful API architecture for efficient data handling.
- Role-based access control for different user permissions.
- Real-time updates for collaborative blogging.
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
      GOOGLE_CLIENT_ID=your_google_client_id
      GOOGLE_CLIENT_SECRET=your_google_client_secret
      GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
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
      
## 📄 License

This project is licensed under the [MIT License](./LICENSE).  




