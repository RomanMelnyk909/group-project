import styles from "./prodsasha.module.css"

import { useState, useEffect, useContext } from "react";

import { createRequestPath }  from '../../helpers/helpers';
import { PRODUCTS_LIST_ENDPOINT } from '../../constants/endpoints';
import { ChangeIdContext } from "../../App";

import PageWrapper from '../PageWrapper';
import ProductCardSasha from "../ProductCardSasha";

const ProdSasha = () => {
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
					{data.map((desert, index) => (
						<ProductCardSasha 
							key={desert.id}
							image={desert.image || 'https://wichtech.com/wp-content/uploads/2016/09/noimg.jpg'}
							name={desert.name}
							description={desert.description}
							price={desert.price}
							id={desert.id}
							onSetDelitedId={setRefetchId} />
					))}
				</div>
			</div>
		</PageWrapper>
	);
};

export default ProdSasha;