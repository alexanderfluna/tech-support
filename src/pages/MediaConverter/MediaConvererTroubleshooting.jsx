
import React, { useState } from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

function MediaConverterTroubleshooting() {
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

export default MediaConverterTroubleshooting