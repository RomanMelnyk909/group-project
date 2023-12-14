import styles from './categoriesCardV.module.css'

// Демо
// import backgroundImage from '../../images/sub-banner-1.jpg'
import backgroundImage from '../../images/sub-banner-2.jpg'



const CategoriesCardValentine = (props) => {
    // Олександр
    // const { title, image, string, id} = props;
    const { title, image, priority, id }= props;
    // const imageUrl = image ? image : `url(${backgroundImage})`;
    const imageUrl = image ? `url(${backgroundImage})` : image;

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

            <a className={styles["demo-link"]} href="#">There will be a link here</a>
            {/* <img src={image} alt={`${image}`} /> */}
        </div>
    )
};

export default CategoriesCardValentine;