import React from 'react';
import './About.css';
import aboutImage from '../../assets/images/about-image.webp';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Stark Industries</h2>
          <p className="section-subtitle">Who We Are</p>

          <div className="about-text">
            <p>
              Stark Industries is a leading global manufacturer of advanced industrial machinery and automation solutions.
              With over 12 years of expertise, we deliver cutting-edge equipment and services to thousands of businesses worldwide.
            </p>
            <p>
              Our commitment to innovation, quality, and customer satisfaction sets us apart in the manufacturing industry.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h3>22+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>5k+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Product Models</p>
            </div>
            <div className="stat">
              <h3>45+</h3>
              <p>Countries Served</p>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <h4>🎯 Mission</h4>
              <p>To innovate and deliver world-class manufacturing solutions that drive industrial excellence.</p>
            </div>
            <div className="highlight-item">
              <h4>🚀 Vision</h4>
              <p>To be the global leader in intelligent manufacturing technology and automation.</p>
            </div>
            <div className="highlight-item">
              <h4>✅ ISO Certified</h4>
              <p>ISO 9001:2015 | ISO 14001:2015 | ISO 45001:2018</p>
            </div>
            <div className="highlight-item">
              <h4>👨‍💼 Expert Team</h4>
              <p>Our team of 500+ engineers and technicians ensure excellence in every product.</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <div className="image-placeholder">
             <img src={aboutImage} alt="Stark Industries Factory" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
