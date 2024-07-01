import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Signin.scss';
import img2 from '../assets/images/signin.jpg'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign in logic here
    console.log('Sign in with:', email, password);
  };
  return (
    <div className="signin-container">
      <div className="signin-form">
        <div className='signin-form-left'>
          <h1 className="logo">The SharpSkill</h1>
          <h2>Sign in for Best Deals</h2>
          <button className="google-button">Continue with Google</button>
          <div className="divider">Or Sign in with Email</div>
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
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="submit-button">Continue</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
      <div className="background-image-Signin">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Signin;
