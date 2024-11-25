import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../styles/Global.css';
import '../styles/Pages.css';

const Wireless = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    quantity: [],
    size: [],
    beamwidth: [],
    continent: []
  });

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
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
            <div className="filter-options">
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
                    <tr key={index}>
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

        <p className="faq-title">Troubleshooting Common Issues</p>
        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-power-light')}> No Power Light </button>
            {visibleAnswer === 'no-power-light' && (
              <div className="faq-answer">
                <p>If using a PoE injector:</p>
                <li>1) Ensure a hardened PoE injector is being used when outdoors.</li>
                <li>2) Verify the PoE injector is compatible with the IEEE 802.3at standard.</li>
                <li>3) Test that the PoE injector will power on another device.</li>
                <li>4) Try using another known-working IEEE 802.3at compataible PoE injector.</li>
                <li>5) Try using a known-working IEEE 802.3at compatible PoE switch.</li>
                <li>6) Contact technical support if the problem continue to persist.</li>
                <p>_______________________________________________________________________________________________________</p>
                <p>If using a PoE switch:</p>
                <li>1) Ensure a hardened PoE switch and hardened power supply are being used when outdoors.</li>
                <li>2) Verify the PoE switch is compatible with the IEEE 802.3at standard.</li>
                <li>3) Confirm the power supply produces enough wattage for the device(s) powered by PoE and the radio.</li>
                <li>4) Use a voltmeter to verify the power supply is producing 48 to 56VDC:</li>
                <li style={{ 'padding-left': '100px' }}>Confirm the red probe is connected the voltmeter's positive terminal and the black probe is connected to the negative (or ground) terminal.</li>
                <li style={{ 'padding-left': '100px' }}>Ensure the voltmeter is set to DC voltage mode.</li>
                <li style={{ 'padding-left': '100px' }}>Touch the the red probe to the positive terminal and the black probe to the negative terminal.</li>
                <li style={{ 'padding-left': '100px' }}>Verify the power supply delivers the required 48VDC-56VDC input voltage while connected to the switch.</li>
                <li>5) If the power supply fails to provide the required voltage while connected:</li>
                <li>6) Try using another known-working IEEE 802.3at compatible PoE switch.</li>
                <li>7) Try using a known-working IEEE 802.3at compataible PoE injector.</li>
                <li>8) Contact technical support if the problem continue to persist.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> No Communication </button>
            {visibleAnswer === 'no-communication' && (
              <div className="faq-answer">
                <p>1) Confirm the radios are being powered on properly.</p>
                <li>The radios must not be powered on by the same PoE switch.</li>
                <p>2) Consider the network topology.</p>
                <li>Point to point.</li>
                <li>Point to multipoint</li>
                <li>Add/drop/repeat</li>
                <li>If there are multiple radios in the area, consider if there may be duplicate IPs or ESSIDs.</li>
                <p>3) Determine: </p>
                <li>What the IPs will be ( The access point and client(s) must have unique IPs on the same subnet).</li>
                <li>What the ESSID will be ( The ESSID must be exactly the same on the access point and client(s) ).</li>
                <li>What the PSK will be ( The PSK must be exactly the same on the access point and client(s) ).</li>
                <li>If the radios are defaulted, there is no need to factory default them.</li>
                <li>If the radios have been configured, it is recommended to first factory default them.</li>
                <p>4) Reconfigure the radios:</p>
                <li>Configure the access point and then configure the client(s).</li>
                <li>Access Point:</li>
                <li style={{ 'padding-left': '100px' }}>Set the IP address.</li>
                <li style={{ 'padding-left': '100px' }}>Set the ESSID.</li>
                <li style={{ 'padding-left': '100px' }}>Set the PSK.</li>
                <li style={{ 'padding-left': '100px' }}>Set as an acess point.</li>
                <li>Client(s):</li>
                <li style={{ 'padding-left': '100px' }}>Set the IP address ( The access point and client(s) must have unique IPs on the same subnet ).</li>
                <li style={{ 'padding-left': '100px' }}>Set the ESSID ( The ESSID must be exactly the same on the access point and client(s) ).</li>
                <li style={{ 'padding-left': '100px' }}>Set the PSK ( The PSK must be exactly the same on the access point and client(s) ).</li>
                <li>After configuration, the radios should automatically connect.</li>
              </div>
            )}
          </div>
        </div>
        <p className="faq-title">Relevant Information</p>
        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('wireless')}> Wireless </button>
            {visibleAnswer === 'wireless' && (
              <div className="faq-answer">
                <p>Terminology:</p>
                <li>ESSID: The radio's broadcast name.</li>
                <li>PSK: The radio's password.</li>
                <li>Gain: The measure of how effectively an antenna directs or concentrates radio frequency (RF) energy in a particular direction, compared to a reference antenna.</li>
                <li style={{"padding-left": "100px"}}>The gain can be referenced to dBi, gain reliative to an isotropic radiator (a theortetical antenna that radiadtes equally in all directions).</li>
                <li>RSSI (Received signal strength indicator): intended to be used as an indicator of the quality of connection that exists 
                between an access point and client radio.</li>
                <li style={{"padding-left": "100px"}}>Less than -75 to -95 dBm: No signal or intermittent operation.</li>
                <li style={{"padding-left": "100px"}}>-75 dBm and greater: Moderate connection</li>
                <li style={{"padding-left": "100px"}}>-65 dBm and greater: Solid connection</li>
                <li style={{"padding-left": "100px"}}>-55 to 0 dBm: Excellent connection</li>
                <p>_______________________________________________________________________________________________________</p>
                <p>Specs:</p>
                <li>A full size radio has a 17º beamwidth and gain of 20 dBi.</li>
                <li>A minituare radio has a 30º beamwidth and gain of 16 dBi.</li>
                <li>Up to 500mbps throughput.</li>
                <li>Work at distances of up to 2 miles.</li>
                <li>Operating Power: 48 to 57VDC</li>
                <li>Secure transmission: WPA2 - AES</li>
                <p>_______________________________________________________________________________________________________</p>
                <p>Default Configurations:</p>
                <li>Default ESSID: Netwave-1</li>
                <li>Default PSK: 12345678</li>
                <li>Default access point IP: 192.168.10.100</li>
                <li>Default client IP: 192.168.10.101</li>
                <li style={{"padding-left": "100px"}}>When any radio is reset, it defaults back as a client.</li>
                <li>Default GUI username: root</li>
                <li>Default GUI password: root</li>
                <li style={{"padding-left": "100px"}}>On older radios, it sometimes defaults to admin, admin.</li>
                <p>_______________________________________________________________________________________________________</p>
                <p>RJ45 Port 1</p>
                <li>RJ45 Gigabit Ethernet port -- 802.3at PoE Compliant Powered Device (30 W, 48-57V)</li>
                <li>Using port 1, the radio must be powered on by a PSE.</li>
                <p>_______________________________________________________________________________________________________</p>
                <p>RJ45 Port 2</p>
                <li>RJ45 Fast Ethernet port -- 802.3af Power Sourcing Equipment (PSE)</li>
                <li>Using port 2, the radio can power up a PD.</li>
              </div>
            )}
          </div>
        </div>
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Wireless;
