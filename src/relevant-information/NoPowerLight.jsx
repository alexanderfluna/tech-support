import React, { useState } from 'react';

const NoPowerLight = () => {

  return (
    <div>
      <p><strong>[1] Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>.</strong></p>
      <p><strong>[2] Open the device's data sheet and locate its required input or operating voltage range (e.g. 8 - 15VDC, 8 - 24VDC, 48 - 56VDC).</strong></p>
      <p><strong>[3] Use a voltmeter to verify the correct polarity while connected to the device.</strong></p>
      <p style={{paddingLeft: "40px"}}>[3.1] Ensure the screws of the terminal block are securely tightened.</p>
      <p style={{paddingLeft: "40px"}}>[3.2] Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode. </p>
      <p style={{paddingLeft: "40px"}}>[3.3] Touch the the red probe to the suspected positive terminal and the black probe to the suspected negative terminal. A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity.</p>
      <p style={{paddingLeft: "40px"}}>[3.4] If the polarity is reversed, swap the wires and retry.</p>
      <p><strong>[4] Determine if the power supply is delivering the required input voltage while connected to the device.</strong></p>
      <p style={{paddingLeft: "40px"}}>[4.1] If the voltage is less than the required input voltage, replace the power supply and redo step 3.</p>
      <p style={{paddingLeft: "40px"}}>[4.2] If the voltage is within the required input voltage range and the unit does not power on, contact technical support.</p>
    </div>
  );
};

export default NoPowerLight;
