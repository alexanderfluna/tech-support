import React, { useState } from 'react';

const NoPoE = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => toggleAnswer('no-poe')}>Troubleshooting a unit with no PoE output.</button>
      {visibleAnswer === 'no-poe' && (
        <div className="faq-answer">
            <p><strong>[1] Use a voltmeter to verify the power supply is producing the required 48-56VDC while under load.</strong></p>
            <p style={{paddingLeft: "40px"}}>[1.1] Verify the screws of the terminal block are securely tightened.</p>
            <p style={{paddingLeft: "40px"}}>[1.2] Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode.</p>
            <p style={{paddingLeft: "40px"}}>[1.3] Touch the red probe to the positive terminal and the black probe to the negative terminal.</p>
            <p style={{paddingLeft: "40px"}}>[1.4] If the voltage is less than 48VDC, replace the power supply and remeasure the voltage.</p>
            <p><strong>[2] Look up the data sheet of the PoE-powered devices, the power supply, and the power sourcing equipment.</strong></p>
            <p style={{paddingLeft: "40px"}}>[2.1] Ensure that the power supply provides enough wattage to support both the PoE-powered devices and the power source equipment itself.</p>
            <p style={{paddingLeft: "40px"}}>[2.2] Verify that the PoE-powered devices are compatible with the PoE standard of the power sourcing equipment (802.3af, 802.3at, or 802.3bt).</p>
            <p><strong>[3] Crank up the voltage of the power supply as needed.</strong></p>
            <p><strong>[4] If the device has a GUI, force the port to produce PoE.</strong></p>
            <p><strong>[5] Replace the Ethernet cable to rule it out.</strong></p>
            <p><strong>[6] Test that the PoE-powered devices get powered on via another PoE source.</strong></p>
        </div>
      )}
    </div>
  );
};

export default NoPoE;

