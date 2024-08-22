import React from 'react'
import './login.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Choice = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="back-button">
            <IconButton onClick={() => navigate('/home')}>
              <ArrowBackIcon />
            </IconButton>    
          </div>
          <div className="heading">Choose One Below</div>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learntopics')} type="submit" value="Learn" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/quiztopics')} type="submit" value="Quiz" />
          </form>
        </div>
      );

};

export default Choice;