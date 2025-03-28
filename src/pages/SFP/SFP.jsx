import React from 'react';
import '../../styles/Pages.css'
import SFPSelectorTool from './SFPSelectorTool';
import SFPFAQ from './SFPFAQ';

const SFP = () => {
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
          }}>SFP</h1>

          <SFPSelectorTool/>
          <SFPFAQ/>  
      </main>
    </div>
  );
};

export default SFP;
