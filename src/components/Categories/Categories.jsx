import styles from './categories.module.css';
import CategoriesCard from '../CategoriesCard';

const Categories = () => {
    return (
        <div className={styles['common']}>
            <CategoriesCard />
        </div>
    )
};

export default Categories;