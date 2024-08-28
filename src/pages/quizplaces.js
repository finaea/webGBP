import React from 'react'
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const QuizPlaces = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="heading">Choose a state</div>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/quiz/places/penang')} type="submit" value="Penang" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/quiz/places/perlis')} type="submit" value="Perlis" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/quiz/places/sarawak')} type="submit" value="Sarawak" />
          </form>
        </div>
      );

};

export default QuizPlaces;