import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaShieldAlt, FaStar, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

// High-resolution architectural & balcony images tailored for safety nets
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
    badge: "Bengaluru's Most Trusted Safety Partner",
    title: "100% Secure Safety Nets & Invisible Grills",
    description: "Expert installation by certified professionals. Keep your kids and pets safe with high-tensile, weather-resistant nylon nets."
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85",
    badge: "Clean & Hygiene Balcony Solutions",
    title: "Pigeon & Anti-Bird Protection Netting",
    description: "Protect your balconies, windows, and ducts from pigeon mess and health hazards without blocking fresh air and sunlight."
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
    badge: "Modern Aesthetics Meets Maximum Security",
    title: "Premium SS 316 Invisible Grills",
    description: "Get unobstructed panoramic city views combined with unbreakable 400kg+ tensile strength safety."
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=85",
    badge: "Sports & Industrial Netting",
    title: "Custom Cricket Practice & Sports Nets",
    description: "Heavy-duty UV-stabilized sports nets designed for terrace cricket boxes, schools, academies, and residential societies."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="hero-section" id="home">
      {/* Dynamic Background Image Carousel */}
      <div className="hero-slider-bg">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide-item ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      {/* Hero Foreground Content with Key-based Re-animation */}
      <div className="hero-container">
        <div key={currentSlide} className="hero-content-animated">
          {/* Rating / Category Badge */}
          <div className="hero-badge">
            <FaStar className="star-icon" />
            <span>4.9/5 (5000+ Customers)</span>
            <span className="badge-divider">•</span>
            <span className="badge-category">{heroSlides[currentSlide].badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            {heroSlides[currentSlide].title}
          </h1>

          {/* Description */}
          <p className="hero-description">
            {heroSlides[currentSlide].description}
          </p>

          {/* CTAs */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Get a Free Quote
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <FaCheckCircle className="trust-icon" />
              <span>Free Doorstep Inspection</span>
            </div>
            <div className="trust-item">
              <FaShieldAlt className="trust-icon" />
              <span>5 to 10 Years Warranty</span>
            </div>
            <div className="trust-item">
              <FaCheckCircle className="trust-icon" />
              <span>Same Day Installation</span>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Slide">
          <FaChevronLeft />
        </button>
        <button className="slider-arrow next" onClick={handleNext} aria-label="Next Slide">
          <FaChevronRight />
        </button>

        {/* Slide Indicators */}
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="dot-progress"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;