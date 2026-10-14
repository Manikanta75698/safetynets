import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './MobileBar.css';
import { TEL_LINK, waLink } from '../../config/business';

const MobileBar = () => {
  const whatsappUrl = waLink();

  return (
    <div className="mobile-sticky-bar">
      <a href={TEL_LINK} className="mob-btn mob-call">
        <FaPhoneAlt /> Call Now
      </a>
      <a href={whatsappUrl} className="mob-btn mob-whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  );
};

export default MobileBar;