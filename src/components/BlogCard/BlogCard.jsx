import React, { useState } from "react";
import Button from "./Button";

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
          <h2>{name}</h2>
          <p>{text}</p>
          <p>{`Published on: ${dateTimePublish}`}</p>
        </>
      )}
     <Button variant="primary" onClick={handleAddCard}>
        Add Card
      </Button>
      <Button variant="error" onClick={handleDeleteCard}>
        Delete Card
      </Button>
      <Button variant="secondary" onClick={handleToggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </Button>
    </div>
  );
};


export default BlogCard;


