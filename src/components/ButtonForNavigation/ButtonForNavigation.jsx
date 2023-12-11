import styles from './buttonfornavigation.module.css';

import { useNavigate } from "react-router-dom";

const ButtonForNavigation = ({ link, title }) => {
	const navigator = useNavigate();

	return (
		<button
			type='button'
			onClick={() => { navigator(link) }}
		>
			{ title }
		</button>
	)
}

export default ButtonForNavigation;