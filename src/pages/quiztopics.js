import React from 'react'
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import withAuth from '../utils/withAuth';

const QuizTopics = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="heading">Choose Your Quiz Topic</div>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/quizplace')} type="submit" value="Places" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/food1')} type="submit" value="Food" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/quizclothes')} type="submit" value="Clothes" />
          </form>
        </div>
      );

};

export default withAuth(QuizTopics);