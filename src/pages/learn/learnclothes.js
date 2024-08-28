import React from 'react';
import '../../styles/learnfood.css';

const LearnClothes = () => {

    return (
        <div className="container">
          <div className="heading">Learn About Malaysian Traditional Attires</div>
          
          <div className="subhead">Baju Kurung</div>
          <img
            src={require('../../resources/baju_kurung.jpg')}
            alt="Baju Kurung"
            className="learn-image"
          />
          <h2>Baju Kurung: Traditional Attire for Malay Women</h2>
          <p>The Baju Kurung is a traditional Malay outfit that symbolizes modesty and simplicity. It is widely worn by women in Malaysia, especially during formal occasions and cultural festivities.</p>

          <div className="subhead">Sari</div>
          <img
            src={require('../../resources/sari.jpg')}
            alt="Sari"
            className="learn-image"
          />
          <h2>Sari: Traditional Indian Attire</h2>
          <p>The Sari is a popular traditional Indian attire among the Malaysian Indian communities. It is known for its vibrant colors and intricate patterns, representing a significant aspect of Indian cultural heritage.</p>

          <div className="subhead">Sampin</div>
          <img
            src={require('../../resources/sampin.jpg')}
            alt="Sampin"
            className="learn-image"
          />
          <h2>Sampin: Worn by Malay Men During Formal Occasions</h2>
          <p>The Sampin is a traditional garment worn over the trousers in the traditional Malay attire, particularly during formal occasions. It signifies respect and adherence to cultural norms.</p>

          <div className="subhead">Cheongsam</div>
          <img
            src={require('../../resources/cheongsam.jpg')}
            alt="Cheongsam"
            className="learn-image"
          />
          <h2>Cheongsam: Commonly Made with Silk</h2>
          <p>The Cheongsam is a traditional Chinese dress that has been adopted in Malaysia, often made from silk. It is appreciated for its elegance and is commonly worn during Chinese New Year and other festive occasions.</p>

          <div className="subhead">Sampin of Baju Melayu</div>
          <img
            src={require('../../resources/baju_melayu.jpg')}
            alt="Baju Melayu Sampin"
            className="learn-image"
          />
          <h2>Sampin: Part of Baju Melayu</h2>
          <p>The Sampin, part of the Baju Melayu, is a folded and stitched cloth worn around the waist. It plays a crucial role in the traditional attire, adding a touch of formality and cultural identity to the outfit.</p>
        </div>
      );
};

export default LearnClothes;
