import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Banner.scss";
import banner_img from "../../assets/banner.webp";
import { AuthContext } from "../../Context/AuthContext";

function Banner() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="main-banner">
      <img src={banner_img} alt="banner_img" className="banner_img" />
      <div className="banner-content">
        <h1 className="heading">Esports India</h1>
        <p className="sub-heading">Welcome to Esports India Game Hub!</p>
        <p className="content">
          Choose a game to play and compete for prizes! Log in or register to
          track your points and rankings
        </p>

        {!isLoggedIn ? (
          <div className="btns d-flex justify-content-center gap-3 mt-4">
            <Link to="/login" className="primary-button py-2 px-4">
              Login
            </Link>
            <Link
              to="/signup"
              className="primary-button py-2 px-4 bg-white btn-outline-secondary text-black"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="btns d-flex justify-content-center gap-3 mt-4">
            <Link
              to="/dashboard"
              className="primary-button py-2 px-4 bg-white btn-outline-secondary text-black"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;