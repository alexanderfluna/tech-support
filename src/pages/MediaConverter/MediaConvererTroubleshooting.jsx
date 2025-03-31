import React from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import NoPoE from '../../relevant-information/NoPoe';

function MediaConverterTroubleshooting() {
    return (
        <div className="faq-list">
            <h1 className="faq-title">Media Converter Troubleshooting</h1>

            <div className="table-of-contents">
                <h1>Table of Contents</h1>
                <li><a href="#no-power-light">Troubleshooting a media converter that will not power on</a></li>
                <li><a href="#no-optical-link">Troubleshooting a media converter that will not link optically</a></li>
                <li><a href="#no-poe">Troubleshooting a media converter that will not produce PoE</a></li>
                <li><a href="#no-communication">Troubleshooting a media converter with no Ethernet port activity</a></li>
                <li><a href="#cnfe2mc2c">How to configure the contacts on a CNFE2MC2C</a></li>
            </div>

            <div className="faq-answer" id="no-power-light">
                <h1>Troubleshooting a media converter that will not power on</h1>
                <NoPowerLight />
            </div>

            <div className="faq-answer" id="no-optical-link">
                <h1>Troubleshooting a media converter that will not link optically</h1>
                <NoOpticalLink />
            </div>

            <div className="faq-answer" id="no-poe">
                <h1>Troubleshooting a media converter that will not produce PoE</h1>
                <NoPoE />
            </div>

            <div className="faq-answer" id="no-communication">
                <h1>Troubleshooting a media converter with no Ethernet port activity.</h1>
                <p><strong>[1] Enter the device's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a>.</strong></p>
                <p><strong>[2] Open the device's data sheet and locate its required input/operating voltage range (e.g. 8 - 24VDC, 48 - 56VDC).</strong></p>
                <p><strong>[3] Use a voltmeter to verify the correct polarity and voltage while under load.</strong></p>
                <p style={{paddingLeft: "40px"}}>[3.1] Ensure the screws of the terminal block are securely tightened.</p>
                <p style={{paddingLeft: "40px"}}>[3.2] Confirm the red probe is connected to the voltmeter's positive terminal, the black probe is connected to the negative (or ground) terminal, and the voltmeter is set to DC voltage mode. </p>
                <p style={{paddingLeft: "40px"}}>[3.3] Touch the red probe to the suspected positive terminal and the black probe to the suspected negative terminal. A positive voltage reading indicates correct polarity; a negative reading indicates reversed polarity.</p>
                <p style={{paddingLeft: "40px"}}>[3.4] If the polarity is reversed, swap the wires and retry.</p>
                <p><strong>[4] Determine if the power supply is delivering the required input/operating voltage.</strong></p>
                <p style={{paddingLeft: "40px"}}>[4.1] If the voltage is less than the required input/operating voltage range, replace the power supply and redo step 3.</p>
                <p style={{paddingLeft: "40px"}}>[4.2] If the voltage is within the required input/operating voltage range and the unit does not power on, contact technical support.</p>
                <p><strong>[5] Replace the Ethernet cable to determine if the issue persists.</strong></p>
                <p><strong>[6] Replace the media converter with another of the same model to determine if the issue persists.</strong></p>
            </div>

            <div className="faq-answer" id="cnfe2mc2c">
                <h1>How to configure the contacts on a CNFE2MC2C.</h1>
                <a href="pdf/MediaConverter/CNFE2MC2C.pdf">Click the link to view the configuration manual.</a>
            </div>
        </div>
    );
}

export default MediaConverterTroubleshooting;
