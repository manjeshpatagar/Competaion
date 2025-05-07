import React, { useState } from 'react';
import './index.css';

const VoterRegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.includes('@')) newErrors.email = 'Enter a valid email';
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert('Redirecting to payment...');
      // Here you can handle payment logic
    }
  };

  return (
    <div className="voter-register-container">
      <h2 className="voter-title">Register Voting Page</h2>

      <div className="voter-form-group">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          className="voter-input"
        />
        {errors.name && <p className="voter-error">{errors.name}</p>}
      </div>

      <div className="voter-form-group">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="voter-input"
        />
        {errors.email && <p className="voter-error">{errors.email}</p>}
      </div>

      <div className="voter-form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
          className="voter-input"
        />
        {errors.phone && <p className="voter-error">{errors.phone}</p>}
      </div>

      <div className="voter-form-group">
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          className="voter-input"
        />
        {errors.password && <p className="voter-error">{errors.password}</p>}
      </div>

      <button className="voter-submit-button" onClick={handleSubmit}>
        Pay for Vote @ $3
      </button>
    </div>
  );
};

export default VoterRegisterPage;
