import React from 'react'
import '../styles/learntopics.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LearnTopics = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="back-button">
            <IconButton aria-label="delete" onClick={() => navigate('/choice')}>
             <ArrowBackIcon />
            </IconButton>    
          </div>
          <div className="heading">Choose Topic To Learn About</div>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learnplaces')} type="submit" value="Places" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learnfood')} type="submit" value="Food" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learnclothes')} type="submit" value="Clothes" />
          </form>
        </div>
      );

};

export default LearnTopics;