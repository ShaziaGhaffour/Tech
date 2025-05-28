export const getAllCategories = async () => {
  try {
    const response = await fetch('https://ecomerceapis.runasp.net/api/Category/GetAllCategories');
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getProductsByCategory = async (id) => {
  try {
    const response = await fetch(`https://ecomerceapis.runasp.net/api/Product/GetProductsByCategory/${id}`);
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch('https://ecomerceapis.runasp.net/api/Product/GetProductsWithPaging?pageNumber=1&pageSize=100');
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
