import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool'
import NoPowerLight from '../../relevant-information/NoPowerLight';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';
import '../../styles/Global.css';
import '../../styles/Pages.css';

const EthernetSwitch = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h1 className="faq-title">Ethernet Switch</h1>
        {<EthernetSwitchSelectorTool />}

        <p className="faq-title">How To Troubleshoot Common Issues</p>
        <div className="faq-list">
          {<NoPowerLight />}
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> There is no optical link. </button>
            {visibleAnswer === 'no-link-light' && (
              <div className="faq-answer">
                <p>1. For devices with built-in optics, confirm that the fiber in use is compatible with the device:</p>
                <li>The fiber type (single mode vs. multimode).</li>
                <li>The number of fiber strands (single strand vs. dual strand).</li>
                <li>The optical connector (ST vs. SC).</li>
                <p>2. For devices requiring SFPs, confirm that the SFPs are compatible with both the device and the fiber in use.</p>
                <li>The data rate (Gigabit Ethernet vs. Fast Ethernet).</li>
                <li>The fiber type (single mode vs multimode).</li>
                <li>The number of fiber strands (single strand vs. dual strand).</li>
                <li>The optical connector (ST vs. LC).</li>
                <p>3. Test that the fiber works with another device.</p>
                <li>Use the fiber with another device to determine if a link light is achieved.</li>
                <p>4. Swap out the device and SFPs (if applicable) on either end with an identical.</p>
                <li>This will determine which device on either end is failing.</li>
                <p>5. Fiber Optic Cleaning Kit:</p>
                <li>Use the lint-free wipes and cleaning pen from the optic cleaning kit to clean fiber connectors and the SFP cage gently. Ensure no debris remains before reconnecting.</li>
                <p>6. Optical Power Meter:</p>
                <li>Connect the power meter to the fiber cable and check the dBm reading. Compare this to the device's recommended signal strength (available in the datasheet) to confirm it is within the expected range.</li>
                <p>7. Optical Time-Domain Reflectometer (OTDR)</p>
                <li>Connect the OTDR to one end of the fiber cable. The OTDR will send light pulses through the fiber to analyze reflections and signal loss, producing a graph with detailed information on reflections, signal loss, and potential faults.</li>
                <li>Note the distance to any reflections or faults as shown on the OTDR report.</li>
                <p>8. Visual Fault Locator:</p>
                <li>Connect the visual fault locator to the fiber cable and check for any areas where red light escapes or dims.</li>
                <li>Inspect any detected light leaks for possible damage or poor connections.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> There is no PoE output. </button>
            {visibleAnswer === 'no-poe' && (
              <div className="faq-answer">
                <p>1. Look up the data sheet of the device(s) powered by PoE and the data sheet of the switch.</p>
                <li>Confirm the power supply produces enough wattage for the device(s) powered by PoE and the switch.</li>
                <li>Verify that the powered device is compatible with the PoE standard of the switch (i.e. 802.3af, 802.3at, 802.3bt).</li>
                <p>2. Use a voltmeter to verify the power supply's is producing 48-56VDC.</p>
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
            <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> The unit is not communicating properly. </button>
            {visibleAnswer === 'no-communication' && (
              <div className="faq-answer">
                <p>1. Confirm the switch powers on.</p>
                <p>2. Verify access to the switch's GUI. If not, verify access via PuTTy or Tera Term.</p>
                <p>3. Identify the current firmware version of the switch.</p>
                <li>Ensure all switches of the same model within the network have matching firmware versions.</li>
                <p>4. Factory default the switch to determine if the issue persists.</p>
                <p>5. Assess whether the lack of communication affects all ports.</p>
                <p>6. Determine if communication is restored automatically or requires a power cycle.</p>
                <p>7. Evaluate whether the switch locks up periodically (e.g. hourly, every two hours, daily, etc.)</p>
                <p>8. Isolate the switch outside of the network to determine if the issue persists.</p>
                <p>9. Replace the switch with a known-working one to determine if the issue persists.</p>
                <p>10. Note the network topology:</p>
                <li>Ring/Mesh Topology: Enable RSTP on all devices. (ADD PRIORITIES)</li>
                <li>Other Topologies: Disable RSTP on all devices.</li>
                <p>11. Confirm if there are VLANs in the network.</p>
                <li>Ensure consistent VLAN configurations across all switches.</li>
                <p>12. Identify the connected devices:</p>
                <li>For multicast devices (e.g. IP cameras, intercoms, phones):</li>
                <li>Enable IGMP snooping on the switch to prevent port flooding from multicast packets.</li>
                <li>Enable IGMP querying at the network's head end.</li>
                <p>13. Replace Ethernet cables to rule out cabling issues.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('reset-switch')}> I cannot log in to the unit. </button>
            {visibleAnswer === 'reset-switch' && (
              <div className="faq-answer">
                <p>Open PuTTy or Tera Term and start a serial connection with the unit.</p>
                <li>Connect to COM(X).</li>
                <li>Speed (baud): 115200.</li>
                <li>Data bits: 8</li>
                <li>Stop bits: 1</li>
                <li>Parity: None</li>
                <li>Flow control: XON/XOFF</li>
                <p>Default the switch.</p>
                <li>Click the open button.</li>
                <li>Type in the username and password.</li>
                <li>Type "enable".</li>
                <li>Type "reload defaults".</li>
                <p>Change the switch IP.</p>
                <li>Type "enable".</li>
                <li>Type "configure terminal".</li>
                <li>Type "interface vlan 1".</li>
                <li>Type "ip address [NEW_IP] [SUBNET_MASK]".</li>
                <p>View the switch IP</p>
                <li>Type "enable".</li>
                <li>Type "show ip interface brief".</li>
                <p>Note: If the tab key is clicked, it is possible to see what options are available to type.</p>
              </div>
            )}
          </div>
        </div>

        <p className="faq-title">Frequently Asked Questions</p>
        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('ethernet-switch')}>  What is an Ethernet switch? </button>
            {visibleAnswer === 'ethernet-switch' && (
              <div className="faq-answer">
                <li>A layer 2 Ethernet switches will forward packets to a device in a local-area network (LAN) using its MAC address.</li>
                <li>A layer 3 Ethernet switch is capable of routing packets across different networks in a wide-area network (WAN).</li>
                <li>Switches have a feature known as auto MDI/MDIX (medium dependent interface / medium dependent interface crossover).  This means the Ethernet port will communicate with a straight-through or crossover cable.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('default-configuration')}>  What are the default configurations on Comnet's Ethernet switches? </button>
            {visibleAnswer === 'default-configuration' && (
              <div className="faq-answer">
                <li>Default IP: 192.168.10.1</li>
                <li>Default username: admin</li>
                <li>Default password: admin</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('switch-protocols')}>  What are the Ethernet switch protocols? </button>
            {visibleAnswer === 'switch-protocols' && (
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
        </div>
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default EthernetSwitch;