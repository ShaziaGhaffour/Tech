import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../CSS/Order.css"
import Star from '../assets/star.svg';
import singleProduct from '../../public/singleproduct.svg';
import heartIcon from '../../public/heartsapicon.svg';
import Footer from '../Components/Homepagecomponents/Footer';

const OrderSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderedItems = location.state?.orderedItems || [];
  const deliveryAddress = location.state?.deliveryAddress || null;

  // Calculate original total (before discounts)
  const calculateOriginalTotal = () => {
    return orderedItems.reduce((total, item) => {
      const originalPrice = item.originalPrice || item.price || 0;
      const quantity = parseInt(item.quantity || 1);
      return total + (parseFloat(originalPrice) * quantity);
    }, 0);
  };

  // Calculate current total (after discounts)
  const calculateTotal = () => {
    return orderedItems.reduce((total, item) => {
      const price = parseFloat(item.price || 0);
      const quantity = parseInt(item.quantity || 1);
      return total + (price * quantity);
    }, 0);
  };

  // Calculate discount amount
  const calculateDiscount = () => {
    return calculateOriginalTotal() - calculateTotal();
  };

  return (
    <>
      <div className="order-section">
        <div className="cart-icons">
          <div className="cart-icon">
            <svg className="cart-svg" width="72" height="72" viewBox="0 0 72 72" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="69" height="69" rx="34.5" stroke="#0C68F4" strokeWidth="3" />
                <path
                    d="M36 49C31.32 49 27.5 45.18 27.5 40.5C27.5 39.68 28.18 39 29 39C29.82 39 30.5 39.68 30.5 40.5C30.5 43.54 32.96 46 36 46C39.04 46 41.5 43.54 41.5 40.5C41.5 39.68 42.18 39 43 39C43.82 39 44.5 39.68 44.5 40.5C44.5 45.18 40.68 49 36 49Z"
                    fill="#0C68F4" />
                <path
                    d="M22.3798 24.7599C21.9998 24.7599 21.5998 24.5999 21.3198 24.3199C20.7398 23.7399 20.7398 22.7799 21.3198 22.1999L28.5798 14.9399C29.1598 14.3599 30.1198 14.3599 30.6998 14.9399C31.2798 15.5199 31.2798 16.4799 30.6998 17.0599L23.4398 24.3199C23.1398 24.5999 22.7598 24.7599 22.3798 24.7599Z"
                    fill="#0C68F4" />
                <path
                    d="M49.6202 24.7599C49.2402 24.7599 48.8602 24.6199 48.5602 24.3199L41.3002 17.0599C40.7202 16.4799 40.7202 15.5199 41.3002 14.9399C41.8802 14.3599 42.8402 14.3599 43.4202 14.9399L50.6802 22.1999C51.2602 22.7799 51.2602 23.7399 50.6802 24.3199C50.4002 24.5999 50.0002 24.7599 49.6202 24.7599Z"
                    fill="#0C68F4" />
                <path
                    d="M52.42 33.2C52.28 33.2 52.14 33.2 52 33.2H51.54H20C18.6 33.22 17 33.22 15.84 32.06C14.92 31.16 14.5 29.76 14.5 27.7C14.5 22.2 18.52 22.2 20.44 22.2H51.56C53.48 22.2 57.5 22.2 57.5 27.7C57.5 29.78 57.08 31.16 56.16 32.06C55.12 33.1 53.72 33.2 52.42 33.2ZM20.44 30.2H52.02C52.92 30.22 53.76 30.22 54.04 29.94C54.18 29.8 54.48 29.32 54.48 27.7C54.48 25.44 53.92 25.2 51.54 25.2H20.44C18.06 25.2 17.5 25.44 17.5 27.7C17.5 29.32 17.82 29.8 17.94 29.94C18.22 30.2 19.08 30.2 19.96 30.2H20.44Z"
                    fill="#0C68F4" />
                <path
                    d="M41.7795 57.5H29.7195C22.5595 57.5 20.9595 53.24 20.3395 49.54L17.5195 32.24C17.3795 31.42 17.9395 30.66 18.7595 30.52C19.5595 30.38 20.3395 30.94 20.4795 31.76L23.2995 49.04C23.8795 52.58 25.0795 54.5 29.7195 54.5H41.7795C46.9195 54.5 47.4995 52.7 48.1595 49.22L51.5195 31.72C51.6795 30.9 52.4595 30.36 53.2795 30.54C54.0995 30.7 54.6195 31.48 54.4595 32.3L51.0995 49.8C50.3195 53.86 49.0195 57.5 41.7795 57.5Z"
                    fill="#0C68F4" />
            </svg>
            <p style={{ color: "rgb(12, 104, 244)" }}>Cart</p>
          </div>

          <div className="cart-icon">
            <svg className="checkout-svg" width="48" height="48" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#9E9E9E" />
                <path
                    d="M25.3327 27.6667H10.666C10.1193 27.6667 9.66602 27.2134 9.66602 26.6667V16.0001C9.66602 12.5067 12.506 9.66675 15.9993 9.66675H27.9993C28.546 9.66675 28.9993 10.1201 28.9993 10.6667V24.0001C28.9993 26.0267 27.3594 27.6667 25.3327 27.6667ZM11.666 25.6667H25.3327C26.2527 25.6667 26.9993 24.9201 26.9993 24.0001V11.6667H15.9993C13.6127 11.6667 11.666 13.6134 11.666 16.0001V25.6667Z"
                    fill="white" />
                <path
                    d="M33.3327 35.6667H31.9993C31.4527 35.6667 30.9993 35.2134 30.9993 34.6667C30.9993 33.7467 30.2527 33.0001 29.3327 33.0001C28.4127 33.0001 27.666 33.7467 27.666 34.6667C27.666 35.2134 27.2127 35.6667 26.666 35.6667H21.3327C20.786 35.6667 20.3327 35.2134 20.3327 34.6667C20.3327 33.7467 19.586 33.0001 18.666 33.0001C17.746 33.0001 16.9993 33.7467 16.9993 34.6667C16.9993 35.2134 16.546 35.6667 15.9993 35.6667H14.666C11.906 35.6667 9.66602 33.4267 9.66602 30.6667V26.6667C9.66602 26.1201 10.1193 25.6667 10.666 25.6667H25.3327C26.2527 25.6667 26.9993 24.9201 26.9993 24.0001V14.6667C26.9993 14.1201 27.4527 13.6667 27.9993 13.6667H30.4527C31.7727 13.6667 32.986 14.3734 33.6394 15.5201L35.9194 19.5068C36.0927 19.8134 36.0927 20.2001 35.9194 20.5068C35.746 20.8134 35.4127 21.0001 35.0527 21.0001H33.3327C33.146 21.0001 32.9993 21.1467 32.9993 21.3334V25.3334C32.9993 25.5201 33.146 25.6667 33.3327 25.6667H37.3327C37.8794 25.6667 38.3327 26.1201 38.3327 26.6667V30.6667C38.3327 33.4267 36.0927 35.6667 33.3327 35.6667ZM32.866 33.6667H33.3327C34.986 33.6667 36.3327 32.3201 36.3327 30.6667V27.6667H33.3327C32.0527 27.6667 30.9993 26.6134 30.9993 25.3334V21.3334C30.9993 20.0534 32.0394 19.0001 33.3327 19.0001L31.906 16.5068C31.6127 15.9868 31.0527 15.6667 30.4527 15.6667H28.9993V24.0001C28.9993 26.0267 27.3594 27.6667 25.3327 27.6667H11.666V30.6667C11.666 32.3201 13.0127 33.6667 14.666 33.6667H15.1327C15.5727 32.1334 16.986 31.0001 18.666 31.0001C20.346 31.0001 21.7593 32.1334 22.1993 33.6667H25.8127C26.2527 32.1334 27.666 31.0001 29.346 31.0001C31.026 31.0001 32.426 32.1334 32.866 33.6667Z"
                    fill="white" />
                <path
                    d="M18.6667 38.3333C16.64 38.3333 15 36.6933 15 34.6667C15 32.64 16.64 31 18.6667 31C20.6933 31 22.3333 32.64 22.3333 34.6667C22.3333 36.6933 20.6933 38.3333 18.6667 38.3333ZM18.6667 33C17.7467 33 17 33.7467 17 34.6667C17 35.5867 17.7467 36.3333 18.6667 36.3333C19.5867 36.3333 20.3333 35.5867 20.3333 34.6667C20.3333 33.7467 19.5867 33 18.6667 33Z"
                    fill="white" />
                <path
                    d="M29.3327 38.3333C27.306 38.3333 25.666 36.6933 25.666 34.6667C25.666 32.64 27.306 31 29.3327 31C31.3593 31 32.9993 32.64 32.9993 34.6667C32.9993 36.6933 31.3593 38.3333 29.3327 38.3333ZM29.3327 33C28.4127 33 27.666 33.7467 27.666 34.6667C27.666 35.5867 28.4127 36.3333 29.3327 36.3333C30.2527 36.3333 30.9993 35.5867 30.9993 34.6667C30.9993 33.7467 30.2527 33 29.3327 33Z"
                    fill="white" />
                <path
                    d="M37.3333 27.6667H33.3333C32.0533 27.6667 31 26.6133 31 25.3333V21.3333C31 20.0533 32.0533 19 33.3333 19H35.0533C35.4133 19 35.7467 19.1867 35.92 19.5067L38.2 23.5067C38.28 23.6533 38.3333 23.8267 38.3333 24V26.6667C38.3333 27.2133 37.88 27.6667 37.3333 27.6667ZM33.3333 21C33.1467 21 33 21.1467 33 21.3333V25.3333C33 25.52 33.1467 25.6667 33.3333 25.6667H36.3333V24.2667L34.4667 21H33.3333Z"
                    fill="white" />
            </svg>
            <p className="checkout-para">Checkout</p>
          </div>

          <div className="cart-icon">
            <svg className="payment-svg" width="48" height="48" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#9E9E9E" />
                <path
                    d="M37.3327 20.3333H10.666C10.1193 20.3333 9.66602 19.8799 9.66602 19.3333C9.66602 18.7866 10.1193 18.3333 10.666 18.3333H37.3327C37.8794 18.3333 38.3327 18.7866 38.3327 19.3333C38.3327 19.8799 37.8794 20.3333 37.3327 20.3333Z"
                    fill="white" />
                <path
                    d="M18.6667 31H16C15.4533 31 15 30.5467 15 30C15 29.4533 15.4533 29 16 29H18.6667C19.2133 29 19.6667 29.4533 19.6667 30C19.6667 30.5467 19.2133 31 18.6667 31Z"
                    fill="white" />
                <path
                    d="M27.3333 31H22C21.4533 31 21 30.5467 21 30C21 29.4533 21.4533 29 22 29H27.3333C27.88 29 28.3333 29.4533 28.3333 30C28.3333 30.5467 27.88 31 27.3333 31Z"
                    fill="white" />
                <path
                    d="M31.4127 36.3334H16.586C11.2793 36.3334 9.66602 34.7334 9.66602 29.4801V18.5201C9.66602 13.2667 11.2793 11.6667 16.586 11.6667H31.3993C36.706 11.6667 38.3193 13.2667 38.3193 18.5201V29.4667C38.3327 34.7334 36.7193 36.3334 31.4127 36.3334ZM16.586 13.6667C12.3993 13.6667 11.666 14.3867 11.666 18.5201V29.4667C11.666 33.6001 12.3993 34.3201 16.586 34.3201H31.3993C35.586 34.3201 36.3193 33.6001 36.3193 29.4667V18.5201C36.3193 14.3867 35.586 13.6667 31.3993 13.6667H16.586Z"
                    fill="white" />
            </svg>
            <p>Order</p>
          </div>
        </div>

        <h2>Order Confirmation</h2>
        
        <div className="order-details-container">
          <div className="order-items">
            <h3>Order Items</h3>
            {orderedItems.length > 0 ? (
              orderedItems.map((item, index) => (
                <div key={item.id || index} className="order-item">
                  <div className="item-image">
                    <img
                      src={
                        item.productImagePath?.startsWith("http")
                          ? item.productImagePath
                          : item.productImagePath
                          ? `https://ecomerceapis.runasp.net${item.productImagePath}`
                          : singleProduct
                      }
                      alt={item.productName || item.name || "Product"}
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = singleProduct;
                      }}
                    />
                  </div>
                  <div className="item-details">
                    <div className="item-name">{item.productName || item.name}</div>
                    <div className="item-specs">{item.specs || `Quantity: ${item.quantity || 1}`}</div>
                    <div className="item-price">
                      ${(parseFloat(item.price || 0) * parseInt(item.quantity || 1)).toFixed(2)}
                      {item.originalPrice && item.originalPrice !== item.price && (
                        <span className="original-price">${(parseFloat(item.originalPrice) * parseInt(item.quantity || 1)).toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in your order.</p>
            )}
          </div>

          {deliveryAddress && (
            <div className="delivery-address">
              <h3>delivery address</h3>
              <div className="delivery-address-row">
 <p>
  <strong>Name:</strong> {deliveryAddress.fullName},&nbsp;
  <strong>Phone:</strong> {deliveryAddress.phone},&nbsp;
  <strong>City:</strong> {deliveryAddress.city},&nbsp;
  <strong>Region:</strong> {deliveryAddress.region},&nbsp;
  <strong>Postal Code:</strong> {deliveryAddress.postalCode},&nbsp;
  <strong>Street:</strong> {deliveryAddress.street}
</p>

</div>

              <div className="price-column">
           <div className="payment-summary">
  <h4 className="summary-heading">Payment Details:</h4>
  
  <div className="summary-row">
    <span>Original Total:</span>
    <span>${calculateOriginalTotal().toFixed(2)}</span>
  </div>

  {calculateDiscount() > 0 && (
    <div className="summary-row">
      <span>Discount:</span>
      <span>- ${calculateDiscount().toFixed(2)}</span>
    </div>
  )}

  <div className="summary-row final-total">
    <strong>Final Total:</strong>
    <strong>${calculateTotal().toFixed(2)}</strong>
  </div>
</div>


              </div>
            </div>
          )}
        </div>

        <div className="order-actions">
          <button className="continue-btn" onClick={() => navigate('/checkout')}>
            Back to Checkout
          </button>
          <button className="confirm-btn" onClick={() => alert('Order confirmed!')}>
            Confirm Order
          </button>
        </div>

        <div className="similar-products-heading" style={{color:"black", fontSize:"20px", fontWeight:"400"}}>
          Customers who viewed items in your browsing history also viewed
        </div>
        
        <div className="featured">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="new-products-card">
              <img src={singleProduct} className="rating-img" alt="Single Product" />
              <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
              <p className="new-products-name">
                MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
              </p>
              <div className="price-and-rating-content">
                <div className="price">$930.90</div>
                <div className="rating">
                  {index === 0 ? (
                    <img src={heartIcon} className="rating-star" alt="Heart Icon" />
                  ) : (
                    <>
                      <img src={Star} className="rating-star" alt="Star Icon" />
                      4.5
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSection;