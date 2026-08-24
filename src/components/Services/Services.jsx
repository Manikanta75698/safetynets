import React from 'react';
import './Services.css';
import {
  FaHome, FaBuilding, FaFutbol, FaChild, FaTools,
  FaCheckCircle, FaCar, FaSwimmingPool, FaShieldAlt, FaFeather
} from 'react-icons/fa';

const Services = () => {
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
      title: "Cricket Practice Net",
      description: "Professional Cricket Practice Nets designed for schools, academies, playgrounds, and training areas, ensuring safe practice sessions.",
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
      title: "Building & Construction Nets",
      description: "Prevent debris falls and ensure worker safety with our industrial-grade safety nets. Perfect for all building construction sites.",
      icon: <FaTools className="service-icon" />
    },
    {
      id: 7,
      title: "Duct Area Safety Nets",
      description: "Installs premium Duct Area Safety Net to prevent accidents, bird entry, and object falls while maintaining ventilation.",
      icon: <FaShieldAlt className="service-icon" />
    },
    {
      id: 8,
      title: "Monkey Safety Net",
      description: "Provides strong Monkey Safety Net to prevent monkey entry into homes, apartments, and commercial spaces.",
      icon: <FaShieldAlt className="service-icon" />
    },
    {
      id: 9,
      title: "Bird Spikes",
      description: "High-quality Bird Spikes solutions to prevent pigeons and birds from sitting on balconies, windows, ledges, and rooftops.",
      icon: <FaFeather className="service-icon" />
    },
    {
      id: 10,
      title: "Car Parking Safety Net",
      description: "Designed to protect parking areas from birds, falling debris, dust, and external disturbances while ensuring vehicle safety.",
      icon: <FaCar className="service-icon" />
    },
    {
      id: 11,
      title: "Swimming Pool Safety Net",
      description: "Strong and reliable Pool Safety Covers designed to protect children, pets, and pools from accidental falls and debris.",
      icon: <FaSwimmingPool className="service-icon" />
    },
    {
      id: 12,
      title: "Terrace Top Safety Net",
      description: "Offers durable Terrace Top Safety Net for homes and commercial buildings, providing protection against falls and bird disturbances.",
      icon: <FaHome className="service-icon" />
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>All Types of <span className="highlight">Safety Nets & Services</span></h2>
        <p>Comprehensive bird netting and safety solutions tailored for homes and businesses in Bengaluru.</p>
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