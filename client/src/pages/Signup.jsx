import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Signup.css'; // Ensure this CSS file exists
import img2 from '../assets/images/signin.jpg'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Sign up with:', email, password);
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <button className="close-button" onClick={handleClose}>×</button>
        <h1 className="logo">The SharpSkill</h1>
        <h2>Sign up for Best Deals</h2>
        <button className="google-button">Continue with Google</button>
        <div className="divider">Or Sign up with Email</div>
        <form className='authform' onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Set your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Continue</button>
        </form>
        <p>Have an account? <Link to="/signin">Sign In</Link></p>
      </div>
      <div className="background-image-Signin">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Signup;
