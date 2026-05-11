import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiBriefcase } from 'react-icons/fi';
import './Clients.css';

const clients = [
  { name: 'Karamtara Engineering Ltd', industry: 'Engineering & Infrastructure' },
  { name: 'Purshotam Profile Pvt Ltd', industry: 'Metal Processing' },
  { name: 'Vikram Solar Ltd', industry: 'Renewable Energy' },
  { name: 'Jayaam Galvanizer Pvt Ltd', industry: 'Galvanizing Solutions' },
  { name: 'Ashapura Industries', industry: 'Industrial Manufacturing' },
  { name: 'Milton', industry: 'Consumer Products' },
  { name: 'Nayasa', industry: 'Plastic Manufacturing' },
  { name: 'Rishab Plast', industry: 'Packaging & Plastics' },
  { name: 'Sunrack Technologies', industry: 'Solar Infrastructure' },
  { name: 'Alok Rubber', industry: 'Rubber Manufacturing' },
  { name: 'Keybond Industries', industry: 'Industrial Components' },
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
                  <div className="client-icon">
                    <FiBriefcase />
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