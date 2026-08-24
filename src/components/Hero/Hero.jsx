import React from 'react';
import './Hero.css';
import { FaShieldAlt, FaStar, FaWrench } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <div className="rating-badge">
          <FaStar className="star-icon" /> 4.9/5 (5000+ Customers)
        </div>
        <h1>100% Secure <br /><span className="highlight">Safety Nets & Invisible Grills</span> <br />in Bengaluru</h1>
        <p>Expert installation of Pigeon Nets, Balcony Safety Nets, and Sports Nets. Protect your family and property with our durable, high-quality materials.</p>

        <div className="hero-buttons">
          <a href="tel:+919916162229" className="primary-btn">Get a Free Quote</a>
          <a href="#services" className="secondary-btn">Explore Services</a>
        </div>

        <div className="hero-features">
          <div className="feature"><FaShieldAlt /> 20+ Years Experience</div>
          <div className="feature"><FaWrench /> Free Installation</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;