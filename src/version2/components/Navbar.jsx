import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <img 
        className="logo-img" 
        src="https://www.sourcesecurity.com/img/news/920/comnet-unveils-razberi-monitor-software-for-cyber-attacks-protection-920x533.jpg" 
        alt="COMNET by acre" 
        loading="eager" 
        width="165" 
        height="60"
        onClick={() => {window.location.reload()}}
        style={{height: "100px"}}
      />
      <button onClick={() => {navigate('/TechSupport')}}>
        CHANGE LAYOUT
      </button>
    </nav>
  );
};

export default Navbar;
