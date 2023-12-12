import { useState, useEffect } from "react";
import styles from "./blog.module.css";
import { BASE_URL, BLOGS_LIST_ENDPOINT } from "../../constants/endpoints";
import PageWrapper from "../PageWrapper";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  const apiUrl = `${BASE_URL}${BLOGS_LIST_ENDPOINT}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const blog = await response.json();
        setBlogData(blog);
        console.log(blog);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageWrapper>
      <h2>Blog</h2>
      {blogData ? (
        <div>
          {blogData.map((blog) => (
            <div key={blog.id}>
              <h1>{blog.name}</h1>
              <img src={blog.image} alt="Blog image" />
              <p>{blog.text}</p>
              <span>{blog.dateTimePublish}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </PageWrapper>
  );
};

export default Blog;

// {
//     "name": "Lena Blog",
//     "text": "In this place will be Lenas blog text",
//     "image": "string",
//     "slug": "LenaBlog",
//     "isShow": true,
//     "dateTimePublish": "12.12.2023"
//   }
