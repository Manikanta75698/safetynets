import React from 'react';
import './Footer.css';
import { FaShieldAlt, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = "8143267425";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi OurSafetyNets, I need information about safety net installation in Bangalore.")}`;

  return (
    <footer className="footer-section" id="contact">
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
            Bengaluru’s most trusted safety partner. We provide professional, high-tensile safety nets, anti-bird pigeon netting, and premium invisible grills with 5 to 10 years warranty.
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
            <li><a href="#gallery">Installation Gallery</a></li>
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

        {/* Column 4: SEO Service Areas (Replaced with Keywords Directory) */}
        <div className="footer-col seo-directory-col">
          <h4>Popular Services in Bengaluru</h4>
          <div className="seo-directory-grid">
            <div className="seo-cat">
              <h5>Invisible Grills</h5>
              <ul>
                <li><a href="#services">For Balcony Bangalore</a></li>
                <li><a href="#services">For Windows Bangalore</a></li>
                <li><a href="#services">Installation Bangalore</a></li>
                <li><a href="#services">For Kids/Pets Safety</a></li>
              </ul>
            </div>
            <div className="seo-cat">
              <h5>Sports Nets</h5>
              <ul>
                <li><a href="#services">Cricket Practice</a></li>
                <li><a href="#services">Sports Practice Nets</a></li>
                <li><a href="#services">Terrace Cricket Nets</a></li>
              </ul>
            </div>
            <div className="seo-cat">
              <h5>Safety Nets</h5>
              <ul>
                <li><a href="#services">Balcony Safety Nets</a></li>
                <li><a href="#services">Building Safety</a></li>
                <li><a href="#services">Car Parking Nets</a></li>
                <li><a href="#services">Construction Nets</a></li>
                <li><a href="#services">Monkey Safety</a></li>
              </ul>
            </div>
            <div className="seo-cat">
              <h5>Bird Nets</h5>
              <ul>
                <li><a href="#services">Anti Bird Nets</a></li>
                <li><a href="#services">Bird Spikes</a></li>
                <li><a href="#services">Nets Fixing Near Me</a></li>
                <li><a href="#services">Balcony Pigeon Netting</a></li>
                <li><a href="#services">Installation Charges</a></li>
              </ul>
            </div>
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