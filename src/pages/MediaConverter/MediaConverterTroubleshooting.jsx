import React, { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';

function MediaConverterTroubleshooting() {
    const [visibleAnswers, setVisibleAnswers] = useState(new Set());
    const [troubleshooting, setTroubleshooting] = useState(false);

    const toggleTroubleshooting = () => {
        setTroubleshooting(!troubleshooting);
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
        <div>
            <button className="purple-button" onClick={toggleTroubleshooting}>
                Troubeshooting Common Issues
            </button>

            {troubleshooting && (
                <>
                    <div className="faq-list">
                    {<NoPowerLight />}
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> There is no optical link. </button>
                        {visibleAnswers.has('no-link-light') && (
                        <div className="faq-answer">
                            <p><strong>[1] For devices requiring an 'A' and 'B' pair, ensure there is an 'A' unit on one side of the fiber and a 'B' unit on the other side of the fiber.</strong> </p>
                            <li>The data must be transmitted and received over the one strand of fiber. Using wavelength division multiplexing (WDM), the 'A' and 'B' units transmit and receive data at different wavelengths.</li>
                            <p><strong>[2] Confirm that the fiber in use is compatible with the switch and/or SFP module.</strong></p>
                            <p style={{paddingLeft: "40px"}}>[2.1] The data rate (Gigabit Ethernet vs. Fast Ethernet).</p>
                            <p style={{paddingLeft: "40px"}}>[2.2] The fiber type (single mode vs multimode).</p>
                            <p style={{paddingLeft: "40px"}}>[2.3] The number of fiber strands (single strand vs. dual strand).</p>
                            <p style={{paddingLeft: "40px"}}>[2.4] The optical connector (SC vs. LC).</p>
                            <p><strong>[3] Test if the fiber works with another device.</strong></p>
                            <p><strong>[4] Using a process of elimination, swap out the device and/or SFP on either end of the fiber with an identical device and/or SFP to determine which unit is failing.</strong></p>
                            <p><strong>[5] If an optical power meter is available, connect one end of the fiber to the optical power meter, connect the other end of the fiber to the media converter or SFP, and check the dBm reading. Compare this to the device's recommended signal strength, available in the datasheet, to confirm it is within the expected range.</strong></p>
                            <p><strong>[6] If the link light is stuck green, remove and reinsert the fiber to verify if the link light reappears.</strong></p>
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> There is no PoE output. </button>
                        {visibleAnswers.has('no-poe') && (
                        <div className="faq-answer">
                            <p><strong>[1] Use a voltmeter to verify the power supply is producing the required 48-56VDC while under load.</strong></p>
                            <p style={{paddingLeft: "40px"}}>[1.1] Ensure the red probe is connected to the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</p>
                            <p style={{paddingLeft: "40px"}}>[1.2] Confirm the voltmeter is set to DC voltage mode.</p>
                            <p style={{paddingLeft: "40px"}}>[1.3] Touch the red probe to the positive terminal and the black probe to the negative terminal.</p>
                            <p style={{paddingLeft: "40px"}}>[1.4] If the voltage is less than 48VDC, replace the power supply and retry step 1.</p>
                            <p><strong>[2] Look up the data sheet of the device(s) powered by PoE, the power supply, and the switch.</strong></p>
                            <p style={{paddingLeft: "40px"}}>[2.1] Confirm that the power supply produces enough wattage for the device(s) powered by PoE and for the switch.</p>
                            <p style={{paddingLeft: "40px"}}>[2.2] Verify that the device(s) powered by PoE are compatible with the PoE standard of the switch (i.e. 802.3af, 802.3at, 802.3bt).</p>
                            <p><strong>[3] Test that the device(s) powered by PoE get powered on via another PoE source at the same standard.</strong></p>
                            <p><strong>[4] Replace the Ethernet cable to determine if the issue persists.</strong></p>
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> There is no Ethernet port activity. </button>
                        {visibleAnswers.has('no-communication') && (
                        <div className="faq-answer">
                            <p>[1] Replace the Ethernet cable to determine if the issue persists.</p>
                            <p>[2] Replace the media converter with the another of the same model to determine if the issue persists.</p>
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('cnfe2mc2c')}> CNFE2MC2C contacts. </button>
                        {visibleAnswers.has('cnfe2mc2c') && (
                        <div className="faq-answer">
                            <a href="pdf/MediaConverter/CNFE2MC2C.pdf">Click the link to download the configuration manual.</a>
                        </div>
                        )}
                    </div>
                    </div>
                </>
            )}

        </div>     
  )
}

export default MediaConverterTroubleshooting