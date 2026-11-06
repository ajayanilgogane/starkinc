import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { FiTool, FiSettings, FiHelpCircle, FiPhone } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Installation Services',
      description: 'Professional installation of manufacturing equipment at your facility.',
      icon: <FiSettings size={40} />,
    },
    {
      id: 2,
      title: 'Maintenance & Support',
      description: 'Regular maintenance and preventive care for optimal performance.',
      icon: <FiTool size={40} />,
    },
    {
      id: 3,
      title: 'Repair & Troubleshooting',
      description: '24/7 emergency repair services with certified technicians.',
      icon: <FiSettings size={40} />,
    },
    {
      id: 4,
      title: 'Custom Manufacturing',
      description: 'Tailored solutions for specific industrial manufacturing needs.',
      icon: <FiSettings size={40} />,
    },
    {
      id: 5,
      title: 'Technical Support',
      description: 'Expert assistance for operation, training, and optimization.',
      icon: <FiHelpCircle size={40} />,
    },
    {
      id: 6,
      title: 'Consultation',
      description: 'Strategic guidance for process improvement and automation.',
      icon: <FiPhone size={40} />,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-heading">
          <div className="section-heading-copy">
            <span className="section-eyebrow">02 / Support</span>
            <h2 className="section-title">Support from setup to production.</h2>
            <p className="section-intro">
              Practical help at every stage keeps your equipment working and
              your team moving.
            </p>
          </div>
          <Link to="/services" className="section-action">
            See our services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
