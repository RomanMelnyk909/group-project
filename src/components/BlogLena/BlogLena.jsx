import { useState, useEffect } from "react";
import styles from "./blog.module.css";
import {
  BASE_URL,
  BLOGS_LIST_ENDPOINT,
  BLOGS_ADD_ENDPOINT,
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
        console.log(updatedBlogData);
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

  const onDeleteDataToApi = (id) => {
    const apiEndpoint = createRequestPath(`${BLOGS_DELETE_ENDPOINT}/${id}`);
    console.log(apiEndpoint);

    fetch(apiEndpoint, { method: "DELETE" })
      .then((resp) => {
        console.log("Response status:", resp.status);
        if (resp.status) {
          setRefetchId(id);
        }
        return resp;
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  };

  return (
    <PageWrapper>
      <h2>Blog</h2>
      <form className={styles["formblog"]}>
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
          type="text"
          value={newBlog.dateTimePublish}
          validation={dateTimePublishValid}
          onChangeFunction={(value) =>
            handleInputChange("dateTimePublish", value, validateDateTimePublish)
          }
        />

        <button
          type="button"
          onClick={onSubmitBlogDataToApi}
          className={styles["buttonBlog"]}
        >
          Add Blog
        </button>
      </form>

      {blogData ? (
        <div className={styles["blogs"]}>
          {blogData.map((blog) => (
            <div key={blog.id}>
              <h1>{blog.name}</h1>
              <img src={blog.image} alt="Blog image" />
              <p>{blog.text}</p>
              <span>{blog.dateTimePublish}</span>
              {/* <button
                className={styles["buttonBlog"]}
                onClick={() => onDeleteDataToApi(blog.id)}
              >
                Delete
              </button> */}
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
