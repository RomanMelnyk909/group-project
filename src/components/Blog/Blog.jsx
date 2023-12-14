import React, { useState } from "react";
import PageWrapper from "../PageWrapper";
import BlogCard from "../BlogCard";

const Blog = () => {
  const [blogCards, setBlogCards] = useState([]);

  const handleAddCard = (newCard) => {
    setBlogCards((prevCards) => [...prevCards, newCard]);
  };

  const handleDeleteCard = (index) => {
    setBlogCards((prevCards) => {
      const newCards = [...prevCards];
      newCards.splice(index, 1);
      return newCards;
    });
  };

  return (
    <div>
      <PageWrapper>
        {blogCards.map((card, index) => (
          <BlogCard
            key={index}
            name={card.name}
            text={card.text}
            image={card.image}
            isShow={card.isShow}
            dateTimePublish={card.dateTimePublish}
            onDelete={() => handleDeleteCard(index)}
          />
        ))}
        <BlogCard onAdd={handleAddCard} onDelete={() => {}} />
      </PageWrapper>
    </div>
  );
};

export default Blog;
