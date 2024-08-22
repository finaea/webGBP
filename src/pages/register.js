import React from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="heading">Create an account</div>
      <form action="" className="form">
        <input
          required
          className="input"
          type="name"
          name="name"
          id="name"
          placeholder="Name"
        />
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <span className="forgot-password"> Already have an account?     
        <a href="/login">Login</a>
        </span>
        <input className="login-button" onClick={() => navigate('/verification')} type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Login;
