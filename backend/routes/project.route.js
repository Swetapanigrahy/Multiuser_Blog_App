// routes/projectRoutes.js
import express from "express";
import { getAllProjects ,createProject } from '../controllers/project.controllers.js';

const router = express.Router();

// GET all projects
router.get("/getAllProjects", getAllProjects);

// POST a new project
router.post("/createProject", createProject);


export default router ; 


