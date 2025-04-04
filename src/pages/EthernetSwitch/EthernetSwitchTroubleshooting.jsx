import React from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

function EthernetSwitchTroubleshooting() {
    return (
        <div className="faq-list">
            <h1 className="faq-title">Troubleshooting Ethernet Switches</h1>

            <div className="faq-answer" id="switch-diagnose">
                <h1>Diagnose the Issues with the Ethernet Switch</h1>
                <p><strong>Document the following information:</strong></p>
                <p><strong>[1]</strong> Has the Ethernet switch ever operated correctly? If so, for how long before the issue occurred?</p>
                <p><strong>[2]</strong> Does the Ethernet switch power on and remain powered?</p>
                <p><strong>[3]</strong> Can the Ethernet switch be reached via a ping test?</p>
                <p><strong>[4]</strong> Do all ports successfully forward network traffic?</p>
                <p><strong>[5]</strong> If this is a PoE switch, are connected devices receiving power as expected?</p>
                <p><strong>[6]</strong> If none of the above issues apply, could the issue be related to the switch's configuration?</p>
            </div>

            <div className="table-of-contents">
                <h1>Table of Contents</h1>
                <p><a href="#switch-no-power-light">1) How to Troubleshoot an Ethernet Switch with Power Issues</a></p>
                <p><a href="#switch-no-optical-link">2) How to Troubleshoot an Ethernet Switch with Optical Link Issues</a></p>
                <p><a href="#switch-not-communicating">3) How to Troubleshoot an Ethernet Switch with Network Issues</a></p>
                <p><a href="#switch-no-poe">4) How to Troubleshoot an Ethernet Switch with PoE Issues</a></p>
                <p><a href="#switch-ip-address">5) How to Find the IP Address of an Ethernet Switch</a></p>
                <p><a href="#switch-default">6) How to Factory Default an Ethernet Switch</a></p>
                <p><a href="#switch-default">7) How to Set Up VLANs on an Ethernet Switch</a></p>
                <p><a href="#switch-default">8) How to Set Up a Ring on an Ethernet Switch</a></p>
            </div>

            <div className="faq-answer" id="switch-no-power-light">
                <h1>1) How to Troubleshoot an Ethernet Switch with Power Issues</h1>
                <NoPowerLight />
            </div>
            
            <div className="faq-answer" id="switch-no-optical-link">
                <h1>2) How to Troubleshoot an Ethernet Switch with Optical Link Issues</h1>
                <NoOpticalLink />
            </div>

            <div className="faq-answer" id="switch-not-communicating">
                <h1>3) How to Troubleshoot an Ethernet Switch with Network Issues</h1>
                <p><strong>[1]</strong> Follow the procedure in the <strong>"How to Troubleshoot an Ethernet Switch with Power Issues"</strong> to rule out power-related issues. </p>
                <p><strong>[2]</strong> Determine if all ports succesfully pass network traffic</p>
                <p><strong>[3]</strong> Determine if communication is restored on its own or if the switch requires a power cycle.</p>
                <p><strong>[4]</strong> Determine the interval in which the switch has the issues (e.g. every day, once a week, etc.) or if it is random.</p>
                <p><strong>[5]</strong> Determine if the web interface is accessible.</p>
                <p><strong>[6]</strong> Factory default the switch to determine if the issue persists.</p>
                <p><strong>[7]</strong> Identify the current firmware version of the switch and update it to the latest version.</p>
                <p><strong>[8]</strong> Isolate the switch outside of the network on a bench to determine if the issue persists.</p>
                <p><strong>[9]</strong> If the switch supports logging, review the event logs for any error messages, warnings, or hardware-related issues that might point to the cause of the issue.</p>
                <p><strong>[10]</strong> Verify that the speed and duplex settings of the affected port(s) match those of the connected device. Mismatched settings could cause intermittent connectivity. Ideally, both should be set to auto-negotiate.</p>
                <p><strong>[11]</strong> Test the Ethernet cables between the devices and the switch to ensure they are properly wired and not experiencing intermittent failures due to poor quality or damage.</p>
                <p><strong>[12]</strong> Ensure that the network is not congested. High traffic levels or large bursts of data could overwhelm the switch, causing temporary drops. Use a network analyzer to monitor traffic and identify congestion points.</p>
                <p><strong>[13]</strong> Replace the switch with a known-working one to determine if the same issue persists with the new switch.</p>
            </div>


            <div className="faq-answer" id="switch-no-poe">
                <h1>4) How to Troubleshoot an Ethernet Switch with PoE Issues</h1>
                <NoPoE />
            </div>

            <div className="faq-answer" id="switch-ip-address">
                <h1>5) How to Find the IP Address of an Ethernet Switch</h1>
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
                <h1>6) How to Factory Default an Ethernet Switch</h1>
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
