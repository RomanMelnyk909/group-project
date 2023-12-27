import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import PageWrapper from "../PageWrapper";
import Button from "../Button";
import { createRequestPath } from "../../helpers/helpers";
import {
  BLOGS_LIST_ENDPOINT,
  BLOGS_UPDATE_ENDPOINT,
} from "../../constants/endpoints";
import { BLOG_PATH } from "../../constants/pathNames";
import styles from "./updateBlog.module.css";

const UpdateBlog = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [dateTimePublish, setDateTimePublish] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(createRequestPath(BLOGS_LIST_ENDPOINT));
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        const blogData = responseData.filter((el) => el.id == id)[0];
        
        setName(blogData?.name);
        setText(blogData?.text);
        setImage(blogData?.image);
        setDateTimePublish(blogData?.dateTimePublish);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const onSubmitDataToApi = () => {
    const apiEndpoint = createRequestPath(BLOGS_UPDATE_ENDPOINT);
    const newBlog = {
      id,
      name,
      text,
      image,
      isShow: true,
      dateTimePublish,
    };
    if (name && text && image && dateTimePublish) {
      fetch(apiEndpoint, {
        method: "PUT",
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
        update Blog
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
        <Button
          type="button"
          onClickFunction={onSubmitDataToApi}
          title="Update Blog"
        />
      </div>
    </PageWrapper>
  );
};

export default UpdateBlog;