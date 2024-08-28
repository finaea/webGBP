import React from 'react'
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Choice = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
          <div className="heading">Choose One Below</div>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/learn')} type="submit" value="Learn" />
          </form>
          <form action="" className="form">
            <input className="button" onClick={() => navigate('/quiz')} type="submit" value="Quiz" />
          </form>
        </div>
      );

};

export default Choice;