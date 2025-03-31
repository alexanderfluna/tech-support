import React, { useState, useEffect } from 'react';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';

const WirelessFAQ = () => {
  const [visibleAnswers, setvisibleAnswerss] = useState(new Set());
  const [showFAQ, setShowFAQ] = useState(false);

  const wifiStandards = [
    { standard: '802.11', frequency: '2.4 GHz', maxDataRate: '2 Mbps', channelBandwidth: '22 MHz', date: '1997' },
    { standard: '802.11a', frequency: '5 GHz', maxDataRate: '54 Mbps', channelBandwidth: '20 MHz', date: '1999' },
    { standard: '802.11b', frequency: '2.4 GHz', maxDataRate: '11 Mbps', channelBandwidth: '22 MHz', date: '1999' },
    { standard: '802.11g', frequency: '2.4 GHz', maxDataRate: '54 Mbps', channelBandwidth: '20 MHz', date: '2003' },
    { standard: '802.11n', frequency: '2.4 GHz / 5 GHz', maxDataRate: '600 Mbps', channelBandwidth: '20/40 MHz', date: '2009' },
    { standard: '802.11ac', frequency: '5 GHz', maxDataRate: '1.3 Gbps', channelBandwidth: '20/40/80/160 MHz', date: '2013' },
    { standard: '802.11ax', frequency: '2.4 GHz / 5 GHz / 6 GHz', maxDataRate: '9.6 Gbps', channelBandwidth: '20/40/80/160 MHz', date: '2019' },
  ];

  const toggleAnswer = (questionId) => {
    setvisibleAnswerss(prevAnswers => {
        const newAnswers = new Set(prevAnswers);
        if (newAnswers.has(questionId)) {
            newAnswers.delete(questionId);
        } else {
            newAnswers.add(questionId);
        }
        return newAnswers;
    });
  };

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  }

  return (
    <div className="faq-list">
      <h1 style={{
                fontSize: "3rem",
                fontWeight: "bold",
                backgroundImage: "linear-gradient(135deg, rgb(49, 105, 169), rgb(165, 167, 173))",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textAlign: "center"
            }}>Wireless Ethernet| Relevant Information</h1>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer('wireless')}> Learn about wireless. </button>
          {visibleAnswers.has('wireless') && (
            <div className="faq-answer">
              <p>The <strong>Extended Service Set Identifier (ESSID)</strong> is the broadcast name of a wireless network, allowing devices to identify and connect to the correct access point. It serves as a unique identifier within a wireless network, ensuring seamless roaming between multiple access points when configured correctly.</p>
              <p>The <strong>Pre-Shared Key (PSK)</strong> is the password required to join a secured wireless network. This key is an essential component of WPA and WPA2 encryption protocols, ensuring that only authorized users can access the network. A strong PSK helps protect against unauthorized access and potential security threats.</p>
              <p><strong>Antenna gain</strong> measures how effectively an antenna directs or concentrates radio frequency (RF) energy in a particular direction compared to a reference antenna. Higher gain antennas focus energy more efficiently, increasing signal range and strength while reducing interference from unwanted directions.</p>
              <p>Gain is typically referenced in <strong>decibels isotropic (dBi)</strong>, which represents the gain relative to an <strong>isotropic radiator</strong>—a theoretical antenna that radiates power uniformly in all directions. An antenna with a positive dBi value directs energy more efficiently than an isotropic source, making it ideal for focused, long-range wireless communications.</p>
              <p>The <strong>Received Signal Strength Indicator (RSSI)</strong> measures the power level of a received wireless signal, serving as an indicator of connection quality between an access point and a client device. RSSI values are measured in negative decibels (dBm), with higher values (closer to zero) representing stronger signals.</p>
              
              <p><strong>Frequency Bands</strong></p>
              <p>Wireless communication relies on specific ranges of the electromagnetic spectrum, known as frequency bands. These bands are carefully allocated to ensure seamless transmission of data over radio waves. Wi-Fi, cellular networks, and Bluetooth all operate within designated frequency bands to minimize interference and optimize performance.</p>
              
              <p><strong>Central Frequency</strong></p>
              <p>The central frequency of a band serves as a reference point for modulation and transmission. It represents the midpoint of the frequency range, ensuring that signals are transmitted efficiently within a specified spectrum without overlapping with adjacent channels.</p>
              
              <p><strong>Frequency Band Channels</strong></p>
              <p>To accommodate multiple devices and prevent signal congestion, frequency bands are divided into channels. Each channel acts as an independent pathway for data transmission, allowing multiple devices to communicate simultaneously without interference. The ability to switch channels dynamically enhances network reliability and speed.</p>
              
              <p><strong>2.4 GHz Band</strong></p>
              <p>The 2.4 GHz frequency band is widely used in Wi-Fi networks due to its broad coverage and strong signal penetration through walls and obstacles. However, this band is shared with other technologies such as Bluetooth and microwave ovens, leading to potential interference in congested environments.</p>
              
              <p><strong>5 GHz Band</strong></p>
              <p>The 5 GHz frequency band offers higher data speeds and reduced interference compared to the 2.4 GHz band. It provides more available channels, allowing for faster and more stable wireless connections. However, its shorter wavelength results in reduced range and weaker signal penetration through solid objects.</p>
              
              <p><strong>The Wi-Fi standards can be observed in the table below.</strong></p>
              <table
                  style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                  }}
              >
                  <thead
                      style={{
                          backgroundColor: 'rgb(13, 128, 173)',
                          color: 'white',
                      }}
                  >
                      <tr>
                          <th style={{ padding: '10px', textAlign: 'left' }}>Standard</th>
                          <th style={{ padding: '10px', textAlign: 'left' }}>Frequency Band</th>
                          <th style={{ padding: '10px', textAlign: 'left' }}>Max Data Rate</th>
                          <th style={{ padding: '10px', textAlign: 'left' }}>Channel Bandwidth</th>
                          <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
                      </tr>
                  </thead>
                  <tbody>
                      {wifiStandards.map((row, index) => (
                          <tr
                              key={index}
                              style={{
                                  backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9',
                              }}
                          >
                              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.standard}</td>
                              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.frequency}</td>
                              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.maxDataRate}</td>
                              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.channelBandwidth}</td>
                              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.date}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
            </div>
          )}
        </div>
        {<PowerOverEthernet />}
        {<OSI />}
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer('netwave-configurations')}> How do I configure Comnet's wireless radios? </button>
          {visibleAnswers.has('netwave-configurations') && (
            <div className="faq-answer">
              <p><strong>Click the link to <a href="pdf/Wireless/NetWave.pdf">view Comnet's wireless configuration documentation</a>.</strong></p>
          </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer('netwave-specs')}> How do I find the specs of a Comnet wireless radio? </button>
          {visibleAnswers.has('netwave-specs') && (
            <div className="faq-answer">
              <p><strong>Enter the radio's part number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a> and view the data sheet.</strong></p>
            </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer('security')}> What security features does a Comnet wireless radio provide? </button>
          {visibleAnswers.has('security') && (
            <div className="faq-answer">
              <p><strong>[1] The access point and client(s) are bound together by a shared ESSID and PSK.</strong></p>
              <p><strong>[2] It is recommended to change the IP addresses, ESSID and PSK of the wireless radios as this information is public.</strong></p>
              <p><strong>[3] Hiding the ESSID prevents it from showing up under Wifi scans.</strong></p>
              <p><strong>[4] The wireless communication is encrypted using WPA2.</strong></p>
            </div>
          )}
        </div>
      </div>
  )
}

export default WirelessFAQ