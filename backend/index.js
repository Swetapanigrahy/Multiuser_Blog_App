import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Import Routes
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import projectRoutes from './routes/project.route.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.error(' MongoDB connection error:', err));

const app = express();

// Middleware
app.use(cookieParser()); // Enable Cookie Parsing
app.use(
  cors({
    origin: "https://blog-app-frontend-h7uz.onrender.com", // Allow frontend URL
    methods: "GET, POST, PUT, DELETE",
    credentials: true, // Allow cookies & authentication headers
  })
);
app.use(express.json()); // Enable JSON parsing

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/projects', projectRoutes);

// Test Route to Check Backend Connection
app.get('/', (req, res) => {
  res.send(" Backend is running!");
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
