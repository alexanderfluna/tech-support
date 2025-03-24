import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {  
  return (
    <nav className="navbar">
      <img 
        className="logo-img" 
        src="https://www.sourcesecurity.com/img/news/920/comnet-unveils-razberi-monitor-software-for-cyber-attacks-protection-920x533.jpg" 
        alt="COMNET by acre" 
        loading="eager" 
        onClick={() => {window.location.reload()}}
      />
    </nav>
  );
};

export default Navbar;
