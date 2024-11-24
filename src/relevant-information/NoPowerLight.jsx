import React, { useState } from 'react';

const NoPowerLight = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => toggleAnswer('no-power-light')}> No Power Light</button>
      {visibleAnswer === 'no-power-light' && (
        <div className="faq-answer">
          <p>1. Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>.</p>
          <p>2. Open the device's data sheet and locate its required input voltage (e.g. 8-24VDC, 48-56VDC, 12-57VDC, 24VAC).</p>
          <p>3. Use a voltmeter to verify the power supply's polarity and voltage output.</p>
          <li>Confirm the red probe is connected to the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</li>
          <li>Ensure the voltmeter is set to DC voltage mode.</li>
          <li>Touch the the red probe to the suspected positive terminal and the black probe to the suspected negative terminal.</li>
          <li>A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity.</li>
          <li>Verify the power supply delivers the required input voltage while connected to the device.</li>
          <p>4. If the power supply fails to provide the required voltage while connected:</p>
          <li>Test that the power supply is functional by using it to power another device.</li>
          <li>Switch to a different power source and repeat step 3.</li>
        </div>
      )}
    </div>
  );
};

export default NoPowerLight;
