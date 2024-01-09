import PageWrapper from '../PageWrapper';
import styles from './addCategoriesFormValentine.module.css'

import { CARTEGORIES_ADD_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';
//// Default
// import { useNavigate } from 'react-router';
import { CATEGIRIES_VALENTINE_PATH } from '../../constants/pathNames';
// 
import { ChangeIdContext } from "../../App"

import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';

import CategoriesValentine from '../CategoriesValentine';
import Input from '../Input';
import Button from '../Button';

const AddCategoriesFormValentine = () => {

    //// Default
    const navigator = useNavigate();

    // const mockCategories = {
    //     title: "Test text",
    //     priority: 1,
    //     urlSlug: "Tort7",
    //     // string: "Show now",
    //     image: "string",
    //     id: 1
    // }

    // const onSubmitDataToApi = () => {
    //     // ендпоинт на який хочемо зробити запит
    //     const apiEndpoint = createRequestPath(CARTEGORIES_ADD_ENDPOINT);
    //     fetch(apiEndpoint, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(mockCategories),
    //     })
    //     .then(resp => {
    //         console.log("response", resp);
    //         return resp;
    //     })
    //     .then(resp => resp.json())
    //     .then(resp => console.log("response Parsed => ", resp))
    //     .then(() => navigator(CATEGIRIES_VALENTINE_PATH))
    //     .catch(err => console.log("ERROR =>", err))
    // }

    // 
    let { refetchId, setRefetchId } = useContext(ChangeIdContext)

    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [priority, setPriority] = useState();
    const [urlSlug, setUrlSlug] = useState();

    const onSubmitDataToApi = (category) => {
        const apiEndpoint = createRequestPath(CARTEGORIES_ADD_ENDPOINT);
        fetch(apiEndpoint, {
            method: "POST",
            body: JSON.stringify(category),
            headers: { "Content-Type": "application/json" },
        })
            .then(resp => {
                if(resp?.status === 200){
                    navigator(CATEGIRIES_VALENTINE_PATH)
                }
            })
            // .then(() => navigator(CATEGIRIES_VALENTINE_PATH))
            .catch(err => console.log("ERROR =>", err))
            // .then(resp => {
            //     console.log('response => ', resp);
            //     if (resp.status) {
            //         setRefetchId(uuidv4())
            //     }
            // })
    }

    const onAddCategory = () => {
        const category = {
            title,
            image: "string",
            priority,
            urlSlug,
            id: uuidv4()
        };
        if (category.title && category.image && category.priority) {
            setTitle(``);
            setImage('');
            setPriority('');
            setUrlSlug('');
            onSubmitDataToApi(category)

        }
        // console.log("ID=>", category)
    }

    const onGetName = (value) => {
        setTitle(value)
    };

    const onGetImage = (value) => {
        setImage(value)
    }

    const onGetPriority = (value) => {
        setPriority(value)
    }
    const onGetUrlSlug = (value) => {
        setUrlSlug(value)
    };

    return (
        <PageWrapper>

            <div className={styles['common']}>

                <h2>Add new category</h2>

                <div className={styles["category-form"]}>
                    <Input
                        label="name: "
                        placeholder="Enter category's name"
                        onChangeFunction={onGetName}
                        value={title}
                        validation={true} />

                    <Input
                        label="image: "
                        placeholder="Enter category's image url"
                        onChangeFunction={onGetImage}
                        value={image}
                        validation={true} />

                    <Input
                        label="priority: "
                        placeholder="Enter category's priority"
                        onChangeFunction={onGetPriority} type='number'
                        value={priority}
                        validation={true} />

                    <Input
                        label="urlSlug: "
                        placeholder="Enter category's urlSlug"
                        onChangeFunction={onGetUrlSlug}
                        value={urlSlug}
                        validation={true} />

                    {/* <Button type={styles["buutonClassname"]} title="add" onClickFunction={onSubmitDataToApi} /> */}
                </div>
                {/* <button
                    className={styles["btn-add"]}
                    type='submit'
                    onClick={onAddCategory}>
                    add
                </button> */}
                <Button type="button" onClickFunction={onAddCategory} title={"add"}/>
            </div>

        </PageWrapper>
    )
};

export default AddCategoriesFormValentine;