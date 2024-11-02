import React from 'react';
import '../styles/Global.css';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <img
        src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-2.svg'
        alt='Wave divider'
        className='full-width-image'
      />

      <div className="footer-section">
        <h2>Available resources</h2>
        <p>
          Explore our collection of thought-provoking blog articles centered around Comnet by Acre. 
          Broaden your perspective with our extensive range of case studies, guides, and datasheets!
        </p>
        <div className="footer-buttons">
          <button className="primary-btn" onClick={() => window.location.href = 'https://acresecurity.com/blog/tag/ComNet'}>
            COMNET BY ACRE ARTICLES
          </button>
          <button className="secondary-btn" onClick={() => window.location.href = 'https://acresecurity.com/resources?brands=ComNet%3FhsLang%3Den%2CComNet'}>
            COMNET BY ACRE RESOURCES
            </button>
        </div>
      </div>

      <img
        src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-1.svg'
        alt='Wave divider'
        className='full-width-image'
      />

      <div className="footer-section">
        <h2>Trust comnet by acre</h2>
        <p>
          At Comnet by Acre, we understand that a secure, reliable network is more than just the sum of its parts. 
          That's why we provide a complete suite of accessories to complement our portfolio, ensuring a robust and secure network.
        </p>
      </div>

      <img
        src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-1.svg'
        alt='Wave divider'
        className='full-width-image'
      />

      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>
        Join the numerous businesses who have chosen to secure their future with comnet by acre. 
        Contact us today and let us guide you in creating a more secure tomorrow. With comnet by 
        acre you're not just investing in a product; you're investing in peace of mind. 
        Secure your future with acre security today.
        </p>
        <div className="footer-buttons">
          <button className="primary-btn">GET IN TOUCH TODAY</button>
        </div>
      </div>

      <img
        src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-1.svg'
        alt='Wave divider'
        className='full-width-image'
      />

      <img
            className='logo-img'
            src='https://acresecurity.com/hubfs/Website/Global/Logos/COMNET%20by%20acre-01.svg'
            alt='COMNET by acre-01'
            loading='eager'
            onClick={() => window.location.href = 'https://acresecurity.com/'}
      />

      <div className="stay-in-the-know">
        <div className="left-div">
          <h3>Stay in the Know</h3>
          <p>Enter your email, and we'll keep you updated with relevant Acre news and articles.</p>
        </div>
        <div className="right-div">
          <h3>Email address *</h3>
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
      </div>

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

      <div className="footer-bottom">
        <p>Privacy Policy</p>
        <p>© 2024 Acre Security</p>
        <p>Website by Alexander Luna</p>
      </div>
    </footer>
  );
};

export default Footer;
