import React from 'react'
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import withAuth from '../utils/withAuth'

const Choice = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
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

export default withAuth(Choice);