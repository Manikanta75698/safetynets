import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Nuvvu EmailJS lo account create chesi ee IDs replace cheyali mowa
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        alert('Message Sent Successfully! We will contact you soon.');
        e.target.reset();
      }, (error) => {
        alert('Failed to send message. Please try again or call us.');
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h2>Get In <span className="highlight">Touch</span></h2>
          <p>Have a question or need a free quotation? Fill out the form, or reach out to us directly.</p>

          <div className="info-item">
            <div className="info-icon"><FaPhoneAlt /></div>
            <div>
              <h4>Call Us</h4>
              <p>+91 9916162229</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><FaEnvelope /></div>
            <div>
              <h4>Email Us</h4>
              <p>anilsafetynetsolutions@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div>
              <h4>Location</h4>
              <p>Mathikere, Bangalore - 560054</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-div">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="tel" name="user_phone" placeholder="Phone Number" required />

            <select name="service_type" required>
              <option value="" disabled selected>Select a Service</option>
              <option value="Balcony Nets">Balcony Safety Nets</option>
              <option value="Pigeon Nets">Pigeon / Bird Nets</option>
              <option value="Invisible Grills">Invisible Grills</option>
              <option value="Sports Nets">Sports Nets</option>
              <option value="Other">Other</option>
            </select>

            <textarea name="message" rows="4" placeholder="Your Message / Location Area"></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;