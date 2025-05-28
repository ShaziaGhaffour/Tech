export const addAddress = async (addressData) => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch('https://ecomerceapis.runasp.net/api/Address/AddAddress', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(addressData)
    });

    return await response.json();
  } catch (error) {
    console.error("Add address error:", error);
    throw error;
  }
};

export const getAddress = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch('https://ecomerceapis.runasp.net/api/Address/GetAddresss', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        'Authorization': `Bearer ${token}`
      }
    });

    return await response.json();
  } catch (error) {
    console.error("Get address error:", error);
    throw error;
  }
};
