import React from 'react';
import './Services.css';
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

// Import only existing images from assets folder
import net1 from '../../assets/net1.jpg';
import net2 from '../../assets/net2.jpg';
import hero2 from '../../assets/hero2.jpeg';
import hero4 from '../../assets/hero4.jpg';
import net6 from '../../assets/net6.jpeg';
import net4 from '../../assets/net4.jpg';
import hero3 from '../../assets/hero3.jpeg';
import net8 from '../../assets/net8.jpeg';

const servicesData = [
  {
    id: 1,
    title: "Balcony Safety Nets",
    image: net1,
    description: "Protect your loved ones and pets from accidental falls. Strong, durable, and UV-resistant high-tensile nets that don't block your view.",
    features: ["100% Child & Pet Safe", "Weather Resistant", "Transparent View"]
  },
  {
    id: 2,
    title: "Pigeon & Anti-Bird Nets",
    image: net2,
    description: "Keep your spaces clean and free from bird droppings and health hazards. Premium quality nets designed to last for years without tearing.",
    features: ["Zero Pigeon Entry", "Unobstructed Sunlight", "Heavy-Duty Nylon"]
  },
  {
    id: 3,
    title: "Window & Balcony Spikes",
    image: hero2,
    description: "High-grade polycarbonate and stainless steel bird spikes to prevent pigeons and other birds from sitting on window ledges and railings.",
    features: ["100% Effective Deterrent", "Rust-Free & Long Lasting", "Aesthetic & Low Profile"]
  },
  {
    id: 4,
    title: "Car Parking Safety Nets",
    image: hero4,
    description: "Durable shading and protective net sheds designed for car parking slots to safeguard vehicles from sun heat, debris, and bird droppings.",
    features: ["UV Heat Protection", "Debris & Leaf Shield", "Strong Supporting Frames"]
  },
  {
    id: 5,
    title: "Stainless Steel Invisible Grills",
    image: net6,
    description: "Modern SS 316 invisible grills that offer high-level security without ruining the architectural aesthetics of your balcony or windows.",
    features: ["Rust-Proof SS 316", "400kg+ Tensile Strength", "Sleek Modern Look"]
  },
  {
    id: 6,
    title: "Cricket Practice Nets",
    image: net4, // Using hero4 since net7 was deleted
    description: "Professional Cricket Practice Nets designed for terrace boxes, schools, academies, and residential turf areas with high impact absorption.",
    features: ["High Impact Resistance", "UV Stabilized", "Customized Box Setup"]
  },
  {
    id: 7,
    title: "Building & Construction Nets",
    image: hero3,
    description: "Robust debris safety nets engineered for under-construction high-rise buildings to protect workers and passersby from falling materials.",
    features: ["OSHA Standard Safety", "High Tear Strength", "Complete Site Coverage"]
  },
  {
    id: 8,
    title: "Monkey & Animal Safety Nets",
    image: net8,
    description: "Heavy-duty wire-mesh reinforced safety nets designed to prevent monkey nuisance and stray animal intrusion into balconies and utility areas.",
    features: ["Extra Tough Wire Mesh", "Secure Lock Bounds", "Complete Peace of Mind"]
  }
];

const Services = () => {
  const phoneNumber = "8143267425";

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-subtitle">Expert Protection Solutions</span>
        <h2>Our Professional <span className="highlight">Safety Services</span></h2>
        <p>Certified installation across Bengaluru with 5 to 10 years warranty and free doorstep inspection.</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => {
          const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(`Hi OurSafetyNets, I am interested in getting ${service.title} installed. Please share details.`)}`;

          return (
            <div className="service-card" key={service.id}>
              <div className="service-img-wrapper">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-badge-tag">Certified Quality</div>
              </div>

              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="feat-icon" /> {feat}
                    </li>
                  ))}
                </ul>

                <div className="service-actions">
                  <a href={`tel:+91${phoneNumber}`} className="service-call-btn">
                    <FaPhoneAlt /> Call Now
                  </a>
                  <a href={whatsappUrl} className="service-wa-btn" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp /> Get Quote
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;