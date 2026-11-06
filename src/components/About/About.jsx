import React from 'react';
import './About.css';
import factoryImage from '../../assets/images/ctl.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-eyebrow">Company / Since 2014</span>
          <h2 className="section-title">About Stark Industries</h2>
          <p className="section-subtitle">Who We Are</p>

          <div className="about-text">
            <p>
              Stark Industries is an Indian manufacturer of industrial machinery
              for metal processing, punching, forming, hydraulic systems, and
              special purpose applications. Since 2014, we have worked with
              manufacturers to shape equipment around their production needs.
            </p>
            <p>
              From machine selection and installation to ongoing technical
              support, our team helps customers plan and run their production
              equipment with confidence.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h3>2014</h3>
              <p>Established</p>
            </div>
            <div className="stat">
              <h3>Custom</h3>
              <p>Machine solutions</p>
            </div>
            <div className="stat">
              <h3>End-to-end</h3>
              <p>Project support</p>
            </div>
            <div className="stat">
              <h3>India</h3>
              <p>Based in Maharashtra</p>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <h4>Metal processing</h4>
              <p>Punching, roll forming, feeding, straightening, and cut-to-length equipment.</p>
            </div>
            <div className="highlight-item">
              <h4>Hydraulic systems</h4>
              <p>Presses and powerpacks for demanding industrial applications.</p>
            </div>
            <div className="highlight-item">
              <h4>Custom machinery</h4>
              <p>Special purpose equipment configured for specific production requirements.</p>
            </div>
            <div className="highlight-item">
              <h4>Lifecycle support</h4>
              <p>Installation, maintenance, troubleshooting, and technical assistance.</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <div className="image-placeholder">
             <img src={factoryImage} alt="Cut-to-length metal processing machine at Stark Industries" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
