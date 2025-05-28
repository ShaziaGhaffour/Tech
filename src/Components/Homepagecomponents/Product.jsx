import React, { useEffect, useState } from 'react';
import { getProductsSale } from '../../API/Product';
import { addToCart } from '../../API/AddtoCard';
import { addToWishlist } from '../../API/Add ToWishlist';
import { useNavigate } from 'react-router-dom';
import cloudImg from '../../assets/random-shape-in-blue-png 2.svg';
import "../../CSS/Product.css";

const showToast = (message, color = "green") => {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.backgroundColor = color;
    toast.style.color = "#fff";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "6px";
    toast.style.zIndex = 9999;
    toast.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    toast.style.fontSize = "14px";
    document.body.appendChild(toast);

    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3000);
};

const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const data = await getProductsSale();
            console.log('Products data:', data); 
            setProducts(data);
        }
        fetchData();
    }, []);
    const handleSingleProductPage = (productUrl) => {
        console.log('Navigating to product:', productUrl);
        
        if (productUrl) {
            navigate(`/singleProduct?producturl=${encodeURIComponent(productUrl)}`);
        } else {
            console.error('No product URL provided');
            showToast('Unable to view product details', 'red');
        }
    };

    const fetchAddToCart = async (id) => {
        const result = await addToCart(id);
        showToast(
            result.status === 200 ? "Product added to cart!" : "Failed to add to cart!",
            result.status === 200 ? "green" : "red"
        );
    };

    const fetchAddToWishlist = async (id) => {
        const result = await addToWishlist(id);
        showToast(
            result.status === 200 ? "Product added to Wishlist!" : "Failed to add to Wishlist!",
            result.status === 200 ? "green" : "red"
        );
    };

    return (
        <div className='container'>
            <div className="products-sale">
                <img src={cloudImg} alt="Cloud Decoration" className="cloude-img"></img>
                <div className="products-sale-content">
                    <div className="products-sale-heading">Products On Sale</div>
                    <div className="products-sale-para">Shop Now!</div>
                    <div className="products-sale-view-all">
                        View all
                        <svg
                            className="products-sale-angle"
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                        </svg>
                    </div>
                </div>

                <div className="products-sale-cards-container">
                    {Array.isArray(products) && products.slice(0, 4).map((value) => (
                        <div className="products-sale-card" key={value.id}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fill="currentColor"
                                className="product-card-svg"
                                onClick={() => fetchAddToCart(value.id)}
                            >
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="product-card-wish-svg"
                                onClick={() => fetchAddToWishlist(value.id)}
                            >
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>

                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    width: "92%",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleSingleProductPage(value.productURL)}
                            >
                                <img
                                    className="product-card-img"
                                    src={`https://ecomerceapis.runasp.net${value.imagePath}`}
                                    alt={value.name}
                                    onError={(e) => {
                                        console.error('Image load error:', e.target.src);
                                        e.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
                                    }}
                                />
                                <div className="card-content">
                                    <p className="card-heading">{value.name}</p>
                                    <div className="card-price-content">
                                        <div className="old-price">
                                            <del>$38.00</del>
                                        </div>
                                        <div className="new-price">${value.price}</div>
                                    </div>
                                </div>
                                <div className="off">-50%</div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;

