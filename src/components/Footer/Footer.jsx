import React from 'react';
import './Footer.css';
import { FaShieldAlt, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = "8143267425";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi OurSafetyNets, I need information about safety net installation in AP.")}`;

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
              <p>ANDHRA PRADESH</p>
            </div>
          </div>
          <p className="footer-about">
            OurSafetyNets helps AP customers explore safety nets, anti-bird netting and invisible grills. Contact us to discuss your space and request a quote.
          </p>
          <div className="footer-contact-info">
            <p><FaMapMarkerAlt className="f-icon" /> Serving All Over AP</p>
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

        {/* Column 4: AP Service Areas */}
        <div className="footer-col">
          <h4>Service Areas in AP</h4>
          <ul className="footer-links-list areas-list">
            <li><a href="#contact">Visakhapatnam</a></li>
            <li><a href="#contact">Vijayawada</a></li>
            <li><a href="#contact">Rajahmundry</a></li>
            <li><a href="#contact">Kakinada</a></li>
            <li><a href="#contact">Guntur</a></li>
            <li><a href="#contact">Tirupati</a></li>
            <li><a href="#contact">Nellore</a></li>
            <li><a href="#contact">Kurnool</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} OurSafetyNets AP. All Rights Reserved.</p>
          <p className="footer-designer">Safety nets and invisible grills in AP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;