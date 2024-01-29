import Navigation from "../Navigation";
import Logo from "../Logo";
import "./header.css";

import PageWrapper from "../PageWrapper";
import { useDispatch } from "react-redux";
import {
  DECERMENT,
  INCERMENT,
  PLUS_NUMBER,
  DOUBLE_BLOG_COUNT,
  RESET,
} from "../../constants/actions";
import { useState } from "react";

const Header = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  const onPlusHandler = () => {
    dispatch({ type: INCERMENT });
  };

  const onMinusHandler = () => {
    dispatch({ type: DECERMENT });
  };

  console.log(number);

  const onPlusNumberHandler = () => {
    dispatch({ type: PLUS_NUMBER, payload: number });
  };

  const onDoubleBlogCount = () => {
    dispatch({ type: DOUBLE_BLOG_COUNT });
  };

  const onResetHandler = () => {
    dispatch({ type: RESET });
  };
  return (
    <div className="header">
      <PageWrapper>
        <div className="head">
          <button onClick={onDoubleBlogCount}>*</button>
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
