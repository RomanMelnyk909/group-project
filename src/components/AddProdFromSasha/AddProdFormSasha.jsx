import styles from "./addprod.module.css";

import Input from "../Input";
import Button from '../Button';
import PageWrapper from '../PageWrapper';

import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from 'uuid'; 

import { PRODUCTS_ADD_ENDPOINT } from "../../constants/endpoints";
import { PRODUCTS_SASHA_PATH } from "../../constants/pathNames";
import { createRequestPath } from "../../helpers/helpers";
import { ChangeIdContext } from "../../App";


const AddProdFormSasha = () => {
    const navigator = useNavigate();

	let { refetchId, setRefetchId } = useContext(ChangeIdContext);

	const mockProduct = {
		name: "Cookie",
		priority: 1,
		categoryId: 1,
		price: 120,
		description: "just cookie",
		ids: [
		  5
		],
	};

	const [name, setName] = useState('');
	const [priority, setPriority] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [ids, setIds] = useState([]);

	const [error, setError] = useState(true);

    const SubmitDataToApi = (product) => {
        const apiEndpoint = createRequestPath(PRODUCTS_ADD_ENDPOINT);
        fetch(apiEndpoint, {
            method: "POST",
            body: JSON.stringify(product),
            headers: { "Content-Type": "application/json" },
        })
        .then(resp => { 
			if(resp.status){
				setRefetchId(uuidv4());
			}
        })
        .then(() => navigator(PRODUCTS_SASHA_PATH))
        .catch(err => console.log('error => ', err))
    }

	const AddProduct = (e) => {
		const product = {
			name,
			priority: parseInt(priority),
			categoryId: parseInt(categoryId),
			price: parseInt(price),
			description,
			ids: [parseInt(ids)],
		};

		if (product.name && product.priority && product.categoryId && product.price && product.description && product.ids.length > 0) {
			setName('');
			setPriority('');
			setCategoryId('');
			setPrice('');
			setDescription('');
			setIds([]);
			SubmitDataToApi(product);
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
			<form action="" onSubmit={AddProduct}>
				<div className={styles["products"]}>
					<h2>Add Product</h2>
					<Input
						label="Product Name:"
						placeholder="Name..."
						onChangeFunction={onGetName}
						value={name}
						validation={error} />
					<Input
						label="Priority:"
						placeholder="priority..."
						onChangeFunction={onGetPriority}
						value={priority}
						type="number"
						validation={error} />
					<Input
						label="Category Id:"
						placeholder="id..."
						onChangeFunction={onGetCategoryId}
						value={categoryId}
						type="number"
						validation={error} />
					<Input
						label="Price:"
						placeholder="price..."
						onChangeFunction={onGetPrice}
						value={price}
						type="number"
						validation={error} />
					<Input
						label="Description:"
						placeholder="description..."
						onChangeFunction={onGetDescription}
						value={description}
						validation={error} />
					<Input
						label="Ids:"
						placeholder="ids..."
						onChangeFunction={onGetIds}
						value={ids}
						type="number"
						validation={error} />
					<Button
						className="addProducts"
						type="submit"
						title='Add' />
				</div>
			</form>
		</PageWrapper>
    );
};

export default AddProdFormSasha;