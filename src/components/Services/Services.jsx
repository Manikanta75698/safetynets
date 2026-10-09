import React from 'react';
import './Services.css';
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

// Import all real installation images cleanly from assets (Flow: net1, net2... net8)
import net1 from '../../assets/net1.jpg'; // ID: 1
import net2 from '../../assets/net2.jpg'; // ID: 2
import hero2 from '../../assets/hero2.jpeg'; // ID: 3 (Spikes)
import hero4 from '../../assets/hero4.jpeg'; // ID: 4 (Car Park)
import net6 from '../../assets/net6.jpeg'; // ID: 5 (Inv. Grill)
import net4 from '../../assets/net4.jpg'; // ID: 6 (Cricket)
import hero3 from '../../assets/hero3.jpeg'; // ID: 7 (Const)
import net8 from '../../assets/net8.jpeg'; // ID: 8 (Monkey)
import net9 from '../../assets/net9.jpg'; // ID: 9 (Duct)
import net10 from '../../assets/net10.jpeg'; // ID: 10 (House)
import net11 from '../../assets/net11.jpg'; // ID: 11 (Stairs)
import net12 from '../../assets/net12.jpeg'; // ID: 12 (Window Grill)
import net13 from '../../assets/net13.jpg'; // ID: 13 (Mosquito)
import net14 from '../../assets/net14.jpeg'; // ID: 13 (Child)
import net15 from '../../assets/net15.jpg'; // ID: 13 (Child)

const servicesData = [
  {
    id: 1,
    title: "Balcony Safety Nets",
    image: net1,
    description: "Protect your loved ones and pets from accidental falls. Strong, durable, and UV-resistant high-tensile nets that don't block your view.",
    features: ["Balcony-edge coverage", "Options for apartments", "Discuss net visibility"]
  },
  {
    id: 2,
    title: "Pigeon & Anti-Bird Nets",
    image: net2,
    description: "Keep your spaces clean and free from bird droppings and health hazards. Premium quality nets designed to last for years without tearing.",
    features: ["Balcony & utility areas", "Airflow-conscious options", "Ask about mesh materials"]
  },
  {
    id: 3,
    title: "Window & Balcony Spikes",
    image: hero2,
    description: "High-grade polycarbonate and stainless steel bird spikes to prevent pigeons and other birds from sitting on window ledges and railings.",
    features: ["Ledge & railing options", "Polycarbonate or steel", "Compare profiles"]
  },
  {
    id: 4,
    title: "Car Parking Safety Nets",
    image: hero4,
    description: "Durable shading and protective net sheds designed for car parking slots to safeguard vehicles from sun heat, debris, and bird droppings.",
    features: ["Shade and debris cover options", "Parking-area measurements", "Ask about support frames"]
  },
  {
    id: 5,
    title: "Stainless Steel Invisible Grills",
    image: net6,
    description: "Modern SS 316 invisible grills that offer high-level security without ruining the architectural aesthetics of your balcony or windows.",
    features: ["Stainless-steel cable options", "For selected balconies/windows", "Compare cable spacing"]
  },
  {
    id: 6,
    title: "Cricket Practice Nets",
    image: net4,
    description: "Professional Cricket Practice Nets designed for terrace boxes, schools, academies, and residential turf areas with high impact absorption.",
    features: ["Terrace & practice areas", "Custom sizing options", "For schools and academies"]
  },
  {
    id: 7,
    title: "Building & Construction Nets",
    image: hero3,
    description: "Robust debris safety nets engineered for under-construction high-rise buildings to protect workers and passersby from falling materials.",
    features: ["Building-perimeter coverage", "Net options by project", "Ask for a site assessment"]
  },
  {
    id: 8,
    title: "Monkey & Animal Safety Nets",
    image: net8,
    description: "Heavy-duty wire-mesh reinforced safety nets designed to prevent monkey nuisance and stray animal intrusion into balconies and utility areas.",
    features: ["Balcony & utility areas", "Review mesh type by site", "Discuss fixing options"]
  },
  {
    id: 9,
    title: "Duct Area Safety Nets",
    image: net9,
    description: "Secure open ventilation shafts and duct areas in apartment buildings. Prevents pigeon intrusion, debris buildup, and accidental falls.",
    features: ["Ventilation-shaft netting", "Pigeon-control options", "Site-specific measurement"]
  },
  {
    id: 10,
    title: "House Covering Safety Nets",
    image: net10,
    description: "Complete exterior safety netting solutions for independent houses and villas to protect against monkeys, stray animals, and falling debris.",
    features: ["Exterior netting options", "Custom coverage by property", "Discuss anchoring"]
  },
  {
    id: 11,
    title: "Staircase Safety Nets",
    image: net11,
    description: "Protective safety barriers installed along open staircase railings to prevent toddlers and pets from slipping through vertical gaps.",
    features: ["Open-railing coverage", "Options for family homes", "Measure before installation"]
  },
  {
    id: 12,
    title: "Invisible Grill For Windows",
    image: net12,
    description: "Sleek and robust SS 316 invisible grills tailored specifically for windows to ensure uncompromising security and unobstructed airflow.",
    features: ["Stainless-steel cable options", "Window-specific sizing", "Compare finish and spacing"]
  },
  {
    id: 13,
    title: "Mosquito Safety Nets",
    image: net13,
    description: "High-density fine mesh screen nets designed to keep mosquitoes, flies, and unwanted insects out while allowing fresh air circulation.",
    features: ["Fine screen options", "Window-specific sizing", "Compare mesh materials"]
  },
  {
    id: 14,
    title: "Child Safety Nets",
    image: net14,
    description: "Safety net options for balcony edges, stair openings and other spaces where children or pets need an added barrier.",
    features: ["Balcony and stair openings", "Select mesh for the space", "Ask about fixing points"]
  },
  {
    id: 15,
    title: "Staircase Invisible Grills",
    image: net15,
    description: "Staircase invisible-grill options measured for your railing layout and the opening you want to secure.",
    features: ["Staircase cable systems", "Custom measurements", "Discuss cable spacing"]
  }
];

const Services = () => {
  const phoneNumber = "8143267425";

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-subtitle">Expert Protection Solutions</span>
        <h2>Our Professional <span className="highlight">Safety Services</span></h2>
        <p>Balcony, pigeon-control, window, sports and construction netting options for homes and projects across Andhra Pradesh, including Visakhapatnam, Vijayawada, Rajahmundry, and Kakinada.</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => {
          const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(`Hi OurSafetyNets, I am interested in getting ${service.title} installed. Please share details.`)}`;

          return (
            <div className="service-card" key={service.id}>
              <div className="service-img-wrapper">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-badge-tag">Installation Options</div>
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