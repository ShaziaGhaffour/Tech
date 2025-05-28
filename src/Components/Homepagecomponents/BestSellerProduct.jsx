import React, { useEffect, useState } from 'react';
import { BestSeller } from '../../API/BestSeller';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Toastify from 'toastify-js';
import '../../CSS/Seller.css'; 

const BestSellerProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await BestSeller();
        const productsArray = response?.data || [];
        setProducts(productsArray);
        setError(null);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getImageUrl = (product) => {
    const baseUrl = 'https://ecomerceapis.runasp.net';
    if (product.imagePath && Array.isArray(product.imagePath) && product.imagePath.length > 0) {
      const imagePath = product.imagePath[0];
      return imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`;
    }
    return 'https://via.placeholder.com/150?text=No+Image';
  };

  const handleProductClick = (product) => {
    if (product.productURL) {
      window.location.href = `/singleProduct?producturl=${encodeURIComponent(product.productURL)}`;
    } else if (product.id) {
      window.location.href = `/single-product?producturl=${encodeURIComponent(product.id)}`;
    } else {
      alert('Product details missing!');
    }
  };

  const addToCart = async (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to cart.");
      window.location.href = '/login';
      return;
    }

    try {
      const payload = {
        productId: productId,
        quantity: 1,
        couponId: 0,
      };

      const response = await fetch('https://ecomerceapis.runasp.net/api/Cart/AddToCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        Toastify({
          text: "Product added to cart successfully!",
          duration: 3000,
          className: "custom-toast",
          node: document.getElementById("toast-container"),
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
      } else {
        Toastify({
          text: data.message || "Failed to add product to cart!",
          duration: 3000,
          className: "custom-toast",
          node: document.getElementById("toast-container"),
          style: {
            background: "linear-gradient(to right, #ff416c, #ff4b2b)",
          },
        }).showToast();
      }

    } catch (error) {
      console.error("Error:", error);
      Toastify({
        text: "Something went wrong!",
        duration: 3000,
        className: "custom-toast",
        node: document.getElementById("toast-container"),
        style: {
          background: "linear-gradient(to right, #ff416c, #ff4b2b)",
        },
      }).showToast();
    }
  };

  const handleAddToWishlist = (product) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to add items to wishlist.');
      window.location.href = '/login';
      return;
    }

    const wishItem = {
      id: product.id,
      name: product.name,
      price: product.price,
    };

    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    existingWishlist.push(wishItem);
    localStorage.setItem('wishlist', JSON.stringify(existingWishlist));

    alert(`${product.name} added to wishlist!`);
  };

  if (loading) {
    return <div className="bestseller-container"><div className="loading">Loading best seller products...</div></div>;
  }

  if (error) {
    return <div className="bestseller-container"><div className="error">Error: {error}</div></div>;
  }

  return (
    <div className="bestseller-container">
      <div className="bestseller-header">
        <h3 className="bestseller-title">New Products</h3>
        <h6 className="bestseller-viewall">View all</h6>
      </div>

      <div id="toast-container" className="bestseller-toast-container"></div> {/* Toastify container */}

      <div className="bestseller-row">
        {Array.isArray(products) && products.length > 0 ? (
          products.slice(0, 4).map((product, index) => (
            <div key={product.id || index} className="bestseller-card">
              <img
                src={getImageUrl(product)}
                alt={product.name || 'Product'}
                className="bestseller-img"
                onClick={() => handleProductClick(product)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                }}
              />
              <h5 className="bestseller-name" onClick={() => handleProductClick(product)}>
                {product.name || 'Product Name'}
              </h5>
              {product.oldPrice && (
                <p className="bestseller-oldprice"><del>{product.oldPrice} PKR</del></p>
              )}
              <p className="bestseller-price">{product.price || 'N/A'} PKR</p>

              <div className="buttons">
                <button onClick={() => handleAddToWishlist(product)} title="Add to Wishlist">
                  <FaHeart className="heart-icon" />
                </button>

                <button onClick={() => addToCart(product.id)} title="Add to Cart">
                  <FaShoppingCart className="cart-icon" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">No best seller products available</div>
        )}
      </div>
    </div>
  );
};

export default BestSellerProduct;
