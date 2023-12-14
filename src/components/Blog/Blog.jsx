import React, { useState,  useEffect } from "react";
// import PageWrapper from "../PageWrapper";
// import BlogCard from "../BlogCard";
import { BLOGS_LIST_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";
import styles from "./blog.module.css";

const Blog = () => {
  // const [blogCards, setBlogCards] = useState([]);

  // const handleAddCard = (newCard) => {
  //   setBlogCards((prevCards) => [...prevCards, newCard]);
  // };

  // const handleDeleteCard = (index) => {
  //   setBlogCards((prevCards) => {
  //     const newCards = [...prevCards];
  //     newCards.splice(index, 1);
  //     return newCards;
  //   });
  // };
  const [data, setData] = useState();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        const response = await fetch(createRequestPath(BLOGS_LIST_ENDPOINT));
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        setError(err);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className={styles.blogContainer}>
      {fetching && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!fetching && !error && (
        <div>
          {data.map((blogPost) => (
            <div key={blogPost.id} className={styles.blogPost}>
              <h2>{blogPost.name}</h2>
              <p>{blogPost.text}</p>
              <p>Date: {blogPost.dateTimePublish}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    // <div>
    //   <PageWrapper>
    //     {blogCards.map((card, index) => (
    //       <BlogCard
    //         key={index}
    //         name={card.name}
    //         text={card.text}
    //         image={card.image}
    //         isShow={card.isShow}
    //         dateTimePublish={card.dateTimePublish}
    //         onDelete={() => handleDeleteCard(index)}
    //       />
    //     ))}
    //     <BlogCard onAdd={handleAddCard} onDelete={() => {}} />
    //   </PageWrapper>
    // </div>
  );
};

export default Blog;
