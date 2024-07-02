import { useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const pathIs = (path) => {
    return location.pathname === path;
  }
  const pathStartsWith = (text) => {
    return RegExp("^" + text, 'i').test(location.pathname);
  }

  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="fixed-top mb-5 shadow">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="SharpSkill logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-center justify-content-lg-end">
          <Nav className="align-items-center">
            <Nav.Link href="/" active={ pathIs('/') }>Home</Nav.Link>
            <Nav.Link href="/about" active={ pathStartsWith('/about') }>About</Nav.Link>
            <Nav.Link href="/accomodation" active={ pathStartsWith('/accomodation') }>Accomodation</Nav.Link>
            <Nav.Link href="/explore" active={ pathStartsWith('/explore') }>Explore</Nav.Link>
            <Nav.Link href="/services" active={ pathStartsWith('/services') }>Services</Nav.Link>
            <Nav.Link href="/reviews" active={ pathStartsWith('/reviews') }>Reviews</Nav.Link>
            <div className="my-3 my-lg-0">
              <a href="/signup" className="btn btn-primary rounded-4 mx-1">Sign Up</a>
              <a href="/signin" className="btn btn-outline-dark mx-1 rounded-4">Sign In</a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
