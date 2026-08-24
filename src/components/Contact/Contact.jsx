import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In <span className="highlight">Touch</span></h2>
          <p>Have a question or need a free quotation? Fill out the form, or reach out to us directly.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-col">
            <div className="info-card-item">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>
              <div className="info-details">
                <h4>Call Us</h4>
                <a href="tel:+918143267425">+91 81432 67425</a>
              </div>
            </div>

            <div className="info-card-item">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <div className="info-details">
                <h4>Email Us</h4>
                <a href="mailto:support@oursafetynets.com">support@oursafetynets.com</a>
              </div>
            </div>

            <div className="info-card-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="info-details">
                <h4>Location</h4>
                <p> Bangalore - 560054</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-col">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3>Send a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Requirement / Message</label>
                <textarea id="message" rows="4" placeholder="Tell us what safety net you need..." required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;