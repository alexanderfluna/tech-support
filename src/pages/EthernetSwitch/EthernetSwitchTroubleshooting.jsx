import React, { useState } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';

function EthernetSwitchTroubleshooting() {
    const [visibleAnswers, setVisibleAnswers] = useState(new Set());
    const [troubleshooting, setTroubleshooting] = useState(false);

    const toggleTroubleshooting = () => {
        setTroubleshooting(!troubleshooting);
    };

    const toggleAnswer = (questionId) => {
        setVisibleAnswers(prevAnswers => {
            const newAnswers = new Set(prevAnswers);
            if (newAnswers.has(questionId)) {
                newAnswers.delete(questionId);
            } else {
                newAnswers.add(questionId);
            }
            return newAnswers;
        });
    };

    return (
        <div className="faq-list">
            <button className="purple-button" onClick={toggleTroubleshooting}>
                Troubleshooting Common Issues
            </button>

            {troubleshooting && (
                <>
                    <NoPowerLight />
                    
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}>
                            There is no optical link.
                        </button>
                        {visibleAnswers.has('no-link-light') && (
                            <div className="faq-answer">
                                <p><strong>[1] Confirm that the fiber and devices on both ends of the fiber are compatible:</strong></p>
                                <p style={{paddingLeft: "40px"}}>[1.1] The data rate (Gigabit Ethernet vs. Fast Ethernet).</p>
                                <p style={{paddingLeft: "40px"}}>[1.2] The fiber type (single mode vs multimode).</p>
                                <p style={{paddingLeft: "40px"}}>[1.3] The number of fiber strands (single strand vs. dual strand).</p>
                                <p style={{paddingLeft: "40px"}}>[1.4] The optical connector (SC vs. LC).</p>
                                <p><strong>[2] Using a process of elimination, swap out the device and/or SFP on either end of the fiber with an identical device and/or SFP to determine which unit is failing.</strong></p>
                                <p><strong>[3] Test if the fiber works with another device.</strong></p>
                                <p><strong>[4] If an optical power meter is available, connect one end of the fiber to the optical power meter, connect the other end of the fiber to the switch or SFP, and check the dBm reading. Compare this to the device's recommended signal strength, available in the datasheet, to confirm it is within the expected range.</strong></p>
                                <p><strong>[5] If the link light is stuck green, remove and reinsert the fiber to verify if the link light reappears.</strong></p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-poe')}>
                            There is no PoE output.
                        </button>
                        {visibleAnswers.has('no-poe') && (
                            <div className="faq-answer">
                                <p><strong>[1] Use a voltmeter to verify the power supply is producing the required 48-56VDC while under load.</strong></p>
                                <p style={{paddingLeft: "40px"}}>[1.1] Verify the screws of the terminal block are securely tightened.</p>
                                <p style={{paddingLeft: "40px"}}>[1.2] Ensure the red probe is connected to the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</p>
                                <p style={{paddingLeft: "40px"}}>[1.3] Confirm the voltmeter is set to DC voltage mode.</p>
                                <p style={{paddingLeft: "40px"}}>[1.4] Touch the red probe to the positive terminal and the black probe to the negative terminal.</p>
                                <p style={{paddingLeft: "40px"}}>[1.5] If the voltage is less than 48VDC, replace the power supply and redo step 1.</p>
                                <p><strong>[2] Look up the data sheet of the device(s) powered by PoE, the power supply, and the switch.</strong></p>
                                <p style={{paddingLeft: "40px"}}>[2.1] Ensure that the power supply provides sufficient wattage to support both the PoE-powered devices and the switch itself.</p>
                                <p style={{paddingLeft: "40px"}}>[2.2] Verify that the device(s) powered by PoE are compatible with the PoE standard of the switch (802.3af, 802.3at, or 802.3bt).</p>
                                <p><strong>[3] Test that the device(s) powered by PoE get powered on via another PoE source.</strong></p>
                                <p><strong>[4] Replace the Ethernet cable to rule it out.</strong></p>
                                <p><strong>[5] Force the port to produce PoE in the GUI.</strong></p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-communication')}>
                            The unit is not communicating properly.
                        </button>
                        {visibleAnswers.has('no-communication') && (
                            <div className="faq-answer">
                                <p><strong>[1] Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>.</strong></p>
                                <p><strong>[2] Open the device's data sheet and locate its required input/operating voltage range (e.g. 8 - 24VDC, 48 - 56VDC).</strong></p>
                                <p><strong>[3] Use a voltmeter to verify the correct polarity and voltage while under load.</strong></p>
                                <p style={{paddingLeft: "40px"}}>[3.1] Ensure the screws of the terminal block are securely tightened.</p>
                                <p style={{paddingLeft: "40px"}}>[3.2] Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode. </p>
                                <p style={{paddingLeft: "40px"}}>[3.3] Touch the the red probe to the suspected positive terminal and the black probe to the suspected negative terminal. A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity.</p>
                                <p style={{paddingLeft: "40px"}}>[3.4] If the polarity is reversed, swap the wires and retry.</p>
                                <p><strong>[4] Determine if the power supply is delivering the required input/operating voltage.</strong></p>
                                <p style={{paddingLeft: "40px"}}>[4.1] If the voltage is less than the required input/operating voltage range, replace the power supply and redo step 3.</p>
                                <p style={{paddingLeft: "40px"}}>[4.2] If the voltage is within the required input/operating voltage range and the unit does not power on, contact technical support.</p>
                                <p><strong>[5] Document which ports are affected.</strong></p>
                                <p><strong>[6] Document if communication is restored automatically or if the switch requires a power cycle.</strong></p>
                                <p><strong>[7] Document whether the switch locks up periodically (e.g. ever hour, every two hours, daily, etc.) or randomly.</strong></p>
                                <p><strong>[8] Verify that the web interface is accessible.</strong></p>
                                <p><strong>[9] Factory default the switch.</strong></p>
                                <p><strong>[10] Identify the current firmware version of the switch and update to the latest version.</strong></p>
                                <p><strong>[11] Isolate the switch outside of the network on a bench to determine if the issue persists.</strong></p>
                                <p><strong>[12] Replace the switch with a known-working one to determine if the same issue persists with the new switch.</strong></p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('reset-switch')}>
                            I forgot the IP address of the switch.
                        </button>
                        {visibleAnswers.has('reset-switch') && (
                            <div className="faq-answer">
                                <p>[1] Open PuTTY or Tera Term and start a serial connection using the following configurations.</p>
                                <li>Speed (baud): 115200.</li>
                                <li>Data bits: 8</li>
                                <li>Stop bits: 1</li>
                                <li>Parity: None</li>
                                <li>Flow control: XON/XOFF</li>
                                <p>[2] Enter the username and password.</p>
                                <p>[3] Type "enable" and click enter.</p>
                                <p>[4] Type "reload defaults" and click enter.</p>
                                <p>[5] Enter the IP address 192.168.10.1 in a web browser.</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default EthernetSwitchTroubleshooting;
