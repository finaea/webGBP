import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="back-button">
      <IconButton aria-label="delete" onClick={() => navigate('/home')}>
        <ArrowBackIcon />
      </IconButton>           
      </div>
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
        <a href="/forgotPassword">Forgot Password?</a>
        </span>
        <input className="login-button" type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;
