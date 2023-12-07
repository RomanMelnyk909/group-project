import Navigation from "../Navigation";
import Logo from "../Logo";
import "./header.css";
const Header = () => {
	return (
		<div className="header">
			<Logo />
			<Navigation />
		</div>
	)
};

export default Header;