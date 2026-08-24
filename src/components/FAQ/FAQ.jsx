import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are safety nets used for?",
      answer: "Safety nets are used for balconies, windows, staircases, and open areas to prevent accidental falls and protect your family, children, and pets."
    },
    {
      question: "What are invisible grills?",
      answer: "Invisible grills are high-tensile stainless steel cable systems that provide robust safety and security for balconies and windows without blocking your exterior view or airflow."
    },
    {
      question: "Is heavy drilling required for installation?",
      answer: "Minimal drilling is required for both safety nets and invisible grills. Our expert team ensures secure fixing without causing structural damage to your walls."
    },
    {
      question: "Can safety nets and invisible grills be customized?",
      answer: "Yes, all our safety nets and invisible grills are custom-measured and installed based on your exact balcony size, window dimensions, and specific safety needs."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2>Frequently Asked <span className="highlight">Questions</span></h2>
        <p>Find answers to common questions about our bird netting and safety services.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;