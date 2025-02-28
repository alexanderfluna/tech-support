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
          <p>[1] Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>.</p>
          <p>[2] Open the device's data sheet and locate its required input/operating voltage range (e.g. 8 - 24VDC, 48 - 56VDC).</p>
          <p>[3] Use a voltmeter to verify the correct polarity and voltage while under load.</p>
          <li>[3.1] Ensure the screws of the terminal block are securely tightened.</li>
          <li>[3.2] Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode. </li>
          <li>[3.3] Touch the the red probe to the suspected positive terminal and the black probe to the suspected negative terminal. A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity.</li>
          <li>[3.4] If the polarity is reversed, swap the wires and retry.</li>
          <p>[4] Determine if the power supply is delivering the required input/operating voltage.</p>
          <li>[4.1] If the voltage is less or greater than the required input/operating voltage range, replace the power supply and retry step 3.</li>
          <li>[4.2] If the voltage is within the required input/operating voltage range and the unit does not power on, contact technical support.</li>
        </div>
      )}
    </div>
  );
};

export default NoPowerLight;
