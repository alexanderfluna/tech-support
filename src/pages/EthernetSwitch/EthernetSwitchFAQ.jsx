import React, { useState } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

function EthernetSwitchFrequentlyAskedQuestions() {
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
                <h1>FAQ</h1>
                <p>Our FAQ section contains answers to frequently asked questions and how to troubleshoot common issues regarding Comnet's Ethernet switches.</p>
            </button>
            {FAQ && (
                <>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('ethernet-switch')}>
                            Learn more about Ethernet switches.
                        </button>
                        {visibleAnswers.has('ethernet-switch') && (
                            <div className="faq-answer">                            
                                <p>Ethernet switches are used to connect end devices like PCs, printers, servers, and other networking devices within a <strong>local area network (LAN)</strong>. Their role is to switch packets of data from one device to another. This is achieved by examining the destination <strong>MAC address</strong> in the Ethernet frame and forwarding the packet to the appropriate port on the switch that is connected to the destination device. By managing traffic this way, switches help ensure that devices within a LAN can communicate with one another efficiently, minimizing the need for broadcast traffic and improving overall network performance.</p>
                                <p>Switches can also be used in conjunction with <strong>Virtual Local Area Networks (VLANs)</strong> to segment a larger network into smaller, more manageable sections. VLANs help improve network security by isolating traffic between different groups of users or devices within the same physical network. For example, a network might be divided into separate VLANs for administrative staff, students, and faculty in a university. Devices in one VLAN cannot communicate with devices in another VLAN unless routing is configured, which helps keep sensitive data isolated and reduces the risk of unauthorized access.</p>
                                <p>In a larger network, Ethernet switches can be configured to handle different types of traffic, such as voice or video, by utilizing technologies like <strong>Quality of Service (QoS)</strong>. QoS allows switches to prioritize certain types of traffic over others, ensuring that critical data, such as <strong>VoIP (Voice over IP)</strong> or video calls, is transmitted with minimal delay and without disruption. This helps ensure that real-time communications are not negatively impacted by less time-sensitive traffic like file downloads or web browsing.</p>
                                <p>Ethernet switches are designed to be flexible in terms of the cabling they support. Most modern switches are equipped with a feature called <strong>auto MDI/MDIX (Medium Dependent Interface/Medium Dependent Interface Crossover)</strong>. This feature automatically detects whether a straight-through or a crossover Ethernet cable is needed for a given connection and adjusts accordingly. This means that regardless of whether you are connecting a device to another device or a device to the switch, the switch can handle both types of cables without the need for manual configuration. This helps simplify network setup and minimizes potential errors when connecting devices.</p>                            
                                <p>While Ethernet switches operate primarily at <strong>Layer 2,</strong> they are fundamental to the operation of modern Ethernet-based networks. They provide the basic functionality required for devices to communicate with one another within a network. Without switches, a network would be much slower and less efficient because the devices would have to rely on broadcasts to reach each other, causing significant network congestion. Switches enable efficient point-to-point communication, allowing each device to communicate directly with the intended recipient, which improves performance and scalability in networks of all sizes.</p>
                                </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('default-configuration')}>
                            What are the default configurations on a Comnet Ethernet switch?
                        </button>
                        {visibleAnswers.has('default-configuration') && (
                            <div className="faq-answer">
                                <p><strong>Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>.</strong></p>
                                <p><strong>The typical default configurations of a Comnet Ethernet switch are:</strong></p>
                                <p style={{paddingLeft: "40px"}}>[1] The default IP address is 192.168.10.1</p>
                                <p style={{paddingLeft: "40px"}}>[2] The default username is "admin"</p>
                                <p style={{paddingLeft: "40px"}}>[3] The default password is "admin"</p>
                            </div>
                        )}
                    </div>
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
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('switch-protocols')}>
                            Learn about Ethernet switch protocols.
                        </button>
                        {visibleAnswers.has('switch-protocols') && (
                            <div className="faq-answer">
                                <p><strong>ARP (Address Resolution Protocol)</strong> is used to map an IP address to a MAC address. It allows devices on the same local network to find each other and communicate effectively by resolving IP addresses to their corresponding physical hardware addresses.</p>
                                <p><strong>LLDP (Link Layer Discovery Protocol)</strong> is a protocol used by network devices to discover and exchange information about each other on a local network. It helps network administrators manage their network by providing details about connected devices and their capabilities.</p>
                                <p><strong>NTP (Network Time Protocol)</strong> is used to synchronize the clocks of computers and devices over a network. It ensures that all devices within a network have consistent time, which is crucial for activities like logging, data timestamps, and scheduled tasks.</p>
                                <p><strong>STP (Spanning Tree Protocol)</strong> is a network protocol that ensures there are no loops in Ethernet networks. It does this by creating a tree-like structure of the network where redundant paths are blocked, ensuring efficient communication without looping.</p>
                                <p><strong>MSTP (Multiple Spanning Tree Protocol)</strong> is an enhancement of STP that allows multiple spanning tree instances to exist within a single network. This enables more efficient use of network resources and helps in optimizing traffic flow.</p>
                                <p><strong>RSTP (Rapid Spanning Tree Protocol)</strong> is a network protocol designed to prevent loops in Ethernet networks. It provides faster convergence compared to the older STP, making network recovery more efficient in case of topology changes.</p>
                                <p><strong>IGMP (Internet Group Management Protocol)</strong> is used by devices to join or leave multicast groups in IP networks. It is essential for managing the delivery of multicast traffic to a group of receivers without flooding the entire network.</p>
                                <p><strong>QoS (Quality of Service)</strong> refers to a set of technologies used to manage network traffic and ensure the performance of critical applications. It helps prioritize important data, such as voice or video, over less critical traffic like email or file transfers.</p>
                                <p><strong>SNMP (Simple Network Management Protocol)</strong> is used to manage and monitor network devices. It allows network administrators to gather information about the status and performance of devices, and it can also be used to configure network devices remotely.</p>
                                <p><strong>SSH (Secure Shell)</strong> is a cryptographic network protocol used for secure communication between devices. It allows administrators to access and manage remote systems securely over an unsecured network, replacing older, insecure protocols like Telnet.</p>
                                <p><strong>Telnet</strong> is a network protocol that allows users to access remote devices over a network. However, it is not secure, as it transmits data, including passwords, in plain text. For secure remote access, SSH is generally preferred over Telnet.</p>
                                <p><strong>VLAN (Virtual Local Area Network)</strong> using 802.1Q is a protocol that allows network administrators to create virtual networks within a physical network. VLANs help segment traffic, improve network performance, and enhance security by isolating different groups of devices.</p>
                                <p><strong>RADIUS (Remote Authentication Dial-In User Service)</strong> and <strong>TACACS+ (Terminal Access Controller Access-Control System Plus)</strong> are network protocols used for authentication, authorization, and accounting. They help secure network access by ensuring only authorized users can connect and that their activities are monitored.</p>
                                <p><strong>LACP (Link Aggregation Control Protocol)</strong> is a protocol used to combine multiple network links into a single logical link. This increases the bandwidth and provides redundancy in case of a link failure, improving network reliability and performance.</p>
                                </div>
                        )}
                    </div>
                    <Fiber />
                    <PowerOverEthernet />
                    <OSI />
                </>
            )}
        </div>
    );
}

export default EthernetSwitchFrequentlyAskedQuestions;
