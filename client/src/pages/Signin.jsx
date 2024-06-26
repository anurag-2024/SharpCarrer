import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Signin.css'; // You'll need to create this CSS file

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign in logic here
    console.log('Sign in with:', email, password);
  };

  const handleClose = () => {
     navigate('/');
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <button className="close-button" onClick={handleClose}>×</button>
        <h1 className="logo">The SharpSkill</h1>
        <h2>Sign in for Best Deals</h2>
        <button className="google-button">Continue with Google</button>
        <div className="divider">Or Sign in with Email</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Continue</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default Signin;
