import React from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="heading">Reset password</div>
      <p>Enter your email address and we will send you instructions to reset your password.</p>
      <form action="" className="form">
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <span className="forgot-password"> Don't have an account?    
        <a href="/register">Register</a>
        </span>
        <input className="login-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
