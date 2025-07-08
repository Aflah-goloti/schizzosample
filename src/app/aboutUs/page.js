"use client";

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Footer from "../components/Footer";

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(8, 2),
  minHeight: "100vh",
}));

const Title = styled(Typography)(({ theme }) => ({
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

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  lineHeight: 1.9,
  color: "#333",
  fontFamily: "'Inter', sans-serif",
  marginBottom: theme.spacing(3),
}));

const AboutImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}));

const AboutUsPage = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Title>about us.</Title>
            <Paragraph>
              We are a design-forward studio committed to creating timeless, human-centered environments. Our journey began with a vision to blend artistic expression and functionality in every space we touch.
            </Paragraph>
            <Paragraph>
              With a diverse team of architects, designers, and visionaries, we strive to redefine design by fostering experiences that resonate emotionally and aesthetically. Our core lies in sustainability, innovation, and deep respect for nature’s rhythm.
            </Paragraph>
            <Paragraph>
              From luxurious interiors to bespoke architectural solutions, we infuse creativity and purpose into every project, regardless of size or scale.
            </Paragraph>
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutImage src="/images/pexels-rdne-5922204.jpg" alt="Studio team working" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </SectionWrapper>
  );
};

export default AboutUsPage;
