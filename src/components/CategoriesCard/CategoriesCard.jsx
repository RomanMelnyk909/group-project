import styles from './categoriesCard.module.css'
import { CARTEGORIES_DELETE_ENDPOINT } from "../../constants/endpoints"
import { createRequestPath } from "../../helpers/helpers";
// Демо
import backgroundImage from '../../images/sub-banner-1.jpg'
import { useState } from 'react';


const CategoriesCard = (props) => {
    const { title, image, string, id, onSetDeletedId, buttonFlag } = props;
    const [refetchId, setRefetchId] = useState(null);
    
    const onDeleteDataToApi = () => {
  
        const apiEndpoint = createRequestPath(CARTEGORIES_DELETE_ENDPOINT, id);
        console.log(apiEndpoint);
        fetch(apiEndpoint, { method: 'DELETE' })
            .then(resp => {
                console.log(resp);
                if (resp.status) {
                    onSetDeletedId(id)
                }
                return resp;
            })
            // .then(resp => resp.json())
            //   .then(() => navigator(ADD_CATEGORIES_FORM_PATH))
            .catch(err => console.log('error => ', err))
    }



    return (
        // Коли картинка буде з api тодi замiнемо backgroundImage на props => image
        <div className={styles['common']} style={{ backgroundImage: `url(${ backgroundImage})` }} id={id}>
            <div><h3>{title || `The title will be here`}</h3></div>
            {/* Демо */}
            <div><a className={styles["demo-link"]} href="#">{string || `There will be a link here`}</a></div>
            {/* <img src={image} alt={`${image}`} /> */}
            {buttonFlag?<button className='button' onClick={onDeleteDataToApi}>delete</button>:``}
        </div>
    )
};

export default CategoriesCard;