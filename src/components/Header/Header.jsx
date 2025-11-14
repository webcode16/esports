import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
const Header = () => {
  return (
   <header className="header">
      <div className="logo">
        <Link to="/">
          {/* <img src={logo} alt="MyApp Logo" className="logo-img" /> */}
        </Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
