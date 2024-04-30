// Footer.js

import React from 'react';
import './Footer.css'; // Import CSS file for footer styling
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook,FaLinkedin } from 'react-icons/fa'; // Import social icons


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* First section with logo */}
          <div className="footer-logo">
            <h2>Toolkit for Educators</h2>
            <p className='footer-text'>We strive to deliver excellence in Rubric usage. With dedicated team and passion for innovation, we are commited to providing solutions that meet your needs and exceed your expectations.</p>
            
          </div>
        </div>
        <div className="footer-section">
          {/* Second section with quick links */}
          <div className="quick-links">
            <h4>Quick Links</h4>
            
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          {/* Third section with contact information */}
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p className='footer-text'>123 Street, City, Country</p>
            <p className='footer-text'>Email: contact@example.com</p>
            <p className='footer-text'>Phone: +1234567890</p>
          </div>
        </div>
      </div>
      <hr className='footer-hr'/>
      <div className='copyright'>
        <div className="copyright-text">
          <p className='footer-text'>&copy; 2024 Toolkit for Educators. All rights reserved.</p>
        </div>
        <div className="social-icons">
          <FaTwitter className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaFacebook className="social-icon" />
          <FaLinkedin className="social-icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
