import React from 'react';
import '../../styles/learnfood.css'; 

const LearnSarawak = () => {

    return (
        <div className="container">
          <div className="heading">Learn About Sarawak</div>
          
          <div className="subhead">Kuching</div>
          <img
            src={require('../../resources/kuching.jpg')}
            alt="Kuching"
            className="learn-image"
          />
          <h2>Kuching: The Capital City of Sarawak</h2>
          <p>Kuching, known for its riverside setting and vibrant markets, is the capital city of Sarawak. It is often associated with cats, and numerous cat statues can be found throughout the city, reflecting its unique cultural identity.</p>

          <div className="subhead">Sarawak Regatta</div>
          <img
            src={require('../../resources/regatta.jpg')}
            alt="Sarawak Regatta"
            className="learn-image"
          />
          <h2>Sarawak Regatta: Festival of Boat Races</h2>
          <p>The Sarawak Regatta is a popular festival celebrated with boat races on the Sarawak River. This vibrant event showcases the boating prowess and cultural heritage of the local communities.</p>

          <div className="subhead">Mulu National Park</div>
          <img
            src={require('../../resources/mulu.jpg')}
            alt="Mulu National Park"
            className="learn-image"
          />
          <h2>Mulu National Park: A Geologic Marvel</h2>
          <p>Mulu National Park is renowned for its limestone landscape, which includes vast cave networks and karst formations. This UNESCO World Heritage Site is a must-visit for nature enthusiasts and adventurers alike.</p>

          <div className="subhead">Rafflesia: The World's Largest Flower</div>
          <img
            src={require('../../resources/rafflesia.jpg')}
            alt="Rafflesia"
            className="learn-image"
          />
          <h2>Rafflesia: The World's Largest Flower</h2>
          <p>The Rafflesia, the world's largest flower, can be found in the rainforests of Sarawak. This rare and spectacular flower is known for its size and the unusual odor it emits.</p>

          <div className="subhead">Fort Margherita</div>
          <img
            src={require('../../resources/margherita.jpg')}
            alt="Fort Margherita"
            className="learn-image"
          />
          <h2>Fort Margherita: Historical Fort in Kuching</h2>
          <p>Fort Margherita was built as a defensive stronghold against pirates. Today, it stands as a historical monument, offering insights into the colonial history of Sarawak and serving as a tourist attraction with its museum showcasing artifacts from the era.</p>
        </div>
      );
};

export default LearnSarawak;