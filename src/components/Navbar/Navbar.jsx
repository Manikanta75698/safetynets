import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineShield } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false); // Automatically close mobile drawer when switching to desktop view
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon-wrapper">
            <MdOutlineShield />
          </div>
          <div className="logo-text">
            <h2>OurSafetyNets</h2>
            <p>Bengaluru</p>
          </div>
        </a>

        {/* Desktop Nav Links / Mobile Drawer */}
        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          {/* Mobile Call Button inside drawer */}
          <div className="mobile-drawer-footer">
            <a href="tel:+918143267425" className="mobile-call-action" onClick={closeMenu}>
              <FaPhoneAlt /> Call: +91 81432 67425
            </a>
          </div>
        </nav>

        {/* Header Actions */}
        <div className="navbar-actions">
          <a href="tel:+918143267425" className="header-call-btn" aria-label="Call Us">
            <FaPhoneAlt className="phone-icon-pulse" />
            <span>+91 81432 67425</span>
          </a>

          {/* Hamburger Icon */}
          <button
            className="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;