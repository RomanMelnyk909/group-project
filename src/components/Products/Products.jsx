import styles from "./products.module.css"

import { useState, useEffect } from "react";

import image1 from "../../images/1.jpg";
import image2 from "../../images/2.png";
import image3 from "../../images/3.jpg";

import { createRequestPath }  from '../../helpers/helpers';
import { PRODUCTS_LIST_ENDPOINT } from '../../constants/endpoints';

import PageWrapper from '../PageWrapper';
import ProductCard from "../ProductCard";

const DEFAULT_DESSERTS = [
	{
	  name: 'Торт "Прага"',
	  image: image1,
	  description: 'Три бісквітні коржі з двома шарами крему «Празький». Верхня та бічні поверхні покриті повидлом і загладжені помадкою',
	  price: 15.99,
	},
	{
	  name: 'Торт "Наполеон"',
	  image: image2,
	  description: 'Наполеон - багатошаровий торт із листкового тіста з масляним або заварним кремом',
	  price: 18.99,
	},
	{
	  name: 'Торт "Медовик"',
	  image: image3,
	  description: 'Багатошаровий торт із медових коржів з прошарком зі сметанного або вершкового крему',
	  price: 8.99,
	},
  ];


const Products = () => {
	const [data, setData] = useState([]);
	const [fetching, setFetching] = useState(false);
	const [error, setError] = useState(null);

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
	}, []);
  
	return (
		<PageWrapper>
			<div className={styles['products']}>
				<div className={styles['desserts-list']}>
					{data.map((dessert, index) => (
						<ProductCard 
							key={dessert.id}
							image={dessert.image || 'https://thelongfortgroup.com/public/img/default/no-image-icon.jpg'}
							name={dessert.name}
							description={dessert.description}
							price={dessert.price}
							id={dessert.id} />
					))}
				</div>
			</div>
		</PageWrapper>
	);
};

export default Products;