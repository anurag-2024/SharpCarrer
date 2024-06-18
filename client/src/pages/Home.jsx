import React from 'react';
import './styles/Home.css';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Destinations from '../components/Destinations.jsx';
import Acomodation from '../components/Acomodation.jsx';
import Services from '../components/Services.jsx';
import Memorable from '../components/Memorable.jsx';
import Contact from '../components/Contact.jsx';

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Destinations />
      <Acomodation />
      <Services />
      <Memorable />
      <Contact />
    </>
  );
}

export default Home;
