import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext"; 
import logo from "../../assets/logo.webp";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();     
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-black navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="70" width="176" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav.Link as={Link} to="/">HUB</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            <NavDropdown title="Fantasy" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action1">
                Counter Strike 2
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action2">
                Valorant
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action3">
                League of Legends
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action4">
                Dota 2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {!isLoggedIn ? (
            <Nav.Link as={Link} to="/login" className="primary-button py-2 px-4">
              Login
            </Nav.Link>
          ) : (
            <>
              <Nav.Link as={Link} to="/dashboard" className="primary-button py-2 px-4">
                Dashboard
              </Nav.Link>
              <Nav.Link
                onClick={handleLogout}
                className="primary-button py-2 px-4 bg-white btn-outline-secondary text-black"
              >
                Logout
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;