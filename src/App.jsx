import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import NetTypes from './components/NetTypes/NetTypes';
import Process from './components/Process/Process';
import SportsGallery from './components/SportsGallery/SportsGallery';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';
import MobileBar from './components/MobileBar/MobileBar';

// SEO <head> tags (title, meta, Open Graph, JSON-LD) are rendered statically
// at build time from src/config/business.js — see seoHead() in vite.config.js.

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <NetTypes />
      <Process />
      <SportsGallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
      <WhatsApp />
      <MobileBar />
    </>
  );
}

export default App;