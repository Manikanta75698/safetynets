import React from 'react';
import './Process.css';
import { FaComments, FaDraftingCompass, FaTools, FaShieldAlt } from 'react-icons/fa';

const Process = () => {
  const steps = [
    { id: "01", title: "Consultation", desc: "We assess your area and understand your specific safety needs.", icon: <FaComments /> },
    { id: "02", title: "Customization", desc: "Selecting high-quality Garware nets tailored exactly to your space.", icon: <FaDraftingCompass /> },
    { id: "03", title: "Installation", desc: "Expert fixing by our skilled team with minimal drilling required.", icon: <FaTools /> },
    { id: "04", title: "Maintenance", desc: "Long-lasting protection with ongoing support and warranty.", icon: <FaShieldAlt /> }
  ];

  return (
    <section className="process-section" id="process">
      <div className="process-header">
        <h2>Our Simple <span className="highlight">4-Step Process</span></h2>
        <p>Experience quick and hassle-free bird control setup.</p>
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