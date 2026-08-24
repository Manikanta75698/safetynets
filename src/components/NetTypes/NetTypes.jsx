import React from 'react';
import './NetTypes.css';

const NetTypes = () => {
  const netTypes = [
    { title: "Transparent / White Nets", desc: "Virtually invisible from a distance, maintaining your aesthetic view.", colorClass: "white-net" },
    { title: "White Safety Nets", desc: "High-grade nylon material offering great durability and strength.", colorClass: "standard-white-net" },
    { title: "Green Safety Nets", desc: "Heavy-duty green netting commonly used for sports, gardens, and construction.", colorClass: "green-net" },
    { title: "Black Safety Nets", desc: "UV-stabilized black nets built to withstand harsh sunlight and heavy weather.", colorClass: "black-net" }
  ];

  return (
    <section className="net-types-section">
      <div className="net-types-header">
        <h2>Available <span className="highlight">Net Color Variants</span></h2>
        <p>Choose from our wide variety of premium material finishes.</p>
      </div>
      <div className="net-types-grid">
        {netTypes.map((item, index) => (
          <div className="net-type-card" key={index}>
            <div className={`net-circle ${item.colorClass}`}></div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetTypes;