import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ashwith",
      service: "Pigeon Safety Nets",
      review: "Anil Safety Nets provided excellent pigeon control service. The team was professional, on time and the results were outstanding. Highly recommended in Bangalore."
    },
    {
      id: 2,
      name: "Ramesh",
      service: "Safety Nets",
      review: "Very satisfied with the service from Anil Safety Nets. Quality materials, neat installation and clear communication throughout the work."
    },
    {
      id: 3,
      name: "Pavithra",
      service: "Balcony Safety Nets",
      review: "Anil Safety Nets delivered exactly what they promised. Effective pigeon control with a clean finish. Great service and reasonable pricing."
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
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