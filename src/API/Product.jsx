import axios from "axios";

export const getProductsSale = async () => {
  try {
    const response = await axios.get("https://ecomerceapis.runasp.net/api/Product/GetBestSellerProduct");
    return response.data.data; 
  } catch (error) {
    console.error("Failed to fetch sale products:", error);
    return [];
  }
};
