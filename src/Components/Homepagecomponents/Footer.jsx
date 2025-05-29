import React from 'react';
import '../../CSS/Footer.css';
import locationIcon from '../../assets/location.svg';
import callIcon from '../../assets/call-calling.svg';
import smsEditIcon from '../../assets/sms-edit.svg';
import Twitter from '../../assets/twitter.svg';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import Youtube from '../../assets/Youtube.svg';
import paypal from '../../assets/paypal.svg';
import copyrightIcon from '../../assets/copyright.svg';
import Ellipse from '../../assets/Ellipse.svg';
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
            <li><a className="footer-link" href="#"><img src={locationIcon} alt="Location Icon" /> 123 Main Street, Anytown, USA</a></li>
            <li><a className="footer-link" href="#"><img src={callIcon} alt="Call Icon" />
              +1 (555) 123-4567</a></li>
            <li><a className="footer-link" href="#"><img src={smsEditIcon} alt="SMS Edit Icon" />
              TechHeimSupport@gmail.com</a></li>
          </ul>
        </div>

        <div className="col">
          <ul className="footer-list">
            <li><a className="heading-link small-heading" href="#">Sign up for News and Updates</a></li>
            <input type="email" className="email-input" placeholder="E-mail Address" />
            <div className="social-icons">
              <img src={Twitter} alt="Twitter" />
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
              <img src={Youtube} alt="YouTube" />

            </div>
          </ul>
        </div>

        <img src={Ellipse} alt="Ellipse" className="ellipse-img" />

        <div className="payment-Paypal">
          <img src={paypal} alt="PayPal" />
          <img src={paypal} alt="American Express" />
          <img src={paypal} alt="Visa" />
          <img src={paypal} alt="MasterCard" />

        </div>
      </div>
      {<div className="footer-bottom">
        <div className="footer-left">
          <img src={copyrightIcon} alt="copyright" />

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
