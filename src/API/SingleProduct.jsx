// // API/SingleProduct.jsx

// export const getAllCategories = async () => {
//   try {
//     const response = await fetch('https://ecomerceapis.runasp.net/api/Category/GetAllCategories');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     console.log("Categories API response:", data);
//     return data.data || [];
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };

// export const getAllProducts = async () => {
//   try {
//     const response = await fetch('https://ecomerceapis.runasp.net/api/Product/GetProductsWithPaging?pageNumber=1&pageSize=100');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     console.log("Products API response:", data);
//     return data.data || [];
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };

// export const getProductsByCategory = async (id) => {
//   try {
//     const response = await fetch(`https://ecomerceapis.runasp.net/api/Product/GetProductsByCategory/${id}`);
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     console.log("Products by category API response:", data);
//     return data.data || [];
//   } catch (error) {
//     console.error("Error fetching products by category:", error);
//     return [];
//   }
// };

// // Improved function to get product by URL with better error handling
// export const getProductByUrl = async (productUrl) => {
//   try {
//     console.log("Making API call to get product by URL:", productUrl);
    
//     if (!productUrl || productUrl.trim() === '') {
//       throw new Error('Product URL is required');
//     }
    
//     // Clean and encode the URL parameter
//     const cleanUrl = productUrl.trim();
//     const encodedUrl = encodeURIComponent(cleanUrl);
//     const apiUrl = `https://ecomerceapis.runasp.net/api/Product/GetProductByUrl/${encodedUrl}`;
    
//     console.log("Full API URL:", apiUrl);
    
//     const response = await fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
    
//     console.log("API Response status:", response.status);
//     console.log("API Response ok:", response.ok);
    
//     if (response.status === 404) {
//       console.warn(`Product not found for URL: ${productUrl}`);
//       // Instead of throwing error, return null to handle gracefully
//       return null;
//     }
    
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}. ${errorText}`);
//     }
    
//     const data = await response.json();
//     console.log("Raw API response:", data);
    
//     // Check if the response has the expected structure
//     if (data && typeof data === 'object') {
//       // Sometimes the product data might be directly in the response
//       // or nested under data property
//       const productData = data.data || data;
      
//       // Validate that we have essential product properties
//       if (productData && (productData.id || productData.name)) {
//         console.log("Processed product data:", productData);
//         return productData;
//       }
//     }
    
//     console.log("No valid product data found in response");
//     return null;
//   } catch (error) {
//     console.error("Detailed error fetching product by URL:", {
//       message: error.message,
//       productUrl: productUrl,
//       error: error
//     });
    
//     // Re-throw error so component can handle it
//     throw new Error(`Failed to fetch product: ${error.message}`);
//   }
// };

// // Alternative function to try different URL formats
// export const getProductByUrlAlternative = async (productUrl) => {
//   const urlVariations = [
//     productUrl,
//     productUrl.toLowerCase(),
//     productUrl.replace(/\s+/g, '-'),
//     productUrl.replace(/\s+/g, '_'),
//     productUrl.replace(/[^a-zA-Z0-9]/g, ''),
//   ];
  
//   for (const urlVariation of urlVariations) {
//     try {
//       console.log(`Trying URL variation: ${urlVariation}`);
//       const product = await getProductByUrl(urlVariation);
//       if (product) {
//         return product;
//       }
//     } catch (error) {
//       console.log(`Failed with variation ${urlVariation}:`, error.message);
//       continue;
//     }
//   }
  
//   throw new Error(`Product not found with any URL variation of: ${productUrl}`);
// };

// // Add to cart function with better error handling
// export const addToCart = async (productId, quantity = 1) => {
//   try {
//     console.log("Adding to cart:", { productId, quantity });
    
//     if (!productId) {
//       throw new Error('Product ID is required');
//     }
    
//     const response = await fetch('https://ecomerceapis.runasp.net/api/Cart/AddToCart', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify({
//         productId: parseInt(productId),
//         quantity: parseInt(quantity)
//       })
//     });
    
//     console.log("Add to cart response status:", response.status);
    
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
//     }
    
//     const data = await response.json();
//     console.log("Add to cart API response:", data);
//     return data;
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     throw error; // Re-throw so component can handle it
//   }
// };

// // Function to get product by ID (as fallback)
// export const getProductById = async (productId) => {
//   try {
//     console.log("Getting product by ID:", productId);
    
//     if (!productId) {
//       throw new Error('Product ID is required');
//     }
    
//     const response = await fetch(`https://ecomerceapis.runasp.net/api/Product/GetProductById/${productId}`);
    
//     console.log("Get product by ID response status:", response.status);
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     console.log("Product by ID API response:", data);
    
//     return data.data || data;
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     throw error;
//   }
// };