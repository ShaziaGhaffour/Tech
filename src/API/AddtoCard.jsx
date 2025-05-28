
import axios from "axios";

export const addToCart = async (productId) => {
    try {
        const response = await axios.post(`https://ecomerceapis.runasp.net/api/Cart/AddToCart`, {
            productId: productId,
            quantity: 1
        });

        return response;
    } catch (error) {
        console.error("Add to cart failed", error);
        return { status: 500 };
    }
};


export const getUserCart = async () => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get(
      "https://ecomerceapis.runasp.net/api/Cart/GetUserCart",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error("Error fetching user cart:", error);
    return [];
  }
};