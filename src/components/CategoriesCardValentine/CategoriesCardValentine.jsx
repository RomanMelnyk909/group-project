import styles from './categoriesCardV.module.css'

import Button from '../Button';
import Input from '../Input';
// import Modal from '../Modal/Modal';

import { 
    CARTEGORIES_DELETE_ENDPOINT, 
    CARTEGORIES_EDITE_ENDPOINT 
} from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';
import { ChangeIdContext } from '../../App';

import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Демо
import backgroundImage from '../../images/sub-banner-2.jpg'
import { createPortal } from 'react-dom';
import QueryLoader from '../QueryLoader';


const CategoriesCardValentine = (props) => {
    // const navigator = useNavigate();

    const { title, image,string, priority, urlSlug, id, onSetDeletedId }= props;

    // const imageUrl = image ? image : `url(${backgroundImage})`;
    const imageUrl = image ? `url(${backgroundImage})` : image;

    const [ titleEdit, setTitleEdit ] = useState(title);
    const [ imageEdit, setImageEdit ] = useState(image);
    const [ priorityEdit, setPriorityEdit ] = useState(priority);
    const [ urlSlugEdit, setUrlSlugEdit ] = useState(string);


    const [ showModal, setShowModal ] = useState(false);
    // const [ deleteCategory, setDeleteCategory ] = useState(false);
    const [showFlag, setShowFlag] = useState(false);

    
    const [ fetching, setFetching ] = useState(false)
    const [ fetchError, setFetchError ] = useState(null);
    let { setRefetchId } = useContext(ChangeIdContext);

    let portalElement = document.querySelector('#portal')


    const onDeleteDataToApi = () => {
        const apiEndpoint = createRequestPath(CARTEGORIES_DELETE_ENDPOINT, id);
        fetch(apiEndpoint, { method: 'DELETE' ,
        headers: { "Content-Type": "application/json" },})
            .then(resp => {
                console.log("RESP DELETE=>",resp);
                if (resp.status) {
                    onSetDeletedId(id)
                }
                return resp;
            })
            .catch(err => console.log('error => ', err))
            // .catch(err => {
            //     setFetching(false)
            //     setFetchError(err)
            // })
    }
    
    function onEditDataToApi (category){
        setFetching(true)
        fetch(createRequestPath(CARTEGORIES_EDITE_ENDPOINT), {
            method: "PUT",
            body: JSON.stringify(category),
            headers: { "Content-Type": "application/json" },
        })
        .then(resp => {
            console.log("EDIT=>",resp);
            if (resp.status) {
                setRefetchId(uuidv4())
                // setFetching(false); // ????
            }
        })
        .catch(err => console.log("ERROR =>", err))
        // .catch(err => {
        //     setFetching(false)
        //     setFetchError(err)
        // })
        // .catch(err => {
        //     console.log("ERROR =>", err);
        //     setFetching(false); // Устанавливаем fetching в false при возникновении ошибки
        //     setFetchError(err)
        // });
    }

    function onEditCategory () {
        const category = {
            id:id,
			title:titleEdit,
			image: imageEdit,
			priority:priorityEdit,
			urlSlug:urlSlugEdit,
		};
        onEditDataToApi(category);
        setShowFlag(false);
    }

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
		// setShowModal(true);

	}
	const onShow = () => {
		setShowFlag(true);
        // setShowModal(false)
	}

	const onDelete = () => {
		setShowModal(true);
        // setDeleteCategory(true)
	}

    let modalContent = (
        <div className={styles['delete']}>  
            <h2>Are you sure you want to delete {title} ?</h2>
            {/* <h2>Edite caregory</h2> */}
                {/* <Input 
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
                    onClickFunction={onCancel}/> */}
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

        // Коли картинка буде з api тодi замiнемо backgroundImage на props => image
        // <div className={styles['common']} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <>
            <div className={styles['common']} style={{ backgroundImage: imageUrl }}>
                <h3>{title || `The title will be here`}</h3>

                {/* Демо */}
                <a className={styles["demo-link"]} href="#">{string || "There will be a link here"}</a>
                {/* <img src={image} alt={`${image}`} /> */}
        
                <Button 
                    type="reset" 
                    onClickFunction={onDelete} 
                    title={"delete"}/>
                <Button 
                    type="button" 
                    title={"edit"} 
                    onClickFunction={onShow}/>
                

                {/* <Modal title={title} deleteCategory={deleteCategory} setDeleteCategory={setDeleteCategory} onDeleteDataToApi={onDeleteDataToApi}/> */}
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

export default CategoriesCardValentine;