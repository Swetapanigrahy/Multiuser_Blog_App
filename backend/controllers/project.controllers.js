import Project from '../models/project.model.js';


 export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

 export const createProject = async (req, res) => {
  const { title, description, category, imageUrl } = req.body;

  try {
    const newProject = new Project({
      title,
      description,
      category,
      imageUrl,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Failed to create project" });
  }
};
