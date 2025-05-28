import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserCart, addToCart } from '../API/AddtoCard'; 

const AddToCartForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getUserCart();
        setCartItems(data?.data || []);
      } catch (error) {
        console.error('Error fetching user cart:', error);
      }
    };
    fetchCart();
  }, []);

  if (!product) {
    return (
      <div className="no-product-info">
        <p>No product info received.</p>
        <button onClick={() => navigate('/product')}>Go Back to Products</button>
      </div>
    );
  }
  const handleAddToCart = async (e) => {
    e.preventDefault();
    setIsAdding(true);

    try {
      await addToCart(product.id, quantity);

      alert(`${product.name} added to cart successfully!`);
      const updatedCart = await getUserCart();
      setCartItems(updatedCart?.data || []);

      const goToCart = window.confirm('Would you like to view your cart?');
      if (goToCart) {
        navigate('/cart');
      }

    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="add-to-cart-container">
      <form onSubmit={handleAddToCart} className="add-to-cart-form">
        <div className="product-info">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          )}
          <div className="product-details">
            <h3>{product.name}</h3>
            <p className="product-price">Price: ${product.price}</p>
            {product.description && (
              <p className="product-description">{product.description}</p>
            )}
          </div>
        </div>

        <div className="quantity-section">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            disabled={isAdding}
            className="add-to-cart-btn"
          >
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/product')}
            className="back-btn"
          >
            Back to Products
          </button>
        </div>
      </form>
      <div className="cart-preview-section">
        <h3>User Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.productId}>
                <strong>{item.productName}</strong> - Qty: {item.quantity}, Price: ${item.unitPrice}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddToCartForm;
