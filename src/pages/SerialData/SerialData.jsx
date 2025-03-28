import React, { useState, useEffect } from 'react';
import '../../styles/Pages.css'
import SerialDataTroubleshooting from './SerialDataTroubleshooting';
import SerialDataSelectorTool from './SerialDataSelectorTool';
import SerialDataFAQ from './SerialDataFAQ';

const SerialData = () => {
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
          }}>Serial Data</h1>

          <SerialDataTroubleshooting/>
          <SerialDataSelectorTool/>
          <SerialDataFAQ/>
      </main>
    </div>
  );
};

export default SerialData;
