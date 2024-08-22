import React from 'react'
import '../styles/learntopics.css';
import { useNavigate } from 'react-router-dom';

const LearnTopics = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
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