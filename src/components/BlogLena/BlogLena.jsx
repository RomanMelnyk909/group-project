import React, { useState, useEffect } from "react";
import styles from "./blog.module.css";
import {
  BASE_URL,
  BLOGS_LIST_ENDPOINT,
  BLOGS_ADD_ENDPOINT,
  BLOGS_UPDATE_ENDPOINT,
  BLOGS_DELETE_ENDPOINT,
} from "../../constants/endpoints";
import PageWrapper from "../PageWrapper";
import { createRequestPath } from "../../helpers/helpers";
import Input from "../Input/Input";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [refetchId, setRefetchId] = useState();
  const [newBlog, setNewBlog] = useState({
    name: "",
    text: "",
    image: "",
    slug: "",
    isShow: true,
    dateTimePublish: "",
  });

  const [updateBlog, setUpdateBlog] = useState({
    id: null,
    name: "",
    text: "",
    image: "",
    slug: "",
    isShow: true,
    dateTimePublish: "",
  });

  const [nameValid, setNameValid] = useState(true);
  const [textValid, setTextValid] = useState(true);
  const [imageValid, setImageValid] = useState(true);
  const [dateTimePublishValid, setDateTimePublishValid] = useState(true);

  const apiUrl = `${BASE_URL}${BLOGS_LIST_ENDPOINT}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const blog = await response.json();
        setBlogData(blog);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [refetchId]);

  const validateName = (value) => {
    const isValid = value.trim() !== "";
    setNameValid(isValid);
    return isValid;
  };

  const validateText = (value) => {
    const isValid = value.trim() !== "";
    setTextValid(isValid);
    return isValid;
  };

  const validateImage = (value) => {
    const isValid = value.trim() !== "";
    setImageValid(isValid);
    return isValid;
  };

  const validateDateTimePublish = (value) => {
    const isValid = value.trim() !== "";
    setDateTimePublishValid(isValid);
    return isValid;
  };

  const handleInputChange = (name, value, validateFunction) => {
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));

    validateFunction(value);
  };

  const handleUpdateInputChange = (name, value, validateFunction) => {
    setUpdateBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));

    validateFunction(value);
  };

  const onSubmitBlogDataToApi = async () => {
    const isNameValid = validateName(newBlog.name);
    const isTextValid = validateText(newBlog.text);
    const isImageValid = validateImage(newBlog.image);
    const isDateTimePublishValid = validateDateTimePublish(
      newBlog.dateTimePublish
    );

    const isValid =
      isNameValid && isTextValid && isImageValid && isDateTimePublishValid;

    if (!isValid) {
      console.log("Validation failed");
      return;
    }

    const apiEndpoint = createRequestPath(BLOGS_ADD_ENDPOINT);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(newBlog),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const updatedBlogData = [...blogData, newBlog];
        setBlogData(updatedBlogData);
        setNewBlog({
          name: "",
          text: "",
          image: "",
          slug: "",
          isShow: true,
          dateTimePublish: "",
        });
        setNameValid(true);
        setTextValid(true);
        setImageValid(true);
        setDateTimePublishValid(true);
      } else {
        console.log("Blog addition failed");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const onDeleteDataToApi = async (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!shouldDelete) {
      return;
    }

    console.log(id);
    const apiEndpoint = createRequestPath(`${BLOGS_DELETE_ENDPOINT}/${id}`);
    console.log(apiEndpoint);

    try {
      const response = await fetch(apiEndpoint, { method: "DELETE" });

      if (response.ok) {
        setRefetchId(() => id);
      } else {
        console.log("Blog deletion failed");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const onUpdateDataToApi = async () => {
    const isNameValid = validateName(updateBlog.name);
    const isTextValid = validateText(updateBlog.text);
    const isImageValid = validateImage(updateBlog.image);
    const isDateTimePublishValid = validateDateTimePublish(
      updateBlog.dateTimePublish
    );

    const isValid =
      isNameValid && isTextValid && isImageValid && isDateTimePublishValid;

    if (!isValid) {
      console.log("Validation failed");
      return;
    }

    const apiEndpoint = createRequestPath(BLOGS_UPDATE_ENDPOINT);

    try {
      const response = await fetch(apiEndpoint, {
        method: "PUT",
        body: JSON.stringify(updateBlog),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const updatedBlogData = blogData.map((blog) =>
          blog.id === updateBlog.id ? updateBlog : blog
        );
        setBlogData(updatedBlogData);
        setUpdateBlog({
          id: null,
          name: "",
          text: "",
          image: "",
          slug: "",
          isShow: true,
          dateTimePublish: "",
        });
      } else {
        console.log("Blog update failed");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <PageWrapper>
      <h2>Blog</h2>
      <form className={styles["formblog"]}>
        {!updateBlog.id ? (
          <>
            <Input
              label="Name:"
              type="text"
              value={newBlog.name}
              validation={nameValid}
              onChangeFunction={(value) =>
                handleInputChange("name", value, validateName)
              }
            />

            <Input
              label="Text:"
              type="textarea"
              value={newBlog.text}
              validation={textValid}
              onChangeFunction={(value) =>
                handleInputChange("text", value, validateText)
              }
            />

            <Input
              label="Image:"
              type="text"
              value={newBlog.image}
              validation={imageValid}
              onChangeFunction={(value) =>
                handleInputChange("image", value, validateImage)
              }
            />

            <Input
              label="Date and Time of publishing:"
              type="date"
              value={newBlog.dateTimePublish}
              validation={dateTimePublishValid}
              onChangeFunction={(value) =>
                handleInputChange(
                  "dateTimePublish",
                  value,
                  validateDateTimePublish
                )
              }
            />

            <button
              type="button"
              onClick={onSubmitBlogDataToApi}
              className={styles["buttonBlog"]}
            >
              Add Blog
            </button>
          </>
        ) : (
          <>
            <Input
              label="Update Name:"
              type="text"
              value={updateBlog.name}
              validation={nameValid}
              onChangeFunction={(value) =>
                handleUpdateInputChange("name", value, validateName)
              }
            />
            <Input
              label="Update Text:"
              type="textarea"
              value={updateBlog.text}
              validation={textValid}
              onChangeFunction={(value) =>
                handleUpdateInputChange("text", value, validateText)
              }
            />
            <Input
              label="Update Image:"
              type="text"
              value={updateBlog.image}
              validation={imageValid}
              onChangeFunction={(value) =>
                handleUpdateInputChange("image", value, validateImage)
              }
            />
            <Input
              label="Update Date and Time of publishing:"
              type="text"
              value={updateBlog.dateTimePublish}
              validation={dateTimePublishValid}
              onChangeFunction={(value) =>
                handleUpdateInputChange(
                  "dateTimePublish",
                  value,
                  validateDateTimePublish
                )
              }
            />

            <button
              type="button"
              onClick={onUpdateDataToApi}
              className={styles["buttonBlog"]}
            >
              Update Blog
            </button>
          </>
        )}
      </form>

      {blogData ? (
        <div className={styles["blogs"]}>
          {blogData.map((blog) => (
            <div key={blog.id}>
              <h1>{blog.name}</h1>
              <img src={blog.image} alt="Blog image" />
              <p>{blog.text}</p>
              <span>{blog.dateTimePublish}</span>
              <button
                className={styles["buttonBlog"]}
                onClick={() => setUpdateBlog({ ...blog, id: blog.id })}
              >
                Update
              </button>
              <button
                className={styles["buttonBlog"]}
                onClick={() => onDeleteDataToApi(blog.id)}
              >
                Delete
              </button>
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
