import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import NetTypes from './components/NetTypes/NetTypes';
import Process from './components/Process/Process';
// 1. Gallery ni remove chesi, ikkada SportsGallery import chey:
import SportsGallery from './components/SportsGallery/SportsGallery';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';
import MobileBar from './components/MobileBar/MobileBar';
import heroImage from './assets/hero1.jpeg';

const siteUrl = 'https://oursafetynets.in';
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'OurSafetyNets',
  url: siteUrl,
  image: `${siteUrl}${heroImage}`,
  telephone: '+918143267425',
  email: '@oursafetynets.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Visakhapatnam',
    },
    {
      '@type': 'City',
      name: 'Vijayawada',
    },
    {
      '@type': 'City',
      name: 'Rajahmundry',
    },
    {
      '@type': 'City',
      name: 'Kakinada',
    }
  ],
  knowsAbout: [
    'Balcony safety nets',
    'Pigeon-control netting',
    'Invisible grills',
    'Sports nets',
    'Construction safety netting',
  ],
};

function App() {
  return (
    <>
      <Helmet>
        <title>Safety Nets &amp; Invisible Grills in Andhra Pradesh | OurSafetyNets</title>
        <meta name="description" content="Explore balcony safety nets, pigeon-control netting, invisible grills and sports nets in Andhra Pradesh, including Visakhapatnam, Vijayawada, Rajahmundry, and Kakinada. Call OurSafetyNets to discuss your requirements." />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OurSafetyNets" />
        <meta property="og:title" content="Safety Nets & Invisible Grills in Andhra Pradesh | OurSafetyNets" />
        <meta property="og:description" content="Balcony safety nets, pigeon-control netting, invisible grills and sports nets in Andhra Pradesh (Visakhapatnam, Vijayawada, Rajahmundry, Kakinada)." />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}${heroImage}`} />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Navbar />
      <Hero />
      <Services />
      <NetTypes />
      <Process />

      {/* 2. Ikkada old <Gallery /> badhulu kotha slider vasthundi */}
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