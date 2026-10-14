import React from 'react';
import './Footer.css';
import { FaShieldAlt, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { BUSINESS, TEL_LINK, PHONE_DISPLAY, ADDRESS_DISPLAY, waLink } from '../../config/business';

const Footer = () => {
  const whatsappUrl = waLink(`Hi ${BUSINESS.name}, I need information about safety net installation in ${BUSINESS.city}.`);

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
              <h3>{BUSINESS.name}</h3>
              <p>{BUSINESS.cityOfficial.toUpperCase()}, {BUSINESS.state.toUpperCase()}</p>
            </div>
          </div>
          <p className="footer-about">
            {BUSINESS.name} installs balcony safety nets, pigeon nets, invisible grills and sports nets for homes, apartments and projects across {BUSINESS.city} ({BUSINESS.cityOfficial}). Contact us to discuss your space and request a quote.
          </p>
          <div className="footer-contact-info">
            <p><FaMapMarkerAlt className="f-icon" /> {ADDRESS_DISPLAY}</p>
            <p><FaPhoneAlt className="f-icon" /> <a href={TEL_LINK}>{PHONE_DISPLAY}</a></p>
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

        {/* Column 4: Service areas (list lives in src/config/business.js) */}
        <div className="footer-col areas-col">
          <h4>Service Areas in {BUSINESS.city}</h4>
          <ul className="footer-links-list areas-list" aria-label={`Localities we serve in ${BUSINESS.city}`}>
            {BUSINESS.areas.map((area) => (
              <li key={area}><a href="#contact">{area}</a></li>
            ))}
          </ul>
          <p className="areas-note">…and all other localities across {BUSINESS.cityOfficial}.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name} {BUSINESS.city}. All Rights Reserved.</p>
          <p className="footer-designer">Safety nets and invisible grills in {BUSINESS.city}, {BUSINESS.state}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;