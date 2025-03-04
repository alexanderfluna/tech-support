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
                Frequently Asked Questions
            </button>

            {FAQ && (
                <>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('ethernet-switch')}>
                            Learn about Ethernet switches.
                        </button>
                        {visibleAnswers.has('ethernet-switch') && (
                            <div className="faq-answer">
                            <p>Ethernet switches are network devices that operate primarily at Layer 2 of the OSI model. They are used to forward packets between devices within a Local Area Network (LAN). When a device, such as a PC or printer, sends data over the network, the switch examines the packet's destination MAC address and forwards it to the appropriate device. This process helps in reducing network collisions and improving the efficiency of data transmission within the LAN. The switch learns and stores the MAC addresses of devices connected to it in a MAC address table, which allows it to make intelligent forwarding decisions.</p>
                            
                            <p>In addition to basic Layer 2 functionality, some Ethernet switches operate at Layer 3 of the OSI model, where they gain the ability to route packets between different networks. These switches are called Layer 3 switches or multilayer switches. They combine the features of both a switch and a router, allowing them to perform routing tasks such as forwarding packets between different subnets or VLANs (Virtual Local Area Networks). This capability is particularly useful in larger networks where traffic needs to flow between multiple subnets or across wide area networks (WANs). A Layer 3 switch can perform tasks such as IP routing and manage traffic between devices on different networks.</p>
                            
                            <p>Ethernet switches are designed to be flexible in terms of the cabling they support. Most modern switches are equipped with a feature called auto MDI/MDIX (Medium Dependent Interface/Medium Dependent Interface Crossover). This feature automatically detects whether a straight-through or a crossover Ethernet cable is needed for a given connection and adjusts accordingly. This means that regardless of whether you are connecting a device to another device or a device to the switch, the switch can handle both types of cables without the need for manual configuration. This helps simplify network setup and minimizes potential errors when connecting devices.</p>
                            
                            <p>Ethernet switches are typically used to connect end devices like PCs, printers, servers, and other networking devices within a local area network (LAN). Their role is to switch packets of data from one device to another. This is achieved by examining the destination MAC address in the Ethernet frame and forwarding the packet to the appropriate port on the switch that is connected to the destination device. By managing traffic this way, switches help ensure that devices within a LAN can communicate with one another efficiently, minimizing the need for broadcast traffic and improving overall network performance.</p>
                            
                            <p>In a larger network, Ethernet switches can be configured to handle different types of traffic, such as voice or video, by utilizing technologies like Quality of Service (QoS). QoS allows switches to prioritize certain types of traffic over others, ensuring that critical data, such as VoIP (Voice over IP) or video calls, is transmitted with minimal delay and without disruption. This helps ensure that real-time communications are not negatively impacted by less time-sensitive traffic like file downloads or web browsing.</p>
                            
                            <p>Switches can also be used in conjunction with Virtual Local Area Networks (VLANs) to segment a larger network into smaller, more manageable sections. VLANs help improve network security by isolating traffic between different groups of users or devices within the same physical network. For example, a network might be divided into separate VLANs for administrative staff, students, and faculty in a university. Devices in one VLAN cannot communicate with devices in another VLAN unless routing is configured, which helps keep sensitive data isolated and reduces the risk of unauthorized access.</p>
                            
                            <p>While Ethernet switches operate primarily at Layer 2, they are fundamental to the operation of modern Ethernet-based networks. They provide the basic functionality required for devices to communicate with one another within a network. Without switches, a network would be much slower and less efficient because the devices would have to rely on broadcasts to reach each other, causing significant network congestion. Switches enable efficient point-to-point communication, allowing each device to communicate directly with the intended recipient, which improves performance and scalability in networks of all sizes.</p>
                            
                            <p>To summarize, Ethernet switches are vital components in both small and large networks. They efficiently manage data traffic by forwarding packets based on MAC addresses and, in the case of Layer 3 switches, they can route packets across different networks. Switches enhance the performance of LANs, help segment networks using VLANs, and provide essential network management capabilities like QoS. The ability of switches to automatically detect the type of cable being used with the auto MDI/MDIX feature further simplifies the installation and configuration process, making them an indispensable part of modern networking.</p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('switch-protocols')}>
                            Learn about Ethernet switch protocols.
                        </button>
                        {visibleAnswers.has('switch-protocols') && (
                            <div className="faq-answer">
                                <p>ARP (Address Resolution Protocol) is used to map an IP address to a MAC address. It allows devices on the same local network to find each other and communicate effectively by resolving IP addresses to their corresponding physical hardware addresses.</p>

                                <p>RSTP (Rapid Spanning Tree Protocol) is a network protocol designed to prevent loops in Ethernet networks. It provides faster convergence compared to the older STP, making network recovery more efficient in case of topology changes.</p>

                                <p>STP (Spanning Tree Protocol) is a network protocol that ensures there are no loops in Ethernet networks. It does this by creating a tree-like structure of the network where redundant paths are blocked, ensuring efficient communication without looping.</p>

                                <p>MSTP (Multiple Spanning Tree Protocol) is an enhancement of STP that allows multiple spanning tree instances to exist within a single network. This enables more efficient use of network resources and helps in optimizing traffic flow.</p>

                                <p>IGMP (Internet Group Management Protocol) is used by devices to join or leave multicast groups in IP networks. It is essential for managing the delivery of multicast traffic to a group of receivers without flooding the entire network.</p>

                                <p>LLDP (Link Layer Discovery Protocol) is a protocol used by network devices to discover and exchange information about each other on a local network. It helps network administrators manage their network by providing details about connected devices and their capabilities.</p>

                                <p>NTP (Network Time Protocol) is used to synchronize the clocks of computers and devices over a network. It ensures that all devices within a network have consistent time, which is crucial for activities like logging, data timestamps, and scheduled tasks.</p>

                                <p>QoS (Quality of Service) refers to a set of technologies used to manage network traffic and ensure the performance of critical applications. It helps prioritize important data, such as voice or video, over less critical traffic like email or file transfers.</p>

                                <p>SNMP (Simple Network Management Protocol) is used to manage and monitor network devices. It allows network administrators to gather information about the status and performance of devices, and it can also be used to configure network devices remotely.</p>

                                <p>SSH (Secure Shell) is a cryptographic network protocol used for secure communication between devices. It allows administrators to access and manage remote systems securely over an unsecured network, replacing older, insecure protocols like Telnet.</p>

                                <p>Telnet is a network protocol that allows users to access remote devices over a network. However, it is not secure, as it transmits data, including passwords, in plain text. For secure remote access, SSH is generally preferred over Telnet.</p>

                                <p>VLAN (Virtual Local Area Network) using 802.1Q is a protocol that allows network administrators to create virtual networks within a physical network. VLANs help segment traffic, improve network performance, and enhance security by isolating different groups of devices.</p>

                                <p>RADIUS (Remote Authentication Dial-In User Service) and TACACS+ (Terminal Access Controller Access-Control System Plus) are network protocols used for authentication, authorization, and accounting. They help secure network access by ensuring only authorized users can connect and that their activities are monitored.</p>

                                <p>LACP (Link Aggregation Control Protocol) is a protocol used to combine multiple network links into a single logical link. This increases the bandwidth and provides redundancy in case of a link failure, improving network reliability and performance.</p>
                                </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('default-configuration')}>
                            What are the default configurations on a Comnet Ethernet switch?
                        </button>
                        {visibleAnswers.has('default-configuration') && (
                            <div className="faq-answer">
                                <p><strong>The default configurations of a Comnet Ethernet switch are:</strong></p>
                                <li>The default IP address is 192.168.10.1</li>
                                <li>The default username is "admin"</li>
                                <li>The default password is "admin"</li>
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
