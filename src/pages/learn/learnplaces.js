import React from 'react'
import '../../styles/login.css';
import { useNavigate } from 'react-router-dom';

const LearnPlaces = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="heading">Choose a state to learn about</div>
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