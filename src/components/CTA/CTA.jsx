import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './CTA.css';

const CTA = () => {
  const phoneNumber = "8143267425";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi OurSafetyNets, I need a free quotation for safety nets / invisible grills.")}`;

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Protect Your Home & Family Today!</h2>
        <p>Discuss pigeon netting, balcony safety nets or invisible grills for your Andhra Pradesh property and request a quote.</p>
        <div className="cta-buttons">
          <a href={`tel:+91${phoneNumber}`} className="cta-call-btn">
            <FaPhoneAlt /> Call Now: +91 {phoneNumber}
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