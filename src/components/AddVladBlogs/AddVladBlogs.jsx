import React, { useState } from "react";
import { createRequestPath } from "../../helpers/helpers";
import { BLOGS_ADD_ENDPOINT } from "../../constants/endpoints";

import PageWrapper from "../PageWrapper";

import { BLOG_PATH } from "../../constants/pathNames";

import styles from "./addVladBlogs.module.css";
import Button from "../Button";
import { useNavigate } from "react-router";
import ImageUploader from "../ImageUploader";

const AddVladBlogs = () => {
  const navigator = useNavigate();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [dateTimePublish, setDateTimePublish] = useState("");

  const onSubmitDataToApi = () => {
    const apiEndpoint = createRequestPath(BLOGS_ADD_ENDPOINT);

    const newBlog = {
      name,
      text,
      image,
      isShow,
      dateTimePublish,
    };
    console.log(newBlog)
    if (name && text && image && dateTimePublish) {
      fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(newBlog),
        headers: { "Content-Type": "application/json" },
      }).then((resp) => {
        if (resp?.status === 200) navigator(BLOG_PATH);
      });
    } else {
      alert("Заповніть всі поля");
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
            {/*<label>*/}
            {/*  Image:*/}
            {/*  */}
            {/*  <input*/}
            {/*    className={styles.list}*/}
            {/*    placeholder="Image url"*/}
            {/*    onChange={(e) => setImage(e.target.value)}*/}
            {/*    value={image}*/}
            {/*  />*/}
            {/*</label>*/}
            <ImageUploader setImageFunction={setImage} />
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

        <Button type="button" onClickFunction={onSubmitDataToApi} title="Add" />
      </div>
    </PageWrapper>
  );
};

export default AddVladBlogs;