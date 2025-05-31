import React from 'react';
import '../CSS/Blog.css'; 
import arrowDown from "../../public/arrow-down.png";
import blogImage from "../../public/Frameblog.svg";
import blogImage55 from "../../public/blog image55.svg";
import Footer from './Homepagecomponents/Footer';


const Blog = () => {
  return (
    <>
      <div className="custom-container">
        <div className="custom-home">
          <p>Home</p>
   <img src={arrowDown} className="breadcrumb-arrow" alt="Arrow" />
          <p>Blog</p>
               <img src={arrowDown} className="breadcrumb-arrow" alt="Arrow" />
          <p>Headphone</p>
        </div>
      <div className="blog-container">
        <div className="blog-main">
          <div className="blog-post">
            <h5>5 Things You Probably Didn’t Know About Headphones</h5>
            <h6>By George Larens on March 28, 2023</h6>
           <img src={blogImage} className="blog-frame" alt="Blog Main" />
            <p>Headphones have become an integral part of our daily lives...</p>

            <h5>1 - Stereo Sound Perception</h5>
            <p>Ever wondered how headphones manage to create a 3D sound experience...</p>

            <h5>2 - Noise-Canceling Magic</h5>
            <p>Noise-canceling headphones use sophisticated technology...</p>

            <h5>3 - Bone Conduction Technology</h5>
            <p>Some headphones employ bone conduction technology...</p>

            <h5>4 - Virtual Surround Sound</h5>
            <p>High-end headphones offer virtual surround sound...</p>

            <h5>5 - Wired vs. Wireless</h5>
            <p>While wireless headphones are convenient, wired ones can still offer superior quality...</p>
          </div>

          <div className="leave-comment">
            <p>Leave a Comment</p>
            <textarea placeholder="Share your thoughts and comments"></textarea>
            <button type="submit">Submit</button>
          </div>
        </div>

        <div className="sidebar">
          <h4>Categories</h4>
          <ul>
            <li>Technology Trends and News</li>
            <li>Gaming Insights</li>
            <li>Security and Privacy</li>
            <li>Tech Lifestyle and Productivity</li>
            <li>Product Spotlight</li>
            <li>How-to Guides and Tutorials</li>
            <li>Buying Guides and Tips</li>
          </ul>

          <h5>Recent Posts</h5>
          <div className="recent-post">
<img src={blogImage55} alt="recent post" />
  <div className="bloge-name">
    <h5>Should You Buy The All New Apple AirPods?</h5>
    <h6>Be it an iPhone or any other Apple device...</h6>
    <div className="date-info">
      <span>August 7, 2023</span>
    </div>
  </div>
</div>
<div className="recent-post">
 <img src={blogImage55} alt="recent post" />
  <div className="bloge-name">
    <h5>Should You Buy The All New Apple AirPods?</h5>
    <h6>Be it an iPhone or any other Apple device...</h6>
    <div className="date-info">
      <span>August 7, 2023</span>
    </div>
  </div>
</div>
<div className="recent-post">
<img src={blogImage55} alt="recent post" />
  <div className="bloge-name">
    <h5>Should You Buy The All New Apple AirPods?</h5>
    <h6>Be it an iPhone or any other Apple device...</h6>
    <div className="date-info">
      <span>August 7, 2023</span>
    </div>
  </div>
</div>


          <h4>Tags</h4>
          <div className="tags">
            <button>Technology</button>
            <button>Headset</button>
            <button>Phone</button>
            <button>Wireless</button>
            <button>Apple</button>
          </div>
        </div>
      </div></div>
      <Footer />
    </>
  );
};

export default Blog;
