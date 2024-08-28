import React from 'react'
import '../../styles/login.css';
import { useNavigate } from 'react-router-dom';

const LearnPlaces = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="heading">Choose a state to learn about</div>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learn/penang')} type="submit" value="Penang" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learn/perlis')} type="submit" value="Perlis" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learn/sarawak')} type="submit" value="Sarawak" />
          </form>
        </div>
      );

};

export default LearnPlaces;