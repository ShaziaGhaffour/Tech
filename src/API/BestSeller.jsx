import axios from 'axios';

export const BestSeller = async () => {
  try {
    const response = await axios.get('https://ecomerceapis.runasp.net/api/Product/GetBestSellerProduct');
    return response.data;
  } catch (error) {
    console.error('Error fetching best seller products:', error);
    return [];
  }
};