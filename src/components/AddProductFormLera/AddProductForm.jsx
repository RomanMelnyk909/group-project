import styles from "./addproducts.module.css";

import Input from "../Input";
import Button from '../Button';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { PRODUCTS_ADD_ENDPOINT } from "../../constants/endpoints";
import { PRODUCTS_PATH } from "../../constants/pathNames";
import { createRequestPath } from "../../helpers/helpers";


const AddProductForm = () => {
    const navigator = useNavigate();

    const mockProduct = {
        name: "П'яна вишня",
        priority: 3,
        categoryId: 2,
        price: 50,
        description: "Мммммм....",
        ids: [
          5
        ]
      }
    
    const onSubmitDataToApi = () => {
        const apiEndpoint = createRequestPath(PRODUCTS_ADD_ENDPOINT);
        fetch(apiEndpoint, {
            method: "POST",
            body: JSON.stringify(mockProduct),
            headers: { "Content-Type": "application/json" },
        })
        .then(resp => { 
            console.log('response => ', resp);
            return resp;
        })
        .then(resp => resp.json())
        .then(resp => console.log('response Parsed => ', resp))
        .then(() => navigator(PRODUCTS_PATH))
        .catch(err => console.log('error => ', err))
    }

    const [formData, setFormData] = useState({
        name: '',
        priority: '',
        categoryId: '',
        price: '',
        description: '',
        ids: '',
    });
    console.log(formData.name);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className={styles["products"]}>
            <Input
                label="Product:"
                placeholder="Enter product name"
                onChangeFunction={handleInputChange}
                value={formData.name}
                type="text"
                name='name' />
            <Input
                label="Priority:"
                placeholder="Enter product priority"
                onChangeFunction={handleInputChange}
                value={formData.priority}
                type="text"
                name='priority' />
            <Input
                label="Category Id:"
                placeholder="Enter category id"
                onChangeFunction={handleInputChange}
                value={formData.categoryId}
                type="text"
                name='categoryId' />
            <Input
                label="Price:"
                placeholder="Enter price"
                onChangeFunction={handleInputChange}
                value={formData.price}
                type="number"
                name='price' />
            <Input
                label="Description:"
                placeholder="Enter description"
                onChangeFunction={handleInputChange}
                value={formData.description}
                type="number"
                name='description' />
            <Input
                label="Ids:"
                placeholder="Enter ids"
                onChangeFunction={handleInputChange}
                value={formData.ids}
                type="number"
                name='ids' />
            <Button
                className="addProducts"
                type="button"
                onClickFunction={onSubmitDataToApi}
                title='Add' />
        </div>
    );
};

export default AddProductForm;