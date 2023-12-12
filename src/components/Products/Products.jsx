import styles from "./products.module.css";

import { useEffect, useState } from "react";

import { PRODUCTS_LIST_ENDPOINT } from "../../constants/endpoints";
import { createRequestPath } from "../../helpers/helpers";



const Products = () => {
	const [data, setData] = useState([]);
	const [fetching, setFetching] = useState(false);
	const [error, setError] = useState(null);

	useEffect(function(){
		setFetching(true);
		fetch(createRequestPath(PRODUCTS_LIST_ENDPOINT))
		.then(response => response.json())
		.then(resp => {
			console.log(resp);
			setFetching(false);
			setData(resp);
		})
		.catch(err => {
			console.log('err => ', err);
			setFetching(false);
			setError(err);
		})
	}, []);


	return (
		<div className={styles['products']}>Products</div>
	)
};

export default Products;