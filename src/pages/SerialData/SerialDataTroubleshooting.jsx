import React, { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';

const SerialDataTroubleshooting = () => {
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());

  const toggleTroubleshooting = () => {
    setShowTroubleshooting(!showTroubleshooting);
  }

  const toggleAnswer = (questionId) => {
    setVisibleAnswers(prevAnswers => {
        const newAnswers = new Set(prevAnswers);
        if (newAnswers.has(questionId)) {
            newAnswers.delete(questionId);
        } else {
            newAnswers.add(questionId);
        }
        return newAnswers;
    });
  };

  return (
    <div className="faq-list">
      <h1 style={{
                fontSize: "3rem",
                fontWeight: "bold",
                backgroundImage: "linear-gradient(135deg, rgb(49, 105, 169), rgb(165, 167, 173))",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textAlign: "center"
            }}>Serial Data| Troubleshooting</h1>
      {<NoPowerLight />}
      {<NoOpticalLink />}
      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer('fdx60')}> The serial data is not passing on the FDX60. </button>
        {visibleAnswers.has('fdx60') && (
          <div className="faq-answer">
            <p><strong>[1] Document what lights are illuminated on the unit.</strong></p>
            <img src="photos/FDX/fdx60-led.jpg"></img>
            <p><strong>[2] If passing 2-wire RS485, ensure there is 120-omh resistor across pins 6 and 7 (+I/O and -I/O).</strong></p>
            <li>An impedance mismatch occurs because of two electronic devices with different impedance values, meaning they resist alternating current differently. Without proper termination, a resistor that matches the cable's characteristic impedance, the signal is not properly absorbed, leading to ringing.</li>
            <li>Ringing happens when a data signal reflects back and forth between devices instead of cleanly reaching its destination. In a lumped distance, where devices are very close together, the resistor can be placed at either end. In distributed distance systems, where devices are far apart, the terminating resistor must be placed at both ends.</li>
            <p><strong>[3] Confirm the dip switches are set correctly. Cycle power after changing the dip switch configuration.</strong></p>
            <img src="photos/FDX/fdx60-switches.jpg"></img>
            <p><strong>[4] Verify the wires are connected properly.</strong></p>
            <img src="photos/FDX/fdx60-wires.jpg"></img>
          </div>
        )}
      </div>
      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer('cnfe3doe2')}> Configuring the CNFE3DOE2. </button>
        {visibleAnswers.has('cnfe3doe2') && (
          <div className="faq-answer">
            <a href="pdf/SerialData/CNFE3DOE2.pdf">Click the link to view the configuration manual.</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default SerialDataTroubleshooting