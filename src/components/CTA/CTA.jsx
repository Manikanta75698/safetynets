import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './CTA.css';
import { BUSINESS, TEL_LINK, PHONE_DISPLAY, waLink } from '../../config/business';

const CTA = () => {
  const whatsappUrl = waLink(`Hi ${BUSINESS.name}, I need a free quotation for safety nets / invisible grills in ${BUSINESS.city}.`);

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Protect Your Home & Family Today!</h2>
        <p>Discuss pigeon netting, balcony safety nets or invisible grills for your {BUSINESS.city} home, apartment or office and request a free quote.</p>
        <div className="cta-buttons">
          <a href={TEL_LINK} className="cta-call-btn">
            <FaPhoneAlt /> Call Now: {PHONE_DISPLAY}
          </a>
          <a href={whatsappUrl} className="cta-wa-btn" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;