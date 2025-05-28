import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios.get("https://ecomerceapis.runasp.net/api/Category/GetAllCategories");
    console.log("API response:", response.data); 
    return response.data; 
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
};
