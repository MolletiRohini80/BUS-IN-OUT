import React from 'react';
import '../css/four.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Social Section */}
        <div className="footer-section footer-logo-section">
          <div className="footer-logo">
            
            <p>Tracker</p>
            <div className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </div>
            <div className="footer-social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Section with Orange Arrows */}
        <div className="footer-section footer-quick-links">
  <h4 className="footer-title">Quick Links</h4>
  <ul className="footer-links">
    <li><FaChevronRight className="footer-arrow" /> <a href="#">About Us</a></li>
    <li><FaChevronRight className="footer-arrow" /> <a href="#">Services</a></li>
    <li><FaChevronRight className="footer-arrow" /> <a href="#">Projects</a></li>
    <li><FaChevronRight className="footer-arrow" /> <a href="#">Pricing</a></li>
    <li><FaChevronRight className="footer-arrow" /> <a href="#">Contact</a></li>
  </ul>
</div>


        {/* Contact Info Section with Icons */}
        <div className="footer-section footer-contact-info">
          <h4 className="footer-title">Contact Info</h4>
          <p><FaMapMarkerAlt className="contact-icon1" /> Jl. Raya Kuta No.21, Kuta, Bali 80361</p>
          <p><FaPhoneAlt className="contact-icon" /> (+62) 81587 6218</p>
          <p><FaEnvelope className="contact-icon" /> support@domain.com</p>
        </div>

        {/* Map Section */}
        <div className="footer-section footer-map">
          <h4 className="footer-title">Our Location</h4>
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15254.63510900208!2d82.0670874!3d17.0893355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3782e23e8dc385%3A0x9916ae57f5d1f1ad!2sAditya%20University!5e0!3m2!1sen!2sin!4v1729269510639!5m2!1sen!2sin"
              className="map"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>Bus Charter Service Template Kit by Jegtheme</p>
        <p>&copy; 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
