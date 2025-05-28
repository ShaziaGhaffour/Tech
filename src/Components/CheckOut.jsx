import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/CheckOut.css";
import { addAddress, getAddress } from "../API/Checkout";

const Checkout = () => {
  const navigate = useNavigate();
  const [showAddressFields, setShowAddressFields] = useState(false);
  const [addressInput, setAddressInput] = useState({
    city: "",
    street: "",
    postalCode: "",
    region: "",
  });
  const [savedAddress, setSavedAddress] = useState(null); 
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleToggleAddress = () => {
    setShowAddressFields(!showAddressFields);
  };

  const handleChange = (e) => {
    setAddressInput({ ...addressInput, [e.target.name]: e.target.value });
  };

  const handleSubmitAddress = async () => {
    const userId = localStorage.getItem("userId");
    const payload = { ...addressInput, userId };

    if (
      !addressInput.city.trim() ||
      !addressInput.street.trim() ||
      !addressInput.postalCode.trim() ||
      !addressInput.region.trim()
    ) {
      alert("Please fill all address fields");
      return;
    }

    try {
      const res = await addAddress(payload);
      if (res.message === "Address Added Successfully" || res.isSuccess) {
        alert(" Address added successfully!");
        setShowAddressFields(false);
        setAddressInput({ city: "", street: "", postalCode: "", region: "" });
        fetchSavedAddress(); 
      } else {
        alert(" Failed to add address. Please try again.");
      }
    } catch (error) {
      console.error("Error adding address:", error);
      alert("Network error while adding address.");
    }
  };

  const handleContinueToPay = () => {
    if (!savedAddress) {
      alert(" Please add a delivery address first");
      return;
    }
    if (cartItems.length === 0) {
      alert(" Your cart is empty");
      return;
    }
    navigate('/order', { 
      state: { 
        orderedItems: cartItems,
        deliveryAddress: savedAddress
      } 
    });
  };

  const fetchSavedAddress = async () => {
    try {
      const res = await getAddress();
      if (res.isSuccess && res.data.length > 0) {
        const latestAddress = res.data[res.data.length - 1];
        setSavedAddress(latestAddress);
      } else {
        setSavedAddress(null);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      alert(" Network error while fetching address.");
    }
  };

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        setCartItems(JSON.parse(cartData));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
    fetchSavedAddress();
    setLoading(false);
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <div className="form-group">
          <label>User</label>
          <input type="text" className="input" placeholder="Jimmy Smith" readOnly />
        </div>

        <div className="address-section">
          <p className="section-title">Add Address</p>
          <div className="add-address-box" onClick={handleToggleAddress}>
            Add Address <i className="fas fa-map-marker-alt icon"></i>
          </div>

          {showAddressFields && (
            <div className="address-fields">
              {["city", "street", "postalCode", "region"].map((field) => (
                <div className="form-group" key={field}>
                  <label htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <input
                    type="text"
                    id={`add${field}`}
                    name={field}
                    className="input"
                    placeholder={`Enter ${field}`}
                    value={addressInput[field]}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <button className="submit-btn" onClick={handleSubmitAddress}>
                Submit
              </button>
            </div>
          )}
        </div>

        <div className="display-address">
          <p className="section-title">Saved Address</p>
          {savedAddress ? (
            <table className="address-table">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Street</th>
                  <th>Postal Code</th>
                  <th>Region</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{savedAddress.city || "N/A"}</td>
                  <td>{savedAddress.street || "N/A"}</td>
                  <td>{savedAddress.postalCode || "N/A"}</td>
                  <td>{savedAddress.region || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>No saved address found.</p>
          )}
        </div>
      </div>

      <div className="checkout-right">
        <div className="order-summary">
          <p className="summary-title">Your Order</p>
          <div id="order-details">
            {loading ? (
              <p>Loading cart items...</p>
            ) : cartItems.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  className="card mb-3 p-3 shadow-sm"
                  key={index}
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <img
                    src={
                      item.productImagePath?.startsWith("http")
                        ? item.productImagePath
                        : item.productImagePath
                        ? `https://ecomerceapis.runasp.net${item.productImagePath}`
                        : "/placeholder.jpg"
                    }
                    alt={item.productName || "Product"}
                    className="img-fluid"
                    style={{ maxWidth: "100px", height:"300px" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/public/blog image.svg";
                    }}
                  />
                  <div>
                    <p>
                      <strong>Product:</strong> {item.productName}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <p>
                      <strong>Total:</strong> ${item.price}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <button className="pay-btn" onClick={handleContinueToPay}>
          Continue to Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;