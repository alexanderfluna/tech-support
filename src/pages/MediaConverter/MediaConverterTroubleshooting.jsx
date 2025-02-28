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
                            <p>[1] For devices requiring an 'A' and 'B' pair, ensure there is an 'A' unit on one side of the fiber and a 'B' unit on the other side of the fiber. </p>
                            <li>The data must be transmitted and received over the one strand of fiber. Using wavelength division multiplexing (WDM), the 'A' and 'B' units transmit and receive data at different wavelengths.</li>
                            <p>[2] Confirm that the fiber in use is compatible with the switch and/or SFP module.</p>
                            <li>[2.1] The data rate (Gigabit Ethernet vs. Fast Ethernet).</li>
                            <li>[2.2] The fiber type (single mode vs multimode).</li>
                            <li>[2.3] The number of fiber strands (single strand vs. dual strand).</li>
                            <li>[2.4] The optical connector (SC vs. LC).</li>
                            <p>[3] Test if the fiber works with another device.</p>
                            <p>[4] Using a process of elimination, swap out the device and/or SFP on either end of the fiber with an identical device and/or SFP to determine which unit is failing.</p>
                            <p>[5] Connect one end of the fiber to an optical power meter and connect the other end of the fiber to the switch or SFP and check the dBm reading. Compare this to the device's recommended signal strength, available in the datasheet, to confirm it is within the expected range.</p>
                            <p>[6] If the link light is stuck green, remove and reinsert the fiber to verify if the link light reappears.</p>
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> There is no PoE output. </button>
                        {visibleAnswers.has('no-poe') && (
                        <div className="faq-answer">
                            <p>[1] Use a voltmeter to verify the power supply is producing the required 48-56VDC while under load.</p>
                            <li>[1.1] Ensure the red probe is connected to the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</li>
                            <li>[1.2] Confirm the voltmeter is set to DC voltage mode.</li>
                            <li>[1.3] Touch the red probe to the positive terminal and the black probe to the negative terminal.</li>
                            <li>[1.4] If the voltage is less than 48VDC, replace the power supply and retry step 1.</li>
                            <p>[2] Look up the data sheet of the device(s) powered by PoE, the power supply, and the switch.</p>
                            <li>[2.1] Confirm that the power supply produces enough wattage for the device(s) powered by PoE and for the switch.</li>
                            <li>[2.2] Verify that the device(s) powered by PoE are compatible with the PoE standard of the switch (i.e. 802.3af, 802.3at, 802.3bt).</li>
                            <p>[3] Test that the device(s) powered by PoE get powered on via another PoE source at the same standard.</p>
                            <p>[4] Replace the Ethernet cable to determine if the issue persists.</p>
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
                    </div>
                </>
            )}

        </div>     
  )
}

export default MediaConverterTroubleshooting