import React, { useState } from "react";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    securityAnswer: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("✅ Account Created Successfully with Multi-Factor Setup!");
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <h1>SecurePay</h1>
      </header>

      <div className="auth-card">
        <h2>Create Your Account</h2>
        <p className="auth-subtext">
          Secure your transactions with multi-factor authentication.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <label>Security Question</label>
          <select
            name="securityQuestion"
            value={formData.securityQuestion}
            onChange={handleChange}
            required
          >
            <option value="">Select a question</option>
            <option value="pet">What is your first pet’s name?</option>
            <option value="school">What was your first school name?</option>
            <option value="city">Which city were you born in?</option>
          </select>

          <label>Answer</label>
          <input
            type="text"
            name="securityAnswer"
            placeholder="Your answer"
            value={formData.securityAnswer}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">Sign Up</button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
