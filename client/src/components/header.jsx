import React from 'react';
import './styles/header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <header className="header_u">
        <a href="#" className="logo_u">
          <img src={logo} alt="SharpSkill Logo" />
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#accommodations">Accommodations</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
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
