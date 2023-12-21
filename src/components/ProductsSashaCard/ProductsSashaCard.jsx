import './sashacard.css';

import Button from '../Button';

const ProductsSashaCard = (props) => {
    const { image, name, description, price, id } = props;

    return (
        <div className='dessert-card'>
			<img src={image} alt={name}/>
			<h3>{name}</h3>
			<p>{description}</p>
			<p className='price'>Ціна: ${price.toFixed(2)}</p>
			{/* <button className={styles['order-button']} onClick={ () =>{}}>
				Order
			</button> */}
            <Button type='button' title='order' />
            {/* <button onClick={deleteProduct}>delete</button> */}
	    </div>
    )
}

export default ProductsSashaCard;
