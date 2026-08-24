import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = "8143267425";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi, I'm interested in safety nets / invisible grills. Please share details.")}`;

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Column 1: About Brand */}
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-icon-wrap"><FaShieldAlt /></span>
            <h2>OurSafetyNets</h2>
          </div>
          <p className="footer-desc">
            Bengaluru's most trusted provider for high-quality Balcony Safety Nets, Pigeon Nets, Invisible Grills, and Sports Nets. Ensuring complete safety with professional same-day installation.
          </p>
          <div className="footer-socials">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#reviews">Customer Reviews</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Service Areas in Bengaluru */}
        <div className="footer-col">
          <h3>Service Areas</h3>
          <ul className="footer-links service-areas-list">
            <li><span>Whitefield & Marathahalli</span></li>
            <li><span>HSR Layout & Koramangala</span></li>
            <li><span>Indiranagar & MG Road</span></li>
            <li><span>Electronic City & BTM</span></li>
            <li><span>Hebbal & Yelahanka</span></li>
            <li><span>Mathikere & Yeshwanthpur</span></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="footer-contact-info">
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Bangalore - 560054</span>
            </li>
            <li>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:+918143267425">+91 81432 67425</a>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:support@oursafetynets.com">support@oursafetynets.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OurSafetyNets Bengaluru. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;