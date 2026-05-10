import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
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
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span>STARK</span>
          <span>INDUSTRIES</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <a href="/#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>

          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={closeMenu}>
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </Link>
          </li>

          <li className="nav-item">
            <a href="/#industries" className="nav-link" onClick={closeMenu}>
              Industries
            </a>
          </li>

          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={closeMenu}>
              Gallery
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/careers" className="nav-link" onClick={closeMenu}>
              Careers
            </Link>
          </li>

          <li className="nav-item">
            <a href="/#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>

          <li className="nav-item">
            <Link to="/quote" className="nav-btn" onClick={closeMenu}>
              Request Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;