"use client";

import React from "react";
import { Box, Typography, Grid, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(8, 2),
  minHeight: "100vh",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3.5rem",
  fontWeight: 400,
  color: "#1a1a1a",
  marginBottom: theme.spacing(4),
  fontFamily: "'Inter', sans-serif",
  textTransform: "lowercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: theme.spacing(2),
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  '&:hover': {
    transform: "scale(1.05)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
  },
  background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
  textAlign: "left",
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: 700,
  color: "#2c3e50",
  marginBottom: theme.spacing(1),
  fontFamily: "'Inter', sans-serif",
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#555",
  lineHeight: 1.8,
  fontFamily: "'Inter', sans-serif",
}));

const services = [
  {
    title: "Interior Design",
    description:
      "We craft functional and aesthetic spaces tailored to your lifestyle and preferences. From concept to final execution, our interior design process reflects elegance and personalization.",
  },
  {
    title: "Architecture Planning",
    description:
      "Comprehensive architectural planning that balances creativity with structural integrity. We collaborate closely with clients to bring visionary designs to life.",
  },
  {
    title: "Landscape Design",
    description:
      "Bringing harmony between the built environment and nature through thoughtful landscaping. Our designs integrate greenery to enhance visual and environmental quality.",
  },
  {
    title: "Project Management",
    description:
      "From concept to completion, we oversee every detail to ensure seamless execution. Timely delivery, quality assurance, and transparent coordination are our pillars.",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform your existing spaces with expert renovation services. We help preserve the charm while modernizing functionality and design.",
  },
  {
    title: "Custom Furniture",
    description:
      "Unique, hand-crafted furniture designed to match your interior theme. We combine artisanal skill with contemporary style.",
  },
  {
    title: "3D Visualization",
    description:
      "Get a real-time preview of your future space. Our 3D rendering services allow you to explore design elements virtually before implementation.",
  },
  {
    title: "Lighting Design",
    description:
      "Enhance your ambiance with expert lighting strategies. We craft lighting plans that align with spatial aesthetics and mood."
  },
];

const ServicesPage = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">services.</SectionTitle>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ServicesPage;
