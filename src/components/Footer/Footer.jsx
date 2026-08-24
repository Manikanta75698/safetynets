import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-about">
          <h3>Anil Safety Nets</h3>
          <p>Your trusted partner for high-quality bird netting and safety solutions in Bengaluru. We guarantee durability and 100% safety.</p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>Top Services</h3>
          <ul>
            <li>Balcony Safety Nets</li>
            <li>Pigeon / Bird Nets</li>
            <li>Invisible Grills</li>
            <li>Sports Practice Nets</li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Anil Safety Nets Solutions. All Rights Reserved. Designed with ❤️ by Manikantha</p>
      </div>
    </footer>
  );
};

export default Footer;