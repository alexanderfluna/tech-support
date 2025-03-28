import React, { useState, useEffect } from 'react';
import RazberiTroubleshooting from './RazberiTroubleshooting';
import RazberiSelectorTool from './RazberiSelectorTool';
import RazberiFAQ from './RazberiFAQ';
import '../../styles/Pages.css'

const Razberi = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <main className="faq-container">
        <h1 style={{
            fontSize: "5rem",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(135deg, rgb(54, 126, 208), rgb(77, 77, 77))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center"
          }}>Razberi Server</h1>

          <RazberiTroubleshooting/>
          <RazberiSelectorTool/>
          <RazberiFAQ/>
      </main>
    </div>
  );
};

export default Razberi;
