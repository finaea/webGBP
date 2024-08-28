import React from 'react';
import '../../styles/learnfood.css';

const LearnPerlis = () => {

    return (
        <div className="container">
          <div className="heading">Learn About Perlis</div>
          
          <div className="subhead">Perlis Flag</div>
          <img
            src={require('../../resources/flag_perlis.jpg')}
            alt="Perlis Flag"
            className="learn-image"
          />
          <p>Perlis, known for its serene landscapes and rich cultural heritage, proudly displays its flag, symbolizing the state's pride and historical significance in Malaysia.</p>

          <div className="subhead">Laksa Perlis</div>
          <img
            src={require('../../resources/laksa_perlis.jpg')}
            alt="Laksa Perlis"
            className="learn-image"
          />
          <h2>Laksa Perlis is a renowned traditional dish from Perlis known for its spicy and tangy flavor.</h2>
          <p>This dish is a local favorite, characterized by its unique blend of herbs and spices, offering a distinct taste that differs from other types of Laksa in Malaysia.</p>

          <div className="subhead">Perlis Agricultural Institute</div>
          <h2>The Perlis Agricultural Institute is a cornerstone of agricultural science research in Perlis.</h2>
          <p>Focused on sustainable farming practices, the institute plays a pivotal role in advancing agricultural techniques and education in the region, enhancing local farming communities' productivity and sustainability.</p>

          <div className="subhead">Gua Kelam</div>
          <h2>Gua Kelam is known for its archaeological significance in Perlis.</h2>
          <p>Often referred to as the "Cave of Darkness," Gua Kelam's extensive cave system offers insights into geological and historical aspects, making it a significant site for both scholars and tourists.</p>

          <div className="subhead">Andaman Sea</div>
          <h2>The Andaman Sea borders Perlis to the west, providing the state with scenic coastal views and maritime advantages.</h2>
          <p>This body of water is crucial for Perlis's fishing industry and is a popular site for various water sports and tourist activities, contributing significantly to the local economy.</p>
        </div>
      );
};

export default LearnPerlis;
