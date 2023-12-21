import styles from "./products-lera.module.css"

import { useState, useEffect, useContext } from "react";

import { createRequestPath }  from '../../helpers/helpers';
import { PRODUCTS_LIST_ENDPOINT } from '../../constants/endpoints';
import { ChangeIdContext } from "../../App";

import PageWrapper from '../PageWrapper';
import ProductCardLera from "../ProductCardLera";

const ProductsLera = () => {
	const [data, setData] = useState([]);
	const [fetching, setFetching] = useState(false);
	const [error, setError] = useState(null);
	let {refetchId, setRefetchId } = useContext(ChangeIdContext) 

	useEffect(function(){
		setFetching(true);
		fetch(createRequestPath(PRODUCTS_LIST_ENDPOINT))
		.then(response => response.json())
		.then(resp => {
			setFetching(false);
			setData(resp);
		})
		.catch(err => {
			setFetching(false);
			setError(err);
		})
	}, [refetchId]);
  
	return (
		<PageWrapper>
			<div className={styles['products']}>
				<div className={styles['desserts-list']}>
					{data.map((dessert, index) => (
						<ProductCardLera 
							key={dessert.id}
							image={dessert.image || 'https://thelongfortgroup.com/public/img/default/no-image-icon.jpg'}
							name={dessert.name}
							description={dessert.description}
							price={dessert.price}
							id={dessert.id}
							onSetDelitedId={setRefetchId} />
					))}
				</div>
			</div>
		</PageWrapper>
	);
};

export default ProductsLera;