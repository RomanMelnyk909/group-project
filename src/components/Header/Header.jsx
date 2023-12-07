import Navigation from "../Navigation";
import Logo from "../Logo";
import "./header.css";

import PageWrapper from "../PageWrapper";
const Header = () => {
	return (
		<div className="header">
			<PageWrapper>
				<Logo />
				<Navigation />
			</PageWrapper>
		</div>
	)
};

export default Header;