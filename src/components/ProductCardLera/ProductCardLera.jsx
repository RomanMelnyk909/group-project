import styles from './product-card-lera.module.css';

import Button from '../Button';
import Input from '../Input';

import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

import { PRODUCTS_DELETE_ENDPOINT, PRODUCTS_EDIT_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';
import {ChangeIdContext} from "../../App"

const ProductCardLera = (props) => {
    const { image, name, description, priority, price, id, categoryId, onSetDelitedId, ids } = props;

	const [nameEdit, setNameEdit] = useState(name);
	const [priorityEdit, setPriorityEdit] = useState(priority);
	const [categoryIdEdit, setCategoryIdEdit] = useState(categoryId);
	const [priceEdit, setPriceEdit] = useState(price);
	const [descriptionEdit, setDescriptionEdit] = useState(description);
	const [idsEdit, setIdsEdit] = useState([ids]);

	const [showFlag, setShowFlag] = useState(false);

	const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);
	let { setRefetchId }=useContext(ChangeIdContext);

	const onDeleteDataToApi = () => {
		const apiEndpoint = createRequestPath(PRODUCTS_DELETE_ENDPOINT, id);
		fetch(apiEndpoint, { method: 'DELETE' })
		.then(resp => {
			console.log(resp);
			if(resp.status) {
				onSetDelitedId(id);
			}
			return resp;
		})
		.catch(err => console.log('error => ', err))
	}

	const onEditDataToApi = (product) => {
		setFetching(true);
		fetch(createRequestPath(PRODUCTS_EDIT_ENDPOINT), {
			method: "PUT",
			body: JSON.stringify(product),
			headers: { "Content-Type": "application/json" },
		})
		.then(resp => {
			if(resp.status){
				setRefetchId(uuidv4());
			}
		})
		.catch(err => console.log('error => ', err))
	}

	const onEditProduct = () => {
		const product = {
			id:id,
			name: nameEdit,
			priority: priorityEdit,
			categoryId: categoryIdEdit,
			price: priceEdit,
			description: descriptionEdit,
			ids: [idsEdit],
		};
		onEditDataToApi(product);
		setShowFlag(false);
	}

	const onGetName = (value) => {
		setNameEdit(value);
	}
	const onGetPriority = (value) => {
		setPriorityEdit(value);
	}
	const onGetCategoryId = (value) => {
		setCategoryIdEdit(value);
	}
	const onGetPrice = (value) => {
		setPriceEdit(value);
	}
	const onGetDescription = (value) => {
		setDescriptionEdit(value);
	}
	const onGetIds = (value) => {
		setIdsEdit(value);
	}

	const onCancel = () => {
		setShowFlag(false);
	}
	const onShow = () => {
		setShowFlag(true);
	}

    return (
		<>
			<div className={styles['dessert-card']}>
				<img src={image} alt={name} className={styles.dessertImage} />
				<h3>{name}</h3>
				<p>{description}</p>
				<p className={styles['price']}>Ціна: ${price.toFixed(2)}</p>
				{/* <Button
					type='button'
					title='order' /> */}
				<Button
					type='button'
					title='delete'
					onClickFunction={onDeleteDataToApi} />
				<Button
					type='button'
					title='Edit'
					onClickFunction={onShow} />
			</div>
			<div className={showFlag?styles['editCard']:styles['hidden']}>
				<h2>Edit Product</h2>
				<Input
					label='Name'
					placeholder='Enter product name'
					onChangeFunction={onGetName}
					value={nameEdit}
					validation={true} />
				<Input
					label='Priority'
					placeholder='Enter product priority'
					onChangeFunction={onGetPriority}
					value={priorityEdit}
					validation={true} />
				<Input
					label='CategoryId'
					placeholder='Enter product category id'
					onChangeFunction={onGetCategoryId}
					value={categoryIdEdit}
					validation={true} />
				<Input
					label='Price'
					placeholder='Enter product price'
					onChangeFunction={onGetPrice}
					value={priceEdit}
					validation={true} />
				<Input
					label='Description'
					placeholder='Enter product description'
					onChangeFunction={onGetDescription}
					value={descriptionEdit}
					validation={true} />
				<Input
					label='Ids'
					placeholder='Enter product ids'
					onChangeFunction={onGetIds}
					value={idsEdit}
					validation={true} />
				<Button 
					type='button'
					title='Add Changes'
					onClickFunction={onEditProduct} />
				<Button 
					type='button'
					title='Cancel'
					onClickFunction={onCancel} />
			</div>
		</>
    )
}

export default ProductCardLera;