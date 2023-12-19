import styles from './categoriesCardV.module.css'

import { CARTEGORIES_DELETE_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';

// Демо
// import backgroundImage from '../../images/sub-banner-1.jpg'
import backgroundImage from '../../images/sub-banner-2.jpg'



const CategoriesCardValentine = (props) => {
    // Олександр
    // const { title, image, string, id} = props;
    const { title, image,string, priority, urlSlug, id, onSetDeletedId }= props;
    // const imageUrl = image ? image : `url(${backgroundImage})`;
    const imageUrl = image ? `url(${backgroundImage})` : image;

    const onDeleteDataToApi = () => {
        const apiEndpoint = createRequestPath(CARTEGORIES_DELETE_ENDPOINT, id);
        fetch(apiEndpoint, { method: 'DELETE' ,
        headers: { "Content-Type": "application/json" },})
        // .then(resp => resp.json())
            .then(resp => {
                console.log("RESP=>",resp);
                if (resp.status) {
                    onSetDeletedId(id)
                }
                return resp;
            })
            .catch(err => console.log('error => ', err))
    }

    return (

        // Коли картинка буде з api тодi замiнемо backgroundImage на props => image
        // Олександр
        // <div className={styles['common']} style={{ backgroundImage: `url(${image || backgroundImage})` }}id={id}>

        // <div className={styles['common']} style={{ backgroundImage: `url(${backgroundImage})` }}>

        <div className={styles['common']} style={{ backgroundImage: imageUrl }}>
            <h3>{title || `The title will be here`}</h3>
            {/* <h3>{title}The title will be here</h3> */}

            {/* Демо */}

            {/* Олександр */}
            {/* <a className={styles["demo-link"]} href="#">{string || `There will be a link here`}</a> */}

            <a className={styles["demo-link"]} href="#">{string || "There will be a link here"}</a>
            {/* <img src={image} alt={`${image}`} /> */}
            <button className='button' onClick={onDeleteDataToApi}>delete</button>
        </div>
    )
};

export default CategoriesCardValentine;