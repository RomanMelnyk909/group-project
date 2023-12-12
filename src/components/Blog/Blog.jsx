import { useState, useEffect } from "react";
import styles from "./blog.module.css";
import { BASE_URL, BLOGS_LIST_ENDPOINT } from "../../constants/endpoints";

const Blog = () => {
  const [blogData, setBlogData] = useState(null);

  const apiUrl = `${BASE_URL}${BLOGS_LIST_ENDPOINT}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setBlogData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>Blog</div>;
};

export default Blog;
