import React, { useState } from 'react';
import "../CSS/Login.css"
import { useNavigate } from 'react-router-dom';
import Home from '../Components/Home';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecomerceapis.runasp.net/api/Users/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      console.log(data, "data");

      if (response.ok) {
        if (data && data.data) {
          localStorage.setItem("token", data.data);
          console.log("Token saved:", data.data);
          alert('Login successful!');
          navigate("/home");
       
        } else {
          console.error("Token not found in response", data);
          alert('Login successful but token not received');
        }
      } 
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
    <Home />
    </>
  );
};

export default Login;