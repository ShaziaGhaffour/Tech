import React from 'react';
import '../CSS/TopBrands.css';

// ✅ Import all images from /src/assets
import Frame from '../assets/Frame.svg';
import Sonnay from '../assets/Sonnay.svg';
import Samsung from '../assets/samsung.svg';
import Cannon from '../assets/Cannon.svg';
import Huawei from '../assets/huawei-svgrepo-com 1.svg';
import ClipPathGroup from '../assets/Clip path group.svg';

const TopBrands = () => {
  return (
    <div className='TopBrdands'>
      <div className="topbrands-header">
        <h4 className="topbrands-title">Top Brands</h4>
      </div>

      <div className="topbrands-logos">
        <img src={Frame} alt="Brand 1" className="brand-logo" />
        <img src={Sonnay} alt="Brand 2" className="brand-logo" />
        <img src={Samsung} alt="Brand 3" className="brand-logo" />
        <img src={Cannon} alt="Brand 4" className="brand-logo" />
        <img src={Huawei} alt="Brand 5" className="brand-logo" />
        <img src={ClipPathGroup} alt="Brand 6" className="brand-logo" />
      </div>
    </div>
  );
};

export default TopBrands;

