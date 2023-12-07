import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">2023</Link>
      <Link to="/group">Group F-31</Link>
      <Link to="/svg">Images</Link>
    </div>
  );
};
export default Footer;
