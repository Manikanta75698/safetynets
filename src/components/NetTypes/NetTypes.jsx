import React from 'react';
import './NetTypes.css';
import transparentImg from '../../assets/transparent-net.jpg';
import whiteImg from '../../assets/white-net.jpg';
import greenImg from '../../assets/green-net.jpg';
import blackImg from '../../assets/black-net.jpg';

const NetTypes = () => {
  const netTypes = [
    {
      title: "Transparent Safety Nets",
      image: transparentImg
    },
    {
      title: "White Safety Nets",
      image: whiteImg
    },
    {
      title: "Green Safety Nets",
      image: greenImg
    },
    {
      title: "Black Safety Nets",
      image: blackImg
    }
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
            <div className="net-circle-container">
              <img src={item.image} alt={item.title} className="net-circle-img" />
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetTypes;