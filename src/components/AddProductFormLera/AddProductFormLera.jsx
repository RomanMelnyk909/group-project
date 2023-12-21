import styles from "./addproducts.module.css";

import Input from "../Input";
import Button from '../Button';
import PageWrapper from '../PageWrapper';

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from 'uuid'; 

import { PRODUCTS_ADD_ENDPOINT } from "../../constants/endpoints";
import { PRODUCTS_PATH } from "../../constants/pathNames";
import { createRequestPath } from "../../helpers/helpers";
import { ChangeIdContext } from "../../App";


const AddProductFormLera = () => {
    const navigator = useNavigate();

	let { refetchId, setRefetchId } = useContext(ChangeIdContext);

	const mockProduct = {
		name: "Name of Cake",
		priority: 2,
		categoryId: 1,
		price: 50,
		description: "super tasty cake",
		ids: [
		  5
		]
	};

	const [name, setName] = useState('');
	const [priority, setPriority] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [ids, setIds] = useState([]);

	const [error, setError] = useState(true);

    const onSubmitDataToApi = (product) => {
        const apiEndpoint = createRequestPath(PRODUCTS_ADD_ENDPOINT);
        fetch(apiEndpoint, {
            method: "POST",
            body: JSON.stringify(product),
            headers: { "Content-Type": "application/json" },
        })
        .then(resp => { 
			console.log('response => ', resp);
			if(resp.status){
				setRefetchId(uuidv4());
			}
        })
        .then(() => navigator(PRODUCTS_PATH))
        .catch(err => console.log('error => ', err))
    }

	const onAddProduct = (e) => {
		e.preventDefault();
		console.log('click');
		const product = {
			name,
			priority: parseInt(priority),
			categoryId: parseInt(categoryId),
			price: parseInt(price),
			description,
			ids: [parseInt(ids)],
		};
		console.log(product);
		if (product.name && product.priority && product.categoryId && product.price && product.description && product.ids.length > 0) {
			setName('');
			setPriority('');
			setCategoryId('');
			setPrice('');
			setDescription('');
			setIds([]);
			onSubmitDataToApi(product);
		}
	}

	const onGetName = (value) => {
		setName(value);
	}
	const onGetPriority = (value) => {
		setPriority(value);
	}
	const onGetCategoryId = (value) => {
		setCategoryId(value);
	}
	const onGetPrice = (value) => {
		setPrice(value);
	}
	const onGetDescription = (value) => {
		setDescription(value);
	}
	const onGetIds = (value) => {
		setIds(value);
	}

    return (
		<PageWrapper>
			<form action="" onSubmit={onAddProduct}>
				<div className={styles["products"]}>
					<h2>Add Product</h2>
					<Input
						label="Product Name:"
						placeholder="Enter product name"
						onChangeFunction={onGetName}
						value={name}
						validation={error} />
					<Input
						label="Priority:"
						placeholder="Enter product priority"
						onChangeFunction={onGetPriority}
						value={priority}
						type="number"
						validation={error} />
					<Input
						label="Category Id:"
						placeholder="Enter category id"
						onChangeFunction={onGetCategoryId}
						value={categoryId}
						type="number"
						validation={error} />
					<Input
						label="Price:"
						placeholder="Enter price"
						onChangeFunction={onGetPrice}
						value={price}
						type="number"
						validation={error} />
					<Input
						label="Description:"
						placeholder="Enter description"
						onChangeFunction={onGetDescription}
						value={description}
						validation={error} />
					<Input
						label="Ids:"
						placeholder="Enter ids"
						onChangeFunction={onGetIds}
						value={ids}
						type="number"
						validation={error} />
					<Button
						className="addProducts"
						type="submit"
						// onClickFunction={onAddProduct}
						title='Add' />
				</div>
			</form>
		</PageWrapper>
    );
};

export default AddProductFormLera;