// BlogCard.js

import React, { useState } from "react";
import styles from "./blogcard.module.css";

const BlogCard = ({
  name: initialName,
  text: initialText,
  image: initialImage,
  isShow: initialIsShow,
  dateTimePublish: initialDateTimePublish,
  onAdd,
  onDelete,
  index, // Додаємо індекс
}) => {
  const [name, setName] = useState(initialName);
  const [text, setText] = useState(initialText);
  const [image, setImage] = useState(initialImage);
  const [isShow, setIsShow] = useState(initialIsShow);
  const [dateTimePublish, setDateTimePublish] = useState(
    initialDateTimePublish
  );
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
    setShowForm(false);
  };

  const handleAddCard = () => {
    if (name && text && image && dateTimePublish) {
      onAdd({ name, text, image, isShow, dateTimePublish });
      setName("");
      setText("");
      setImage("");
      setIsShow(true);
      setDateTimePublish("");
      setShowForm(true);
    } else {
      alert("Заповніть всі поля");
    }
  };

  const handleDeleteCard = () => {
    onDelete(index);
  };

  return (
    <div className={styles.blogCard}>
      {showForm && !initialName && (
        <div className={styles.cardContent}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            className={styles.list}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      {showForm && !initialImage && (
        <div className={styles.cardContent}>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            className={styles.list}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      )}
      {showForm && !initialDateTimePublish && (
        <div className={styles.cardContent}>
          <input
            type="date"
            placeholder="Date Time Publish"
            value={dateTimePublish}
            className={styles.list}
            onChange={(e) => setDateTimePublish(e.target.value)}
          />
        </div>
      )}
      {showForm && !initialText && (
        <div className={styles.cardContent}>
          <textarea
            placeholder="Text"
            value={text}
            className={styles.list}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      )}
      <div className={styles.cardActions}>
        {showForm && !initialName && (
          <div className={styles.cardContent}>
            <button onClick={handleAddCard}>Add Card</button>
          </div>
        )}
        <button
          className={styles.deleteBtn}
          onClick={handleDeleteCard}
          
        >
          Delete Card
        </button>
        <button type="submit" onClick={handleToggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {showDetails && (
        <>
          {initialImage && <img src={initialImage} alt={initialName} />}
          {initialText && <p>Text: {initialText}</p>}
          {initialDateTimePublish && (
            <p>Published on: {initialDateTimePublish}</p>
          )}
        </>
      )}
    </div>
  );
};

export default BlogCard;
