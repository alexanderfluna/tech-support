import React from 'react';
import '../styles/style.css';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      {/* Top Divider */}
      <img
        src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-2.svg'
        alt='Wave divider'
        className='full-width-image'
      />

      {/* Available Resources Section */}
      <div className="footer-section available-resources">
        <h2>Available Resources</h2>
        <p>
          Explore our collection of thought-provoking blog articles centered around Comnet by Acre. 
          Broaden your perspective with our extensive range of case studies, guides, and datasheets!
        </p>
        <div className="footer-buttons">
          <button className="primary-btn">Comnet by Acre Articles</button>
          <button className="secondary-btn">Comnet by Acre Resources</button>
        </div>
      </div>

      {/* Divider */}
      <img
        src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-1.svg'
        alt='Wave divider'
        className='full-width-image'
      />

      {/* Trust Comnet by Acre Section */}
      <div className="footer-section trust-comnet-by-acre">
        <h2>Trust Comnet by Acre</h2>
        <p>
          At Comnet by Acre, we understand that a secure, reliable network is more than just the sum of its parts. 
          That's why we provide a complete suite of accessories to complement our portfolio, ensuring a robust and secure network.
        </p>
      </div>

      {/* Divider */}
      <img
        src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-1.svg'
        alt='Wave divider'
        className='full-width-image'
      />

      {/* Contact Us Section */}
      <div className="footer-section contact-us">
        <h2>Contact Us</h2>
        <p>
          Join the numerous businesses who trust Comnet by Acre to secure their future. 
          Let us guide you in creating a secure tomorrow. With Comnet by Acre, you're investing in peace of mind.
        </p>
        <button className="primary-btn">Get in Touch Today</button>
      </div>

      {/* Divider */}
      <img
        src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-1.svg'
        alt='Wave divider'
        className='full-width-image'
      />

      {/* Logo */}
      <div className="footer-logo">
        <img
          className='logo-img logo-light-header'
          src='https://acresecurity.com/hubfs/Website/Global/Logos/COMNET%20by%20acre-01.svg'
          alt='Comnet by Acre Logo'
          loading='eager'
          width='165'
          height='60'
        />
      </div>

      {/* Stay in the Know Section */}
      <div className="footer-section stay-in-the-know">
        <h2>Stay in the Know</h2>
        <p>
          Enter your email, and we'll keep you updated with relevant Acre news and articles.
        </p>
        <h3>Email Address*</h3>
        <input
          className="email-input"
          type="email"
          placeholder="Enter email address"
        />
        <p className="privacy-note">
          For information on how to unsubscribe, as well as our privacy practices, 
          check out our Privacy Policy.
        </p>
      </div>

      {/* Footer Links */}
      <div className="real-footer">
        <div className="footer-column">
          <h3>Solutions</h3>
          <ul>
            <li>Access Control</li>
            <li>Visitor Management</li>
            <li>Intruder Alarms</li>
            <li>Secure Communications</li>
            <li>Networking & Server Solutions</li>
            <li>Partners & Integrations</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Resources</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>About Acre</li>
            <li>Careers (We're Hiring)</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Privacy Policy</p>
        <p>© 2024 Acre Security</p>
        <p>Website by Alexander Luna</p>
      </div>
    </footer>
  );
};

export default Footer;
