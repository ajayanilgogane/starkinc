import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = ({ showDetails = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We're Here to Help</p>

        <div className="contact-content">
          {showDetails ? (
            <div className="contact-info">
              <div className="info-item">
                <FiPhone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+918889780790" className="info-link">
                    +91 - 8889780790
                  </a>
                </div>
              </div>

              <div className="info-item">
                <FiMail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@starkindustries.com" className="info-link">
                    info@starkindustries.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <FiMapPin className="info-icon" />
                <div>
                  <h4>Address</h4>
                  <p>Sr.No. 51/1, Umar Compound, Sopara Phata, NH -8, Vasai, Maharashtra 401208</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="contact-cta">
              <h3>Ready to discuss your project?</h3>
              <p>
                Share your requirements and let our team recommend the right machinery and support solution.
              </p>
              <div className="contact-cta-actions">
                <Link to="/contact" className="contact-link-btn">
                  Contact Us
                </Link>
                <Link to="/quote" className="contact-link-btn secondary">
                  Request a Quote
                </Link>
              </div>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1961160194404!2d-122.4213988!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0c3DTMuNzc0OVMgMTIysDI1JzEyLjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Stark Industries Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
