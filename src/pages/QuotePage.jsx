import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Pages.css';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productInterest: '',
    quantity: '',
    deliveryDate: '',
    additionalInfo: '',
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
    console.log('Quote request submitted:', formData);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      productInterest: '',
      quantity: '',
      deliveryDate: '',
      additionalInfo: '',
    });
  };

  return (
    <div className="quote-page">
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Request a Quote</h1>
          <p>Get customized pricing for our manufacturing solutions</p>
        </div>
      </section>

      <section className="page-content">
        <div className="content-container">
          <div className="quote-form-container">
            <div className="form-section">
              <h2>Request Quote Form</h2>
              <p>Fill out the form below and our sales team will provide you with a customized quote.</p>

              <form className="quote-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactName">Contact Name *</label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="productInterest">Product Interest *</label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Select a Product --</option>
                      <option value="cnc">CNC Machines</option>
                      <option value="hydraulic">Hydraulic Presses</option>
                      <option value="conveyor">Conveyor Systems</option>
                      <option value="packaging">Packaging Machines</option>
                      <option value="welding">Welding Machines</option>
                      <option value="automation">Automation Equipment</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity *</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="deliveryDate">Required Delivery Date</label>
                    <input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="additionalInfo">Additional Information</label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows="4"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Any special requirements or additional information..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Quote Request
                </button>
              </form>
            </div>

            <div className="quote-info">
              <h3>Why Request a Quote?</h3>
              <ul>
                <li>Get customized pricing for your specific needs</li>
                <li>Volume discounts available</li>
                <li>Discussion of payment terms and delivery options</li>
                <li>Technical consultations included</li>
                <li>Priority customer support</li>
              </ul>

              <h3>Quote Response Time</h3>
              <p>Our sales team typically responds to quote requests within 24-48 business hours.</p>

              <h3>Direct Contact</h3>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Email:</strong> sales@starkindustries.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuotePage;
