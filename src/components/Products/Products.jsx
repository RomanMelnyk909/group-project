import styles from "./products.module.css"
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/endpoints";
import { PRODUCTS_LIST_ENDPOINT } from "../../constants/endpoints";


const Products = () => {

  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
	const url = `${BASE_URL}${PRODUCTS_LIST_ENDPOINT}`;
  
	fetch(url)
	  .then(response => {
		return response.json();
	  })

	  .then(result => {
		setData(result);
	  })

	  .catch(error => {
		setError(error.message);
	  })

	  .then(() => {
		setFetching(false);
	  });
  };

  useEffect(() => {
    fetchData();
  }, []); 

  if (fetching) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops an error occurred... {error}</p>;
  }

  return (
    <div>
      {data && (
       <div>
          {data.map(item => (
			<div>
		<br></br>
           <p>Name: {item.name}</p>
           <p>ID: {item.id}</p>
           <p>Category: {item.categoryName}</p>
           <p>Priority: {item.priority}</p>
           <p>Description: {item.description}</p>
           <p>Images: {item.images}</p>
           <p>Price: {item.price}</p>
			</div>
          ))}
	</div>
      )}
       </div>
  );
};


export default Products;