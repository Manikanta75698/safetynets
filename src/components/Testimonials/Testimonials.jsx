import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ashwith",
      service: "Pigeon Safety Nets",
      review: "OurSafetyNets provided excellent pigeon control service in Bangalore. The team was professional, on time and the installation quality was outstanding."
    },
    {
      id: 2,
      name: "Ramesh Kumar",
      service: "Balcony Safety Nets",
      review: "Very satisfied with the service from OurSafetyNets. High-tensile quality materials, neat finishing and clear communication throughout the work."
    },
    {
      id: 3,
      name: "Pavithra",
      service: "Invisible Grills",
      review: "OurSafetyNets delivered exactly what they promised. Elegant invisible grills with an unobstructed city view. Great service and reasonable pricing."
    }
  ];

  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-header">
        <h2>What Our <span className="highlight">Customers Say</span></h2>
        <p>Rated 4.9/5 by over 5000+ happy families in Bengaluru.</p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((item) => (
          <div className="review-card" key={item.id}>
            <FaQuoteLeft className="quote-icon" />
            <p className="review-text">"{item.review}"</p>
            <div className="review-footer">
              <div className="reviewer-info">
                <h4>{item.name}</h4>
                <span>{item.service}</span>
              </div>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;