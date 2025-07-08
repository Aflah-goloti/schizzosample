"use client";

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

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
}));

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}));

const TeamExperienceSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Title>experience.</Title>
            <Paragraph>
              At the core of our design philosophy lies an unwavering commitment to
              exploring innovative approaches that prioritize the human connections.
              Convinced on the importance of constantly pushing the boundaries of
              conventional thinking, we aim to bring a fresh perspective to every project
              we undertake. By seamlessly integrating the needs of our clients and the
              essence of each subject, we constantly try to redefine conventional notions
              of architecture, landscape and design experience. Every project has a deep
              affiliation with nature.
            </Paragraph>
            <br />
            <Paragraph>
              Recognizing the vital role it plays in our life, we embrace the natural world
              as a source of inspiration and harmony. Through a blend of natural and built
              elements, we design to seamlessly blur the boundaries between indoors and
              outdoors, resulting in captivating experiences.
            </Paragraph>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledVideo autoPlay loop muted controls>
              <source src="/videos/4957778-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </StyledVideo>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TeamExperienceSection;
