import React from 'react';
import './styles/header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className="header_u">
        <Link to="/" className="logo_u">
          <img src={logo} alt="SharpSkill Logo" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/accomodation">Accommodations</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
        </nav>
        <div className="auth-buttons_u">
          <button className="sign-in_u">Sign In</button>
          <button className="sign-up_u">Sign Up</button>
        </div>
      </header>
    </>
  );
}

export default Header;
