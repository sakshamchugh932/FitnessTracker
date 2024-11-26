// src/components/Card.js
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${({ theme }) => theme.background_secondary};
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Link = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  align-self: flex-start;
`;

const Card = ({ image, title, description, link }) => (
  <CardContainer>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Link href={link} target="_blank" rel="noopener noreferrer">
      Read More
    </Link>
  </CardContainer>
);

export default Card;
