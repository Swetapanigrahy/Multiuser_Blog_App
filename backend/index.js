import express from 'express';
import mongoose from 'mongoose';
import  cors from "cors" ; 
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js' ; 
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js' ;
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comment.route.js';
import projectRoutes from './routes/project.route.js' ; 
import path from 'path';




dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });


  const __dirname = path.resolve();



const app = express();

app.use(cors({ origin: 'http://localhost:5174' }));

app.use(express.json()) ; 
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000 !');
  });
  
app.use('/api/user' , userRoutes) ; 
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/projects', projectRoutes);


app.use(express.static(path.join(__dirname, '../frontend/dist')));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist' ,'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});








// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors'; 
// import dotenv from 'dotenv';
// import userRoutes from './routes/user.route.js'; 
// import authRoutes from './routes/auth.route.js';
// import postRoutes from './routes/post.route.js';
// import cookieParser from 'cookie-parser';
// import commentRoutes from './routes/comment.route.js';
// import projectRoutes from './routes/project.route.js';
// import path from 'path';

// dotenv.config();

// mongoose.connect(process.env.MONGO)
//   .then(() => console.log('MongoDB is connected'))
//   .catch((err) => console.log(err));

// const __dirname = path.resolve();
// const app = express();

// app.use(cors({ origin: 'https://your-deployment-url.onrender.com' }));  // Change this URL to your Render deployment URL for frontend
// app.use(express.json());
// app.use(cookieParser());

// app.use('/api/user', userRoutes); 
// app.use('/api/auth', authRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/comment', commentRoutes);
// app.use('/api/projects', projectRoutes);

// // Serve static files from frontend build folder
// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// // Catch-all route to serve index.html for any route not handled by API
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000!');
// });

// // Error handler
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   res.status(statusCode).json({ success: false, statusCode, message });
// });
