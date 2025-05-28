import React, { useEffect, useState } from 'react';
import { getAllCategories, getProductsByCategory, getProducts } from '../API/ProductTop';
import '../CSS/ProductTop.css';

const BASE_URL = 'https://ecomerceapis.runasp.net';

const ProductTop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      const catData = await getAllCategories();
      setCategories(catData);
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        const catProducts = await getProductsByCategory(selectedCategory);
        setProducts(catProducts);
      } else {
        const allProducts = await getProducts();
        setProducts(allProducts.slice(0, 3));
      }
    };
    fetchProducts();
  }, [selectedCategory]);
  const handleCategoryClick = (categoryId) => {
    if (categoryId === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <div className="container-products">
      <div className="main-container-2">
        <div className="left-side-container">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-button ${selectedCategory === cat.id ? 'active-category' : ''}`}
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
                products.map((product) => (
                  <div key={product.id} className="product-card">
                    <a href={`/productadd?producturl=${product.productURL}`} style={{ textDecoration: "none", color: "black" }}>
                      <div className="phone bg-light rounded shadow">
                        <img
                          src={
                            product.imagePath && product.imagePath[0]
                              ? `${BASE_URL}${product.imagePath[0]}`
                              : "/default-product.jpg"
                          }
                          alt={product.name}
                          className="img-fluids"
                          style={{ height: "120px", objectFit: "cover", width: "150px" }}
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
  );
};

export default ProductTop;

