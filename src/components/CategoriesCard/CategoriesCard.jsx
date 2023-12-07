import styles from './categoriesCard.module.css'


const CategoriesCard = (props) => {
    const { title, image }= props;

    return (
        <div className={styles['common']} style={{backgroundImage: '../../images/crunchy-whole-grain-chocolate-chip-cookies_1021.jpg'}}>
            <h3>{title}</h3>
            <img src={image} alt={`${image}`} />
        </div>
    )
};

export default CategoriesCard;