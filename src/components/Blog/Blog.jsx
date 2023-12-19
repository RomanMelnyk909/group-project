import { useState, useEffect } from "react";
import styles from "./blog.module.css";
import { BASE_URL, BLOGS_LIST_ENDPOINT } from "../../constants/endpoints";
import PageWrapper from "../PageWrapper";

import { BLOG_PATH } from "../../constants/pathNames";
import { createRequestPath } from "../../helpers/helpers";
import { BLOGS_ADD_ENDPOINT } from "../../constants/endpoints";

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

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;
  const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const mockBlog = {
    name: "Lena Blog",
    text: "In this place will be Lena`s blog text",
    image: "image",
    slug: "lenaBlog",
    isShow: true,
    dateTimePublish: `${formattedDate} ${formattedTime}`,
  };

  const onSubmitBlogDataToApi = () => {
    const apiEndpoint = createRequestPath(BLOGS_ADD_ENDPOINT);

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(mockBlog),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        console.log("response => ", resp);
        return resp;
      })
      .then(() => navigator(BLOG_PATH))
      .catch((err) => console.log("error => ", err));
  };

  return (
    <PageWrapper>
      <button onClick={onSubmitBlogDataToApi}>Blog</button>
      <h2>Blog</h2>
      {blogData ? (
        <div className={styles["blogs"]}>
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
