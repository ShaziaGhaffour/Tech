import React, { useEffect, useState } from 'react';
import { getAllCategories, getProductsByCategory, getProducts } from '../API/MultiProduct';
import { useLocation, useNavigate } from 'react-router-dom';
import "../CSS/MultiProduct.css";

const MultiProduct = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const categoryIdFromUrl = params.get("categoryId");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        console.log("Categories data:", data); 
        setCategories(data.data || data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categoryIdFromUrl) {
      fetchProductsByCategory(categoryIdFromUrl);
      setSelectedCategory(categoryIdFromUrl);
    } else {
      fetchAllProducts();
    }
  }, [categoryIdFromUrl]);

  const fetchAllProducts = async () => {
    try {
      const data = await getProducts();
      console.log("Products data:", data); 
      setProducts(data.data || data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsByCategory = async (id) => {
    try {
      const data = await getProductsByCategory(id);
      console.log("Category products data:", data); 
      setProducts(data.data || data);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };

  const handleCategoryClick = (id) => {
    navigate(`/multiproduct?categoryId=${id}`);
    setSelectedCategory(id); 
  };

  return (
    <div className="container-multiproduct">
      <div className="breadcrumb-nav">
        <h5>Home</h5>
        <img src="/arrow-down.png" alt="arrow" />
        <h5 className="active">Products</h5>
      </div>
    
      <div className="categories">
        {categories.length > 0 ? (
          categories.slice(0, 9).map((category) => (
            <div key={category.id} className="category-item" onClick={() => handleCategoryClick(category.id)}>
              <img 
                src={`https://ecomerceapis.runasp.net/${category.imagePath}`} 
                alt={category.name}
                onError={(e) => {
                  e.target.src = "/bag.svg"; 
                }}
              />
              <h5>{category.name}</h5>
            </div>
          ))
        ) : (
          <>
            <div className="category-item">
              <img src="/bag.svg" alt="Mobile" />
              <h5>Mobile</h5>
            </div>
            <div className="category-item">
              <img src="/bag.svg" alt="Laptop" />
              <h5>Laptop</h5>
            </div>
            <div className="category-item">
              <img src="/bag.svg" alt="Tablet" />
              <h5>Tablet</h5>
            </div>
            <div className="category-item">
              <img src="/bag.svg" alt="Audio" />
              <h5>Audio</h5>
            </div>
            <div className="category-item">
              <img src="/bag.svg" alt="Wearable" />
              <h5>Wearable</h5>
            </div>
            <div className="category-item">
              <img src="/bag.svg" alt="Camera" />
              <h5>Camera</h5>
            </div>
            <div className="category-item">
              <img src="/bag.svg" alt="Gaming" />
              <h5>Gaming</h5>
            </div>
            <div className="category-item">
              <img src="/bag.svg" alt="Network" />
              <h5>Network</h5>
            </div>
            <div className="category-item">
              <img src="/bag.svg" alt="Accessories" />
              <h5>Accessories</h5>
            </div>
          </>
        )}
      </div>
    
      <div className="filters">
        <div className="filter-chip">
          <h6>Silver</h6>
          <img src="/bag.svg" alt="close" />
        </div>
        <div className="filter-chip">
          <h6>Intel Core i9</h6>
          <img src="/bag.svg" alt="close" />
        </div>
        <div className="filter-chip">
          <h6>Apple</h6>
          <img src="/bag.svg" alt="close" />
        </div>
        <div className="filter-chip">
          <h6>12 GB</h6>
          <img src="/bag.svg" alt="close" />
        </div>
        <div className="filter-chip">
          <h6>Silver</h6>
          <img src="/bag.svg" alt="close" />
        </div>
      </div>

      <div className="container-productss">
        <div className="main-container">
          <div className="left-side-container">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-button ${selectedCategory == cat.id ? 'active-category' : ''}`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <h6 style={{ fontSize: "14px" }}>{cat.name}</h6>
                </button>
              ))
            ) : (
              <p>No Categories Found</p>
            )}
          </div>
          
          <div className="right-side-container">
            <div className="touch">
              <div id="product-container" className="product-row">
                {products.length > 0 ? (
                  products.map(product => (
                    <div key={product.id} className="product-card">
                      <a href={`/productadd?producturl=${product.productURL}`} style={{ textDecoration: "none", color: "black" }}>
                        <div className="phone bg-light rounded shadow">
                          <img
                            src={`https://ecomerceapis.runasp.net${product.imagePath && product.imagePath[0] ? product.imagePath[0] : '/default-product.jpg'}`}
                            alt={product.name}
                            className="img-fluidss"
                            style={{ height: "120px", objectFit: "cover" , width:"150px" }}
                            onError={(e) => {
                              e.target.src = "/default-product.jpg"; 
                            }}
                          />
                          <h6 className="text-center mt-2" style={{ fontSize: "13px" }}>{product.name}</h6>
                          <div className="star d-flex justify-content-around mt-2">
                            <h6 style={{ fontSize: "11px" }}>${(product.price + 10).toFixed(2)}</h6>
                            <h6 style={{ fontSize: "11px" }}>${product.price}</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))
                ) : (
                  <p>No Products Found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiProduct;