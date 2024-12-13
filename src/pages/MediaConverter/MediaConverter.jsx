import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';
import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import '../../styles/Global.css';
import '../../styles/Pages.css';

const MediaConverter = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  
  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Media Converter</h2>
        {<MediaConverterSelectorTool />}
        <p className="faq-title">How To Troubleshoot Common Issues</p>
        <div className="faq-list">
        {<NoPowerLight />}
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> There is no optical link. </button>
            {visibleAnswer === 'no-link-light' && (
              <div className="faq-answer">
                <p>1. For devices requiring an 'A' and 'B' pair, ensure there is an A on one side and a B on the other. </p>
                <li>These devices only allow one strand of fiber, therefore the data must be transmitted and received over the one strand.</li>
                <li>The 'A' and 'B' units transmit and receive at different wavelengths.</li>
                <p>2. For devices with built-in optics, confirm that the fiber in use is compatible with the device:</p>
                <li>The fiber type (single mode vs. multimode).</li>
                <li>The number of fiber strands (single strand vs. dual strand).</li>
                <li>The optical connector (ST vs. SC).</li>
                <p>3. For devices requiring SFPs, confirm that the SFPs are compatible with both the device and the fiber in use.</p>
                <li>The data rate (Gigabit Ethernet vs. Fast Ethernet).</li>
                <li>The fiber type (single mode vs multimode).</li>
                <li>The number of fiber strands (single strand vs. dual strand).</li>
                <li>The optical connector (ST vs. LC).</li>
                <p>4. Test that the fiber works with another device.</p>
                <li>Use the fiber with another device to determine if a link light is achieved.</li>
                <p>5. Swap out the device and SFPs (if applicable) on either end with an identical.</p>
                <li>This will determine which device on either end is failing.</li>
                <p>6. Fiber Optic Cleaning Kit:</p>
                <li>Use the lint-free wipes and cleaning pen from the optic cleaning kit to clean fiber connectors and the SFP cage gently. Ensure no debris remains before reconnecting.</li>
                <p>7. Optical Power Meter:</p>
                <li>Connect the power meter to the fiber cable and check the dBm reading. Compare this to the device's recommended signal strength (available in the datasheet) to confirm it is within the expected range.</li>
                <p>8. Optical Time-Domain Reflectometer (OTDR)</p>
                <li>Connect the OTDR to one end of the fiber cable. The OTDR will send light pulses through the fiber to analyze reflections and signal loss, producing a graph with detailed information on reflections, signal loss, and potential faults.</li>
                <li>Note the distance to any reflections or faults as shown on the OTDR report.</li>
                <p>9. Visual Fault Locator:</p>
                <li>Connect the visual fault locator to the fiber cable and check for any areas where red light escapes or dims.</li>
                <li>Inspect any detected light leaks for possible damage or poor connections.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> There is no PoE output. </button>
            {visibleAnswer === 'no-poe' && (
              <div className="faq-answer">
                <p>1. Look up the data sheet of the device(s) powered by PoE and the data sheet of the media converter.</p>
                <li>Confirm the power supply produces enough wattage for the device(s) powered by PoE and the media converter.</li>
                <li>Verify that the powered device is compatible with the PoE standard of the media converter (i.e. 802.3af, 802.3at, 802.3bt).</li>
                <p>2. Use a voltmeter to verify the power supply is producing 48 to 56VDC.</p>
                <li>Ensure the red probe is connected to the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</li>
                <li>Confirm the voltmeter is set to DC voltage mode.</li>
                <li>Touch the the red probe to the positive terminal and the black probe to the negative terminal.</li>
                <li>Ensure the power supply delivers the required 48VDC-56VDC input voltage while connected to the device.</li>
                <li>If possible, increase the voltage being produced by the power supply.</li>
                <p>3. Test that the power supply is functional by using it to power another device.</p>
                <p>4. Attempt using another 48VDC power source.</p>
                <p>5. Verify that the powered device gets powered on via another PoE source.</p>
                <p>6. Replace the Ethernet cable.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> There is no Ethernet port activity. </button>
            {visibleAnswer === 'no-communication' && (
              <div className="faq-answer">
                <p>1. Swap out the Ethernet cable to determine if the issue persists.</p>
                <p>2. Swap out the device with another known-working one to determine if the issue persists.</p>
              </div>
            )}
          </div>
        </div>

        <p className="faq-title">Frequently Asked Questions</p>
        <div className="faq-list">
        <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('media-converters')}> What is a media converter? </button>
            {visibleAnswer === 'media-converters' && (
              <div className="faq-answer">
                <li>A media converter is a transmitter and receiver (transceiver) that converts Ethernet data in the form of electrical pulses to infrared energy sent across optical fiber and vice versa.</li>
                <li>Media converters reside in the physical layer (layer 1) of the OSI model, meaning their only function is to pass data along.</li>
                <li>Media converters can be purchased as a PoE or non-PoE version.</li>
                <li>Media converters can be purchased as a full size, which fit into a rack-mountable card cage, or a miniature size version.</li>
                <li>Media converters can come designed for Fast Ethernet or Gigabit Ethernet.</li>
                <li>Comnet offers a multi-rate media converter that can switch between Fast Ethernet or Gigabit Ethernet via the dip switch.</li>
                <li>Dual media converters are two media converters in one box.</li>
                <li>Quad media converters are four media converters in one box.</li>
              </div>
            )}
          </div>
          {<Fiber />}
          {<PowerOverEthernet />}
          {<OSI />}
        </div>
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default MediaConverter;