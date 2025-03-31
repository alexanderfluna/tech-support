import React, { useState } from 'react';

const NoPoE = () => {
  return (
    <div>
      <p><strong>[1] For devices that use 120VAC for operating power, use a voltmeter to confirm that 120V RMS is present at the device's power input.</strong></p>
      <p><strong>[2] For devices that use an external PSU, use a voltmeter to verify the PSU is producing a minimum of 52VDC and verify the correct polarity.</strong></p>
      <p style={{paddingLeft: "40px"}}>[2.1] Verify the screws of the terminal block are securely tightened.</p>
      <p style={{paddingLeft: "40px"}}>[2.2] Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode.</p>
      <p style={{paddingLeft: "40px"}}>[2.3] Touch the the red probe to the suspected positive terminal and the black probe to the suspected negative terminal. A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity.</p>
      <p style={{paddingLeft: "40px"}}>[2.4] If the voltage is less than 52VDC, increase the voltage. Otherwise, replace the power supply unit and recheck the voltage.</p>
      <p><strong>[3] Look up the data sheet of the PSE, power supply, and attached PDs.</strong></p>
      <p style={{paddingLeft: "40px"}}>[3.1] Ensure that the power supply rating (in watts) is sufficient to support the PSE and attached PDs.</p>
      <p style={{paddingLeft: "40px"}}>[3.2] Verify that the PDs are compatible with the PoE standard of the PSE (802.3af, 802.3at, or 802.3bt).</p>
      <p><strong>[4] If the device has a GUI, and there is an option to force PoE, then force PoE.</strong></p>
      <p><strong>[5] Replace the Ethernet cable to rule it out.</strong></p>
      <p><strong>[6] Test that the PDs are capable of being powered by another PSE.</strong></p>
    </div>
  );
};

export default NoPoE;

