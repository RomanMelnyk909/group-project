import styles from "./products.module.css"
import { useState, useEffect } from "react";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.png";
import image3 from "../../images/3.jpg";
import { createRequestPath }  from '../../helpers/helpers';
import { PRODUCTS_LIST_ENDPOINT } from '../../constants/endpoints';

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
	const [data, setData] = useState(DEFAULT_DESSERTS);
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


	// const [desserts] = useState(DEFAULT_DESSERTS);
  
	return (
	  <div className={styles['products']}>

		<div>

		  <div className={styles['desserts-list']}>

			{data.map((dessert, index) => (

			  <div key={index} className={styles['dessert-card']}>

				<img src={dessert.image} alt={dessert.name} className={styles.dessertImage} />

				<h3>{dessert.name}</h3>

				<p>{dessert.description}</p>
				<p className={styles['price']}>Ціна: ${dessert.price.toFixed(2)}</p>

				<button className={styles['order-button']} onClick={ () =>{

				}}>
				  Order
				</button>

			  </div>
			))}

		  </div>

		</div>
	  </div>
	);
  };


export default Products;