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
      <button onClick={() => {navigate('/TechSupport')}} style={{
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
    </nav>
  );
};

export default Navbar;
