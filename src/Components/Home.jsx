import React from 'react';
import Banners from './Homepagecomponents/Banners';
import Categories from './Homepagecomponents/Category';
import Product from './Homepagecomponents/Product';
import BestSellerProduct from './Homepagecomponents/BestSellerProduct'
import TopBrands from './TopBrands';
import SmartWatch from './Homepagecomponents/SmartWatch';
import OurBlogs from './Homepagecomponents/OurBlogs';
import FeatureIcons from './Homepagecomponents/Feature';
import Footer from './Homepagecomponents/Footer';


const Home = () => {
  return (
    <>
      <Banners />
      <Categories />
      <Product />
      <BestSellerProduct />
      <TopBrands />
      <SmartWatch />
      <OurBlogs />
      <FeatureIcons />
      <Footer />

    </>
  )
}

export default Home