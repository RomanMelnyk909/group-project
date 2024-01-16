
import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCard";
import { BLOGS_LIST_ENDPOINT, BLOGS_DELETE_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";
import styles from "./blog.module.css";
import ClassBasedVlad from "../ClassBasedVlad";

const Blog = () => {
  const [data, setData] = useState([]);
  const [refetchId, setRefetchId] = useState();
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
  }, [refetchId]);
  
  const handleDeleteCard = async (id) => {
      const apiEndpoint = createRequestPath(BLOGS_DELETE_ENDPOINT, id);
      const response = await fetch(apiEndpoint, { method: 'DELETE' });

    fetch(apiEndpoint, { method: "DELETE" })
      .then((resp) => {
        console.log("Response status:", resp.status);
        if (resp.status) {
          setRefetchId(id);
        }
        return resp;
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  };
  console.log(data)
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
            image={blogPost.image}
            dateTimePublish={blogPost.dateTimePublish}
            onDelete={handleDeleteCard}
            />
            ))}
            <ClassBasedVlad/>
        </div>
      )}
    </div>
  );
};

export default Blog;
