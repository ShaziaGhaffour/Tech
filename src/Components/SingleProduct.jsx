import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../CSS/SingleProduct.css";

const SingleProduct = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productUrl = searchParams.get("producturl");

  useEffect(() => {
    if (!productUrl) {
      setError("No product URL found in search parameters.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://ecomerceapis.runasp.net/api/Product/GetProductByURL/url?url=${encodeURIComponent(productUrl)}`
        );
        if (!response.ok) throw new Error("Failed to fetch product");

        const result = await response.json();
        if (result?.data) {
          const data = Array.isArray(result.data) ? result.data[0] : result.data;
          setProduct(data);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        console.error("API fetch error:", err);
        setError("Error loading product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productUrl]);

  const handleBuyNow = () => {
    if (product) {
      const checkoutData = {
        id: product.id,
        name: product.name,
        price: product.price,
        productUrl: product.productURL || productUrl,
        imagePath: product.imagePath?.[0] || '',
        quantity: 1
      };
      localStorage.setItem("checkout", JSON.stringify(checkoutData));
      navigate("/Checkout");
    }
  };

  const handleAddToCart = () => {
  if (product) {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      productUrl: product.productURL || productUrl,
      imagePath: product.imagePath?.[0] || '',
      quantity: 1
    };

    const index = existingCart.findIndex(item => item.id === product.id);
    if (index > -1) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Added to cart successfully!");
    navigate("/order");
  }
};

  if (loading) {
    return <div className="container-single"><p>Loading product...</p></div>;
  }

  if (error) {
    return (
      <div className="container-single error-container">
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-single">
        <p>Product not available.</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  const images = Array.isArray(product.imagePath) ? product.imagePath : [product.imagePath];

  return (
    <div className="container-single">
      <div className="breadcrumb">
        <a className="breadcrumb-link" href="/">Home</a>
        <img src="/public/arrow-down.png" alt="arrow" className="breadcrumb-arrow" />
        <a className="breadcrumb-link" href="#">Products</a>
        <img src="/public/arrow-down.png" alt="arrow" className="breadcrumb-arrow" />
        <a className="breadcrumb-link active" href="#">{product.name}</a>
      </div>

      <div className="product-detail">
        <div className="product-wrapper">
          <div className="imag">
            {images && images.length > 0 ? (
              <>
                <img
                  src={`https://ecomerceapis.runasp.net${images[0]}`}
                  alt={product.name}
                  className="main-image"
                  onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                />
                <div className="image-gallery">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={`https://ecomerceapis.runasp.net${img}`}
                      className="thumb-image"
                      alt={`gallery-${index}`}
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="no-image">
                <p>No image available</p>
              </div>
            )}
          </div>

          <div className="details">
            <h5>{product.name}</h5>
            <div className="shops">
              <div className="shopss">
                <img src="/public/shop.svg" alt="shop" />
                <h6>{product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}</h6>
              </div>
              <div className="shopss">
                <img src="/public/shop.svg" alt="Guaranteed" />
                <h6>Guaranteed</h6>
              </div>
            </div>

            <div className="pay">
              <div className="price-section">
                <h6>${product.price}</h6>
                <h6 className="last-price">${(product.price * 1.2).toFixed(2)}</h6>
              </div>

              <button className="btn-buy" onClick={handleBuyNow} disabled={product.stockQuantity <= 0}>
                Buy Now
              </button>
              <button className="btn-cart" onClick={handleAddToCart} disabled={product.stockQuantity <= 0}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;



