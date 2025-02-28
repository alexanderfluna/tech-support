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
                                <p>[1] Confirm that the fiber in use is compatible with the switch and/or SFP module.</p>
                                <li>[1.1] The data rate (Gigabit Ethernet vs. Fast Ethernet).</li>
                                <li>[1.2] The fiber type (single mode vs multimode).</li>
                                <li>[1.3] The number of fiber strands (single strand vs. dual strand).</li>
                                <li>[1.4] The optical connector (SC vs. LC).</li>
                                <p>[2] Test if the fiber works with another device.</p>
                                <p>[3] Using a process of elimination, swap out the device and/or SFP on either end of the fiber with an identical device and/or SFP to determine which unit is failing.</p>
                                <p>[4] Connect one end of the fiber to an optical power meter and connect the other end of the fiber to the switch or SFP and check the dBm reading. Compare this to the device's recommended signal strength, available in the datasheet, to confirm it is within the expected range.</p>
                                <p>[5] If the link light is stuck green, remove and reinsert the fiber to verify if the link light reappears.</p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-poe')}>
                            There is no PoE output.
                        </button>
                        {visibleAnswers.has('no-poe') && (
                            <div className="faq-answer">
                                <p>[1] Use a voltmeter to verify the power supply is producing the required 48-56VDC while under load.</p>
                                <li>[1.1] Ensure the red probe is connected to the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</li>
                                <li>[1.2] Confirm the voltmeter is set to DC voltage mode.</li>
                                <li>[1.3] Touch the red probe to the positive terminal and the black probe to the negative terminal.</li>
                                <li>[1.4] If the voltage is less than 48VDC, replace the power supply and retry step 1.</li>
                                <p>[2] Look up the data sheet of the device(s) powered by PoE, the power supply, and the switch.</p>
                                <li>[2.1] Confirm that the power supply produces enough wattage for the device(s) powered by PoE and for the switch.</li>
                                <li>[2.2] Verify that the device(s) powered by PoE are compatible with the PoE standard of the switch (i.e. 802.3af, 802.3at, 802.3bt).</li>
                                <p>[3] Test that the device(s) powered by PoE get powered on via another PoE source.</p>
                                <p>[4] Replace the Ethernet cable.</p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-communication')}>
                            The unit is not communicating properly.
                        </button>
                        {visibleAnswers.has('no-communication') && (
                            <div className="faq-answer">
                                <p>[1] Determine which ports are affected.</p>
                                <p>[2] Determine if communication is restored automatically or if the switch requires a power cycle.</p>
                                <p>[3] Determine whether the switch locks up periodically (e.g. hourly, every two hours, daily, etc.) or randomly.</p>
                                <p>[4] Verify that the web interface is accessible.</p>
                                <p>[5] Identify the current firmware version of the switch and update to the latest version.</p>
                                <p>[6] Factory default the switch to determine if the issue persists.</p>
                                <p>[7] Isolate the switch outside of the network on a bench to determine if the issue persists.</p>
                                <p>[8] Replace the switch with a known-working one to determine if the same issue persists with the new switch.</p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('reset-switch')}>
                            I cannot log in to the unit.
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
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default EthernetSwitchTroubleshooting;
