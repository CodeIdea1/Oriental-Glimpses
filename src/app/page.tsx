'use client';

import Navbar from './components/Navbar';
import HeroSection from "./sections/HeroSection";
import OurExperience from './sections/OurExperience';
import OurServices from './sections/OurServices';
import ContactBar from './components/ContactBar';
import TourPackages from './sections/TourPackages';
import PackageDetails from './sections/PackageDetails';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <div>
      <div id="blink-overlay" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        opacity: 0,
        zIndex: 9999,
        pointerEvents: 'none'
      }} />
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <ContactBar />
      <div id="experience">
        <OurExperience />
      </div>
      <div id="services">
        <OurServices />
      </div>
      <div id="packages">
        <TourPackages />
        <PackageDetails />
      </div>
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}
