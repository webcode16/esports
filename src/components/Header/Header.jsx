import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";
const Header = () => {
  return (
   <header className="header">
    <div className="page-width d-flex align-center justify-space-between header-inside">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="MyApp Logo" className="logo-img" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div> 
    </header>
  );
};

export default Header;
