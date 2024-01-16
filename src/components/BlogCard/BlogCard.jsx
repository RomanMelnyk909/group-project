import React, { useState } from "react";
import Button from "../Button";
import styles from "./blogcard.module.css";
import ModalR from "../ModalR";
import { createRequestPath } from "../../helpers/helpers";
import { BLOGS_DELETE_ENDPOINT } from "../../constants/endpoints";

const BlogCard = ({ id, name, text, image, dateTimePublish, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteCard = async () => {
    // Open the modal
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    const apiEndpoint = createRequestPath(BLOGS_DELETE_ENDPOINT, id);
    fetch(apiEndpoint, { method: "DELETE" })
      .then((resp) => {
        console.log(resp);
        if (resp.status) {
          // закрити модалку після закінчення дії
          setIsModalOpen(false);
          onDelete(id);
        }
        return resp;
      })
      .catch((err) => console.log("error => ", err));
  };

  const handleCloseModal = () => {
    // Закрити модалку
    setIsModalOpen(false);
  };

  const imgageUrl = `https://roman.itstep.click/images/300_${image}`

  return (
    <div key={id} className={styles.blogPost}>
      <img
        src={imgageUrl}
        alt="blogImage"
      />
      <h2>{name}</h2>
      <p>{text}</p>
      <p>Date: {dateTimePublish}</p>
      <Button
        type="button"
        title="Edit"
        onClickFunction={() => {
        
        }}
      />
      <Button type="reset" title="Delete" onClickFunction={handleDeleteCard} />
      <ModalR showModal={isModalOpen} openModalFunc={setIsModalOpen}>
        <div className={styles.wrapModal}>
          <h3>Ви впевнені що хочете видалити?</h3>
          <Button onClickFunction={handleCloseModal} title="Cancel" />
          <Button onClickFunction={handleConfirmDelete} title="Delete" />
        </div>
      </ModalR>
    </div>
  );
};

export default BlogCard;
