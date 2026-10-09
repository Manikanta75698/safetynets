import React from 'react';
import './Footer.css';
import { FaShieldAlt, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = "8143267425";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi OurSafetyNets, I need information about safety net installation in Bangalore.")}`;

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <div className="logo-icon-wrapper">
              <FaShieldAlt />
            </div>
            <div>
              <h3>OurSafetyNets</h3>
              <p>BENGALURU</p>
            </div>
          </div>
          <p className="footer-about">
            OurSafetyNets helps Bengaluru customers explore safety nets, anti-bird netting and invisible grills. Contact us to discuss your space and request a quote.
          </p>
          <div className="footer-contact-info">
            <p><FaMapMarkerAlt className="f-icon" /> Serving All Over Bengaluru</p>
            <p><FaPhoneAlt className="f-icon" /> <a href={`tel:+91${phoneNumber}`}>+91 {phoneNumber}</a></p>
            <p><FaWhatsapp className="f-icon" /> <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#sports-gallery">Sports Nets Gallery</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col">
          <h4>Safety Solutions</h4>
          <ul className="footer-links-list">
            <li><a href="#services">Pigeon & Anti-Bird Nets</a></li>
            <li><a href="#services">Balcony Safety Nets</a></li>
            <li><a href="#services">Stainless Steel Invisible Grills</a></li>
            <li><a href="#services">Cricket Practice Nets</a></li>
            <li><a href="#services">Construction Safety Nets</a></li>
            <li><a href="#services">Monkey & Animal Nets</a></li>
          </ul>
        </div>

        {/* Column 4: Bengaluru Service Areas */}
        <div className="footer-col">
          <h4>Service Areas in Bengaluru</h4>
          <ul className="footer-links-list areas-list">
            <li><a href="#contact">Whitefield</a></li>
            <li><a href="#contact">Electronic City</a></li>
            <li><a href="#contact">HSR Layout</a></li>
            <li><a href="#contact">Koramangala</a></li>
            <li><a href="#contact">Indiranagar</a></li>
            <li><a href="#contact">Jayanagar</a></li>
            <li><a href="#contact">JP Nagar</a></li>
            <li><a href="#contact">Marathahalli</a></li>
            <li><a href="#contact">Bellandur</a></li>
            <li><a href="#contact">Hebbal & Yelahanka</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} OurSafetyNets Bengaluru. All Rights Reserved.</p>
          <p className="footer-designer">Safety nets and invisible grills in Bengaluru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
