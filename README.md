# 📝 Multiuser Blog App

A secure, full-stack blogging platform where multiple users can register, login, and manage their blog posts. This project demonstrates skills in building RESTful APIs, implementing JWT authentication, and creating a responsive React frontend.

---

## ✨ Features

- Secure user registration and login with JWT authentication  
- Role-based access control for Admin and regular users  
- Full CRUD operations on blog posts  
- Responsive UI using React and Bootstrap  
- RESTful API backend built with Node.js, Express, and MongoDB  
- Error handling and input validation for better user experience  

---

## 🛠️ Tech Stack

- Frontend: React, Redux, Bootstrap  
- Backend: Node.js, Express  
- Database: MongoDB with Mongoose  
- Authentication: JWT  
- Tools: Git, Postman  

---


### 🚀 Clone & Setup the Project

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Swetapanigrahy/Multiuser_Blog_App.git
Navigate into the project directory

bash
Copy
Edit
cd Multiuser_Blog_App
Setup the backend

bash
Copy
Edit
cd backend
npm install
Create a .env file inside the backend folder and add the following:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server

bash
Copy
Edit
npm start
Setup and start the frontend

bash
Copy
Edit
cd ../frontend
npm install
npm start
