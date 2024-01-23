import Navigation from "../Navigation";
import Logo from "../Logo";
import "./header.css";

import PageWrapper from "../PageWrapper";
import { useSelector } from "react-redux";

const Header = () => {
	let redux = useSelector(state => state.categories.cat)

	return (
		<div className="header">
			<PageWrapper>
				<div className="head">
					<Logo />
					<div>Кількість категорій: {redux}</div>
					<Navigation />
				</div>
			</PageWrapper>
		</div>
	);
};

export default Header;
