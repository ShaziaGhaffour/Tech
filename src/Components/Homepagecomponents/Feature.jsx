import React from 'react';
import '../../CSS/Feature.css';
import icon1 from '../../assets/Group 61428.svg';
import icon2 from '../../assets/Group 61428.svg';
import icon3 from '../../assets/Group 61428.svg';
import icon4 from '../../assets/Group 61428.svg';

const FeatureIcons = () => {
  return (
    <div className="feature-container">
      <div className="feature-box">
        <img src={icon1} alt="Tech" />
        <h6>Latest and Greatest Tech</h6>
      </div>
      <div className="feature-box">
        <img src={icon2} alt="Guarantee" />
        <h6>Guarantee</h6>
      </div>
      <div className="feature-box">
        <img src={icon3} alt="Shipping" />
        <h6>Free Shipping over 1000$</h6>
      </div>
      <div className="feature-box">
        <img src={icon4} alt="Support" />
        <h6>24/7 Support</h6>
      </div>
    </div>
  );
};

export default FeatureIcons;
