import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/videos/factory-intro.mp4';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-video-container">
        <video autoPlay muted loop playsInline className="hero-video" aria-hidden="true">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-label">Industrial machinery manufacturer · Since 2014</p>

          <h1 className="hero-title">
            Built for your line.{' '}
            <span className="highlight">Engineered for what's next.</span>
          </h1>

          <p className="hero-subtitle">
            Purpose-built punching, forming and hydraulic systems—designed around
            your production process, not the other way around.
          </p>

          <div className="hero-services" aria-label="Product capabilities">
            <span>Multi-head punching</span>
            <span>Metal forming</span>
            <span>Special purpose machines</span>
            <span>Hydraulic systems</span>
          </div>

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
              <strong>Since 2014</strong>
              <span>Manufacturing experience</span>
            </div>

            <div className="hero-stat">
              <strong>Made to order</strong>
              <span>Solutions for your process</span>
            </div>

            <div className="hero-stat">
              <strong>End-to-end</strong>
              <span>Project support</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-card">
            <h3>Machinery built around your process</h3>

            <ul>
              <li>High-speed punching and cut-to-length lines</li>
              <li>Roll forming and metal processing</li>
              <li>Special purpose machinery</li>
              <li>Hydraulic presses and powerpacks</li>
              <li>Feeding, straightening and decoiling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;