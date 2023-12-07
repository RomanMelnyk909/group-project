import React, { useState } from "react";
import Button from "./Button";

const BlogCard = ({ name, text, image, isShow, dateTimePublish, onAdd, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="blog-card">
      <h2>{name}</h2>
      {showDetails && (
        <>
          <p>{text}</p>
          <img src={image} alt={name} />
          <p>{`Published on: ${dateTimePublish}`}</p>
        </>
      )}
      <p>{`Show: ${isShow ? "Yes" : "No"}`}</p>
      <Button variant="primary" onClick={onAdd}>
        Add Card
      </Button>
      <Button variant="error" onClick={onDelete}>
        Delete Card
      </Button>
      <Button variant="secondary" onClick={handleToggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </Button>
    </div>
  );
};


export default BlogCard;