import React from 'react';
import './Services.css';

// Importing local images net1 to net8 from src/assets/
import net1 from '../../assets/net1.jpg';
import net2 from '../../assets/net2.jpg';
import net3 from '../../assets/net3.jpg';
import net4 from '../../assets/net4.jpg';
import net5 from '../../assets/net5.jpg';
import net6 from '../../assets/net6.jpg';
import net7 from '../../assets/net7.jpg';
import net8 from '../../assets/net8.jpg';

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Balcony Safety Nets",
      description: "Protect your loved ones and pets from accidental falls. Strong, durable, and transparent nets that don't block your view.",
      image: net1
    },
    {
      id: 2,
      title: "Pigeon / Anti-Bird Nets",
      description: "Keep your spaces clean and free from bird droppings. We use high-quality Garware nets that last for years without tearing.",
      image: net2
    },
    {
      id: 3,
      title: "Invisible Grills",
      description: "Modern stainless steel cables that offer high-level security without ruining the aesthetics of your balcony or windows.",
      image: net3
    },
    {
      id: 4,
      title: "Cricket Practice Net",
      description: "Professional Cricket Practice Nets designed for schools, academies, playgrounds, and training areas, ensuring safe practice sessions.",
      image: net4
    },
    {
      id: 5,
      title: "Children Safety Nets",
      description: "Ensure 100% safety for your kids around open balconies, staircases, and windows. Strong enough to bear heavy weight.",
      image: net5
    },
    {
      id: 6,
      title: "Building & Construction Nets",
      description: "Prevent debris falls and ensure worker safety with our industrial-grade safety nets. Perfect for all building construction sites.",
      image: net6
    },
    {
      id: 7,
      title: "Duct Area Safety Nets",
      description: "Installs premium Duct Area Safety Net to prevent accidents, bird entry, and object falls while maintaining ventilation.",
      image: net7
    },
    {
      id: 8,
      title: "Monkey Safety Net",
      description: "Provides strong Monkey Safety Net to prevent monkey entry into homes, apartments, and commercial spaces.",
      image: net8
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
            <div className="service-img-container">
              <img src={service.image} alt={service.title} className="service-img" />
            </div>
            <div className="service-card-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="tel:+918143267425" className="card-btn">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 