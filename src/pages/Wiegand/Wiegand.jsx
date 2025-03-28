// Explain dip switch #4 is for the status of loss of optical link

import React from 'react';
import '../../styles/Pages.css'
import WiegandSelectorTool from './WiegandSelectorTool';
import WiegandFAQ from './WiegandFAQ';

const Wiegand = () => {
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
          }}>Wiegand</h1>
          
          <WiegandFAQ/>
          <WiegandSelectorTool/>
      </main>
    </div>
  );
};

export default Wiegand;
