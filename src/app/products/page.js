"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(8, 2),
  minHeight: "100vh",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.8rem",
  fontWeight: 700,
  color: "#1a1a1a",
  marginBottom: theme.spacing(1),
  textAlign: "center",
  fontFamily: "'Inter', sans-serif",
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: 400,
  color: "#555",
  textAlign: "center",
  marginBottom: theme.spacing(6),
  fontFamily: "'Inter', sans-serif",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: theme.spacing(3),
  transition: "transform 0.3s ease",
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
  '&:hover': {
    transform: "translateY(-5px)",
  },
}));

const StyledMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  height: 180,
  objectFit: "cover",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: "1.1rem",
  fontWeight: 600,
  fontFamily: "'Inter', sans-serif",
  color: "#1a1a1a",
}));

const ProjectList = () => {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "Tiles",
      image: "/images/pexels-alexquezada-7004252.jpg",
    },
    {
      id: 2,
      title: "Laminates",
      image: "/images/pexels-amar-32822408.jpg",
    },
    {
      id: 3,
      title: "Louvers",
      image: "/images/pexels-bidvine-517980-1249611.jpg",
    },
    {
      id: 4,
      title: "Wooden Flooring",
      image: "/images/pexels-christa-grover-977018-2121121.jpg",
    },
    {
      id: 5,
      title: "Wallpapers",
      image: "/images/pexels-cottonbro-5089123.jpg",
    },
    {
      id: 6,
      title: "Plywood",
      image: "/images/pexels-depthofraw-10543028.jpg",
    },
    {
      id: 7,
      title: "Modular Kitchen",
      image: "/images/pexels-falling4utah-2724749.jpg",
    },
    {
      id: 8,
      title: "Edge Bands",
      image: "/images/pexels-heyho-6283968.jpg",
    },
    {
      id: 9,
      title: "3D Panels",
      image: "/images/pexels-imjimmyqian-1718337.jpg",
    },
    {
      id: 10,
      title: "Exterior Cladding",
      image: "/images/pexels-matreding-12884311.jpg",
    },
  ];

  return (
    <Wrapper>
      <SectionTitle>Popular Categories</SectionTitle>
      <SectionSubtitle>Stunning Range For Your Dream Space</SectionSubtitle>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={6} sm={4} md={2.4} key={project.id}>
            <StyledCard onClick={() => router.push(`/categories/${project.id}`)}>
              <StyledMedia
                component="img"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <StyledTitle>{project.title}</StyledTitle>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Wrapper>
  );
};

export default ProjectList;
