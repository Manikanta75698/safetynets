import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaShieldAlt, FaStar, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

import slide1 from '../../assets/hero1.jpeg';
import slide2 from '../../assets/hero2.jpeg';
import slide3 from '../../assets/hero3.jpeg';
import slide4 from '../../assets/hero4.jpeg';

const heroSlides = [
  {
    image: slide1,
    badge: "Sports & Training Netting Solutions",
    title: "Professional Cricket Practice Nets",
    description: "Heavy-duty UV-stabilized cricket nets designed for terrace boxes, schools, academies, and residential turf areas."
  },
  {
    image: slide2,
    badge: "Effective Anti-Bird & Pigeon Control",
    title: "Balcony & Window Bird Spikes",
    description: "High-grade polycarbonate and stainless steel bird spikes to prevent pigeons from sitting on railings, ledges, and window sills."
  },
  {
    image: slide3,
    badge: "Industrial & Site Safety",
    title: "Construction Building Safety Nets",
    description: "Robust debris safety nets engineered for under-construction high-rise buildings to protect workers and passersby."
  },
  {
    image: slide4,
    badge: "Vehicle Protection Systems",
    title: "Car Parking Safety & Roof Shed Nets",
    description: "Durable shading and protective net sheds designed for car parking areas to safeguard vehicles from sun heat, debris, and bird droppings."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

      <div className="hero-container">
        <div key={currentSlide} className="hero-content-animated">
          <div className="hero-badge">
            <FaStar className="star-icon" />
            <span>4.9/5 (5000+ Customers)</span>
            <span className="badge-divider">•</span>
            <span className="badge-category">{heroSlides[currentSlide].badge}</span>
          </div>

          <h1 className="hero-title">
            {heroSlides[currentSlide].title}
          </h1>

          <p className="hero-description">
            {heroSlides[currentSlide].description}
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Get a Free Quote
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

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

        <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Slide">
          <FaChevronLeft />
        </button>
        <button className="slider-arrow next" onClick={handleNext} aria-label="Next Slide">
          <FaChevronRight />
        </button>

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