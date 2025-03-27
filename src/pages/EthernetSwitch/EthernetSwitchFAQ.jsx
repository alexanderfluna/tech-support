import React, { useState } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';

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
                <h1 style={{width: "100%"}}>Relevant Information</h1>
            </button>
            {FAQ && (
                <>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('ethernet-switch')}>
                            Learn about Ethernet switches.
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
