import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiBriefcase } from 'react-icons/fi';
import './Clients.css';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      name: 'Karamtara Engineering Ltd',
      industry: 'Engineering & Infrastructure',
    },
    {
      name: 'Purshotam Profile Pvt Ltd',
      industry: 'Metal Processing',
    },
    {
      name: 'Vikram Solar Ltd',
      industry: 'Renewable Energy',
    },
    {
      name: 'Jayaam Galvanizer Pvt Ltd',
      industry: 'Galvanizing Solutions',
    },
    {
      name: 'Ashapura Industries',
      industry: 'Industrial Manufacturing',
    },
    {
      name: 'Milton',
      industry: 'Consumer Products',
    },
    {
      name: 'Nayasa',
      industry: 'Plastic Manufacturing',
    },
    {
      name: 'Rishab Plast',
      industry: 'Packaging & Plastics',
    },
    {
      name: 'Sunrack Technologies',
      industry: 'Solar Infrastructure',
    },
    {
      name: 'Alok Rubber',
      industry: 'Rubber Manufacturing',
    },
    {
      name: 'Keybond Industries',
      industry: 'Industrial Components',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? clients.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === clients.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="clients">
      <div className="clients-container">
        <div className="clients-header">
          <h2>Our Trusted Clients</h2>
          <p>Partnering with leading industries across India</p>
        </div>

        <div className="clients-slider-card">
          <button className="slider-btn" onClick={handlePrev}>
            <FiChevronLeft />
          </button>

          <div className="client-card">
            <div className="client-icon">
              <FiBriefcase />
            </div>

            <h3>{clients[currentIndex].name}</h3>
            <p>{clients[currentIndex].industry}</p>

            <div className="client-counter">
              {currentIndex + 1} / {clients.length}
            </div>
          </div>

          <button className="slider-btn" onClick={handleNext}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;