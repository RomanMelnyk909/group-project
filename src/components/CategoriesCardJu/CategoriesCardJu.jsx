import styles from './CategoriesCardJu.module.css';
import backgroundImage from '../../images/sub-banner-1.jpg';
import { useState, useContext } from 'react';
import { ChangeIdContext } from '../../App';
import { createRequestPath } from '../../helpers/helpers';
import { CARTEGORIES_DELETE_ENDPOINT, CARTEGORIES_EDITE_ENDPOINT } from '../../constants/endpoints';
import Button from '../Button';
import Input from '../Input';
import { v4 as uuidv4 } from 'uuid';
import { createPortal } from 'react-dom';

const CategoriesCardJu = (props) => {
    const { title, image, string, priority, urlSlug, id, onSetDeletedId } = props;
    const imageUrl = image ? `url(${backgroundImage})` : image;

    const [titleEdit, setTitleEdit] = useState(title);
    const [imageEdit, setImageEdit] = useState(image);
    const [priorityEdit, setPriorityEdit] = useState(priority);
    const [urlSlugEdit, setUrlSlugEdit] = useState(string);

    const [showModal, setShowModal] = useState(false);
    const [showFlag, setShowFlag] = useState(false);

    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const { setRefetchId } = useContext(ChangeIdContext);
    

    const portalElement = document.querySelector('#portal');

    const onDeleteDataToApi = () => {
        const apiEndpoint = createRequestPath(CARTEGORIES_DELETE_ENDPOINT, id);
        fetch(apiEndpoint, { method: 'DELETE', headers: { "Content-Type": "application/json" } })
            .then(resp => {
                if (resp.ok) {
                    onSetDeletedId(id);
                }
                return resp;
            })
            .catch(err => console.error('Error during deletion => ', err));
    };

    const onEditDataToApi = (category) => {
        setFetching(true);
        fetch(createRequestPath(CARTEGORIES_EDITE_ENDPOINT), {
            method: "PUT",
            body: JSON.stringify(category),
            headers: { "Content-Type": "application/json" },
        })
            .then(resp => {
                if (resp.ok) {
                    setRefetchId(uuidv4());
                }
            })
            .catch(err => console.error('Error during edit => ', err))
            .finally(() => setFetching(false));
    };

    const onEditCategory = () => {
        const category = {
            id: id,
            title: titleEdit,
            image: imageEdit,
            priority: priorityEdit,
            urlSlug: urlSlugEdit,
        };
        onEditDataToApi(category);
        setShowFlag(false);
    };

    const onGetName = (value) => {
        setTitleEdit(value)
    };

    const onGetImage = (value) => {
        setImageEdit(value)
    }
    const onGetPriority = (value) => {
        setPriorityEdit(value)
    }
    const onGetUrlSlug = (value) => {
        setUrlSlugEdit(value)
    };


    const onCancel = () => {
		setShowFlag(false);
        setShowModal(false)

	}
	const onShow = () => {
		setShowFlag(true);
     
	}

	const onDelete = () => {
		setShowModal(true);
      
	}

    let modalContent = (
        <div className={styles['delete']}>  
            <h2>Are you sure you want to delete {title} ?</h2>
                <Button 
                    type='reset'
                    title='Delete'
                    onClickFunction={onDeleteDataToApi}/>
                <Button 
                    type='button'
                    title='Cancel'
                    onClickFunction={onCancel}/>


        </div>
    )

    return (
        <>
            <div className={styles['common']} style={{ backgroundImage: imageUrl }}>
                <h3>{title || `The title will be here`}</h3>

                <a className={styles["demo-link"]} href="#">{string || "There will be a link here"}</a>
        
                <Button 
                    type="reset" 
                    onClickFunction={onDelete} 
                    title={"delete"}/>
                <Button 
                    type="button" 
                    title={"edit"} 
                    onClickFunction={onShow}/>
            </div>

            <div className={showFlag?styles["edit"]:styles["hidden"]}>
                <h2>Edite Category</h2>
                <Input 
                    label="Name " 
                    placeholder="Enter category name" 
                    onChangeFunction={onGetName} 
                    value={titleEdit}
                    validation={true} />
                <Input 
                    label="Image " 
                    placeholder="Enter category image url" 
                    onChangeFunction={onGetImage} 
                    value={imageEdit}
                    validation={true} />
                <Input 
                    label="Priority " 
                    placeholder="Enter category priority" 
                    onChangeFunction={onGetPriority} 
                    type='number' 
                    value={priorityEdit}
                    validation={true} />
                <Input 
                    label="UrlSlug " 
                    placeholder="Enter category urlSlug" 
                    onChangeFunction={onGetUrlSlug} 
                    value={urlSlugEdit}
                    validation={true} />

                <Button 
                    type='button'
                    title='Add changes'
                    onClickFunction={onEditCategory}/>
                <Button 
                    type='button'
                    title='Cancel'
                    onClickFunction={onCancel}/>

            </div>
                {showModal ? createPortal(modalContent, portalElement) : null}

       
        </>
    )
};

export default CategoriesCardJu;