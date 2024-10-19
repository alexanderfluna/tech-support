import React from 'react';
import '../style.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <img
          className='logo-img logo-light-header'
          src='https://acresecurity.com/hubfs/Website/Global/Logos/COMNET%20by%20acre-01.svg'
          alt='COMNET by acre-01'
          loading='eager'
          width='165'
          height='60'
        />
      </div>
      <div className='nav-right'>
        <a href='#'>Resources</a>
        <a href='#'>About</a>
        <a href='#'>Partner Hub</a>
        <a href='#'>Products</a>
        <button className='contact-button'>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
