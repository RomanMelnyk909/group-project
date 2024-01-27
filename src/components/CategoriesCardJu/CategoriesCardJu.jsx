import styles from './CategoriesCardJu.module.css';
import backgroundImage from '../../images/sub-banner-1.jpg';

const CategoriesCardJu = (props) => {
    const { title, image, string } = props;
    const imageUrl = image ? `url(${backgroundImage})` : image;

    return (
        <div className={styles['common']} style={{ backgroundImage: imageUrl }}>
            <h3>{title || `The title will be here`}</h3>
            <a className={styles["demo-link"]} href="#">{string || "There will be a link here"}</a>
        </div>
    );
};

export default CategoriesCardJu;