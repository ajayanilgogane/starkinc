import React from 'react';
import { Link } from 'react-router-dom';
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
      title: 'Quality-led build',
      description: 'Careful attention to machine construction, components, and finishing.',
      icon: <FiCheckCircle />,
    },
    {
      id: 3,
      title: 'Engineering expertise',
      description: 'Application-focused machine design guided by practical manufacturing needs.',
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
      title: 'Responsive support',
      description: 'Technical assistance for installation, maintenance, and troubleshooting.',
      icon: <FiCheckCircle />,
    },
    {
      id: 6,
      title: 'Built around your process',
      description: 'Equipment options tailored to your material, workflow, and production goals.',
      icon: <FiCheckCircle />,
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="section-heading">
          <div className="section-heading-copy">
            <span className="section-eyebrow">04 / The Stark difference</span>
            <h2 className="section-title">A manufacturing partner, not just a machine supplier.</h2>
            <p className="section-intro">
              Clear communication, application-led engineering, and support
              built around your production needs.
            </p>
          </div>
          <Link to="/contact" className="section-action">
            Talk to our team <span aria-hidden="true">→</span>
          </Link>
        </div>

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
