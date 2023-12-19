import styles from './productcard.module.css';

import Button from '../Button';

import { useState } from 'react';

import { PRODUCTS_DELETE_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';

const ProductCard = (props) => {
    const { image, name, description, price, id, onSetDelitedId } = props;

	const onDeleteDataToApi = () => {
		const apiEndpoint = createRequestPath(PRODUCTS_DELETE_ENDPOINT, id);
		fetch(apiEndpoint, { method: 'DELETE' })
		.then(resp => {
			console.log(resp);
			if(resp.status) {
				onSetDelitedId(id);
			}
			return resp;
		})
		.catch(err => console.log('error => ', err))
	}

    return (
        <div className={styles['dessert-card']}>
			<img src={image} alt={name} className={styles.dessertImage} />
			<h3>{name}</h3>
			<p>{description}</p>
			<p className={styles['price']}>Ціна: ${price.toFixed(2)}</p>
            <Button
                type='button'
                title='order' />
	    </div>
    )
}

export default ProductCard;