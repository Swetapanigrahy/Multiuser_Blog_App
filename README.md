
:

📝 Multiuser Blog App
A full-stack blogging platform enabling multiple users to create, edit, and manage blog posts with authentication and role-based access control.

🚀 Features
User Authentication: Secure login and registration system with JWT-based authentication.

Role-Based Access Control: Differentiated access for Admins and Regular Users.

CRUD Operations: Users can Create, Read, Update, and Delete their blog posts.

Responsive Design: Mobile-first design ensuring usability across devices.

RESTful API: Backend APIs following REST principles for seamless integration.

Error Handling: Comprehensive error messages and validations for better UX.

🛠️ Tech Stack
Frontend: React.js, Redux, Bootstrap

Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Authentication: JWT (JSON Web Tokens)

Version Control: Git & GitHub

📸 Screenshots



📚 Getting Started
Prerequisites
Node.js and npm installed

MongoDB installed and running

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Swetapanigrahy/Multiuser_Blog_App.git
Navigate to the project directory:

bash
Copy
Edit
cd Multiuser_Blog_App
Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
Install frontend dependencies:

bash
Copy
Edit
cd ../frontend
npm install
Set up environment variables:
Create a .env file in the backend directory and add your MongoDB URI and JWT secret.

Start the development servers:

bash
Copy
Edit
# In the backend directory
npm start

# In a new terminal, navigate to the frontend directory
npm start
🧪 Testing
To run backend tests:

bash
Copy
Edit
cd backend
npm test
To run frontend tests:

bash
Copy
Edit
cd frontend
npm test
📁 Project Structure
bash
Copy
Edit
Multiuser_Blog_App/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
└── README.md
👤 Author
Sweta Panigrahy

GitHub

LinkedIn

Portfolio

📄 License
This project is licensed under the MIT License.

🌟 Acknowledgements
