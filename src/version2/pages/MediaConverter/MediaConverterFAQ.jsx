
import React, { useState } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

function MediaConverterFrequentlyAskedQuestions() {
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
                <p>Our FAQ section contains answers to frequently asked questions and how to troubleshoot common issues regarding Comnet's media converters.</p>
            </button>
        {FAQ && (
            <>
                <div className="faq-item">
                    <button className="faq-question" onClick={() => toggleAnswer('media-converters')}> Learn about media converters. </button>
                    {visibleAnswers.has('media-converters') && (
                    <div className="faq-answer">
                        <p>A <strong>media converter</strong> facilitates communication between different networking media. It converts Ethernet data, transmitted as electrical pulses over copper cables, into infrared light signals that can travel through optical fiber and vice versa. Media converters are essential in modern networking, particularly when extending network distances beyond the limits of traditional copper cabling.</p>
                        <p>Operating at <strong>Layer 1,</strong> media converters strictly function as data pass-through devices. Unlike routers or switches, they do not analyze or modify network traffic. Their role is purely to convert signals, ensuring compatibility between different transmission media while maintaining the integrity and speed of data transfer.</p>
                        <p>Some media converters support <strong>Power over Ethernet (PoE),</strong> which allows the transmission of both power and data over a single Ethernet cable. Non-PoE versions, on the other hand, require separate power sources for connected devices. These devices also come in different physical sizes. <strong>Full-sized media converters</strong> are designed to be mounted in <strong>rack-mountable card cages,</strong> making them ideal for structured networking environments where multiple conversions need to be managed centrally. <strong>Miniature media converters,</strong> which are compact and standalone, offer flexibility for installations in tight spaces or single-device deployments.</p>
                        <p>Media converters are commonly designed for specific network speeds, such as <strong>Fast Ethernet (10/100Mbps)</strong> or <strong>Gigabit Ethernet (1000Mbps)</strong>. Some models, like those offered by ComNet, feature <strong>multi-rate</strong> capabilities, allowing users to switch between Fast Ethernet and Gigabit Ethernet using a simple dip switch. This adaptability makes them a versatile choice for evolving network infrastructures.</p>
                        <p>Advanced versions of media converters include dual and quad media converters. A <strong>dual media converter</strong> integrates two independent conversion units within a single enclosure, effectively serving two network connections at once. Similarly, a <strong>quad media converter</strong> houses four conversion units, providing a compact and efficient solution for high-density network applications.</p>
                    </div>
                    )}
                </div>
                {<Fiber />}
                {<PowerOverEthernet />}
                {<OSI />}
                {<NoPowerLight />}
                {<NoOpticalLink />}
                {<NoPoE />}
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> Troubleshooting a unit with no Ethernet port activity. </button>
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
                            <p><strong>[5] Replace the Ethernet cable to determine if the issue persists.</strong></p>
                            <p><strong>[6] Replace the media converter with the another of the same model to determine if the issue persists.</strong></p>
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('cnfe2mc2c')}> Configure the contacts on a CNFE2MC2C. </button>
                        {visibleAnswers.has('cnfe2mc2c') && (
                        <div className="faq-answer">
                            <a href="pdf/MediaConverter/CNFE2MC2C.pdf">Click the link to view the configuration manual.</a>
                        </div>
                        )}
                    </div>
            </>
        )}
    
    </div>
  )
}

export default MediaConverterFrequentlyAskedQuestions