import React from 'react'
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LearnPlaces = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="back-button">
            <IconButton aria-label="delete" onClick={() => navigate('/learntopics')}>
             <ArrowBackIcon />
            </IconButton>    
          </div>
          <div className="heading">Choose One Place To Learn About</div>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learnpenang')} type="submit" value="Penang" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learnperlis')} type="submit" value="Perlis" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learnsarawak')} type="submit" value="Sarawak" />
          </form>
        </div>
      );

};

export default LearnPlaces;