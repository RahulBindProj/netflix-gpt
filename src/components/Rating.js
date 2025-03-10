import React, { useState } from "react";

const Rating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0); // Selected rating
  const [hovered, setHovered] = useState(0); // Hovered rating

  // Function to handle the click event
  const handleClick = (index) => {
    setRating(index + 1); // Set rating based on the clicked star
  };

  // Function to render stars
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => setHovered(i + 1)} // Hovering over a star
          onMouseLeave={() => setHovered(0)} // Leaving the star
          style={{
            fontSize: "30px",
            color: i < (hovered || rating) ? "gold" : "gray",
            cursor: "pointer",
          }}
        >
          &#9733; {/* Unicode for star */}
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div>{renderStars()}</div>
      <div>Rating: {rating}</div>
    </div>
  );
};

export default Rating;
