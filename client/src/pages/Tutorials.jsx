import React from "react";
import Card from "../components/cards/Card";
import tutorial1 from "../utils/Images/tutorial1.webp"
import tutorial2 from "../utils/Images/nutrition.jpg"
import tutorial3 from "../utils/Images/streching.webp"
import tutorial4 from "../utils/Images/cardio.jpg"
const tutorials = [
  {
    image: tutorial1,
    title: "Workout Basics",
    description: "Learn the fundamentals of workout planning.",
    link: "#",
  },
  {
    image: tutorial2,
    title: "Nutrition Guide",
    description: "Understand the importance of balanced diets.",
    link: "#",
  },
  {
    image: tutorial3,
    title: "Stretching Tips",
    description: "Maximize your flexibility and avoid injuries.",
    link: "#",
  },
  {
    image: tutorial4,
    title: "Advanced Cardio",
    description: "Push your limits with these advanced cardio tips.",
    link: "#",
  },
];

const Tutorials = () => {
  return (
<div
  style={{
    padding: "10px",
    height: "calc(100vh - 20px)", // Full height minus padding (adjust as needed)
    overflowY: "auto", // Enables vertical scrolling
  }}
>
  <h1>Tutorials</h1>
  <div
    style={{
      display: "grid",
      padding: "20px",
      gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
      gap: "20px", // Space between cards
    }}
  >
    {tutorials.map((tutorial, index) => (
      <Card key={index} {...tutorial} />
    ))}
  </div>
</div>

  );
};

export default Tutorials;
