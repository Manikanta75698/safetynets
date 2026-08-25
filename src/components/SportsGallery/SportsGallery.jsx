import React, { useState, useEffect } from 'react';
import './SportsGallery.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import your actual 10 sports images from assets folder
import sports1 from '../../assets/sports1.jpg';
import sports2 from '../../assets/sports2.jpg';
import sports3 from '../../assets/sports3.jpg';
import sports4 from '../../assets/sports4.jpg';
import sports5 from '../../assets/sports5.jpg';
import sports6 from '../../assets/sports6.jpg';
import sports7 from '../../assets/sports7.jpg';
import sports8 from '../../assets/sports8.jpg';
import sports9 from '../../assets/sports9.jpg';
import sports10 from '../../assets/sports10.jpg';

// Static title for all sports net slides
const commonTitle = "Professional Sports & Practice Net Installation";

const sportsSlides = [
  { url: sports1 },
  { url: sports2 },
  { url: sports3 },
  { url: sports4 },
  { url: sports5 },
  { url: sports6 },
  { url: sports7 },
  { url: sports8 },
  { url: sports9 },
  { url: sports10 },
];

const SportsGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sportsSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sportsSlides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sportsSlides.length);
  };

  return (
    <section className="sports-gallery-section" id="sports-gallery">
      <div className="sports-gallery-header">
        <span className="sports-gallery-subtitle">Our Expertise</span>
        <h2>All Types Of <span className="highlight">Sports Nets</span></h2>
        <p>Premium quality, high-impact sports practice nets for schools, academies, and residential complexes across Bengaluru.</p>
      </div>

      <div className="sports-hero-slider">
        {sportsSlides.map((slide, index) => (
          <div
            className={`sports-slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.url} alt="Sports Nets Installation" />
            <div className="sports-slide-content">
              <h3>{commonTitle}</h3>
            </div>
          </div>
        ))}

        {/* Manual Slide Navigation Buttons */}
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>

        {/* Dots Pagination */}
        <div className="slider-dots">
          {sportsSlides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsGallery;