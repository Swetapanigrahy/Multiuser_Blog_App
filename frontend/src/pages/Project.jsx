import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  CircularProgress,
  Alert,
  Button,
  Box,
  CssBaseline,
} from "@mui/material";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/projects/getAllProjects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  const categorizedProjects = {
    Uncategorized: [],
    ReactJS: [],
    JavaScript: [],
    NextJS: [],
  };

  projects.forEach((project) => {
    if (categorizedProjects[project.category]) {
      categorizedProjects[project.category].push(project);
    } else {
      categorizedProjects.Uncategorized.push(project);
    }
  });

 
  const getCategoryLink = (category) => {
    switch (category.toLowerCase()) {
      case 'uncategorized':
        return "https://www.geeksforgeeks.org/mern-stack-projects/";
      case 'reactjs':
        return "https://www.geeksforgeeks.org/reactjs-projects/";
      case 'javascript':
        return "https://www.100jsprojects.com/";
      case 'nextjs': 
        return "https://www.geeksforgeeks.org/nextjs-projects/"; 
      default:
        return "https://example.com/default-projects";
    }
  };

  return (
    <Container sx={{ marginTop: '4rem' , marginBottom:'4rem' }}> 
      <CssBaseline />
      {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto' }} />}
      {error && <Alert severity="error">{error}</Alert>}

      <Grid container spacing={4} justifyContent="center">
        {Object.entries(categorizedProjects).map(([category, projects]) => (
          <Grid item xs={12} md={6} lg={4} key={category}>
            <Typography variant="h5" gutterBottom align="center">
              {category}
            </Typography>
            {projects.length > 0 ? (
              projects.map((project) => (
                <Card 
                  key={project._id}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    marginBottom: 2,
                    height: '350px', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', 
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.imageUrl || "https://example.com/image3.png"}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}> 
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 1, paddingRight: 1 }}>
                    <Button
                      component="a"
                      href={getCategoryLink(category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      sx={{
                        transition: 'background-color 0.3s, transform 0.3s',
                        backgroundColor: '#673ab7',
                        color: 'white',
                        borderColor: '#673ab7',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #673ab7 0%, #ff4081 100%)',
                          transform: 'scale(1.05)',
                          color: 'white',
                          borderColor: 'transparent',
                        },
                      }}
                    >
                      Project Details
                    </Button>
                  </Box>
                </Card>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary" align="center">
                No projects available in this category.
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}