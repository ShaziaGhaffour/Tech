import React from 'react';
import '../CSS/TopBrands.css'; 

const TopBrands = () => {
  return (
    <div className='TopBrdands'>
      <div className="topbrands-header">
        <h4 className="topbrands-title">Top Brands</h4>
      </div>

      <div className="topbrands-logos">
        <img src="/public/Apple.svg" alt="Brand 1" className="brand-logo" />
        <img src="/public/samsungs.svg"  alt="Brand 2" className="brand-logo" />
        <img src="/public/samsung2.svg"  alt="Brand 3" className="brand-logo" />
        <img src="/public/cannon.svg"  alt="Brand 4" className="brand-logo" />
        <img src="/public/huawei-svgrepo.svg"  alt="Brand 5" className="brand-logo" />
        <img src="/src/assets/Clip path group.svg"  alt="Brand 6" className="brand-logo" />
      </div>
    </div>
  );
};

export default TopBrands;
