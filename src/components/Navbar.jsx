import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {  
  return (
    <nav className="navbar">
      <img 
        className="logo-img" 
        src="photos/comnet.jpg" 
        alt="COMNET by acre" 
        loading="eager" 
        onClick={() => {window.location.reload()}}
      />
    </nav>
  );
};

export default Navbar;
