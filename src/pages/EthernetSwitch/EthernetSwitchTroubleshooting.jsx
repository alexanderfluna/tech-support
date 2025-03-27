import React, { useState } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

function EthernetSwitchTroubleshooting() {
    const [visibleAnswers, setVisibleAnswers] = useState(new Set());
    const [FAQ, setFAQ] = useState(false);

    const toggleFAQ = () => {
        setFAQ(!FAQ);
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
            <button className="purple-button" onClick={toggleFAQ}>
                <h1>Troubleshooting</h1>
            </button>
            {FAQ && (
                <>
                 <NoPowerLight />
                    <NoOpticalLink />
                    <NoPoE />
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-communication')}>
                            Troubleshooting a switch not properly communicating.
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
                        <button className="faq-question" onClick={() => toggleAnswer('switch-ip')}>
                            How to find the switch IP address.
                        </button>
                        {visibleAnswers.has('switch-ip') && (
                            <div className="faq-answer">
                                <p><strong>[1] Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a> to to find the default IP address in the installation manual.</strong></p>
                                <p>The typical default configurations of a Comnet Ethernet switch are:</p>
                                <p style={{paddingLeft: "40px"}}>[1] Default IP address: 192.168.10.1</p>
                                <p style={{paddingLeft: "40px"}}>[2] Default username: "admin"</p>
                                <p style={{paddingLeft: "40px"}}>[3] Default password: "admin"</p>
                                <p><strong>[2] If the default IP address does not work, but the username and password is known:</strong></p>
                                <p style={{paddingLeft: "40px"}}>[2.1] Open PuTTY or Tera Term and start a serial connection using the following configurations.</p>
                                <li style={{paddingLeft: "60px"}}>Speed (baud): 115200</li>
                                <li style={{paddingLeft: "60px"}}>Data bits: 8</li>
                                <li style={{paddingLeft: "60px"}}>Stop bits: 1</li>
                                <li style={{paddingLeft: "60px"}}>Parity: None</li>
                                <li style={{paddingLeft: "60px"}}>Flow control: None</li>
                                <p style={{paddingLeft: "40px"}}>[2.2] Enter the username and password.</p>
                                <p style={{paddingLeft: "40px"}}>[2.3] Type "show ip interface brief" and click enter.</p>
                                <p><strong>[3] If the username or password is not known:</strong></p>
                                <p style={{paddingLeft: "40px"}}>[3.1] Connect the switch to another switch with LLDP enabled and view the LLDP Remote Device Summary.</p>
                                <p><strong>[4] Use Advanced IP Scanner to scan through the possible IP ranges that the switch is under.</strong></p>
                            </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('reset-switch')}>
                            How to reset the switch from the CLI.
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
