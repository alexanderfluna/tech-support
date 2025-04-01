import React from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

function EthernetSwitchTroubleshooting() {
    return (
        <div className="faq-list">
            <h1 className="faq-title">Troubleshooting Ethernet Switches</h1>

            <div className="table-of-contents">
                <h1>Table of Contents</h1>
                <li><a href="#switch-no-power-light">Troubleshooting an Ethernet switch that will not power on</a></li>
                <li><a href="#switch-no-optical-link">Troubleshooting an Ethernet switch that will not link optically</a></li>
                <li><a href="#switch-no-poe">Troubleshooting an Ethernet switch that will not produce PoE</a></li>
                <li><a href="#switch-not-communicating">Troubleshooting an Ethernet switch with Ethernet issues</a></li>
                <li><a href="#switch-ip-address">How to find the IP address of an Ethernet switch</a></li>
                <li><a href="#switch-default">How to factory default an Ethernet switch</a></li>
            </div>

            <div className="faq-answer" id="switch-no-power-light">
                <h1>Troubleshooting an Ethernet switch that will not power on</h1>
                <NoPowerLight />
            </div>
            
            <div className="faq-answer" id="switch-no-optical-link">
                <h1>Troubleshooting an Ethernet switch that will not link optically</h1>
                <NoOpticalLink />
            </div>

            <div className="faq-answer" id="switch-no-poe">
                <h1>Troubleshooting an Ethernet switch that will not produce PoE</h1>
                <NoPoE />
            </div>

            <div className="faq-answer" id="switch-not-communicating">
                <h1>Troubleshooting an Ethernet switch with Ethernet issues.</h1>
                <p><strong>[1] Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>.</strong></p>
                <p><strong>[2] Open the device's data sheet and locate its required input/operating voltage range (e.g. 8 - 24VDC, 48 - 56VDC).</strong></p>
                <p><strong>[3] Use a voltmeter to verify the correct polarity and voltage while under load.</strong></p>
                <p style={{paddingLeft: "40px"}}>[3.1] Ensure the screws of the terminal block are securely tightened.</p>
                <p style={{paddingLeft: "40px"}}>[3.2] Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode. </p>
                <p style={{paddingLeft: "40px"}}>[3.3] Touch the red probe to the suspected positive terminal and the black probe to the suspected negative terminal. A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity.</p>
                <p style={{paddingLeft: "40px"}}>[3.4] If the polarity is reversed, swap the wires and retry.</p>
                <p><strong>[4] Determine if the power supply is delivering the required input/operating voltage.</strong></p>
                <p style={{paddingLeft: "40px"}}>[4.1] If the voltage is less than the required input/operating voltage range, replace the power supply and redo step 3.</p>
                <p style={{paddingLeft: "40px"}}>[4.2] If the voltage is within the required input/operating voltage range and the unit does not power on, contact technical support.</p>
                <p><strong>[5] Document which ports are affected.</strong></p>
                <p><strong>[6] Document if communication is restored automatically or if the switch requires a power cycle.</strong></p>
                <p><strong>[7] Document whether the switch locks up periodically (e.g. every hour, every two hours, daily, etc.) or randomly.</strong></p>
                <p><strong>[8] Verify that the web interface is accessible.</strong></p>
                <p><strong>[9] Factory default the switch.</strong></p>
                <p><strong>[10] Identify the current firmware version of the switch and update to the latest version.</strong></p>
                <p><strong>[11] Isolate the switch outside of the network on a bench to determine if the issue persists.</strong></p>
                <p><strong>[12] Replace the switch with a known-working one to determine if the same issue persists with the new switch.</strong></p>
            </div>

            <div className="faq-answer" id="switch-ip-address">
                <h1>How to find the IP address of a switch</h1>
                <p><strong>[1] Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a> to find the default IP address in the installation manual.</strong></p>
                <p>The typical default configurations of a Comnet Ethernet switch are:</p>
                <p style={{paddingLeft: "40px"}}>[1] Default IP address: 192.168.10.1</p>
                <p style={{paddingLeft: "40px"}}>[2] Default username: "admin"</p>
                <p style={{paddingLeft: "40px"}}>[3] Default password: "admin"</p>
                <p><strong>[2] If the default IP address does not work, but the username and password are known:</strong></p>
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

            <div className="faq-answer" id="switch-default">
                <h1>How to factory default a switch</h1>
                <p>[1] Open PuTTY or Tera Term and start a serial connection using the following configurations.</p>
                <li>Speed (baud): 115200.</li>
                <li>Data bits: 8</li>
                <li>Stop bits: 1</li>
                <li>Parity: None</li>
                <li>Flow control: None</li>
                <p>[2] Enter the username and password.</p>
                <p>[3] Type "enable" and click enter.</p>
                <p>[4] Type "reload defaults" and click enter.</p>
                <p>[5] Enter the IP address 192.168.10.1 in a web browser.</p>
            </div>
        </div>
    );
}

export default EthernetSwitchTroubleshooting;
