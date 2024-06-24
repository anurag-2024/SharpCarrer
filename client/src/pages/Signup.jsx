// SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Signup.css'; // You'll need to create this CSS file

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign up logic here
    console.log('Sign up with:', email, password);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <button className="close-button">×</button>
        <h1 className="logo">The SharpSkill</h1>
        <h2>Sign up for Best Deals</h2>
        <button className="google-button">Continue with Google</button>
        <div className="divider">Or Sign up with Email</div>
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
            placeholder="Set your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Continue</button>
        </form>
        <p>Have an account? <Link to="/signin">Sign In</Link></p>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default Signup;