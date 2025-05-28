import React from 'react';
import '../../CSS/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col">
          <ul className="footer-list">
            <li><a className="heading-link" href="#">Company</a></li>
            <li><a className="footer-link" href="#">About Us</a></li>
            <li><a className="footer-link" href="#">Blog</a></li>
            <li><a className="footer-link" href="#">Returns</a></li>
            <li><a className="footer-link" href="#">Order status</a></li>
          </ul>
        </div>

        <div className="col">
          <ul className="footer-list">
            <li><a className="heading-link" href="#">Info</a></li>
            <li><a className="footer-link" href="#">How it works?</a></li>
            <li><a className="footer-link" href="#">Our promises</a></li>
            <li><a className="footer-link" href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="col">
          <ul className="footer-list">
            <li><a className="heading-link" href="#">Contact us</a></li>
            <li><a className="footer-link" href="#"><img src="/src/assets/location.svg" /> 123 Main Street, Anytown, USA</a></li>
            <li><a className="footer-link" href="#"><img src="/src/assets/call-calling.svg" /> +1 (555) 123-4567</a></li>
            <li><a className="footer-link" href="#"><img src="/src/assets/sms-edit.svg" /> TechHeimSupport@gmail.com</a></li>
          </ul>
        </div>

        <div className="col">
          <ul className="footer-list">
            <li><a className="heading-link small-heading" href="#">Sign up for News and Updates</a></li>
            <input type="email" className="email-input" placeholder="E-mail Address" />
            <div className="social-icons">
              <img src="/src/assets/twitter.svg" alt="Facebook" />
              <img src="/src/assets/Facebook.svg" alt="Twitter" />
              <img src="/src//assets/Instagram.svg" alt="Instagram" />
              <img src="/src/assets/Youtube.svg" alt="YouTube" />
            </div>
          </ul>
        </div>

        <img src="/src/assets/Ellipse.svg" alt="Ellipse" className="ellipse-img" />
        <div className="payment-Paypal">
              <img src="/src/assets/paypal.svg" alt="PayPal" />
              <img src="/src/assets/paypal.svg" alt="American Express" />
              <img src="/src/assets/paypal.svg" alt="Visa" />
              <img src="/src/assets/paypal.svg" alt="MasterCard" />
            </div>
      </div>
       { <div className="footer-bottom">
          <div className="footer-left">
            <img src="/src/assets/copyright.svg" alt="copyright" />
            <h6>2023 Tech Heim.</h6>
          </div>
          <div className="footer-right">
            <p>2023 Tech Heim</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Imprint</p>
          </div>
        </div>}
    </div>
  );
};

export default Footer;
