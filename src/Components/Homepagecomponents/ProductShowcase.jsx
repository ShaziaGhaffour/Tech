import React from 'react';
import '../../CSS/ProductShowcase.css';

const ProductShowcase = () => {
  return (
    <div className="container showcase-container">
      <div className="iphone-section">
        <div className="series">
          <img src="/src/assets/Ellipse 448.svg" width="60" className="imagess" alt="iPhone ellipse" />
          <h6 className="heading">Iphone<span>15 Series</span></h6>
          <img src="/src/assets/image 187.png" className="images" alt="iPhone" />
        </div>

        <div className="first">
          <div className="register">
            <div className="day">8 days</div>
            <div className="day">8 days</div>
            <div className="day">8 days</div>
            <div className="day">8 days</div>
          </div>

          <div className="promo-text">It feels good to be the first</div>
          <div className="description">
            Get ready for the future of smartphones. Experience innovation like never before.
            Stay tuned for the big iPhone 15 pre-sale.
          </div>
          <button className="btn-primary">Register Now</button>
        </div>
      </div>
      <div className="play">
        <div className="ellipse">
          <img src="/src/assets/Ellipse 446.svg" alt="Ellipse background"className='Ellipse-background' />
          <h4 className="play-heading">Play Station 5</h4>

          <div className="ellipses">
             <img src="/src/assets/Ellipse 449.svg" className="svg" alt="PS5" />
            <div className="ellipsess">
             <img src="/src/assets/ps53.svg" width="350" className="images-ps5" alt="PS5 ellipse" />
            <h6 className="digit">Digital Edition + 2TB</h6>
            <button className="btn-buy" id="buy">Buy Now</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;

