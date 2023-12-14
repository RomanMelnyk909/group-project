import React, { useState, useEffect } from "react";
import { BLOGS_LIST_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";
import styles from "./AddBlogs.module.css";

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

const AddBlogs = () => {
  const [data, setData] = useState(DEFAULT_DESSERTS);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newBlog, setNewBlog] = useState({
    name: "",
    text: "",
    image: "",
    isShow: true,
    dateTimePublish: "",
  });

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
    setData((prevData) => [...prevData, newBlog]);
    setShowModal(false);
  };

  return (
    <div className={styles.blogContainer}>
      <button className={styles.newBlogButton} onClick={() => setShowModal(true)}>
        New Blog
      </button>

      {fetching && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>Error: {error.message}</p>}

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

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>New Blog</h2>
            <form>
              <label>Name:</label>
              <input
                type="text"
                value={newBlog.name}
                onChange={(e) => setNewBlog({ ...newBlog, name: e.target.value })}
              />

              <label>Text:</label>
              <textarea
                value={newBlog.text}
                onChange={(e) => setNewBlog({ ...newBlog, text: e.target.value })}
              ></textarea>

              <label>Image URL:</label>
              <input
                type="text"
                value={newBlog.image}
                onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
              />

              <label>Date Time Publish:</label>
              <input
                type="text"
                value={newBlog.dateTimePublish}
                onChange={(e) => setNewBlog({ ...newBlog, dateTimePublish: e.target.value })}
              />

              <button type="button" onClick={handleAddBlog}>
                Add Blog
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlogs;
