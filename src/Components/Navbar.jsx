import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; 
import "../CSS/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCartClick = () => {
    alert("Cart clicked!"); 
      window.location.href = '/bag';
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <FaBars />
      </button>

      <div className={`nav-container ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/faq">Faq</Link></li>
        </ul>

        <ul className="nav-linkss">
          <li><Link to="/Search"><img src="/search-normal.svg" alt="search" /></Link></li>
          
          <li>
            <button onClick={onCartClick} className="cart-button">
              <img src="/bag.svg" alt="bag" />
            </button>
          </li>

          <li><Link to="/User"><img src="/user.svg" alt="user" /></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

