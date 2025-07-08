"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const CareerWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  minHeight: "100vh",
}));

const Heading = styled(Typography)(({ theme }) => ({
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

const TeamImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
//   boxShadow: "0 0px 4px rgba(0, 0, 0, 0.1)",
  marginTop: theme.spacing(4),
}));

const CareerPage = () => {
  return (
    <CareerWrapper>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Heading variant="h1">Career Opportunities</Heading>

        <Paragraph>
          Join our expert team of skilled carpenters, painters, electricians, and assistants.
          We value craftsmanship and precision in delivering luxury interiors. Our labor
          strength includes <strong>41 carpenters</strong>, <strong>7 tile and marble specialists</strong>,
          <strong> 9 painting and gypsum experts</strong>, and <strong>4 electricians</strong>.
        </Paragraph>

        <TeamImage src="/images/career.png" alt="Our Skilled Team" />
      </Container>
    </CareerWrapper>
  );
};

export default CareerPage;
