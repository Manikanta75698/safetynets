import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsApp.css';

const WhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919916162229?text=Hi%20Anil%20Safety%20Nets,%20I%20am%20looking%20for%20a%20quotation." 
      className="whatsapp-btn" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="wa-icon" />
    </a>
  );
};

export default WhatsApp;