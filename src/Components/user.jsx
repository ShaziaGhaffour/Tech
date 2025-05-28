import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/User.css";
import Home from '../Components/Home'; 

const User = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("token"); 
      navigate('/SignUp');
    }
  };

  const handleNavigation = (path) => {
    alert(`${path} page - Coming soon!`);
  };

  return (
    <>
      <div className="user-container">
        <div className="profile-header">
          <img src="/profile-circle.svg" alt="Profile Icon" />
          <div className="user-info">
            <h5>Shazia Ghaffour</h5>
            <h5>shaziaghaffour@gmail.com</h5>
          </div>
        </div>

        <div className="profile-item" onClick={() => handleNavigation('Orders')}>
          <img src="/profile-circle.svg" alt="Icon" />
          <span>Orders</span>
        </div>

        <div className="profile-item" onClick={() => handleNavigation('Wishlist')}>
          <img src="/profile-circle.svg" alt="Icon" />
          <span>Wish List</span>
        </div>

        <div className="profile-item" onClick={() => handleNavigation('Payment')}>
          <img src="/profile-circle.svg" alt="Icon" />
          <span>Payment</span>
        </div>

        <div className="profile-item" onClick={handleLogout}>
          <img src="/profile-circle.svg" alt="Icon" />
          <span>Log Out</span>
        </div>
      </div>
      {isLoggedIn && (
        <div className="user-home-section">
          <Home />
        </div>
      )}
    </>
  );
};

export default User;
