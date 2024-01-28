import Navigation from "../Navigation";
import Logo from "../Logo";
import "./header.css";

import PageWrapper from "../PageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { DECERMENT, INCERMENT, RESET, PLUS_NUMBER } from "../../constants/actions";
import { useState } from "react";
const Header = () => {

	const [number, setNumber] = useState(0)

	const dispatch = useDispatch();
	const onPlusHandler = () => {
		const action = { type: INCERMENT}
		dispatch(action)
		// dispatch({type: INCERMENT}) ////короткий запис
	}
	const onMinusHandler = () => {
		dispatch({type: DECERMENT})
	}

	const onResetHandler = () => {
		dispatch({type: RESET})
	}

	const onPlusNumberHandler = () => {
		dispatch({type: PLUS_NUMBER, payload: number})
	}

	return (
		<div className="header">
			<PageWrapper>
				<div className="head">
				<button onClick={onPlusHandler}>+</button>
                <button onClick={onMinusHandler}>-</button>
				<input type="number" onChange={(e) => setNumber(+e.target.value)} />
				<button onClick={onPlusNumberHandler}>Plus number</button>
                <button onClick={onResetHandler}>reset</button>
				<Logo />
				<Navigation />
				</div>
			</PageWrapper>
		</div>
	);
};

export default Header;
