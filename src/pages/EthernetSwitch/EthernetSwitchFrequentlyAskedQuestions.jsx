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
                newAnswers.delete(questionId); // Close the answer
            } else {
                newAnswers.add(questionId); // Open the answer
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
                            What is an Ethernet switch?
                        </button>
                        {visibleAnswers.has('ethernet-switch') && (
                            <div className="faq-answer">
                                <li>A layer 2 Ethernet switch forwards packets to a device in a LAN using its MAC address.</li>
                                <li>A layer 3 Ethernet switch can route packets across different networks in a WAN.</li>
                                <li>Switches support auto MDI/MDIX, meaning they can use either straight-through or crossover cables.</li>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('default-configuration')}>
                            What are the default configurations on Comnet's Ethernet switches?
                        </button>
                        {visibleAnswers.has('default-configuration') && (
                            <div className="faq-answer">
                                <li>Default IP: 192.168.10.1</li>
                                <li>Default username: admin</li>
                                <li>Default password: admin</li>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('switch-protocols')}>
                            What are the Ethernet switch protocols?
                        </button>
                        {visibleAnswers.has('switch-protocols') && (
                            <div className="faq-answer">
                                <li>ARP</li>
                                <li>RSTP</li>
                                <li>STP</li>
                                <li>MSTP</li>
                                <li>IGMP</li>
                                <li>RBRIDGE</li>
                                <li>LLDP</li>
                                <li>NTP</li>
                                <li>QoS</li>
                                <li>SNMP</li>
                                <li>SSH</li>
                                <li>Telnet</li>
                                <li>VLAN (802.1Q)</li>
                                <li>RADIUS/TACACS+</li>
                                <li>LACP</li>
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
