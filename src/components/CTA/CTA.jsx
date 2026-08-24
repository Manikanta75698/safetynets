import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Protect Your Home & Family Today!</h2>
        <p>Get professional installation of pigeon nets, balcony safety nets, and invisible grills across Bengaluru with free inspection.</p>
        <div className="cta-buttons">
          <a href="tel:+919916162229" className="cta-call-btn">
            <FaPhoneAlt /> Call Now: +91 9916162229
          </a>
          <a href="https://wa.me/919916162229?text=Hi%20Anil%20Safety%20Nets,%20I%20need%20a%20free%20quotation." className="cta-wa-btn" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;