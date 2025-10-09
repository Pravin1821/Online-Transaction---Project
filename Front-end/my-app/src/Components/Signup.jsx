import React, { useState } from "react";
import "./Auth.css";

const Signup = () => {
  const [step, setStep] = useState(1); // Step 1: fill form, Step 2: verify OTP
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    securityAnswer: "",
  });
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState(""); // For demo, store OTP

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      // Validate passwords
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Generate OTP (demo purpose, usually sent via SMS)
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setSentOtp(generatedOtp);
      alert(`✅ OTP Sent to ${formData.phone}: ${generatedOtp}`);
      setStep(2); // move to OTP verification
    } else if (step === 2) {
      // Verify OTP
      if (otp === sentOtp) {
        alert("✅ Account Created Successfully with Multi-Factor Setup!");
        // Here you can call backend API to save user
        setStep(1); // reset or navigate to login
      } else {
        alert("❌ Invalid OTP. Please try again!");
      }
    }
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

        {step === 1 ? (
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

            <button type="submit" className="auth-btn">Send OTP</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Enter OTP</label>
            <input
              type="text"
              placeholder="Enter OTP sent to your phone"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit" className="auth-btn">Verify OTP</button>
          </form>
        )}

        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
