import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); 

  const features = [
    { icon: "💳", title: "Secure Web Transactions", description: "All transactions are protected with multi-factor verification and encrypted sessions." },
    { icon: "🔐", title: "OTP + PIN Authorization", description: "High-risk transactions require OTP and PIN, ensuring maximum security." },
    { icon: "📍", title: "Device & Location Checks", description: "Detect unusual devices and locations to prevent fraudulent activity." },
    { icon: "📲", title: "Real-Time Alerts", description: "Receive instant notifications for every login and transaction." }
  ];

  const securityCards = [
    { icon: "🔒", title: "Encrypted Sessions", description: "All data is encrypted in transit." },
    { icon: "📡", title: "Device Trust", description: "Trusted devices require minimal verification." },
    { icon: "⚡", title: "Real-Time Alerts", description: "Stay informed about every login & transaction." }
  ];

  const testimonials = [
    { name: "Ravi K.", feedback: "SecurePay Web made online payments stress-free. Love the device and behavior checks!" },
    { name: "Anita S.", feedback: "I feel safe knowing every transaction is verified with OTP and PIN." }
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>SecurePay Web</h1>
        <div>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>"Secure Your Transactions, Empower Your Web Payments"</h2>
        <p>
          Experience a new level of online payment security with OTP, PIN, and intelligent device verification —
          all in one clean interface.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card">
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </section>

      {/* Security Section */}
      <section className="security">
        <h2>Advanced Security</h2>
        <p>
          Every login and transaction goes through multiple checks including device recognition, location
          verification, behavioral analysis, and secure session management.
        </p>
        <div className="security-cards">
          {securityCards.map((s, idx) => (
            <div key={idx} className="security-card">
              <div className="icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <p>"{t.feedback}"</p>
            <h4>{t.name}</h4>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Get Started Today</h2>
        <p>Sign up now and experience a secure web-based transaction system like never before.</p>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </section>

      <footer>&copy; 2025 SecurePay Web. All Rights Reserved.</footer>
    </div>
  );
};

export default Home;
