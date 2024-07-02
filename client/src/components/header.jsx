import React, { useContext } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';
import logo from '../assets/logo.png';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const location = useLocation();
  const { user } = useContext(UserContext);

  const pathIs = (path) => location.pathname === path;

  const pathStartsWith = (text) => RegExp("^" + text, 'i').test(location.pathname);
   const handlelogout=()=>{
    localStorage.removeItem('token');
    window.location.reload();
   }
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="fixed-top mb-5 shadow">
      <Container>
        <Navbar.Brand>
          <NavLink to='/'>
            <img src={logo} alt="SharpSkill logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-center justify-content-lg-end">
          <Nav className="align-items-center">
            <Nav.Link as={NavLink} to="/" isActive={pathIs('/')}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" isActive={pathStartsWith('/about')}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/accomodation" isActive={pathStartsWith('/accomodation')}>Accomodation</Nav.Link>
            <Nav.Link as={NavLink} to="/explore" isActive={pathStartsWith('/explore')}>Explore</Nav.Link>
            <Nav.Link as={NavLink} to="/services" isActive={pathStartsWith('/services')}>Services</Nav.Link>
            <Nav.Link as={NavLink} to="/reviews" isActive={pathStartsWith('/reviews')}>Reviews</Nav.Link>
            <div className="my-3 my-lg-0">
              {user ? (
                <Dropdown align="end" className="d-inline">
                  <Dropdown.Toggle variant="light" className="d-flex align-items-center border-0">
                    <span className="mx-1 fs-4">Hi, {user.userName}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handlelogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <NavLink to="/signup" className="btn btn-primary mx-1">Sign Up</NavLink>
                  <NavLink to="/signin" className="btn btn-outline-dark mx-1">Sign In</NavLink>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
