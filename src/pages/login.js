import React from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="heading">Welcome back!</div>
      <form action="" className="form">
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
        <span className="forgot-password">
        <a href="/src/pages/forgotpassword">Forgot Password?</a>
        </span>
        <input className="login-button" type="submit" value="Log In" onClick={() => navigate('/menu')}/>
      </form>
    </div>
  );
};

export default Login;
