import React from 'react';
import '../../CSS/SmartWatch.css';
import FrameImage from '../../assets/Frame 26086945.svg';
import EllipseImage from '../../assets/Ellipse 525.svg';

const SmartWatch = () => {
  return (
    <div className="smartwatch-container">
  <div className="smart-card-ellipse">
    <img src={EllipseImage} alt="Ellipse" className="elii" />
  </div>
  <div className="smart-card">
    <img src={FrameImage} alt="Smart Watch Frame" className="frame" />
    <h6 className="smart">SMART WATCH</h6>
    <p className="smarts">Various designs and brands</p>
    <button className="btn-view">View</button>
  </div>
</div>

  );
};

export default SmartWatch;
