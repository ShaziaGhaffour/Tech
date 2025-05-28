export const getAllBanners = async () => {
    try {
      const response = await fetch("https://ecomerceapis.runasp.net/api/Banner/GetAllBanners");
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Failed to fetch banners", error);
      return [];
    }
  };