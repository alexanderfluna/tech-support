
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
                    <button className="faq-question" onClick={() => toggleAnswer('media-converters')}> What is a media converter? </button>
                    {visibleAnswers.has('media-converters') && (
                    <div className="faq-answer">
                        <li>A media converter is a transmitter and receiver (transceiver) that converts Ethernet data in the form of electrical pulses to infrared energy sent across optical fiber and vice versa.</li>
                        <li>Media converters reside in the physical layer (layer 1) of the OSI model, meaning their only function is to pass data along.</li>
                        <li>Media converters can be purchased as a PoE or non-PoE version.</li>
                        <li>Media converters can be purchased as a full size, which fit into a rack-mountable card cage, or a miniature size version.</li>
                        <li>Media converters can come designed for Fast Ethernet or Gigabit Ethernet.</li>
                        <li>Comnet offers a multi-rate media converter that can switch between Fast Ethernet or Gigabit Ethernet via the dip switch.</li>
                        <li>Dual media converters are two media converters in one box.</li>
                        <li>Quad media converters are four media converters in one box.</li>
                        <li>A multiplexer takes several inputs and gives a single output.</li>
                        <li>A demultiplexer takes a single input and gives several outputs.</li>
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