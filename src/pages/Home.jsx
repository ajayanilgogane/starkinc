import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Products from '../components/Products/Products';
import Clients from '../components/Clients/Clients';
import Services from '../components/Services/Services';
import Industries from '../components/Industries/Industries';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Clients />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
