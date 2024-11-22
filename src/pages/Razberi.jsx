import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PowerOverEthernet from '../relevant-information/PowerOverEthernet';
import '../styles/Global.css';
import '../styles/Pages.css';

const Razberi = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showSelectorText, setShowSelectorText] = useState(false); // New state for showing selector text

  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleTable = () => {
    setShowSelectorText(!showSelectorText); // Toggle visibility of selector text
    window.scrollTo(0, 0); // Scroll to the top of the page when the button is clicked
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Razberi</h2>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        
        {/* Show the selector tool text only when clicked */}
        {showSelectorText && (
          <div className="selector-placeholder">
            <p>Selector tool functionality coming soon...</p>
          </div>
        )}

<p className="faq-title">Troubleshooting Common Issues</p>
        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> No PoE </button>
            {visibleAnswer === 'no-poe' && (
              <div className="faq-answer">
                <p>1. Look up the data sheet of the device(s) powered by PoE and the data sheet of the device under test.</p>
                <li>Confirm that the powered device is compatible with the PoE standard of the device under test (i.e. 802.3af, 802.3at, 802.3bt).</li>
                <p>2. Confirm the power supply produces enough wattage for the device(s) powered by PoE and the device under test.</p>
                <p>3. Use a voltmeter to verify the power supply's is producing 48-56VDC.</p>
                <li>Connect the red probe to the voltmeter's positive terminal and the black probe to the negative (or ground) terminal.</li>
                <li>Set the voltmeter to DC voltage mode.</li>
                <li>Touch the the red probe to the positive terminal and the black probe to the negative terminal.</li>
                <li>Ensure the power supply delivers the required 48VDC-56VDC input voltage while connected to the device.</li>
                <p>3. If the power supply fails to provide the required voltage while connected:</p>
                <li>Test that the power supply is functional by using it to power another device.</li>
                <li>Switch to a different power source and repeat steps 2 and 3</li>
                <p>4. Test that the powered device gets powered on via another PoE source.</p>
                <p>5. Replace the Ethernet cable.</p>
              </div>
            )}
          </div>
        </div>

        <p className="faq-title">Relevant Information</p>
        <div className="faq-list">
        <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('relevant-switch-information')}>  Switches </button>
            {visibleAnswer === 'relevant-switch-information' && (
              <div className="faq-answer">
                <p>Default IP: 192.168.10.1</p>
                <p>Default username: admin</p>
                <p>Default password: admin</p>
                <p>Auto MDI/MDIX (Medium Dependent Interface / Medium Dependent Interface Crossover)</p>
                <li>Automatically detects the type of Ethernet cable being used (straight-through vs. cross over)</li>
              </div>
            )}
          </div>
          <PowerOverEthernet />
        </div>
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Razberi;
