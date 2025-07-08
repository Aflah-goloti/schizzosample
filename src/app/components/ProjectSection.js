"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f8f9fa",
  padding: theme.spacing(8, 2),
  minHeight: "100vh",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  color: "#1a1a1a",
  marginBottom: theme.spacing(2),
  fontFamily: "'Inter', sans-serif",
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: "#555",
  marginBottom: theme.spacing(4),
  fontFamily: "'Inter', sans-serif",
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease",
  cursor: "pointer",
  '&:hover': {
    transform: "scale(1.03)",
  },
}));

const ProjectList = () => {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "No. 22 Project | Japanese Beauty Salon",
      location: "Tokyo, Japan",
      image: "/images/project-22.jpg",
    },
    {
      id: 2,
      title: "No. 21 Project | Fabulous Apartment Design",
      location: "Paris, France",
      image: "/images/project-21.jpg",
    },
    {
      id: 3,
      title: "No. 20 Project | Urban Living Space",
      location: "New York, USA",
      image: "/images/project-20.jpg",
    },
  ];

  return (
    <Wrapper>
      <SectionTitle>Interior Design Projects</SectionTitle>
      <SectionSubtitle>
        This section focuses on compliance with customer demands and guiding these
        demands in the right track.
      </SectionSubtitle>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard onClick={() => router.push(`/projects/${project.id}`)}>
              <CardMedia
                component="img"
                height="220"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.location}
                </Typography>
              </CardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ProjectList;
