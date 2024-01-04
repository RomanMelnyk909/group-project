import styles from './categoriesCard.module.css'
import { CARTEGORIES_DELETE_ENDPOINT, CARTEGORIES_EDITE_ENDPOINT } from "../../constants/endpoints"
import { createRequestPath } from "../../helpers/helpers";
import Input from '../Input';
import {ChangeIdContext} from "../../App"
import backgroundImage from '../../images/sub-banner-1.jpg'
import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { createPortal } from "react-dom";
import ModalR from "../ModalR";

const CategoriesCard = (props) => {
    const { title, image, string, id, onSetDeletedId, buttonFlag, priority } = props;
    const [titleEdit, setTitleEdit] = useState(title);
    const [imageEdit, setImageEdit] = useState(image);
    const [urlSlugEdit, setUrlSlugEdit] = useState(string);
    const [priorityEdit, setPriorityEdit] = useState(priority);
    const [fetching, setFetching] = useState(false)
    const [fetchError, setFetchError] = useState(null);
    const [showModal, setShowModal] = useState(false)
    let { setRefetchId}=useContext(ChangeIdContext)
    let portalElement = document.querySelector('#portal') 
    const onDeleteDataToApi = () => {
        const apiEndpoint = createRequestPath(CARTEGORIES_DELETE_ENDPOINT, id);
        fetch(apiEndpoint, { method: 'DELETE' })
            .then(resp => {
                console.log(resp);
                if (resp.status) {
                    onSetDeletedId(id)
                }
                return resp;
            })
            .catch(err => console.log('error => ', err))
    }

    function onEditDataToApi(category){     
            setFetching(true)       
            fetch(createRequestPath(CARTEGORIES_EDITE_ENDPOINT), {
                method: "PUT",
                body: JSON.stringify(category),
                headers: { "Content-Type": "application/json" },
            })
                .then(resp => {
                    if (resp.status) {
                        setRefetchId(uuidv4())
                    }
                })
        }                

    function onEditecategory() {
		const category = {
            id:id,
			title:titleEdit,
			image: imageEdit,
			priority:priorityEdit,
			urlSlug:urlSlugEdit,
		};
        onEditDataToApi(category)
        setShowModal(false)
    }

    const onGetName = (value) => {
        setTitleEdit(value)
    };

    const onGetImage = (value) => {
        setImageEdit(value)
    }

    const onGetpriority = (value) => {
        setPriorityEdit(value)
    }
    const onGeturlSlug = (value) => {
        setUrlSlugEdit(value)
    };

    function onShow (){
        setShowModal(true)
    }
    function onCancel(){
        setShowModal(false)
    }
 	
	let modalContent = (
        <div className={styles['edit-card']}>  
        <h2>Edite caregory</h2>
            <Input label="name: " placeholder="Enter category's name" onChangeFunction={onGetName} value={titleEdit} />
            <Input label="image: " placeholder="Enter category's image url" onChangeFunction={onGetImage} value={imageEdit} />
            <Input label="priority: " placeholder="Enter category's priority" onChangeFunction={onGetpriority} type='number' value={priorityEdit} />
            <Input label="urlSlug: " placeholder="Enter category's urlSlug" onChangeFunction={onGeturlSlug} value={urlSlugEdit} />
            <div>
                 <button className="add-botton-changes" type="button" onClick={onEditecategory}>add changes</button>
                <button className="add-botton-changes" type="button" onClick={onCancel}>cancel</button> 
            </div>

    </div>
	)
    return (
        // Коли картинка буде з api тодi замiнемо backgroundImage на props => image
        <div className={styles['common']} style={{ backgroundImage: `url(${ backgroundImage})` }} id={id}>
            <div><h3>{title || `The title will be here`}</h3></div>
            {/* Демо */}
            <div><a className={styles["demo-link"]} href="#">{string || `There will be a link here`}</a></div>
            {/* <img src={image} alt={`${image}`} /> */}
            <div>
            {buttonFlag?<button className='button' onClick={onDeleteDataToApi}>delete</button>:``}
            {buttonFlag?<button className='button' onClick={onShow}>Edit</button>:``}
           </div>
            
 
            {showModal ? createPortal(modalContent, portalElement) : null}
        </div>
    )
};

export default CategoriesCard;