import styles from './productcard.module.css';

import Button from '../Button';

const ProductCard = (props) => {
    const { image, name, description, price, id } = props;

    return (
        <div className={styles['dessert-card']}>
			<img src={image} alt={name} className={styles.dessertImage} />
			<h3>{name}</h3>
			<p>{description}</p>
			<p className={styles['price']}>Ціна: ${price.toFixed(2)}</p>
			{/* <button className={styles['order-button']} onClick={ () =>{}}>
				Order
			</button> */}
            <Button
                type='button'
                title='order' />
	    </div>
    )
}

export default ProductCard;