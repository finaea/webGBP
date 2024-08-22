import React from 'react'
import '../styles/learnfood.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LearnFood = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="back-button">
            <IconButton aria-label="delete" onClick={() => navigate('/learntopics')}>
             <ArrowBackIcon />
            </IconButton>    
          </div>
          <div className="heading">Food Found Around Malaysia</div>
          <div className= "subhead">Johor</div>
          <body className="info">
          <img
            src = {require('../resources/laksa.jpg')}
            alt = "Laksa Johor"
            className = "food-image"
          />
          <h2> Laksa Johor is the southern state’s own version of laksa, or noodle soup dish in Malay. 
          The unique feature about this dish is that it uses spaghetti instead of rice noodles. 
          The broth is made using coconut milk, curry powder, a variety of spices and is fish-based. 
          It is accompanied by condiments such as cucumber, bean sprouts, boiled egg, kesum leaves 
          and sambal belacan, with a squeeze of calamansi lime. True Johoreans will eat this dish with their hands. 
          Laksa Johor can be found in Johorean restaurants and food courts. </h2>
          </body>
        </div>
      );

};

export default LearnFood;