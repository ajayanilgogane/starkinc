import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'Premium Quality',
      description: 'All products manufactured to the highest international standards.',
      icon: <FiCheckCircle />,
    },
    {
      id: 2,
      title: 'ISO Certified',
      description: 'Certified compliance with ISO 9001, ISO 14001, and ISO 45001.',
      icon: <FiCheckCircle />,
    },
    {
      id: 3,
      title: 'Expert Engineers',
      description: '500+ skilled engineers and technicians dedicated to excellence.',
      icon: <FiCheckCircle />,
    },
    {
      id: 4,
      title: 'Innovation First',
      description: 'Continuous R&D for cutting-edge manufacturing solutions.',
      icon: <FiCheckCircle />,
    },
    {
      id: 5,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency services.',
      icon: <FiCheckCircle />,
    },
    {
      id: 6,
      title: 'Global Reach',
      description: 'Serving clients in 45+ countries with local expertise.',
      icon: <FiCheckCircle />,
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <h2 className="section-title">Why Choose Stark Industries?</h2>
        <p className="section-subtitle">Your Trusted Manufacturing Partner</p>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
