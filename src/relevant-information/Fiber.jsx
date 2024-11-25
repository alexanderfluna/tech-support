import React, { useState } from 'react';

const Fiber = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('fiber')}>  Fiber </button>
            {visibleAnswer === 'fiber' && (
              <div className="faq-answer">
                <p>Core and Cladding</p>
                <img src="photos/Fiber/Fiber.jpg"></img>
                <li>The glass composition of the fiber makes it resistant to electromagnetic interference (EMI).</li>
                <p>_______________________________________________________________________________________________________________</p>
                <p>Multimode Fiber</p>
                <li>Covers shorter distances than single mode (i.e. 2 miles at 100mbps)</li>
                <li>OM1 (62.5 micron core / 125 micron cladding)</li>
                <li>OM2 or greater (50 micron core / 125 micron cladding)</li>
                <li>Modal Dispersion</li>
                <li style={{"padding-left": "100px"}}>Occurs in multimode fibers due to the existence of multiple light paths (modes) through the fiber core. Light traveling in different modes (e.g., straight through the center vs. bouncing at angles along the core) takes slightly different times to reach the end of the fiber, which can limit data transmission efficiency.</li>
                <p>_______________________________________________________________________________________________________________</p>
                <p>Single Mode Fiber</p>
                <li>Capable of covering longer distances than multimode (i.e. upwards of 70 miles and more).</li>
                <li>OS1: More suitable for shorter ranges. (9 micron core / 125 micron cladding)</li>
                <li>OS2: More suitable for longer ranges. (9 micron core / 125 micron cladding)</li>
                <li>Chromatic dispersion</li>
                <li style={{"padding-left": "100px"}}>Occurs in both fiber types, single mode and multimode, due to the variation in the speed of light for different wavelengths (colors) in the fiber material, leading to signal distortion over long distances.</li>
                <p>_______________________________________________________________________________________________________________</p>
                <p>Wavelengths</p>
                <li>850nm, 1310nm, 1550nm</li>
                <p>Spectral Width</p>
                <li>Margin of error for the wavelength.</li>
                <p>Wavelength Divsion Multiplexing (WDM)</p>
                <li>A technology that enables simultaneous transmission of multiple signals over a single optical fiber by user different wavelengths of light</li>
                <p>4 Types of Lasers</p>
                <li>LED (Light Emitting Diode)</li>
                <li>VCSL (Vertical-Cavity Surface-Emitting Laser)</li>
                <li>FP (Fabry-Pérot)</li>
                <li>DFB (Distributed Feedback)</li>
                <p>dBm (decibel-milliwatts)</p>
                <li>A unit of measurement used to express the power level of a signal.</li>
                <li>0 dBm = 1 mW (1000 microwatts) of power</li>
                <li>A decrease of 3 dBm halves the power output (i.e. -3dbm = 500 microwatts of power).</li>
                <p>(CREATE A TABLE FOR THIS WITH CPT) 1000BASE-FX</p>
                <li>...</li>  
                <p>1000BASE-LH</p>
                <li>...</li>
                <p>1000BASE-LX</p>
                <li>...</li>
              </div>
            )}
          </div>
  );
};

export default Fiber;
