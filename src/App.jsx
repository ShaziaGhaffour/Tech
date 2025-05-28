import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Faq from './Components/Faq';
import Bag from './Components/Bag';
import Search from './Components/Search';
import User from './Components/user';
import Login from './API/login';
import AuthUsers from './API/AuthUsers';
import SignUp from './Components/SignUp';
import MultiProduct from './Components/MultiProduct';
import SingleProduct from './Components/SingleProduct';
import AddToCartForm from './Components/AddToCardForm';
import BestSellerProduct from './Components/Homepagecomponents/BestSellerProduct';
import Checkout from './Components/CheckOut';
import OrderSection from './Components/Order';
import ProductTop from './Components/ProductTop';
import Banners from './Components/Homepagecomponents/Banners';
import PhoneCaseCatalog from './Components/Search';

function App() {
  return (
    <Router>
      <Navbar />
     {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductTop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<AuthUsers />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/MultiProduct" element={<MultiProduct />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/AddToCartForm" element={<AddToCartForm />} />
        <Route path="/BestSellerProduct" element={<BestSellerProduct />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/cart" element={<Bag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<OrderSection />} />
        <Route path="/PhoneCaseCatalog" element={<PhoneCaseCatalog />} />
        
      </Routes>
    </Router>
  );
}

export default App;