const API_BASE_URL = 'https://ecomerceapis.runasp.net/api';
const apiCall = async (url) => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    if (data.success === false) {
      throw new Error(data.message || 'API returned an error');
    }
    
    return data.data || data || [];
  } catch (error) {
    console.error(`API call failed for ${url}:`, error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const url = `${API_BASE_URL}/Category/GetAllCategories`;
    const data = await apiCall(url);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getProductsByCategory = async (id) => {
  try {
    if (!id) {
      throw new Error('Category ID is required');
    }
    
    const url = `${API_BASE_URL}/Product/GetProductsByCategory/${id}`;
    const data = await apiCall(url);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};

export const getProducts = async (pageNumber = 1, pageSize = 100) => {
  try {
    const url = `${API_BASE_URL}/Product/GetProductsWithPaging?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    const data = await apiCall(url);
    if (data && typeof data === 'object' && data.items) {
      return Array.isArray(data.items) ? data.items : [];
    }
    
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
export const getProductById = async (id) => {
  try {
    if (!id) {
      throw new Error('Product ID is required');
    }
    
    const url = `${API_BASE_URL}/Product/GetProductById/${id}`;
    const data = await apiCall(url);
    return data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
};
