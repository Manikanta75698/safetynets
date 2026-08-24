import React from 'react';
import './Services.css';

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Balcony Safety Nets",
      description: "Protect your loved ones and pets from accidental falls. Strong, durable, and transparent nets that don't block your view.",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Pigeon / Anti-Bird Nets",
      description: "Keep your spaces clean and free from bird droppings. We use high-quality Garware nets that last for years without tearing.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Invisible Grills",
      description: "Modern stainless steel cables that offer high-level security without ruining the aesthetics of your balcony or windows.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Cricket Practice Net",
      description: "Professional Cricket Practice Nets designed for schools, academies, playgrounds, and training areas, ensuring safe practice sessions.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Children Safety Nets",
      description: "Ensure 100% safety for your kids around open balconies, staircases, and windows. Strong enough to bear heavy weight.",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Building & Construction Nets",
      description: "Prevent debris falls and ensure worker safety with our industrial-grade safety nets. Perfect for all building construction sites.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18fcd0e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Duct Area Safety Nets",
      description: "Installs premium Duct Area Safety Net to prevent accidents, bird entry, and object falls while maintaining ventilation.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "Monkey Safety Net",
      description: "Provides strong Monkey Safety Net to prevent monkey entry into homes, apartments, and commercial spaces.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
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
              <a href="tel:+919916162229" className="card-btn">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;