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
      <IconButton onClick={() => navigate('/register')}>
        <ArrowBackIcon />
      </IconButton>           
      </div>
      <div className="heading">Verification Code</div>
      <p>Enter the verification code sent to your e-mail.</p>
      <form action="" className="form">
        <input
          required
          className="input"
          type="verification"
          name="verification"
          id="verification"
          placeholder="Enter verification code"
        />
        <input className="login-button" type="submit" value="Submit" onClick={() => navigate('/menu')}/>
      </form>
    </div>
  );
};

export default Login;
