import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/videos/factory-intro.mp4';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-video-container">
        <video autoPlay muted loop className="hero-video">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-label">
            Manufacturing Excellence • SPM • Hydraulic Systems
          </p>

          <h1 className="hero-title">
            Engineering Tomorrow's{' '}
            <span className="highlight">Industrial Solutions</span>
          </h1>

          <p className="hero-subtitle">
            Custom-designed SPM machines, hydraulic press systems and automation
            equipment for manufacturing leaders.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>

            <Link to="/quote" className="btn btn-secondary">
              Request Quote
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>500+</strong>
              <span>Machines Delivered</span>
            </div>

            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Support Availability</span>
            </div>

            <div className="hero-stat">
              <strong>ISO</strong>
              <span>Certified Quality</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-card">
            <h3>Core Manufacturing Systems</h3>

            <ul>
              <li>SPM Machines</li>
              <li>Hydraulic Powerpacks</li>
              <li>Hydraulic Pressing Machines</li>
              <li>Baling & Metal Baler Machines</li>
              <li>Servo Feeders</li>
              <li>Hydraulic Punching & Shearing</li>
              <li>Straighteners & Decoilers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;