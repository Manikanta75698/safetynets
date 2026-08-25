import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is the warranty provided on safety nets and invisible grills?",
    answer: "We provide a solid 5 to 10 years warranty on all our high-tensile safety nets and stainless steel invisible grills against manufacturing defects and wear-tear."
  },
  {
    question: "Do pigeon safety nets block sunlight and outside view?",
    answer: "No! Our nets are made of high-grade translucent Garware nylon threads which are extremely thin. They are virtually invisible from a distance and do not block your ventilation, sunlight, or scenic view."
  },
  {
    question: "Are safety nets safe and strong enough for children and pets?",
    answer: "Yes, 100%. Our balcony safety nets have high tensile strength (can withstand heavy loads up to 150+ kg) and prevent accidental falls for toddlers and pets like cats and dogs."
  },
  {
    question: "How long does the installation process take?",
    answer: "A standard balcony or window safety net installation takes only about 45 to 90 minutes. Our expert technicians complete it cleanly without damaging your walls."
  },
  {
    question: "Do you offer free inspection across Bengaluru?",
    answer: "Yes! We offer free doorstep inspection and measurement across all major areas in Bengaluru including Whitefield, Electronic City, HSR Layout, Koramangala, and more."
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
        <p>Everything you need to know about our safety net installations and services in Bengaluru.</p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <FaChevronDown className="faq-icon" />
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;