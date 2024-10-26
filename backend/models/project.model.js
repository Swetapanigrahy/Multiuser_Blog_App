import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Uncategorized', 'ReactJS', 'JavaScript' , 'Next.js'], // predefined categories
    default: 'Uncategorized',
  },
  imageUrl: {
    type: String,
  },
});

const Project = mongoose.model('Project', ProjectSchema);
export default Project;


