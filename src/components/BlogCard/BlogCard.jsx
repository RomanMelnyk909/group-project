import React, { useState } from "react";

import styles from './blogCard.module.css'

const BlogCard = ({ 
    name: initialName, 
    text: initialText, 
    isShow: initialIsShow, 
    dateTimePublish: initialDateTimePublish, 
    onAdd, onDelete }) => {
        
  const [name, setName] = useState(initialName);
  const [text, setText] = useState(initialText);
  const [isShow, setIsShow] = useState(initialIsShow);
  const [dateTimePublish, setDateTimePublish] = useState(initialDateTimePublish);
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
    const handleAddCard = () => {
    // Умови додавання картки
    if (name && text && dateTimePublish) {
      onAdd({ name, text, isShow, dateTimePublish });
      // Очистити поля 
      setName("");
      setText("");
      setIsShow(false);
      setDateTimePublish("");
    } else {
      // повідомлення про помилку 
    }
  };

  const handleDeleteCard = () => {
    onDelete();
  };

  return (
    <div className={styles["common"]}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Is Show:
        <input type="checkbox" checked={isShow} onChange={() => setIsShow(!isShow)} />
      </label>
      <label>
        Date Time Publish:
        <input type="text" value={dateTimePublish} onChange={(e) => setDateTimePublish(e.target.value)} />
      </label>

      {showDetails && (
        <>
          <h2 className={styles["upper"]}>{name}</h2>
          <p className={styles["upper"]}>{text}</p>
          <p className={styles["upper"]}>{`Published on: ${dateTimePublish}`}</p>
        </>
      )}
     <button variant="primary" onClick={handleAddCard}>
        Add Card
      </button>
      <button variant="error" onClick={handleDeleteCard}>
        Delete
      </button>
      <button variant="secondary" onClick={handleToggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};


export default BlogCard;


