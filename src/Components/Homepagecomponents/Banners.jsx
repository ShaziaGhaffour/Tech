import React, { useEffect, useState } from 'react';
import { getAllBanners } from "../../API/Banners";
import "../../CSS/banners.css"; 

const Banners = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      const banners = await getAllBanners();
      if (banners.length > 0) {
        setBanner(banners[0]);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="image-section" id="banner-container">
          {banner && (
            <div className="content-wrapper">
              <div className="text-container">
                <h2>{banner.title}</h2>
                <p>{banner.description}</p>
                <button>Explore More</button>
              </div>
              <img
                src={`https://ecomerceapis.runasp.net${banner.image}`}
                alt={banner.title}
                className="banner-image"
              />
            </div>
          )}
        </div>
      </div>
      
    </div>
    
  );
};

export default Banners;