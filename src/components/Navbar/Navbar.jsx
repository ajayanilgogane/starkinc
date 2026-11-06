import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import aboutImage from '../../assets/images/about-image.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src={aboutImage}
            alt="Stark Industries"
            className="navbar-logo-img"
          />

          <div className="logo-text">
            <span>STARK</span>
            <span>INDUSTRIES</span>
          </div>

          <span className="since-badge">Since 2014</span>
        </Link>

        <button
          type="button"
          className="menu-icon"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul
          id="primary-navigation"
          className={menuOpen ? 'nav-menu active' : 'nav-menu'}
        >
          <li className="nav-item">
            <NavLink to="/" end className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <a href="/#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>

          <li className="nav-item">
            <NavLink to="/products" className="nav-link" onClick={closeMenu}>
              Products
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/careers" className="nav-link" onClick={closeMenu}>
              Careers
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/quote" className="nav-btn" onClick={closeMenu}>
              Request Quote
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;