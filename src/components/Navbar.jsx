import React, { useState } from 'react';
import '../styles/Global.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="nav">
        <div className='nav-left'>
          <img
            className='logo-img'
            src='https://acresecurity.com/hubfs/Website/Global/Logos/COMNET%20by%20acre-01.svg'
            alt='COMNET by acre-01'
            loading='eager'
            onClick={() => window.location.href = 'https://acresecurity.com/'}
          />
        </div>
        <div className={`nav-middle ${isMenuOpen ? 'open' : ''}`}>
          <div class="nav-middle-item">
            <a href='#'>comnet Solutions</a>
          </div>
          <div class="nav-middle-item">
            <a href='#'>Resources</a>
          </div>
          <div class="nav-middle-item">
            <a href='#'>About</a>
          </div>
          <div class="nav-middle-item">
            <a href='https://acresecurity.com/partner-hub?types=ComNet'>Partner Hub</a>
          </div>
          <div class="nav-middle-item">
            <a href='#'>Products</a>
          </div>
        </div>
        <div className='nav-right'>
          <button className='contact-button' onClick={() => window.location.href = 'https://acresecurity.com/secure-communications-networking-and-server-solutions/contact-comnet-by-acre-security'}>
            CONTACT US
          </button>
        </div>
        <div className='menu' onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
