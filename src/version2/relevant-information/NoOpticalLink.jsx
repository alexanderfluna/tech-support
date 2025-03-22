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
            <li style={{paddingLeft: "40px"}}>Ensure the data rates match (Fast Ethernet vs. Gigabit Ethernet).</li>
            <li style={{paddingLeft: "40px"}}>Ensure the expected fiber types match (Multimode vs Single mode).</li>
            <li style={{paddingLeft: "40px"}}>Ensure the number of fiber strands match (1 strand vs. 2 strands).</li>
            <li style={{paddingLeft: "40px"}}>Ensure the correct optical connector is used (ST vs. SC vs. LC).</li>
            <p><strong>[3] Using the same fiber, try establishing an optical link with another device.</strong></p>
            <p><strong>[4] Using a process of elimination, swap out the device on either end of the fiber with an identical device to  determine which unit is failing.</strong></p>
            <p><strong>[5] If the link light remains solid green after removing the fiber, verify that the unit is receiving the correct operating voltage.</strong></p>
            
        </div>
      )}
    </div>
  );
};

export default NoOpticalLink;
