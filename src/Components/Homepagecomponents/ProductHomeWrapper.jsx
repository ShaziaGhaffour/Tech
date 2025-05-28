// ProductHomeWrapper.jsx
import React, { useEffect, useState } from 'react';
import ProductTop from '../../Components/ProductTop'; 
import Home from '../../Components/Home';

const ProductHomeWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      {isLoggedIn && <ProductTop />}
      <Home />
    </>
  );
};

export default ProductHomeWrapper;
