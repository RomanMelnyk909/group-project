
import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCard";
import { BLOGS_LIST_ENDPOINT, BLOGS_DELETE_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";
import styles from "./blog.module.css";

const Blog = () => {
  const [data, setData] = useState([]);
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
  
  const handleDeleteCard = async (id) => {
    try {
      const apiEndpoint = createRequestPath(BLOGS_DELETE_ENDPOINT, id);
      const response = await fetch(apiEndpoint, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error('Failed to delete blog post');
      }

      setFetching(true);
      const update = data.filter((blogPost) => blogPost.id !== id);
      setData(update);
    } catch (error) {
      console.error('Error deleting blog post:', error.message);
    } finally {
      setFetching(false);
    }
  };

  return (
    <div className={styles.blogContainer}>
      {fetching && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!fetching && !error && (
        <div className={styles.blogPost}>
          {data.map((blogPost) => (
            <BlogCard
              key={blogPost.id}
              id={blogPost.id}
              name={blogPost.name}
              text={blogPost.text}
              dateTimePublish={blogPost.dateTimePublish}
              onDelete={handleDeleteCard}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
