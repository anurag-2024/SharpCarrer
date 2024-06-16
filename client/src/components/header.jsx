import React from 'react'
import './styles/header.css'
import logo from '../assets/logo.png';
const header = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={logo} alt="SharpSkill Logo" />
        </a>
        <nav>
          <a>Home</a>
          <a>About Us</a>
          <a>Accommodations</a>
          <a>Services</a>
          <a>Contact Us</a>
        </nav>
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>
    </>
  )
}

export default header
