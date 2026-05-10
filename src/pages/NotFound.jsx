import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Pages.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Navbar />
      <section className="not-found-content">
        <div className="not-found-container">
          <div className="not-found-icon">404</div>
          <h1>Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
          <a href="/" className="home-link">
            Return to Home
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
