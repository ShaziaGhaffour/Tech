import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../CSS/SingleProduct.css";
import Star from '../assets/star.svg';
import arrowDown from '../../public/arrow-down.png';
import shopIcon from '../assets/shop.svg';
import imageLaptop from '../../public/image-laptop.svg'; 
import heartIcon from '../../public/heartsapicon.svg';
import singleProduct from '../../public/singleproduct.svg';

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
    <>
      <div className="container-single">
        <div className="breadcrumb">
          <a className="breadcrumb-link" href="/">Home</a>
          <img src={arrowDown} alt="arrow" className="breadcrumb-arrow" />
          <a className="breadcrumb-link" href="#">Products</a>
         <img src={arrowDown} alt="arrow" className="breadcrumb-arrow" />
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
                  <img src={shopIcon} alt="shop" className="shop-cart" />
                  <h6>{product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}</h6>
                </div>
                <div className="shopss">
               <img src={shopIcon} alt="shop" className="shop-cart" />
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

        <div className="technical-details">
          <div className="technical-details-lists">
            <li>Technical-Details</li>
            <li>Similar Products</li>
            <li>Comments</li>
          </div>
          <div className="sepration1" style={{ borderBottom: "1px solid gray", width: "100%" }}></div>
          <div className="heading">Technical-Details</div>

          <div className="technical-details-content">
            <p className="display">Display</p>
            <p className="para">13.3-inch (diagonal) LED-backlit display with IPS technology</p>
          </div>

          <div className="technical-details-content" style={{ backgroundColor: "white" }}>
            <p className="display">Graphics</p>
            <p className="para">Apple 10-core GPU</p>
          </div>

          <div className="technical-details-content">
            <p className="display">Processor</p>
            <p className="para">Apple M2 chip</p>
          </div>

          <div className="technical-details-content" style={{ backgroundColor: "white" }}>
            <p className="display">In the box</p>
            <p className="para">67W USB-C Power Adapter, USB-C Charge Cable (2 m)</p>
          </div>

          <div className="technical-details-content">
            <p className="display">Height</p>
            <p className="para">0.61 inch (1.56 cm)</p>
          </div>

          <div className="technical-details-content" style={{ backgroundColor: "white" }}>
            <p className="display">Width</p>
            <p className="para">11.97 inches (30.41 cm)</p>
          </div>

          <p className="show-more" style={{ marginLeft: "10px" }}>Show More
            <svg className="angle-down" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </p>
        </div>
        <div className="similar-products-heading">Similar Products</div>
        <div className="featured">
          <div className="new-products-card">
            <img src={singleProduct} className="rating-img" alt="Single Product" />
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
            <p className="new-products-name">
              MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
            </p>
            <div className="price-and-rating-content">
              <div className="price">$930.90</div>
              <div className="rating">
               <img src={heartIcon} className="rating-star" alt="Heart Icon" />
              </div>
            </div>
          </div>

          <div className="new-products-card">
             <img src={singleProduct} className="rating-img" alt="Single Product" />
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
            <p className="new-products-name">
              MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
            </p>
            <div className="price-and-rating-content">
              <div className="price">$930.90</div>
              <div className="rating">
                <img src={Star} className="rating-star" alt="Star Icon" />

                4.5
              </div>
            </div>
          </div>

          <div className="new-products-card">
             <img src={singleProduct} className="rating-img" alt="Single Product" />
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
            <p className="new-products-name">
              MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
            </p>
            <div className="price-and-rating-content">
              <div className="price">$930.90</div>
              <div className="rating">
                <img src={Star} className="rating-star" alt="Star Icon" />

                4.5
              </div>
            </div>
          </div>

          <div className="new-products-card">
             <img src={singleProduct} className="rating-img" alt="Single Product" />
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
            <p className="new-products-name">
              MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
            </p>
            <div className="price-and-rating-content">
              <div className="price">$930.90</div>
              <div className="rating">
                <img src={Star} className="rating-star" alt="Star Icon" />

                4.5
              </div>
            </div>
          </div>
        </div>
        <div className="similar-products-heading">Frequently bought together</div>
        <div className="featured">
          <div className="new-products-card">
            <img src={imageLaptop} className="rating-img" alt="Laptop" />
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
            <p className="new-products-name" style={{ color: "blue" }}>
              Inateck 12.3-13 Inch Laptop Case Sleeve 360° Protection Compatible with 13 inch MacBook
            </p>
            <div className="price-and-rating-content">
              <div className="price">$930.90</div>
              <div className="rating">
                <img src={heartIcon} className="rating-star" alt="Heart Icon" />
              </div>
            </div>
          </div>

          <div className="new-products-card">
           <img src={imageLaptop} className="rating-img" alt="Laptop" />
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
            <p className="new-products-name">
              Inateck 12.3-13 Inch Laptop Case Sleeve 360° Protection Compatible with 13 inch MacBook
            </p>
            <div className="price-and-rating-content">
              <div className="price">$930.90</div>
              <div className="rating">
                <img src={Star} className="rating-star" alt="Star Icon" />

                4.5
              </div>
            </div>
          </div>

          <div className="new-products-card">
            <img src={imageLaptop} className="rating-img" alt="Laptop" />
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
            <p className="new-products-name">
              Inateck 12.3-13 Inch Laptop Case Sleeve 360° Protection Compatible with 13 inch MacBook
            </p>
            <div className="price-and-rating-content">
              <div className="price">$930.90</div>
              <div className="rating">
                <img src={Star} className="rating-star" alt="Star Icon" />

                4.5
              </div>
            </div>
          </div>

          <div className="new-products-card">
           <img src={imageLaptop} className="rating-img" alt="Laptop" />
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>
            <p className="new-products-name">
              Inateck 12.3-13 Inch Laptop Case Sleeve 360° Protection Compatible with 13 inch MacBook
            </p>
            <div className="price-and-rating-content">
              <div className="price">$930.90</div>
              <div className="rating">
               <img src={Star} className="rating-star" alt="Star Icon" />
                4.5
              </div>
            </div>
          </div>
        </div>
        <div className="similar-products-heading">Reviews</div>
<div className="new-products-container">
  <img src="/Videos card.svg" alt="Review 1" />
  <img src="/Videos card.svg" alt="Review 2" />
  <img src="/Videos card.svg" alt="Review 3" />
</div>

      </div>
    </>
  );
};

export default SingleProduct;



