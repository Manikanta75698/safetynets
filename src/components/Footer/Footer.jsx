import React from 'react';
import './Footer.css';
import { FaShieldAlt, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = "8143267425";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi OurSafetyNets, I need more info about safety nets installation.")}`;

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">

        {/* Column 1: Brand Info */}
        <div className="footer-col">
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
            Bengaluru’s most trusted safety partner. We deliver high-tensile balcony safety nets, pigeon anti-bird netting, and premium invisible grills with expert installation.
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
            <li><a href="#process">Installation Process</a></li>
            <li><a href="#reviews">Customer Reviews</a></li>
            <li><a href="#contact">Get Free Quote</a></li>
          </ul>
        </div>

        {/* Column 3: Safety Solutions */}
        <div className="footer-col">
          <h4>Safety Solutions</h4>
          <ul className="footer-links-list">
            <li><a href="#services">Pigeon & Anti-Bird Nets</a></li>
            <li><a href="#services">Balcony Safety Nets</a></li>
            <li><a href="#services">Stainless Steel Invisible Grills</a></li>
            <li><a href="#services">Cricket Practice Nets</a></li>
            <li><a href="#services">Car Parking & Shed Nets</a></li>
          </ul>
        </div>

        {/* Column 4: SEO Service Areas in Bengaluru */}
        <div className="footer-col">
          <h4>Service Areas in Bengaluru</h4>
          <p className="seo-areas-text">
            Free doorstep inspection and same-day installation across major Bengaluru locations:
          </p>
          <div className="seo-tags">
            <span>Whitefield</span>
            <span>Electronic City</span>
            <span>HSR Layout</span>
            <span>Koramangala</span>
            <span>Indiranagar</span>
            <span>Marathahalli</span>
            <span>Bellandur</span>
            <span>Hebbal</span>
            <span>Jayanagar</span>
            <span>JP Nagar</span>
            <span>Banashankari</span>
            <span>Yelahanka</span>
            <span>Sarjapur Road</span>
            <span>BTM Layout</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} OurSafetyNets Bengaluru. All Rights Reserved.</p>
          <p className="footer-designer">Crafted for Maximum Home Safety</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;