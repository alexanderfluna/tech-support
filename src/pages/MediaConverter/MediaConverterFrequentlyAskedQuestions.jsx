
import React, { useState, useEffect } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';

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
                    <button className="faq-question" onClick={() => toggleAnswer('media-converters')}> Learn about media converters. </button>
                    {visibleAnswers.has('media-converters') && (
                    <div className="faq-answer">
                        <p>A media converter is a type of transceiver that facilitates communication between different networking media. It converts Ethernet data, transmitted as electrical pulses over copper cables, into infrared light signals that can travel through optical fiber. This conversion process also works in reverse, allowing seamless integration between copper and fiber networks. Media converters are essential in modern networking, particularly when extending network distances beyond the limits of traditional copper cabling.</p>
                        <p>Operating at the physical layer (Layer 1) of the OSI model, media converters strictly function as data pass-through devices. Unlike routers or switches, they do not analyze or modify network traffic. Their role is purely to convert signals, ensuring compatibility between different transmission media while maintaining the integrity and speed of data transfer.</p>
                        <p>Media converters are available in various configurations to suit different networking needs. Some models support Power over Ethernet (PoE), which allows the transmission of both power and data over a single Ethernet cable. Non-PoE versions, on the other hand, require separate power sources for connected devices. Choosing between PoE and non-PoE models depends on the specific power requirements of the network.</p>
                        <p>These devices also come in different physical sizes. Full-sized media converters are designed to be mounted in rack-mountable card cages, making them ideal for structured networking environments where multiple conversions need to be managed centrally. Miniature versions, which are compact and standalone, offer flexibility for installations in tight spaces or single-device deployments.</p>
                        <p>Media converters are commonly designed for specific network speeds, such as Fast Ethernet (100 Mbps) or Gigabit Ethernet (1 Gbps). Some models, like those offered by ComNet, feature multi-rate capabilities, allowing users to switch between Fast Ethernet and Gigabit Ethernet using a simple dip switch. This adaptability makes them a versatile choice for evolving network infrastructures.</p>
                        <p>Advanced versions of media converters include dual and quad media converters. A dual media converter integrates two independent conversion units within a single enclosure, effectively serving two network connections at once. Similarly, a quad media converter houses four conversion units, providing a compact and efficient solution for high-density network applications.</p>
                        <p>Media converters can be multiplexers or demultiplexers. A multiplexer combines multiple data streams into a single transmission. Conversely, a demultiplexer takes a single input signal and distributes it into multiple outputs.</p>
                    </div>
                    )}
                </div>
                {<Fiber />}
                {<PowerOverEthernet />}
                {<OSI />}
            </>
        )}
    
    </div>
  )
}

export default MediaConverterFrequentlyAskedQuestions