import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Global.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="nav">
        <div className='nav-left'>
          <img class="logo-img logo-light-header" src="https://acresecurity.com/hubfs/Website/Global/Logos/COMNET%20by%20acre-01.svg" alt="COMNET by acre-01" loading="eager" width="165" height="60"/>
        </div>
        <div className={`nav-middle ${isMenuOpen ? 'open' : ''}`}>
          <div class="nav-middle-item">
            <a href='#'>comnet Solutions</a>
            <svg class="dropdown-chevron ml-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div class="nav-middle-item">
            <a href='#'>Resources</a>
            <svg class="dropdown-chevron ml-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div class="nav-middle-item">
            <a href='#'>About</a>
            <svg class="dropdown-chevron ml-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <div class="nav-middle-item">
            <a href='https://acresecurity.com/partner-hub?types=ComNet'>Partner Hub</a>
          </div>
          <div class="nav-middle-item">
            <a href='#'>Products</a>
            <svg class="dropdown-chevron ml-3" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.5L6 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
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
        <button onClick={() => {navigate('/tech-support')}} style={{
          position: 'absolute',
          bottom: '20px',  // Position from the bottom of the screen
          left: '20px',    // Position from the left of the screen
          padding: '8px 16px',  // Smaller button size
          fontSize: '14px',  // Smaller text
          fontWeight: 'bold',
          backgroundColor: '#1e90ff',  // Light blue color
          color: 'white',
          border: 'none',
          borderRadius: '50px',  // Rounded corners
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 4px 8px rgba(30, 144, 255, 0.2)',  // Subtle blue shadow
          textDecoration: 'none',
          textAlign: 'center',
      }}>
        CHANGE LAYOUT
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
