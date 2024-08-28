import React from 'react';
import '../../styles/learnfood.css';

const LearnPenang = () => {

    return (
        <div className="container">
          <div className="heading">Learn About Penang</div>
          <div className="subhead">Pearl of the Orient</div>
          <body className="info">
          <img
            src={require('../../resources/penang.jpg')}
            alt="Penang"
            className="learn-image"
          />
          <h2>Penang is known as the "Pearl of the Orient," it is famous for its soft sandy beaches and is fondly regarded as the food capital of Malaysia.</h2>
          <p>Penang carries a natural charm with its stunning architecture and the vibrant multicultural society that reflects a blend of the many cultures that have formed its history. Its capital, George Town, is home to some of the most remarkable historical buildings in Southeast Asia, standing side by side with modern skyscrapers.</p>

          <div className="subhead">Fort Cornwallis</div>
          <img
            src={require('../../resources/fort_cornwallis.jpg')}
            alt="Fort Cornwallis"
            className="learn-image"
          />
          <h2>Fort Cornwallis stands as a marker of the British colonial era's beginning in Penang.</h2>
          <p>Constructed in the late 18th century by Captain Francis Light, Fort Cornwallis is one of the most important structures within the UNESCO World Heritage Site of George Town. It is known for being the largest standing fort in Malaysia and offers visitors a glimpse into Penang's colonial past.</p>

          <div className="subhead">Bukit Bendera (Penang Hill)</div>
          <img
            src={require('../../resources/penang_hill.jpg')}
            alt="Penang Hill"
            className="learn-image"
          />
          <h2>Locally known as Bukit Bendera, Penang Hill was the first colonial hill station developed in Peninsular Malaysia.</h2>
          <p>Comprising several hills and a town, Penang Hill offers a panoramic view of George Town and is a breezy escape from the heat of the city. It is accessible by a funicular railway which climbs the hill from Air Itam.</p>

          <div className="subhead">Penang Bridge</div>
          <img
            src={require('../../resources/penang_bridge.jpg')}
            alt="Penang Bridge"
            className="learn-image"
          />
          <h2>The Penang Bridge is known for being one of the longest bridges in Southeast Asia.</h2>
          <p>Connecting the island of Penang to the Malay Peninsula, the bridge stretches 13.5 kilometers and acts as a critical transportation link. It was completed in 1985, drastically improving access and boosting the local economy by facilitating trade and tourism.</p>

          <div className="subhead">Kek Lok Si Temple</div>
          <img
            src={require('../../resources/kek_lok_si.jpg')}
            alt="Kek Lok Si Temple"
            className="learn-image"
          />
          <h2>Kek Lok Si Temple, known as the Temple of Supreme Bliss, is considered one of the largest and most important Buddhist temples in Southeast Asia.</h2>
          <p>This temple is famous for the Pagoda of Ten Thousand Buddhas, combining Chinese, Thai, and Burmese decorative elements. The temple, situated in Air Itam, attracts thousands of visitors annually, especially during the Chinese New Year.</p>
          </body>
        </div>
      );
};

export default LearnPenang;