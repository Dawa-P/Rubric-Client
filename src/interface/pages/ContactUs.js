// ContactUs.js

import React from 'react';
import StickyMenu from '../components/StickyMenu';
import Footer from '../components/Footer';
import './ContactUs.css'; // Import CSS file for ContactUs component styling
import ContactForm from '../components/ContactForm';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <StickyMenu />
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-us-content">
        {/* First column */}
        <div className="contact-details">
          <h2>Get in touch</h2>
          <div className="contact-info">
            <div className="contact-person">
              <img src="./images/profile1.jfif" alt="Contact" className="contact-image" />
              <div className="contact-role-container">
                <p className="contact-name">Dechen Tshomo</p>
                <p className="contact-role">Project Manager</p>
              </div>
            </div>
            <hr className='contact-hr'/>
            <div className="contact-number">
            <h3>Contact information</h3>
              <p>Phone: +1234567890</p>
              <p>Address: 123 Street, City, Country</p>
              <p>tshomo@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          <span>Or, you can just send an email: info@toolkit.org </span>
          <ContactForm/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
