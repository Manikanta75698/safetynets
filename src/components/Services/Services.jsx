import React from 'react';
import './Services.css';
import { FaHome, FaBuilding, FaFutbol, FaChild, FaTools, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  // Array of services so that code remains clean
  const serviceData = [
    {
      id: 1,
      title: "Balcony Safety Nets",
      description: "Protect your loved ones and pets from accidental falls. Strong, durable, and transparent nets that don't block your view.",
      icon: <FaHome className="service-icon" />
    },
    {
      id: 2,
      title: "Pigeon / Anti-Bird Nets",
      description: "Keep your spaces clean and free from bird droppings. We use high-quality Garware nets that last for years without tearing.",
      icon: <FaBuilding className="service-icon" />
    },
    {
      id: 3,
      title: "Invisible Grills",
      description: "Modern stainless steel cables that offer high-level security without ruining the aesthetics of your balcony or windows.",
      icon: <FaCheckCircle className="service-icon" />
    },
    {
      id: 4,
      title: "Sports & Cricket Nets",
      description: "Heavy-duty nets for cricket practice, football grounds, and sports arenas. Built to withstand high-impact usage.",
      icon: <FaFutbol className="service-icon" />
    },
    {
      id: 5,
      title: "Children Safety Nets",
      description: "Ensure 100% safety for your kids around open balconies, staircases, and windows. Strong enough to bear heavy weight.",
      icon: <FaChild className="service-icon" />
    },
    {
      id: 6,
      title: "Construction & Industrial Nets",
      description: "Prevent debris falls and ensure worker safety with our industrial-grade safety nets. Perfect for all building sites.",
      icon: <FaTools className="service-icon" />
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>Our Premium <span className="highlight">Services</span></h2>
        <p>Expert bird netting and safety solutions tailored for Bengaluru homes and businesses.</p>
      </div>

      <div className="services-grid">
        {serviceData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="icon-container">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="tel:+919916162229" className="card-btn">Book Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;