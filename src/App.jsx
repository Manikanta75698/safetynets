import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import NetTypes from './components/NetTypes/NetTypes';
import Process from './components/Process/Process';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';
import MobileBar from './components/MobileBar/MobileBar';

function App() {
  return (
    <>
      <Helmet>
        <title>OurSafetyNets | Best Pigeon Nets & Invisible Grills in Bengaluru</title>
        <meta name="description" content="Get the best Safety Nets, Pigeon Nets, and Invisible Grills in Bengaluru. Free installation, premium quality, and 20+ years of experience. Call 8143267425." />
        <meta name="keywords" content="safety nets Bengaluru, pigeon nets Bangalore, invisible grills, balcony safety nets, sports nets, anti bird nets" />
      </Helmet>

      <Navbar />
      <Hero />
      <Services />
      <NetTypes />
      <Process />
      <Gallery />
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