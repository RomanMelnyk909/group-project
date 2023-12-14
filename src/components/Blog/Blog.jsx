import React, { useState, useEffect } from "react";
import { BLOGS_LIST_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";
import styles from "./blog.module.css";

const DEFAULT_DESSERTS = [
  {
    id: 4,
    name: "Lena Blog",
    text: "In this place will be Lena's blog text",
    dateTimePublish: "12.12.2023",
  },
  {
    id: 2,
    name: "Roman Blog",
    text: "In this place will be Roman's blog text",
    dateTimePublish: "12.12.2023",
  },
];

const Blog = () => {
  const [data, setData] = useState(DEFAULT_DESSERTS);
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
  );
};

export default Blog;
