import React, { useState } from "react";
import styles from "./AddVladBlog.module.css";

const AddVladBlogs = ({ showModal, onClose, onAddBlog }) => {
  const [newBlog, setNewBlog] = useState({
    name: "",
    text: "",
    image: "",
    isShow: true,
    dateTimePublish: "",
  });

  const handleAddBlog = () => {
    onAddBlog(newBlog);
    setNewBlog({
      name: "",
      text: "",
      image: "",
      isShow: true,
      dateTimePublish: "",
    });
  };

  return (
    showModal && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.closeButton} onClick={onClose}>
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
    )
  );
};

export default AddVladBlogs;
