import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Company Info */}
          <div className="footer-col">
            <h4>About Stark Industries</h4>
            <p>
              Leading manufacturer of advanced industrial machinery and automation solutions
              serving businesses worldwide since 1974.
            </p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#service1">Installation</a>
              </li>
              <li>
                <a href="#service2">Maintenance</a>
              </li>
              <li>
                <a href="#service3">Repair</a>
              </li>
              <li>
                <a href="#service4">Custom Manufacturing</a>
              </li>
              <li>
                <a href="#service5">Technical Support</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>
              <strong>Address:</strong>
              <br />
              Sr.No. 51/1, Umar Compound, Sopara Phata
              <br />
              NH -8, Vasai, Maharashtra 401208
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              +1 (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              info@starkindustries.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Stark Industries Corporation. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
            <span>|</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
