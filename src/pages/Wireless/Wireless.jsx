import React from 'react';
import '../../styles/Pages.css'
import WirelessTroubleshooting from './WirelessTroubleshooting';
import WirelessSelectorTool from './WirelessSelectorTool';
import WirelessFAQ from './WirelessFAQ';

const Wireless = () => {
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
          }}>Wireless Ethernet</h1>

          <WirelessTroubleshooting/>
          <WirelessSelectorTool/>
          <WirelessFAQ/>
      </main>
    </div>
  );
};

export default Wireless;
