

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/User.css"

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
      navigate('/SignUp');
    }
  };

  const handleNavigation = (path) => {
    switch(path) {
      case 'orders':
        alert('Orders page - Coming soon!');
        break;
      case 'wishlist':
        alert('Wishlist page - Coming soon!');
        break;
      case 'payment':
        alert('Payment page - Coming soon!');
        break;
      default:
        break;
    }
  };

  return (
    <div className="user-container">
      <div className="profile-header">
        <img src="/profile-circle.svg" alt="Profile Icon" />
        <div className="user-info">
          <h5>Shazia Ghaffour</h5>
          <h5>shaziaghaffour@gmail.com</h5>
        </div>
      </div>

      <div className="profile-item" onClick={() => handleNavigation('orders')} style={{ cursor: 'pointer' }}>
        <img src="/profile-circle.svg" alt="Icon" />
        <span>Orders</span>
      </div>

      <div className="profile-item" onClick={() => handleNavigation('wishlist')} style={{ cursor: 'pointer' }}>
        <img src="/profile-circle.svg" alt="Icon" />
        <span>Wish List</span>
      </div>
      
      <div className="profile-item" onClick={() => handleNavigation('payment')} style={{ cursor: 'pointer' }}>
        <img src="/profile-circle.svg" alt="Icon" />
        <span>Payment</span>
      </div>
      
      <div className="profile-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
        <img src="/profile-circle.svg" alt="Icon" />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default User;