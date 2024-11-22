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
                <li>Glass material: immune to EMI (electromagnetic interference)</li>
                <p>Wavelengths</p>
                <li>850nm, 1310nm, 1550nm</li>
                <p>Spectral Width</p>
                <li>Margin of error for the wavelength.</li>
                <p>dBm (decibel-milliwatts)</p>
                <li>A unit of measurement used to express the power level of a signal.</li>
                <li>0 dBm = 1 mW (1000 microwatts) of power</li>
                <li>A decrease of 3 dBm halves the power output (i.e. -3dbm = 500 microwatts of power).</li>
                <p>Wavelength Divsion Multiplexing (WDM)</p>
                <li>A technology that enables simultaneous transmission of multiple signals over a single optical fiber by user different wavelengths of light</li>
                <p>Multimode Fiber</p>
                <li>Covers shorter distances than single mode (i.e. 2 miles at 100mbps)</li>
                <li>Modal Dispersion: The spreading of a light pulse in multimode optical fibers caused by different propagation paths traveling at different speeds, which can limit data transmission efficiency.</li>
                <li>OM1 (62.5/125)</li>
                <li>OM2 or Greater (50/125)</li>
                <p>Singlemode Fiber</p>
                <li>Capable of covering longer distances than multimode (i.e. upwards of 70 miles and more).</li>
                <li>Chromatic Dispersion: The spreading of a light pulse in optical fibers caused by different wavelengths traveling at different speeds, leading to signal distortion over long distances.</li>
                <li>OS1</li>
                <li>OS2</li>
                <p>4 Types of Lasers</p>
                <li>LED (Light Emitting Diode)</li>
                <li>VCSL (Vertical-Cavity Surface-Emitting Laser)</li>
                <li>FP (Fabry-Pérot)</li>
                <li>DFB (Distributed Feedback)</li>
                <p>1000BASE-FX</p>
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
