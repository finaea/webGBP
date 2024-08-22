import React from 'react';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="heading">Quiz App</div>
      <form action="" className="form">
        <input className="button" onClick={() => navigate('/login')} type="submit" value="Log In" />
      </form>
      <form action="" className="form">
        <input className="button" onClick={() => navigate('/register')} type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Home;
