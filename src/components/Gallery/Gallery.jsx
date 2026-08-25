import React from 'react';
import './Gallery.css';
import net1 from '../../assets/net1.jpg';
import net6 from '../../assets/net6.jpeg';

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <span className="gallery-subtitle">Visual Proof</span>
        <h2>Transformation <span className="highlight">Showcase</span></h2>
        <p>See how our neat invisible grills and balcony safety nets maintain your home's gorgeous view while keeping it completely secure.</p>
      </div>

      <div className="gallery-grid">
        <div className="gallery-card">
          <div className="gallery-img-box">
            <img src={net6} alt="Invisible Grills Installation" loading="lazy" />
            <span className="badge-after">After Installation</span>
          </div>
          <div className="gallery-info">
            <h3>Stainless Steel Invisible Grills</h3>
            <p>Elegantly secured without blocking the panoramic skyline view of Bengaluru.</p>
          </div>
        </div>

        <div className="gallery-card">
          <div className="gallery-img-box">
            <img src={net1} alt="Balcony Safety Nets" loading="lazy" />
            <span className="badge-after">After Installation</span>
          </div>
          <div className="gallery-info">
            <h3>High-Tensile Balcony Safety Nets</h3>
            <p>Invisible from 10 feet away, providing absolute child and pet safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;