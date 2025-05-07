import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Voter',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentField, setCurrentField] = useState('fullName');  // Track the field being validated

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isLettersOnly = (text) => /^[A-Za-z\s]+$/.test(text);
  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Step-by-step validation
    if (currentField === 'fullName') {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required.';
      } else if (!isLettersOnly(formData.fullName.trim())) {
        newErrors.fullName = 'Only letters allowed.';
      }
    }

    if (currentField === 'email' && Object.keys(newErrors).length === 0) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
      } else if (!isValidEmail(formData.email.trim())) {
        newErrors.email = 'Invalid email.';
      }
    }

    if (currentField === 'phone' && Object.keys(newErrors).length === 0) {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required.';
      } else if (!isValidPhone(formData.phone.trim())) {
        newErrors.phone = 'Enter a 10-digit number.';
      }
    }

    if (currentField === 'password' && Object.keys(newErrors).length === 0) {
      if (!formData.password) {
        newErrors.password = 'Password is required.';
      } else if (formData.password.length < 6) {
        newErrors.password = 'At least 6 characters.';
      }
    }

    if (currentField === 'confirmPassword' && Object.keys(newErrors).length === 0) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm your password.';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
    }

    if (currentField === 'agree' && Object.keys(newErrors).length === 0) {
      if (!formData.agree) {
        newErrors.agree = 'You must agree to the terms and privacy policy.';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Return early to prevent proceeding to the next field
    }

    // If all fields are valid, proceed to the next field or submit the form
    if (currentField === 'agree') {
      alert('Registration successful!');
      navigate('/login');
    } else {
      setCurrentField(getNextField(currentField)); // Move to next field
    }
  };

  const getNextField = (currentField) => {
    switch (currentField) {
      case 'fullName': return 'email';
      case 'email': return 'phone';
      case 'phone': return 'password';
      case 'password': return 'confirmPassword';
      case 'confirmPassword': return 'agree';
      default: return 'fullName';
    }
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <div className="form-header">
          <img
            src="https://cdn-icons-png.flaticon.com/128/747/747968.png"
            alt="User Icon"
            className="form-icon"
          />
          <h2>Create your account</h2>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>

        <div className="input-row">
          <label className="Register-label">Full Name</label>
          <div className="input-with-error">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? 'error' : ''}
            />
            {errors.fullName && (
              <span className="inline-error">{errors.fullName}</span>
            )}
          </div>
        </div>

        <div className="input-row">
          <label className="Register-label">Email address</label>
          <div className="input-with-error">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && (
              <span className="inline-error">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="input-row">
          <label className="Register-label">Phone Number</label>
          <div className="input-with-error">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && (
              <span className="inline-error">{errors.phone}</span>
            )}
          </div>
        </div>

        <label className="Register-label">I want to register as</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="Voter">Voter</option>
          <option value="Candidate">Candidate</option>
        </select>

        <div className="input-row">
          <label className="Register-label">Password</label>
          <div className="input-with-error password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            <img
              src={
                showPassword
                  ? 'https://cdn-icons-png.flaticon.com/128/2767/2767146.png'
                  : 'https://cdn-icons-png.flaticon.com/512/11502/11502607.png'
              }
              alt="Toggle Password"
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
            {errors.password && (
              <span className="inline-error">{errors.password}</span>
            )}
          </div>
        </div>

        <div className="input-row">
          <label className="Register-label">Confirm Password</label>
          <div className="input-with-error password-wrapper">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
            />
            <img
              src={
                showConfirmPassword
                  ? 'https://cdn-icons-png.flaticon.com/128/2767/2767146.png'
                  : 'https://cdn-icons-png.flaticon.com/512/11502/11502607.png'
              }
              alt="Toggle Confirm Password"
              className="eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            {errors.confirmPassword && (
              <span className="inline-error">{errors.confirmPassword}</span>
            )}
          </div>
        </div>

        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <span>
            I agree to the <a href="#">Terms of Service</a> and{' '}
            <a href="#">Privacy Policy</a>
          </span>
        </div>
        {errors.agree && (
          <div className="inline-error">{errors.agree}</div>
        )}

        <button type="submit">Create account</button>
      </form>
    </div>
  );
};

export default Register;