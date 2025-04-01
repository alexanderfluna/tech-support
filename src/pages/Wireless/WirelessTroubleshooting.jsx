import React from 'react';

const WirelessTroubleshooting = () => {
  return (
    <div className="faq-list">
      <h1 className="faq-title">Troubleshooting Wireless Ethernet</h1>

      <div className="table-of-contents">
        <h1>Table of Contents</h1>
        <li><a href="#netwave-configurations">How to configure Comnet's wireless radios</a></li>
        <li><a href="#radio-not-powering-on">Troubleshooting a wireless radio that will not power on</a></li>
        <li><a href="#radio-losing-connection">Troubleshooting a wireless radio that is losing connection</a></li>
      </div>

      <div className="faq-answer" id="netwave-configurations">
        <h1>How to configure Comnet's wireless radios</h1>
        <p><strong>Click the link to <a href="pdf/Wireless/NetWave.pdf">view Comnet's wireless configuration documentation</a>.</strong></p>
      </div>

      <div className="faq-answer" id="radio-not-powering-on">
        <h1>Troubleshooting a Wireless Radio That Will Not Power On</h1>
        <p><strong>[1] Try using a hardened IEEE 802.3af/at compliant PoE injector to power the radio.</strong></p>
        <p style={{ paddingLeft: "40px" }}>[1.1] Replace the Ethernet cable to rule it out.</p>
        <p style={{ paddingLeft: "40px" }}>[1.2] Verify that the PoE injector will power on another device.</p>
        <p style={{ paddingLeft: "40px" }}>[1.3] Retry using another hardened IEEE 802.3af/at compliant PoE injector.</p>

        <p style={{ paddingTop: "40px" }}><strong>[2] Try using a hardened IEEE 802.3af/at compliant PoE switch to power the radio.</strong></p>
        <p style={{ paddingLeft: "40px" }}>[2.1] Verify the power supply produces enough wattage for the device(s) powered by PoE and the radio.</p>
        <p style={{ paddingLeft: "40px" }}>[2.2] Use a voltmeter to verify the power supply is producing 48 to 56VDC under load.</p>
        <p style={{ paddingLeft: "80px" }}>[2.2.1] Confirm the red probe is connected to the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</p>
        <p style={{ paddingLeft: "80px" }}>[2.2.2] Ensure the voltmeter is set to DC voltage mode.</p>
        <p style={{ paddingLeft: "80px" }}>[2.2.3] Touch the red probe to the positive terminal and the black probe to the negative terminal.</p>
        <p style={{ paddingLeft: "80px" }}>[2.2.4] Verify the power supply delivers the required 48VDC-56VDC input voltage while connected to the switch. If not, replace the power supply and redo step 2.2.</p>
        <p style={{ paddingLeft: "40px" }}>[2.3] Retry using another hardened IEEE 802.3af/at compliant PoE switch.</p>
      </div>

      <div className="faq-answer" id="radio-losing-connection">
        <h1>Troubleshooting a Wireless Radio That is Losing Connection</h1>
        <p><strong>[1] Default the wireless radio and reconfigure it.</strong></p>
        <p style={{ paddingLeft: "40px" }}>Click the link to <a href="pdf/Wireless/NetWave.pdf">view Comnet's wireless configuration documentation</a>.</p>

        <p><strong>[2] Confirm the radio is being properly powered.</strong></p>
        <p style={{ paddingLeft: "40px" }}>[2.1] The radio must be powered on via a hardened, 802.3af/at compliant PoE source.</p>
        <p style={{ paddingLeft: "40px" }}>[2.2] There cannot be more than one radio powered by the same PoE switch as this will create a ring.</p>

        <p><strong>[3] Confirm each radio in the network has the latest firmware version.</strong></p>
        <p><strong>[4] Confirm each radio in the network has a unique IP address.</strong></p>
        <p><strong>[5] Confirm there is a direct line of sight between the access points and its associated client(s).</strong></p>
        <p><strong>[6] Confirm the access point and its associated client(s) share the same ESSID and PSK.</strong></p>
        <p><strong>[7] If there are multiple access points in the network, confirm each access point and its associated client(s) share a unique ESSID and PSK.</strong></p>
        <p><strong>[8] Using an aerial view in Google Maps, confirm the client(s) are within the beamwidth of the access point.</strong></p>
        <p><strong>[9] Determine the throughput. It is recommended to limit the throughput to 250Mbps in either direction.</strong></p>
        <p><strong>[10] Enable Ping Watchdog to reboot the radio after 5 failed ping attempts.</strong></p>
        <p><strong>[11] Set the radio to reboot automatically at a specified interval (e.g., 2 hours, 12 hours, 24 hours).</strong></p>
        <p><strong>[12] Enable AP Background ACS scan on the access point radio to automatically scan and switch to the best channel after 60 seconds.</strong></p>
        <p><strong>[13] In an add/drop/repeat topology, ensure there are no more than 3 hops.</strong></p>

        <p><strong>[14] If there are two radios mounted on the same pole:</strong></p>
        <p style={{ paddingLeft: "40px" }}>[14.1] If the radios are facing the same direction, ensure there is at least a 3-meter distance between them.</p>
        <p style={{ paddingLeft: "40px" }}>[14.2] If the radios are facing opposite directions, ensure there is at least a 3-foot distance between them.</p>
      </div>
    </div>
  );
};

export default WirelessTroubleshooting;
