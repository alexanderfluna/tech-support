import React, { useState, useEffect } from 'react';
import EthernetExtenderTroubleshooting from './EthernetExtenderTroubleshooting';
import EthernetExtenderSelectorTool from './EthernetExtenderSelectorTool';
import EthernetExtenderFAQ from './EthernetExtenderFAQ';
import '../../styles/Pages.css'

const EthernetExtender = () => {
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
          }}>Ethernet Extender</h1>

          <EthernetExtenderTroubleshooting/>
          <EthernetExtenderSelectorTool/>
          <EthernetExtenderFAQ/>
      </main>
    </div>
  );
};

export default EthernetExtender;
