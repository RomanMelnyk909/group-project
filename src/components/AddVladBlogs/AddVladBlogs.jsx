import React, { useState, useContext, useEffect } from "react";
import Input from "../Input";
import { createRequestPath } from "../../helpers/helpers";
import { BLOGS_ADD_ENDPOINT } from "../../constants/endpoints";
import Blog from "../Blog"; 
import PageWrapper from "../PageWrapper";
import { v4 as uuidv4 } from 'uuid'; 
import { ChangeIdContext } from "../../App";

import styles from './addVladBlogs.module.css';

const AddVladBlogForm = () => {
  let { refetchId, setRefetchId } = useContext(ChangeIdContext);

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [blogList, setBlogList] = useState([]);
  const [dateTimePublish, setDateTimePublish] = useState('');

  useEffect(() => {
    // Отримати дані з localStorage при завантаженні компонента
    const storedBlogList = JSON.parse(localStorage.getItem('blogList')) || [];
    setBlogList(storedBlogList);
  }, []);

  useEffect(() => {
    // Зберегти дані у localStorage при зміні blogList
    localStorage.setItem('blogList', JSON.stringify(blogList));
  }, [blogList]);

  const onSubmitDataToApi = (blog) => {
    const apiEndpoint = createRequestPath(BLOGS_ADD_ENDPOINT);
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    })
      .then(resp => {
        console.log('response => ', resp);
        if (resp.status) {
          setRefetchId(uuidv4())	
        }
      })
  }

  const onAddBlog = () => {
    const newBlog = {
      name,
      text,
      image,
      isShow,
      dateTimePublish,
    };

    if (newBlog.name && newBlog.text && newBlog.image && newBlog.dateTimePublish) {
      setBlogList((prevList) => [...prevList, newBlog]);
      setName('');
      setText('');
      setImage('');
      setDateTimePublish('');
    } else {
      alert("Заповніть всі поля")
    }
  };

  return (
    <PageWrapper>
      <div className={styles.addBlog}>
        <div className={styles.container}>
          <div className={styles.blogPanel}>
            <label>
              Name
              <input 
                className={styles.list} 
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
              />
            </label>
            <label>
              Description
              <input 
                className={styles.list} 
                placeholder="Enter some text" 
                onChange={(e) => setText(e.target.value)} 
                value={text} 
              />
            </label>
          </div>
          <div className={styles.blogPanel}>
            <label>
              Image:
              <input 
                className={styles.list} 
                placeholder="Image url" 
                onChange={(e) => setImage(e.target.value)} 
                value={image} 
              />
            </label>
            <label htmlFor="">
              Date Time Publish:
              <input 
                type="date"
                className={styles.list} 
                placeholder="Publish date and time" 
                onChange={(e) => setDateTimePublish(e.target.value)} 
                value={dateTimePublish} 
              />
            </label>
          </div>
        </div>
        <button type="button" onClick={onAddBlog}>Add</button>
        <hr />
        {blogList.map((blog, index) => (
          <div className={styles.card}>
            <div key={index}>
              <img src={"https://thelongfortgroup.com/public/img/default/no-image-icon.jpg"||blog.image  } alt="Blog" />
              <h3>{blog.name}</h3>
              <p>{blog.text}</p>
              <p>Date Time Publish: {blog.dateTimePublish}</p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default AddVladBlogForm;
