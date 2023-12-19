import React, { useState, useEffect } from "react";
import { BLOGS_LIST_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";
import styles from "./blog.module.css";
import BlogCardR from "../BlogCardR/BlogCardR";

const Blog = () => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  const newBlog = {
    id: 1,
    name: "New Blog",
    text: "This is a new blog",
    dateTimePublish: "01.01.2024",
  };

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

  const handleAddBlog = () => {
    setData([...data, newBlog]);
  };

  return (
    <div className={styles.blogContainer}>
      {fetching && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!fetching && !error && (
        <div>
          {data.map((blogPost) => {
            const { id, name, text, dateTimePublish } = blogPost;
            return (
              <BlogCardR
                id={id}
                name={name}
                text={text}
                dateTimePublish={dateTimePublish}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blog;
