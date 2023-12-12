import styles from './categoriesCard.module.css'

// Демо
// import backgroundImage from '../../images/sub-banner-1.jpg'
import backgroundImage from '../../images/sub-banner-2.jpg'


const CategoriesCard = (props) => {
    const { title, image, priority, id }= props;
    // const imageUrl = image ? image : `url(${backgroundImage})`;
    const imageUrl = image ? `url(${backgroundImage})` : image;

    return (

        // Коли картинка буде з api тодi замiнемо backgroundImage на props => image
        <div className={styles['common']} style={{ backgroundImage: imageUrl }}>
            {/* <h3>{title}The title will be here</h3> */}
            <h3>{title}</h3>

            {/* Демо */}
            <a className={styles["demo-link"]} href="#">There will be a link here</a>
            {/* <img src={image} alt={`${image}`} /> */}
        </div>
    )
};

export default CategoriesCard;