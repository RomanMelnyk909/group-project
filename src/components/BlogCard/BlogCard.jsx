import { useNavigate } from "react-router";

import Button from "../Button";
import styles from "./blogcard.module.css";

import { createRequestPath } from "../../helpers/helpers";
import { BLOGS_DELETE_ENDPOINT } from "../../constants/endpoints";

const BlogCard = ({ id, name, text, dateTimePublish, onDelete }) => {
  const navigator = useNavigate();

const handleDeleteCard = async () => {
        const apiEndpoint = createRequestPath(BLOGS_DELETE_ENDPOINT, id);
        fetch(apiEndpoint, { method: 'DELETE' })
            .then(resp => {
                console.log(resp);
                if (resp.status) {
                    onDelete(id)
                }
                return resp;
            })
            .catch(err => console.log('error => ', err))
};
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
          navigator(`/update-blog/${id}`);
        }}
      />
      <Button type='reset' title='Delete' onClickFunction={handleDeleteCard}/>
    </div>
  );
};

export default BlogCard;