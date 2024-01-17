import { Component } from "react";

import { PRODUCTS_LIST_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';

class ClassCompProdLera extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
	}
	componentDidMount() {
		fetch(createRequestPath(PRODUCTS_LIST_ENDPOINT))
		.then(response => response.json())
		.then(resp => {
			this.setState((prevState) => ({
				...prevState,
				products: resp
			}))
		})
	}

	render(){
		return(
			<div>
				{ this.state?.products?.map(product => (
					<div key={product.id}>{product?.name}</div>
				))}
			</div>
		)
	}
}

export default ClassCompProdLera;