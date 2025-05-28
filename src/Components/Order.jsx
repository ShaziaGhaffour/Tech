import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../CSS/Order.css"

const OrderSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderedItems = location.state?.orderedItems || [];
  const deliveryAddress = location.state?.deliveryAddress || null;

  const calculateTotal = () => {
    return orderedItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * parseInt(item.quantity || 1));
    }, 0).toFixed(2);
  };

  if (orderedItems.length === 0) {
    return (
      <div className="order-section">
        <h2>Your Order</h2>
        <p>No items in your order</p>
        <button className="continue-btn" onClick={() => navigate('/checkout')}>
          Back to Checkout
        </button>
      </div>
    );
  }

  return (
    <div className="order-section">
      <h2>Order Confirmation</h2>
      {deliveryAddress && (
        <div className="delivery-address">
          <h3>Delivery Address</h3>
          <p>
            {deliveryAddress.street}, {deliveryAddress.city}, {deliveryAddress.region} - {deliveryAddress.postalCode}
          </p>
        </div>
      )}
      <div className="order-items">
        <h3>Order Items</h3>
        {orderedItems.map((item, index) => (
          <div key={item.id || index} className="order-item">
            <div className="item-image">
              <img
                src={
                  item.productImagePath?.startsWith("http")
                    ? item.productImagePath
                    : item.productImagePath
                    ? `https://ecomerceapis.runasp.net${item.productImagePath}`
                    : "/placeholder.jpg"
                }
                alt={item.productName || item.name || "Product"}
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/public/blog image.svg";
                }}
              />
            </div>
            <div className="item-details">
              <div className="item-name">{item.productName || item.name}</div>
              <div className="item-specs">{item.specs || `Quantity: ${item.quantity || 1}`}</div>
              <div className="item-price">
                ${(parseFloat(item.price) * parseInt(item.quantity || 1)).toFixed(2)}
                {item.originalPrice && (
                  <span className="original-price">${item.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="order-total">
        <h3>Total: ${calculateTotal()}</h3>
      </div>

      <div className="order-actions">
        <button className="continue-btn" onClick={() => navigate('/checkout')}>
          Back to Checkout
        </button>
        <button className="confirm-btn" onClick={() => alert('Order confirmed!')}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default OrderSection;