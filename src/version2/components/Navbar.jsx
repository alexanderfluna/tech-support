import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img 
        className="logo-img" 
        src="https://acresecurity.com/hubfs/Website/Global/Logos/COMNET%20by%20acre-01.svg" 
        alt="COMNET by acre" 
        loading="eager" 
        width="165" 
        height="60"
        onClick={() => {window.location.reload()}}
        style={{height: "100px"}}
      />
    </nav>
  );
};

export default Navbar;
