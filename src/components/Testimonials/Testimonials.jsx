import React from 'react';
import './Testimonials.css';

const serviceGuide = [
  {
    title: 'Balcony and window safety',
    description: 'Compare netting and invisible-grill options for the openings and layout of your home.',
  },
  {
    title: 'Pigeon control',
    description: 'Ask about netting options for balconies, utility areas, ducts and other open spaces.',
  },
  {
    title: 'Sports and project netting',
    description: 'Discuss the area, intended use and measurements before choosing a net for a terrace, academy or site.',
  },
];

const Testimonials = () => (
  <section className="testimonials-section" id="net-guide">
    <div className="testimonials-header">
      <h2>Choose the <span className="highlight">Right Net for Your Space</span></h2>
      <p>Tell us what you need to cover in Andhra Pradesh. We can discuss the available netting and grill options.</p>
    </div>

    <div className="testimonials-grid">
      {serviceGuide.map((item, index) => (
        <article className="review-card" key={item.title}>
          <span className="guide-number" aria-hidden="true">0{index + 1}</span>
          <h3>{item.title}</h3>
          <p className="review-text">{item.description}</p>
          <a className="guide-link" href="#contact">Discuss your requirement <span aria-hidden="true">→</span></a>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;