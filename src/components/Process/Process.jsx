import React from 'react';
import './Process.css';
import { FaComments, FaDraftingCompass, FaTools, FaShieldAlt } from 'react-icons/fa';

const Process = () => {
  const steps = [
    { id: "01", title: "Consultation", desc: "We assess your area and understand your specific safety needs.", icon: <FaComments /> },
    { id: "02", title: "Options", desc: "Compare available net materials, finishes and grill options for the space.", icon: <FaDraftingCompass /> },
    { id: "03", title: "Installation", desc: "Discuss measurements, access and fixing points before confirming the work.", icon: <FaTools /> },
    { id: "04", title: "Care", desc: "Ask about product care and the warranty terms for the selected option.", icon: <FaShieldAlt /> }
  ];

  return (
    <section className="process-section" id="process">
      <div className="process-header">
        <h2>Our Simple <span className="highlight">4-Step Process</span></h2>
        <p>Start with your requirement, compare suitable options and confirm the details before installation.</p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div className="process-card" key={step.id}>
            <div className="process-icon">{step.icon}</div>
            <div className="process-number">{step.id}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
