import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  return (
<Navbar expand="lg" className="bg-black navbar-dark">
  <Container className="bg-black">
    <Navbar.Brand as={Link} to="/">
      Esports India
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto gap-3">

        <Nav.Link className="primary-button" as={Link} to="/">HUB</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>

        <NavDropdown title="Fantasy" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/action1">Counter Strike 2</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/action2">Valorant</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/action3">League of Legends</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/action4">Dota 2</NavDropdown.Item>
        </NavDropdown>

      </Nav>
      <Nav.Link className="primary-button h-login-button d-flex gap-1" as={Link} to="/login">Login <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountCircleOutlinedIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5m10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"></path><path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"></path></svg></Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default Header;
