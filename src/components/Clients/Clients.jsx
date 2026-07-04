import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Clients.css';
import karamtaraLogo from '../../assets/images/karamtara.webp';
import purshotamLogo from '../../assets/images/purshotam.png';
import vikramLogo from '../../assets/images/vikram.png';
import jayaamLogo from '../../assets/images/jayaam.png';
import ashapuraLogo from '../../assets/images/ashapura.png';
import miltonLogo from '../../assets/images/milton.avif';
import nayasaLogo from '../../assets/images/nayasa.avif';
import rishabhLogo from '../../assets/images/rishabh.jpg';
import sunrackLogo from '../../assets/images/sunrack.svg';
import alokRubberLogo from '../../assets/images/alokrubberindia.jpg';
import keybondLogo from '../../assets/images/keybond.webp';

const clients = [
  { name: 'Karamtara Engineering Ltd', industry: 'Engineering & Infrastructure', logo: karamtaraLogo },
  { name: 'Purshotam Profile Pvt Ltd', industry: 'Metal Processing', logo: purshotamLogo },
  { name: 'Vikram Solar Ltd', industry: 'Renewable Energy', logo: vikramLogo },
  { name: 'Jayaam Galvanizer Pvt Ltd', industry: 'Galvanizing Solutions', logo: jayaamLogo },
  { name: 'Ashapura Industries', industry: 'Industrial Manufacturing', logo: ashapuraLogo },
  { name: 'Milton', industry: 'Consumer Products', logo: miltonLogo },
  { name: 'Nayasa', industry: 'Plastic Manufacturing', logo: nayasaLogo },
  { name: 'Rishab Plast', industry: 'Packaging & Plastics', logo: rishabhLogo },
  { name: 'Sunrack Technologies', industry: 'Solar Infrastructure', logo: sunrackLogo },
  { name: 'Alok Rubber', industry: 'Rubber Manufacturing', logo: alokRubberLogo },
  { name: 'Keybond Industries', industry: 'Industrial Components', logo: keybondLogo },
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, []);

  const getVisibleClients = () => {
    const visible = [];

    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + clients.length) % clients.length;
      visible.push({
        ...clients[index],
        className: i === 0 ? 'active' : 'side',
      });
    }

    return visible;
  };

  return (
    <section className="clients">
      <div className="clients-container">
        <div className="clients-header">
          <h2>Our Trusted Clients</h2>
          <p>Partnering with leading industries across India</p>
        </div>

        <div className="clients-carousel">
          <button className="slider-btn" onClick={prevSlide}>
            <FiChevronLeft />
          </button>

          <div className="carousel-window">
            <div
              className="carousel-track"
              key={currentIndex}
            >
              {getVisibleClients().map((client, index) => (
                <div key={index} className={`client-card ${client.className}`}>
                  <div className="client-logo">
                    <img src={client.logo} alt={`${client.name} logo`} />
                  </div>
                  <h3>{client.name}</h3>
                  <p>{client.industry}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>

        <div className="client-counter">
          {currentIndex + 1} / {clients.length}
        </div>
      </div>
    </section>
  );
};

export default Clients;