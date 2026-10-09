import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is the warranty provided on safety nets and invisible grills?",
    answer: "Warranty terms can vary by product and material. Ask us to confirm the applicable coverage for your selected net or grill in the quote."
  },
  {
    question: "Do pigeon safety nets block sunlight and outside view?",
    answer: "Net visibility depends on the material, mesh and viewing distance. Ask to compare available options and how each may affect light, ventilation and the view from your balcony."
  },
  {
    question: "Are safety nets safe and strong enough for children and pets?",
    answer: "A net can add a barrier, but no product should be treated as a guarantee against falls. Ask about the material, installation points and suitable use for your space; keep children supervised around open edges."
  },
  {
    question: "How long does the installation process take?",
    answer: "Timing depends on the size, access and fixing points of the area. Share photos or request a site measurement for an estimate."
  },
  {
    question: "Do you offer free inspection across Andhra Pradesh?",
    answer: "Inspection availability may depend on your location and project. Contact us with your area and requirements to confirm whether a site visit is available."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <span className="faq-subtitle">Got Questions?</span>
        <h2>Frequently Asked <span className="highlight">Questions</span></h2>
        <p>Everything you need to know about our safety net installations and services in Andhra Pradesh.</p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <button className="faq-trigger" type="button" aria-expanded={activeIndex === index} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <h3>{item.question}</h3>
                <FaChevronDown className="faq-icon" />
              </div>
            </button>
            <div className="faq-answer" aria-hidden={activeIndex !== index}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;