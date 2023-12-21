import styles from './categoriesCard.module.css'

// Демо
import backgroundImage from '../../images/sub-banner-1.jpg'


const CategoriesCard = (props) => {
    const { title, image, string, id} = props;

    return (
        // Коли картинка буде з api тодi замiнемо backgroundImage на props => image
        <div className={styles['common']} style={{ backgroundImage: `url(${image || backgroundImage})` }}id={id}>
            <h3>{title || `The title will be here`}</h3>

            {/* Демо */}
            <a className={styles["demo-link"]} href="#">{string || `There will be a link here`}</a>
            {/* <img src={image} alt={`${image}`} /> */}
        </div>
    )
};

export default CategoriesCard;