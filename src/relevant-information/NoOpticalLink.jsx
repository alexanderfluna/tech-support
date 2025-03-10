import React, { useState } from 'react';

const NoOpticalLink = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => toggleAnswer('no-optical-link')}>Troubleshooting a unit with no optical link.</button>
      {visibleAnswer === 'no-optical-link' && (
        <div className="faq-answer">
            <p><strong>[1] For devices requiring an 'A' and 'B' pair, ensure there is an 'A' unit on one side of the fiber and a 'B' unit on the other side of the fiber.</strong> </p>
            <li>The data must be transmitted and received over the one strand of fiber. Using wavelength division multiplexing (WDM), the 'A' and 'B' units transmit and receive data at different wavelengths.</li>
            <p><strong>[2] Confirm the compatability of the devices on both ends of the fiber.</strong></p>
            <li style={{paddingLeft: "40px"}}>The data rate (Fast Ethernet vs. Gigabit Ethernet).</li>
            <li style={{paddingLeft: "40px"}}>The fiber type (Multimode vs Single mode).</li>
            <li style={{paddingLeft: "40px"}}>The number of fiber strands (1 strand vs. 2 strands).</li>
            <li style={{paddingLeft: "40px"}}>The optical connector (ST vs. SC vs. LC).</li>
            <p><strong>[3] Verify that the fiber works or swap it out.</strong></p>
            <li style={{paddingLeft: "40px"}}>Using the same fiber, try establishing an optical link with another device.</li>
            <li style={{paddingLeft: "40px"}}>If an optical power meter is available, connect one end of the fiber to the optical power meter, connect the other end of the fiber to the switch or SFP, and check the dBm reading. Compare this to the device's recommended signal strength, available in the datasheet, to confirm it is within the expected range.</li>
            <p><strong>[4] With the good fiber, use a process of elimination to swap out the device on either end of the fiber with an identical device and determine which unit is failing.</strong></p>
            <p><strong>[5] If the link light is stuck green, remove and reinsert the fiber to verify if the link light reappears.</strong></p>
            
        </div>
      )}
    </div>
  );
};

export default NoOpticalLink;
