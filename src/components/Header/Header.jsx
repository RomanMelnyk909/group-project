import Navigation from "../Navigation";
import Logo from "../Logo";
import "./header.css";

import PageWrapper from "../PageWrapper";

import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, PLUS_NUMBER, RESET } from "../../constants/actions";
import { useState } from "react";

const Header = () => {
	const {products} = useSelector(state => state.products);
	const [number, setNumber] = useState(0);
	const dispatch = useDispatch();
	const onPlusHandler = () => {
		const action = { type: INCREMENT };
		dispatch(action);
	}
	const onMinusHandler = () => {
		dispatch({ type: DECREMENT });
	}
	const onResetHandler = () => {
		dispatch({ type: RESET });

	}
	const onPlusNumberHandler = () => {
		dispatch({ type: PLUS_NUMBER, payload: number })
	}
	console.log(products);
	return (
		<div className="header">
			<h1>Products count: {products}</h1>
			<button onClick={onPlusHandler}>+</button>
			<button onClick={onMinusHandler}>-</button>
			<button onClick={onResetHandler}>reset</button>
			<input type="number" onChange={(e) => setNumber(+e.target.value)}/>
			<button onClick={onPlusNumberHandler}>Plus Number</button>
			<PageWrapper>
				<div className="head">
				<Logo />
				<Navigation />
				</div>
			</PageWrapper>
		</div>
	);
};

export default Header;
