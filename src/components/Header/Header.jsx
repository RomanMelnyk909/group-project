import Navigation from "../Navigation";
import Logo from "../Logo";
import "./header.css";

import PageWrapper from "../PageWrapper";
import { useDispatch } from "react-redux";
import { DECERMENT, DOUBLE_CARD_COUNT, INCERMENT, PLUS_NUMBER, RESET } from "../../constants/actions";
import { useState } from "react";
const Header = () => {

	const [number, setNumber] = useState(0)

	const dispatch = useDispatch();

	// const onPlusHandler = () => {
	// 	dispatch({ type: INCERMENT })
	// }
	// const onMinusHandler = () => {
	// 	dispatch({ type: DECERMENT })
	// }
	// const onResetHandler = () => {
	// 	dispatch({ type: RESET })
	// }
	// const onPlusNumberHandler = () => {
	// 	dispatch({ type:PLUS_NUMBER, payload:number })
	// }
const handleDoubleCardCount = () => {
    dispatch({ type: DOUBLE_CARD_COUNT });
  };

	return (
		<div className="header">
			<PageWrapper>
				<div className="head">
					<button onClick={handleDoubleCardCount}>*</button>
      				{/* <button onClick={onMinusHandler}>-</button> */}
					{/* <input type="text" onChange={(e) => setNumber(+e.target.value)} /> */}
      				{/* <button onClick={onPlusNumberHandler}>plus number</button> */}
      				{/* <button onClick={onResetHandler }>reset</button> */}
					<Logo />
					<Navigation />
				</div>
			</PageWrapper>
		</div>
	);
};

export default Header;
