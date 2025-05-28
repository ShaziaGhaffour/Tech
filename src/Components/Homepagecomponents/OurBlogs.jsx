import React from 'react';
import '../../CSS/OurBlog.css';

const OurBlogs = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h3 className="blog-title">Our Blogs</h3>
        <h6 className="view-all">View all &gt;</h6>
      </div>

      <div className="main-container">
        <div className="blog-content">
          <img src="/src/assets/image.svg" alt="Meta" className="img-fluide" />
          <div className="meta-box">
            <div className="meta-info">
              <div className="calendar">
                <img src="/src/assets/calendar.svg" width="20" height="20" />
                <h6 className="meta-text">August , 8 , 2023</h6>
              </div>
              <div className="calendar">
                <img src="/src/assets/timer.svg" width="20" height="20" />
                <h6 className="meta-text">3 min read</h6>
              </div>
            </div>
            <h6 className="meta-title">Meta Platforms plans to release free</h6>
            <p className="meta-desc">
              The parent company of Facebook, Meta Platforms, is introducing software to help developers
            </p>
          </div>
        </div>

        <div className="side-blogs">
          <div className="side-blog">
            <img src="/src/assets/blog image.svg" alt="Blog" className="img-fluids" />
            <div className="blog-box">
              <h3 className="blog-heading orange">8 Things You Probably Didn’t Know About Headphones</h3>
              <p className="blog-desc">
                Owning a headphone could mean a different thing for different people. For some, it acts as a fashion statement...
              </p>
              <div className="blog-footer">
                <div className="calendar">
                  <img src="/src/assets/calendar.svg" width="20" height="20" />
                  <h6 className="meta-text gray">August , 8 , 2023</h6>
                </div>
                <img src="/src/assets/save.svg" alt="Save" className="save-icon" />
              </div>
            </div>
          </div>

          <div className="side-blog">
            <img src="/src/assets/blog image2.svg" alt="Blog2" className="img-fluids" />
            <div className="blog-box">
              <h3 className="blog-heading">Analyzing the August 17th Bitcoin Price Drop</h3>
              <p className="blog-desc">
                On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8% in a 10-minute window...
              </p>
              <div className="calendar">
                <img src="/src/assets/calendar.svg" width="20" height="20" />
                <h6 className="meta-text gray">August , 8 , 2023</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
