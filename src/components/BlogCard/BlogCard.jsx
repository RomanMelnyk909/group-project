import { useNavigate } from "react-router";

import Button from "../Button";
import styles from "../Blog/blog.module.css";

const BlogCard = ({ id, name, text, dateTimePublish }) => {
  const navigator = useNavigate();

  return (
    <div key={id} className={styles.blogPost}>
      <img
        src="https://thelongfortgroup.com/public/img/default/no-image-icon.jpg"
        alt=""
      />
      <h2>{name}</h2>
      <p>{text}</p>
      <p>Date: {dateTimePublish}</p>
      <Button
        type="button"
        title="Edit"
        onClickFunction={() => {
          navigator(`/update-blog-r/${id}`);
        }}
      />
      <Button type="reset"  title="Delete" />
    </div>
  );
};

export default BlogCard;