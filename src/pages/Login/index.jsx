import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email.includes('@')) {
      formErrors.email = 'Enter a valid email.';
    }
    if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters.';
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Logging in with:', formData);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-header">Login</h2>

        <label className="email-label">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <label className="password-label">Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error-text">{errors.password}</span>}

        <div className="show-password">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword" className="show-password-label">Show Password</label>
        </div>

        <button type="submit">SIGN IN</button>

        <div className="login-links">
          <p>
            Forgot <Link to="#">Username / Password?</Link>
          </p>
          <p>
            Don’t have an account? <Link to="/">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
