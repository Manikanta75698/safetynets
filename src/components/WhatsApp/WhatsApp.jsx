import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsApp.css';
import { BUSINESS, waLink } from '../../config/business';

const WhatsApp = () => {
  // Pre-filled message when user clicks the widget
  const whatsappUrl = waLink(`Hi ${BUSINESS.name}, I am interested in safety nets / invisible grills in ${BUSINESS.city}. Please share details.`);

  return (
    <a
      href={whatsappUrl}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsApp;