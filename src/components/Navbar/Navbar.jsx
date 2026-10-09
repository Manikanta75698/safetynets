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

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon-wrapper">
            <MdOutlineShield />
          </div>
          <div className="logo-text">
            <h2>OurSafetyNets</h2>
            <p>SAFETY • ANDHRA PRADESH</p>
          </div>
        </a>

        {/* Desktop Nav Links / Mobile Drawer */}
        <nav id="mobile-navigation" className={`navbar-links ${isOpen ? 'active' : ''}`} aria-label="Main navigation">
          <div className="drawer-header">
            <a href="#home" className="navbar-logo" onClick={closeMenu}>
              <div className="logo-icon-wrapper"><MdOutlineShield /></div>
              <div className="logo-text">
                <h2>OurSafetyNets</h2>
                <p>SAFETY • ANDHRA PRADESH</p>
              </div>
            </a>
            <button className="drawer-close" type="button" onClick={closeMenu} aria-label="Close navigation menu"><FaTimes /></button>
          </div>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#net-guide" onClick={closeMenu}>Net Guide</a>
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
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
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