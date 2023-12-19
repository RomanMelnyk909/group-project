import React, { useState, useContext } from "react";
import Input from "../Input";
import { createRequestPath } from "../../helpers/helpers";
import { BLOGS_ADD_ENDPOINT } from "../../constants/endpoints";
import Blog from "../Blog";  // Важливо імпортувати компоненту Blog
import PageWrapper from "../PageWrapper";
import { v4 as uuidv4 } from 'uuid'; 
import { ChangeIdContext } from "../../App";

const AddBlogForm = () => {
  let { refetchId, setRefetchId } = useContext(ChangeIdContext);

  const [name, setName] = useState();
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const [isShow, setIsShow] = useState(true);
  const [dateTimePublish, setDateTimePublish] = useState();
  const [redClassFlag, setRedClassFlag] = useState(false);

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

  function onAddedIDChanged() {
    return uuidv4()
  }

  function onAddBlog() {
    const blog = {
      name,
      text,
      image,
      isShow,
      dateTimePublish,
    };
    onAddedIDChanged()
    if (blog.name && blog.text && blog.image && blog.dateTimePublish) {
      setName('');
      setText('');
      setImage('');
      setDateTimePublish('');
      setRedClassFlag(false)
      onSubmitDataToApi(blog)
    } else {
      setRedClassFlag(true)
    }
  }

  const onGetName = (value) => {
    setName(value)
  };

  const onGetText = (value) => {
    setText(value)
  }

  const onGetImage = (value) => {
    setImage(value)
  }

  const onGetDateTimePublish = (value) => {
    setDateTimePublish(value)
  };

  return (
    <PageWrapper>
      <div className='add-new-blog'>
        <h2>Add new blog</h2>
        <div className="add-new-blog-panel">
          <Input classNameFlag={redClassFlag} label="Name: " placeholder="Enter blog name" onChangeFunction={onGetName} value={name} />
          <Input classNameFlag={redClassFlag} label="Text: " placeholder="Enter blog text" onChangeFunction={onGetText} value={text} />
          <Input classNameFlag={redClassFlag} label="Image: " placeholder="Enter blog image url" onChangeFunction={onGetImage} value={image} />
          <Input classNameFlag={redClassFlag} label="Date Time Publish: " placeholder="Enter blog publish date and time" onChangeFunction={onGetDateTimePublish} value={dateTimePublish} />
        </div>
        <button className="add-blog-item" type="button" onClick={onAddBlog}>Add</button>
        <hr />
        <Blog />
      </div>
    </PageWrapper>
  );
};

export default AddBlogForm;
