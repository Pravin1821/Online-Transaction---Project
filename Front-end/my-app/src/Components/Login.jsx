import React, { useState } from "react";
import "./Auth.css";

const Login = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2); // Simulate sending OTP
    else alert("✅ Login Successful (Multi-Factor Verified)");
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <h1>SecurePay</h1>
      </header>

      <div className="auth-card">
        <h2>{step === 1 ? "Login to Your Account" : "Verify OTP"}</h2>
        <p className="auth-subtext">
          {step === 1
            ? "Enter your registered number and password to receive OTP."
            : "Enter the OTP sent to your registered number to continue."}
        </p>

        <form onSubmit={handleNext}>
          {step === 1 ? (
            <>
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </>
          ) : (
            <>
              <label>OTP</label>
              <input
                type="text"
                name="otp"
                placeholder="Enter 6-digit OTP"
                value={formData.otp}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit" className="auth-btn">
            {step === 1 ? "Send OTP" : "Verify & Login"}
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
