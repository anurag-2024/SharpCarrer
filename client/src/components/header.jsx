import React from 'react';
import './styles/header.scss';
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
          <Link to="/explore">Explore</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
        </nav>
        <div className="auth-buttons_u">
          <Link to="/signin"><button className="sign-in_u">Sign In</button></Link>
          <Link to="/signup"><button className="sign-up_u">Sign Up</button></Link>
        </div>
      </header>
    </>
  );
}

export default Header;
