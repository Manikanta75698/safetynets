import React, { useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  // మెనూ ఓపెన్ ఉందా లేదా అని చెక్ చేయడానికి state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>Anil Safety Nets</h2>
      </div>

      {/* isOpen true అయితే active క్లాస్ యాడ్ అవుతుంది */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Reviews</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>

      <div className="nav-contact">
        <a href="tel:+919916162229" className="call-btn">
          <FaPhoneAlt /> <span className="phone-num">+91 9916162229</span>
        </a>
      </div>

      {/* మొబైల్ లో మెనూ ఐకాన్ (Hamburger / Close) */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;