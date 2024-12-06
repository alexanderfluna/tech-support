import React, { useState } from 'react';

const NoPowerLight = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => toggleAnswer('no-power-light')}>The unit does not power on.</button>
      {visibleAnswer === 'no-power-light' && (
        <div className="faq-answer">
          <p>1. Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>.</p>
          <p>2. Open the device's data sheet and locate its required input voltage (e.g. 8 - 24VDC, 48 - 56VDC).</p>
          <p>3. Use a voltmeter to verify the power supply's polarity and voltage output.</p>
          <li>Ensure the screws of the terminal block are securely tightened.</li>
          <li>Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode.</li>
          <li>Touch the the red probe to the suspected positive terminal and the black probe to the suspected negative terminal.</li>
          <li>A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity. If the polarity is reversed, swap the wires.</li>
          <li>Verify the power supply is delivering the required input voltage.</li>
          <p>4. Test that the power supply can power another device.</p>
          <p>5. Switch to a different power source and repeat the steps above.</p>
        </div>
      )}
    </div>
  );
};

export default NoPowerLight;
