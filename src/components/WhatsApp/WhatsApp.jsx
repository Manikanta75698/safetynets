import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsApp.css';

const WhatsApp = () => {
  // Pre-filled message when user clicks the widget
  const phoneNumber = "8143267425";
  const message = "Hi, I am interested in Safety Nets / Invisible Grills. Please provide more details.";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;

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