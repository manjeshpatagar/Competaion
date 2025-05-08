import React from "react";
import "./index.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      {/* Mission & Vision */}
      <section className="about-section">
        <h2 className="about-subtitle">Platform Mission & Vision</h2>
        <p className="about-text">
          Our mission is to empower learners and educators by providing an engaging and accessible platform for growth and development.
          We envision a future where education is personalized, interactive, and available to everyone, everywhere.
        </p>
      </section>

      {/* Founders and Team */}
      <section className="about-section">
        <h2 className="about-subtitle">Founders and Team Info</h2>
        <p className="about-text">
          Our team is a group of passionate developers, designers, and educators committed to transforming the way people learn online.
          Founded by innovators who believe in the power of technology to bridge educational gaps, we strive to create impactful experiences.
        </p>
      </section>

      {/* Contact */}
      <section className="about-section">
        <h2 className="about-subtitle">Contact Details</h2>
        <div className="about-contact-item">
          <img src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png" alt="email" />
          <p>support@yourplatform.com</p>
        </div>
        <div className="about-contact-item">
          <img src="https://cdn-icons-png.flaticon.com/128/447/447031.png" alt="location" />
          <p>1234 Learning Lane, Innovation City, ED 45678</p>
        </div>
        <div className="about-contact-item">
          <span role="img" aria-label="phone">📞</span>
          <p>+1 (234) 567-8901</p>
        </div>
      </section>

      {/* Social Links */}
      <section className="about-section">
        <h2 className="about-subtitle">Follow Us</h2>
        <div className="about-social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" />
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter" />
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram" />
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
