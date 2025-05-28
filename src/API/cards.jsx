import axios from "axios";

export const getUserCart = async () => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      console.warn("No authentication token found");
      return [];
    }

    const response = await axios.get(
      "https://ecomerceapis.runasp.net/api/Cart/GetUserCart",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }
    );

    console.log("API Response:", response.data); 
    if (response.data) {
      if (Array.isArray(response.data)) {
        return response.data;
      }
      if (response.data.data && Array.isArray(response.data.data)) {
        return response.data.data;
      }

      if (response.data.result && Array.isArray(response.data.result)) {
        return response.data.result;
      }
      if (response.data.items && Array.isArray(response.data.items)) {
        return response.data.items;
      }
      
      if (typeof response.data === 'object' && !Array.isArray(response.data)) {
        return [response.data];
      }
    }

    return [];
    
  } catch (error) {
    console.error("Error fetching user cart:", error);
    
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        console.error("Authentication failed - invalid token");
        localStorage.removeItem("token");
      } else if (status === 404) {
        console.error("Cart not found");
      } else {
        console.error(`Server error: ${status}`);
      }
    } else if (error.request) {
      console.error("Network error - unable to reach server");
    } else {
      console.error("Unexpected error:", error.message);
    }
    
    return [];
  }
};
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};
export const clearCart = async () => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await axios.delete(
      "https://ecomerceapis.runasp.net/api/Cart/ClearCart",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};
