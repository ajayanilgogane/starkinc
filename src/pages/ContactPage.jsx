import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import './Pages.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Contact Stark Industries</h1>
          <p>Reach out for machinery consultations, custom solutions, and project support.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="content-container">
          <Contact showDetails={true} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
