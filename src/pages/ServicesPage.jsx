import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Pages.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Equipment Installation',
      description:
        'Our expert team handles complete installation of all manufacturing equipment at your facility. We ensure proper setup, calibration, and testing for optimal performance.',
      details: [
        'Site assessment and planning',
        'Equipment delivery and setup',
        'Calibration and testing',
        'Staff training on-site',
      ],
    },
    {
      id: 2,
      title: 'Preventive Maintenance',
      description:
        'Regular maintenance programs designed to keep your equipment running at peak efficiency and extend operational lifespan.',
      details: [
        'Scheduled maintenance plans',
        'Equipment inspections',
        'Parts replacement',
        'Performance optimization',
      ],
    },
    {
      id: 3,
      title: '24/7 Emergency Repair',
      description:
        'Round-the-clock emergency repair services with certified technicians ready to minimize downtime and get you back to production.',
      details: [
        'Emergency hotline support',
        'Rapid response team',
        'On-site diagnostics',
        'Quick repairs and replacements',
      ],
    },
    {
      id: 4,
      title: 'Custom Manufacturing',
      description:
        'Tailored manufacturing solutions for specialized industrial applications and unique production requirements.',
      details: [
        'Custom design consultations',
        'Prototype development',
        'Small to large batch production',
        'Quality assurance',
      ],
    },
    {
      id: 5,
      title: 'Technical Support',
      description:
        'Comprehensive technical assistance covering operation, troubleshooting, and optimization of your manufacturing systems.',
      details: [
        'Phone and email support',
        'Remote diagnostics',
        'Software updates',
        'Performance analysis',
      ],
    },
    {
      id: 6,
      title: 'Consulting & Optimization',
      description:
        'Expert consultation on process improvement, automation strategy, and modernization of your manufacturing operations.',
      details: [
        'Process audits',
        'Efficiency analysis',
        'Automation recommendations',
        'Implementation planning',
      ],
    },
  ];

  return (
    <div className="services-page">
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive support solutions for all your manufacturing needs</p>
        </div>
      </section>

      <section className="page-content">
        <div className="content-container">
          <div className="services-list">
            {services.map((service) => (
              <div key={service.id} className="service-detail-card">
                <div className="service-header">
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <button className="detail-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
