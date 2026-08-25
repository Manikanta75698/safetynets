import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './MobileBar.css';

const MobileBar = () => {
  const phoneNumber = "8143267425";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi OurSafetyNets, I need a free quotation for safety nets.")}`;

  return (
    <div className="mobile-sticky-bar">
      <a href={`tel:+91${phoneNumber}`} className="mob-btn mob-call">
        <FaPhoneAlt /> Call Now
      </a>
      <a href={whatsappUrl} className="mob-btn mob-whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  );
};

export default MobileBar;