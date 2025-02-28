import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';
import '../../styles/Global.css';
import '../../styles/Pages.css';

const Wireless = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    quantity: [],
    size: [],
    beamwidth: [],
    continent: []
  });

  const wifiStandards = [
    { standard: '802.11', frequency: '2.4 GHz', maxDataRate: '2 Mbps', channelBandwidth: '22 MHz', date: '1997' },
    { standard: '802.11a', frequency: '5 GHz', maxDataRate: '54 Mbps', channelBandwidth: '20 MHz', date: '1999' },
    { standard: '802.11b', frequency: '2.4 GHz', maxDataRate: '11 Mbps', channelBandwidth: '22 MHz', date: '1999' },
    { standard: '802.11g', frequency: '2.4 GHz', maxDataRate: '54 Mbps', channelBandwidth: '20 MHz', date: '2003' },
    { standard: '802.11n', frequency: '2.4 GHz / 5 GHz', maxDataRate: '600 Mbps', channelBandwidth: '20/40 MHz', date: '2009' },
    { standard: '802.11ac', frequency: '5 GHz', maxDataRate: '1.3 Gbps', channelBandwidth: '20/40/80/160 MHz', date: '2013' },
    { standard: '802.11ax', frequency: '2.4 GHz / 5 GHz / 6 GHz', maxDataRate: '9.6 Gbps', channelBandwidth: '20/40/80/160 MHz', date: '2019' },
  ];

  const products = [
    { model: "NW1", quantity: "Single", size: "Full", beamwidth: "17°", continent: "North America" },
    { model: "NW1/M", quantity: "Single", size: "Mini", beamwidth: "30°", continent: "North America" },
    { model: "NW1/M/IA870", quantity: "Single", size: "Mini", beamwidth: "30°", continent: "North America" },
    { model: "NWK1", quantity: "Kit", size: "Full", beamwidth: "17°", continent: "North America" },
    { model: "NWK1/M", quantity: "Kit", size: "Mini", beamwidth: "30°", continent: "North America" },
    { model: "NW2", quantity: "Single", size: "Full", beamwidth: "17°", continent: "Europe" },
    { model: "NW2/M", quantity: "Single", size: "Mini", beamwidth: "30°", continent: "Europe" },
    { model: "NWK2", quantity: "Kit", size: "Full", beamwidth: "17°", continent: "Europe" },
    { model: "NWK2/M", quantity: "Kit", size: "Mini", beamwidth: "30°", continent: "Europe" },
    { model: "NW9", quantity: "Single", size: "Full", beamwidth: "17°", continent: "North America" },
    { model: "NW9E", quantity: "Single", size: "Full", beamwidth: "17°", continent: "Europe" },
    { model: "NWK9", quantity: "Kit", size: "Full", beamwidth: "17°", continent: "North America" },
    { model: "NWK11/M", quantity: "Kit", size: "Mini", beamwidth: "30°", continent: "North America" },
  ];

  const [filters, setFilters] = useState({
    quantity: null,
    size: null,
    beamwidth: null,
    continent: null
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredProducts(products); 
    updateAvailableOptions(products);
  }, []);

  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleTable = () => {
    setShowTable(!showTable);
    setFilteredProducts(products);
    updateAvailableOptions(products);
    setFilters({ quantity: null, size: null, beamwidth: null, continent: null }); 
  };

  const toggleTroubleshooting = () => {
    setShowTroubleshooting(!showTroubleshooting);
  }

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  }

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    const newFilteredProducts = products.filter((product) =>
      Object.entries(newFilters).every(
        ([key, filterValue]) => !filterValue || product[key] === filterValue
      )
    );
    setFilteredProducts(newFilteredProducts);

    updateAvailableOptions(newFilteredProducts);
  };

  const clearFilter = (filterType) => {
    const newFilters = { ...filters, [filterType]: null };
    setFilters(newFilters);
    handleFilterChange(filterType, null);
  };

  const resetFilters = () => {
    setFilters({ quantity: null, size: null, beamwidth: null, continent: null });
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const quantity = [...new Set(filteredProducts.map((product) => product.quantity))];
    const size = [...new Set(filteredProducts.map((product) => product.size))];
    const beamwidth = [...new Set(filteredProducts.map((product) => product.beamwidth))];
    const continent = [...new Set(filteredProducts.map((product) => product.continent))];
    setAvailableOptions({ quantity, size, beamwidth, continent });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Wireless</h2>
        <button className="purple-button" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <div className="filter-options">
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
              <div>
                <h3>
                  Quantity
                  {filters.quantity && (
                    <button className="clear-filter" onClick={() => clearFilter("quantity")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.quantity.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="quantity"
                      value={option}
                      checked={filters.quantity === option}
                      onChange={() => handleFilterChange("quantity", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Size
                  {filters.size && (
                    <button className="clear-filter" onClick={() => clearFilter("size")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.size.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="size"
                      value={option}
                      checked={filters.size === option}
                      onChange={() => handleFilterChange("size", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Beamwidth
                  {filters.beamwidth && (
                    <button className="clear-filter" onClick={() => clearFilter("beamwidth")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.beamwidth.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="beamwidth"
                      value={option}
                      checked={filters.beamwidth === option}
                      onChange={() => handleFilterChange("beamwidth", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Continent
                  {filters.continent && (
                    <button className="clear-filter" onClick={() => clearFilter("continent")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.continent.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="continent"
                      value={option}
                      checked={filters.continent === option}
                      onChange={() => handleFilterChange("continent", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div className="table-container">
              <table className="selector-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Quantity</th>
                    <th>Size</th>
                    <th>Beamwidth</th>
                    <th>Continent</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
                      <td>{product.model}</td>
                      <td>{product.quantity}</td>
                      <td>{product.size}</td>
                      <td>{product.beamwidth}</td>
                      <td>{product.continent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

      <button className="purple-button" onClick={toggleTroubleshooting}>
          Troubleshooting Common Issues
        </button>
        {showTroubleshooting && (
          <>
            <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('no-power-light')}> The radio does not power on. </button>
              {visibleAnswer === 'no-power-light' && (
                <div className="faq-answer">
                  <p><strong>[1] Try using a hardened, IEEE 802.3at compliant PoE injector to power the radio.</strong></p>
                  <li>[1.1] Verify that the PoE injector will power on another device.</li>
                  <li>[1.2] Retry using another hardened IEEE 802.3at compliant PoE injector.</li>
                  <p style={{"padding-top": "40px"}}><strong>[2] Try using a hardened, IEEE 802.3at compliant PoE switch to power the radio.</strong></p>
                  <li>[2.1] Ensure a hardened power supply is used to power the PoE switch.</li>
                  <li>[2.2] Verify the power supply produces enough wattage for the device(s) powered by PoE and the radio.</li>
                  <li>[2.3] Use a voltmeter to verify the power supply is producing 48 to 56VDC under load.</li>
                  <li style={{ 'padding-left': '100px' }}>[2.3.1] Confirm the red probe is connected the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</li>
                  <li style={{ 'padding-left': '100px' }}>[2.3.2] Ensure the voltmeter is set to DC voltage mode.</li>
                  <li style={{ 'padding-left': '100px' }}>[2.3.3] Touch the the red probe to the positive terminal and the black probe to the negative terminal.</li>
                  <li style={{ 'padding-left': '100px' }}>[2.3.4] Verify the power supply delivers the required 48VDC-56VDC input voltage while connected to the switch.</li>
                  <li>[2.4] Retry using another hardened IEEE 802.3at compliant PoE switch.</li>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> The radios are not communicating. </button>
              {visibleAnswer === 'no-communication' && (
                <div className="faq-answer">
                  <p><strong>[1] Confirm the radios are being properly powered.</strong></p>
                  <li>The radios must be powered on via PoE.</li>
                  <li>The radios cannot be powered on by the same PoE switch.</li>
                  <p><strong>[2] Consider the network topology.</strong></p>
                  <li>Is it point-to-point?</li>
                  <li>Is it point-to-multipoint?</li>
                  <li>Is it add/drop/repeat?</li>
                  <li>If there are multiple radios in the area, could there be any duplicate IPs or ESSIDs?</li>
                  <li>If the radios have been configured, it is recommended to factory default them first. If the radios are at default, then there is no need.</li>
                  <li>If there is a physical connection with one of the radios, is it possible to configure the other(s) from that location? If not, it is best to make a physical connection with the access point and then with the client(s).</li>
                  <p><strong>[3] Determine the following information. </strong></p>
                  <li>What the IP addresses will be ( The IP addresses don't have to be on the same subnet as the end devices ).</li>
                  <li>What the ESSID will be ( The ESSID must be exactly the same on the access point and client(s) ).</li>
                  <li>What the PSK will be ( The PSK must be exactly the same on the access point and client(s) ).</li>
                  <p><strong>[4] Configure the radios.</strong></p>
                  <li>[4.1] Configure the access point.</li>
                  <li style={{ 'padding-left': '120px' }}>[4.1.1] Factory default the radio.</li>
                  <li style={{ 'padding-left': '120px' }}>[4.1.2] Set a unique IP address.</li>
                  <li style={{ 'padding-left': '120px' }}>[4.1.3] Set the ESSID.</li>
                  <li style={{ 'padding-left': '120px' }}>[4.1.4] Set the PSK.</li>
                  <li style={{ 'padding-left': '120px' }}>[4.1.5] Set as an access point.</li>
                  <li>[4.2] Configure the client(s).</li>
                  <li style={{ 'padding-left': '120px' }}>[4.1] Factory default the radio.</li>
                  <li style={{ 'padding-left': '120px' }}>[4.2] Set a unique IP address.</li>
                  <li style={{ 'padding-left': '120px' }}>[4.3] Set the ESSID ( The ESSID must be exactly the same on the access point and client(s) ).</li>
                  <li style={{ 'padding-left': '120px' }}>[4.4] Set the PSK ( The PSK must be exactly the same on the access point and client(s) ).</li>
                  <p><strong>[5] After configuration, the radios should automatically connect. If not, use the scan button in the client to connect to the access point under the shared ESSID and PSK.</strong></p>
                  <p>Include configuration pdf here.</p>
                </div>
              )}
            </div>
          </div>
          </>
        )}

        
      <button className="purple-button" onClick={toggleFAQ}>
          Frequently Asked Questions
        </button>
        {showFAQ && (
          <>
            <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('netwave-configurations')}> What are the default configurations on a Comnet wireless radio? </button>
              {visibleAnswer === 'netwave-configurations' && (
                <div className="faq-answer">
                  <p><strong>The default configurations on a Comnet wireless radio are:</strong></p>
                  <li>The default IP address of an access point radio is: 192.168.10.100</li>
                  <li>The default IP address of a client radio is: 192.168.10.101</li>
                  <li style={{"padding-left": "100px"}}>Please note that when any radio is reset, it defaults as a client.</li>
                  <li>The default username and password for the web interface is: root, root.</li>
                  <li style={{"padding-left": "100px"}}>Please note that on older radios, the username and password sometimes defaults to admin, admin.</li>
                  <li>The default ESSID is: Netwave-1</li>
                  <li>The default PSK is: 12345678</li>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('netwave-specs')}> What are the specs of a Comnet wireless radio? </button>
              {visibleAnswer === 'netwave-specs' && (
                <div className="faq-answer">
                  <p>Attach the pdfs for each radio here.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('wireless')}> Learn about wireless. </button>
              {visibleAnswer === 'wireless' && (
                <div className="faq-answer">
                  <p>The <strong>Extended Service Set Identifier (ESSID)</strong> is the broadcast name of a wireless network, allowing devices to identify and connect to the correct access point. It serves as a unique identifier within a wireless network, ensuring seamless roaming between multiple access points when configured correctly.</p>

                  <p>The <strong>Pre-Shared Key (PSK)</strong> is the password required to join a secured wireless network. This key is an essential component of WPA and WPA2 encryption protocols, ensuring that only authorized users can access the network. A strong PSK helps protect against unauthorized access and potential security threats.</p>

                  <p><strong>Antenna gain</strong> measures how effectively an antenna directs or concentrates radio frequency (RF) energy in a particular direction compared to a reference antenna. Higher gain antennas focus energy more efficiently, increasing signal range and strength while reducing interference from unwanted directions.</p>

                  <p>Gain is typically referenced in <strong>decibels isotropic (dBi)</strong>, which represents the gain relative to an <strong>isotropic radiator</strong>—a theoretical antenna that radiates power uniformly in all directions. An antenna with a positive dBi value directs energy more efficiently than an isotropic source, making it ideal for focused, long-range wireless communications.</p>

                  <p>The <strong>Received Signal Strength Indicator (RSSI)</strong> measures the power level of a received wireless signal, serving as an indicator of connection quality between an access point and a client device. RSSI values are measured in negative decibels (dBm), with higher values (closer to zero) representing stronger signals. The quality of a connection can be categorized as follows:</p>

                  <p><strong>Less than -75 to -95 dBm</strong>: The signal is either too weak to establish a connection or results in intermittent operation with frequent disconnects.</p>

                  <li><strong>-75 dBm and greater</strong>: The connection is moderate, usable but may experience occasional performance issues.</li>

                  <li><strong>-65 dBm and greater</strong>: The connection is stable and solid, ensuring reliable communication for most applications.</li>

                  <li><strong>-55 to 0 dBm</strong>: The connection is excellent, providing optimal performance with minimal interference and maximum throughput.</li>

                  <p>Understanding these parameters helps optimize wireless network performance by positioning antennas strategically, selecting appropriate gain values, and ensuring strong RSSI levels for reliable connectivity.</p>

                  <p><strong>Wi-Fi Standards</strong></p>
                  <table
                      style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                      }}
                  >
                      <thead
                          style={{
                              backgroundColor: 'rgb(106, 13, 173)',
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
                  
                  <p><strong>Oscillating Circuit</strong></p>
                  <p>At the heart of wireless communication lies the oscillating circuit, which generates alternating current signals at specific frequencies. These circuits play a crucial role in producing carrier waves, enabling the transmission of data through electromagnetic waves in a structured and controlled manner.</p>
                  
                  <p><strong>Carrier Wave</strong></p>
                  <p>A carrier wave is a continuous electromagnetic wave that serves as a vehicle for transmitting information. By modulating its properties, such as amplitude, frequency, or phase, a carrier wave can encode digital or analog signals for wireless communication.</p>
                  
                  <p><strong>Amplitude Modulation (AM)</strong></p>
                  <p>Amplitude modulation is a technique where the strength of a carrier wave varies according to the signal being transmitted. This method was historically used in radio broadcasting and is still relevant in certain communication applications today.</p>
                  
                  <p><strong>Frequency Modulation (FM)</strong></p>
                  <p>Frequency modulation encodes data by varying the frequency of the carrier wave while keeping its amplitude constant. FM is widely used in radio transmission, as it provides improved resistance to signal degradation and interference.</p>
                  
                  <p><strong>Phase Modulation (PM)</strong></p>
                  <p>Phase modulation involves altering the phase of the carrier wave in response to the signal being transmitted. It is commonly used in digital communication systems, such as Wi-Fi and cellular networks, to improve data integrity and transmission efficiency.</p>
                </div>
              )}
            </div>
            {<PowerOverEthernet />}
            {<OSI />}
          </div>
          </>
        )}
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Wireless;
