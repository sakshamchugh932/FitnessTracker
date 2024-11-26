// src/pages/Blogs.js
import React from "react";
import styled from "styled-components";
import Card from "../components/cards/Card"
import blog1 from "../utils/Images/beginner.webp"
import blog2 from "../utils/Images/hydration.png"
import blog3 from "../utils/Images/meditation.png"
const blogs = [
  {
    image: blog1,
    title: "Top 5 Exercises for Beginners",
    description: "Discover the best exercises to start your fitness journey.",
    link: "#",
  },
  {
    image: blog2,
    title: "Hydration and Fitness",
    description: "Why staying hydrated is crucial during workouts.",
    link: "#",
  },
  {
    image: blog3,
    title: "Mental Health and Exercise",
    description: "The connection between fitness and mental well-being.",
    link: "#",
  },
];

const BlogContainer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Blogs = () => {
  return (
    <BlogContainer>
      <h1 style={{ color: "#222" }}>Blogs</h1>
      <BlogList>
        {blogs.map((blog, index) => (
          <Card key={index} {...blog} />
        ))}
      </BlogList>
    </BlogContainer>
  );
};

export default Blogs;
