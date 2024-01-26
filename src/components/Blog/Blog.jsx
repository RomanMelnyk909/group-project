
import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCard";
import { BLOGS_LIST_ENDPOINT, BLOGS_DELETE_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";
import styles from "./blog.module.css";
// import ClassBasedVlad from "../ClassBasedVlad";
import { useDispatch, useSelector } from "react-redux";
import { setCardCount } from "../../constants/actions";

const Blog = () => {
  const [data, setData] = useState([]);
  const [refetchId, setRefetchId] = useState();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  
  const dispatch =  useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        const response = await fetch(createRequestPath(BLOGS_LIST_ENDPOINT));
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        const cardCount = data.length;
        dispatch(setCardCount(cardCount))
        setData(responseData);
      } catch (err) {
        setError(err);
      } finally {
        setFetching(false);
      }
    };
    
    fetchData();
  }, [refetchId]);
  






  // const { countCard } = useSelector(state => state.counter)
  // console.log(countCard, 'redux')

  // const reduxState = useSelector(users => users)
  // console.log(reduxState, '222')

  const cardCount = useSelector((state) => state.cardCount);
  console.log(cardCount)







  const handleDeleteCard = async (id) => {
      const apiEndpoint = createRequestPath(BLOGS_DELETE_ENDPOINT, id);
      const response = await fetch(apiEndpoint, { method: 'DELETE' });

    fetch(apiEndpoint, { method: "DELETE" })
      .then((resp) => {
        // console.log("Response status:", resp.status);
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
    <div className={styles.blogContainer}>
      <h2>{cardCount}</h2>
      
      {fetching && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!fetching && !error && (
        <div className={styles.blogPost}>
          {data.map((blogPost) => (
            <BlogCard
            key={blogPost.id}
            id={blogPost.id}
            name={blogPost.name}
            text={blogPost.text}
            dateTimePublish={blogPost.dateTimePublish}
            onDelete={handleDeleteCard}
            />
            ))}
            {/* <ClassBasedVlad/> */}
        </div>
      )}
    </div>
  );
};

export default Blog;
