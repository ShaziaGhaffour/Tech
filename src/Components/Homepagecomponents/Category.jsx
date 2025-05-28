import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../API/Category";
import "../../CSS/Category.css";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllCategories();
                console.log("API Response:", data); 
                setCategories(data.data);
            } catch (error) {
                console.error("Unable to load categories", error);
            }
        }
        fetchData();
    }, []);

    const handleCategoryClick = (id) => {
        navigate(`/multiproduct?categoryId=${id}`);
    };

    return (
        <div className="categories-container">
            {Array.isArray(categories) && categories.slice(0, 6).map((value) => (
                <div className="category-card" key={value.id} onClick={() => handleCategoryClick(value.id)}>
                    <img
                        className="category-image"
                        src={`https://ecomerceapis.runasp.net/${value.imagePath}`}
                        alt={value.name}
                    />
                    <p className="category-name">{value.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Categories;

