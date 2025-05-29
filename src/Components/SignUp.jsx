import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/SignUp.css';
import Home from '../Components/Home';

const SignupForm = ({ onLogin }) => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [activeTab, setActiveTab] = useState('signup');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Please agree to Terms & Conditions');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Account created successfully!');

    if (onLogin) {
      onLogin();
    }

    navigate('/home'); 
  };

  const handleLogin = () => {
    alert('Login successful!');
    if (onLogin) {
      onLogin();
    }
    navigate('/home'); 
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (provider) => {
    alert(`Sign up with ${provider} clicked!`);
    if (onLogin) {
      onLogin();
    }
    navigate('/home'); 
  };

  return (
    <>
    <div className="signup-container">
      <div className="signup-card">
        <div className="tab-header">
          <div
            className={`tab ${activeTab === 'login' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('login')}
          >
            Log in
          </div>
          <div
            className={`tab ${activeTab === 'signup' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('signup')}
          >
            Create Account
          </div>
        </div>

        <div className="form-content">
          {activeTab === 'signup' ? (
            <>
              <h2>Create your account</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="password-toggle" onClick={togglePassword}>
                    {showPassword }
                  </span>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms">
                    I agree to all <a href="#">Terms & Conditions</a>
                  </label>
                </div>
                <button type="submit" className="create-btn">
                  Create Account
                </button>
              </form>
            </>
          ) : (
            <>
              <h2>Log in to Tech Heim</h2>
              <div className="input-group">
                <input type="email" placeholder="E-mail" required />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" required />
              </div>
               <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms">
                    Keep me logged in  <a href="#">Forgot Password ?</a>
                  </label>
                </div>
              <button type="button" className="create-btn" onClick={handleLogin}>
                Log In
              </button>
            </>
          )}

          <div className="divider">Or Sign Up with</div>

          <div className="social-buttons">
            <button className="social-btn google-btn" onClick={() => handleSocialLogin('Google')}>
              Google
            </button>
            <button className="social-btn facebook-btn" onClick={() => handleSocialLogin('Facebook')}>
              Facebook
            </button>
          </div>

          <div className="login-link">
            {activeTab === 'signup' ? (
              <>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('login'); }}>sign in</a></>
            ) : (
              <>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('signup'); }}>create account</a></>
            )}
          </div>
        </div>
      </div>
    </div>
       <Home />
    </>
  );
};

export default SignupForm;
