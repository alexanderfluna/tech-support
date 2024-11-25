import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import NoPowerLight from '../relevant-information/NoPowerLight';
import Fiber from '../relevant-information/Fiber';
import PowerOverEthernet from '../relevant-information/PowerOverEthernet';
import '../styles/Global.css';
import '../styles/Pages.css';

const Switch = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Hardened: [],
    Managed: [],
    PoE: [],
    Copper: [],
    Fiber: [],
    Combo: [],
  });

  const sortOrders = {
    Hardened: ["No", "Yes"],
    Managed: ["No", "Yes"],
    PoE: ["No", "30W", "60W", "90W"],
    Copper: ["0", "2 FE", "4 FE", "5 FE", "7 FE", "8 FE", "3 GE", "4 GE", "8 GE", "12 GE", "16 GE", "22 GE", "24 GE"],
    Fiber: ["0", "1 FE", "2 FE", "4 FE", "1 GE", "2 GE", "3 GE", "4 GE", "8 GE", "12 GE", "24 GE", "2 10G", "4 10G"],
    Combo: ["0", "1 GE", "2 GE", "4 GE", "16 GE"],
  };

  const [filters, setFilters] = useState({
    Hardened: null,
    Managed: null,
    PoE: null,
    Copper: null,
    Fiber: null,
    Combo: null,
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
    setFilters({
      Hardened: null,
      Managed: null,
      PoE: null,
      Copper: null,
      Fiber: null,
      Combo: null,
    });
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
    setFilters({ Hardened: null,
      Managed: null,
      PoE: null,
      Copper: null,
      Fiber: null,
      Combo: null,
    });
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      Hardened: [...new Set(filteredProducts.map((product) => product.Hardened))],
      Managed: [...new Set(filteredProducts.map((product) => product.Managed))],
      PoE: [...new Set(filteredProducts.map((product) => product.PoE))],
      Copper: [...new Set(filteredProducts.map((product) => product.Copper))],
      Fiber: [...new Set(filteredProducts.map((product) => product.Fiber))],
      Combo: [...new Set(filteredProducts.map((product) => product.Combo))],
    };
    setAvailableOptions(options);
  };

  const sortOptions = (filterType, options) => {
    const orderMap = sortOrders[filterType].reduce((acc, val, idx) => {
      acc[val] = idx;
      return acc;
    }, {});

    return options
      .filter(option => option !== "0" || filterType === "Fiber" || filterType === "Copper" || filterType === "Combo")
      .sort((a, b) => {
        const orderA = orderMap[a] ?? Infinity;
        const orderB = orderMap[b] ?? Infinity;
        return orderA - orderB;
      });
  };

  const products = [
    {Model: "CWGE10FX2TX8MS", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "8 GE", Combo: "0", PoE: "No"},
    {Model: "CWGE10FX2TX8MSPOE", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "8 GE", Combo: "0", PoE: "30W"},
    {Model: "CWGE26FX2TX24MS", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "24 GE", Combo: "0", PoE: "No"},
    {Model: "CWGE26FX2TX24MSPOE", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "24 GE", Combo: "0", PoE: "30W"},
    {Model: "CWGE26FX2TX24MSPOE+", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "24 GE", Combo: "0", PoE: "30W"},
    {Model: "CWGE28MS", Hardened: "No", Managed: "Yes", Fiber: "24 GE", Copper: "4 GE", Combo: "4 GE", PoE: "No"},
    {Model: "CNXE2GE2TX8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber: "2 10G", Copper: "8 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE2FE4SMS", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNGE2FE4SMSPOE", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 FE", Combo: "0", PoE: "30W"},
    {Model: "CNGE2FE4SMSPOEHO", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 FE", Combo: "0", PoE: "60W"},
    {Model: "CNGE2FE8MSPOE+", Hardened: "Yes", Managed: "Yes", Fiber: "2 GE", Copper: "8 FE", Combo: "0", PoE: "30W"},
    {Model: "CNGE3FE7MS3", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "7 FE", Combo: "0", PoE: "No"},
    {Model: "CNGE3FE8MS", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 FE", Combo: "0", PoE: "No"},
    {Model: "CNGE3FE8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 FE", Combo: "0", PoE: "30W"},
    {Model: "CNGE3FE8MSPOE/24", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 FE", Combo: "0", PoE: "30W"},
    {Model: "CNGE3FE8MSPOEHO", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 FE", Combo: "0", PoE: "60W"},
    {Model: "CNGE4US", Hardened: "Yes", Managed: "No", Fiber: "4 GE", Copper: "0", Combo: "0", PoE: "No"},
    {Model: "CNGE4TX4US/M", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "4 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE4+2SMS/M", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE4+2SMSPOE/M", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE4+2SMSPOEHO/M", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 GE", Combo: "0", PoE: "60W"},
    {Model: "CNGE5MS", Hardened: "Yes", Managed: "Yes", Fiber: "0", Copper: "3 GE", Combo: "2 GE", PoE: "No"},
    {Model: "CNGE6FX2TX4POE", Hardened: "Yes", Managed: "No", Fiber: "1 GE", Copper: "4 GE", Combo: "1 GE", PoE: "30W"},
    {Model: "CNGE6FX2TX4MSP", Hardened: "Yes", Managed: "Yes", Fiber: "2 GE", Copper: "4 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE8US", Hardened: "Yes", Managed: "No", Fiber: "8 GE", Copper: "0", Combo: "0", PoE: "No"},
    {Model: "CNGE8MS", Hardened: "Yes", Managed: "Yes", Fiber: "0", Copper: "4 GE", Combo: "4 GE", PoE: "No"},
    {Model: "CNGE8FX4TX4MS", Hardened: "Yes", Managed: "Yes", Fiber: "4 GE", Copper: "4 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE11FX3TX8MS", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE11FX3TX8MSP/24", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE11FX3TX8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE11FX3TX8MSPOE/24", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE11FX3TX8MSPOEHO", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "60W"},
    {Model: "CNGE20MS", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "8 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE20FX4TX16MS", Hardened: "Yes", Managed: "Yes", Fiber: "4 GE", Copper: "16 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE20FX4TX16MSP", Hardened: "Yes", Managed: "Yes", Fiber: "4 GE", Copper: "16 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE24MS2", Hardened: "Yes", Managed: "Yes", Fiber: "8 GE", Copper: "0", Combo: "16 GE", PoE: "No"},
    {Model: "CNGE24FX12TX12MS", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "12 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE24FX12TX12MS/12", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "12 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE24FX12TX12MSPOE", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "12 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE24FX12TX12MSPOE/48", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "12 GE", Combo: "0", PoE: "30W"},
    {Model: "CNGE26FX2TX24MSP", Hardened: "Yes", Managed: "Yes", Fiber: "2 GE", Copper: "22 GE", Combo: "2 GE", PoE: "30W"},
    {Model: "CNGE28FX4TX24MS2", Hardened: "Yes", Managed: "Yes", Fiber: "4 GE", Copper: "24 GE", Combo: "0", PoE: "No"},
    {Model: "CNFE4SMS", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4SMSPOE", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "4 FE", Combo: "0", PoE: "30W"},
    {Model: "CNFE4FX4US", Hardened: "Yes", Managed: "No", Fiber: "4 FE", Copper: "0", Combo: "0", PoE: "No"},
    {Model: "CNFE4FX2TX2US", Hardened: "Yes", Managed: "No", Fiber: "2 FE", Copper: "2 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSM2", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSM2POE", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "30W"},
    {Model: "CNFE4+1SMSM2/SC", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSM2POE/SC", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "30W"},
    {Model: "CNFE4+1SMSS2", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSS2POE", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "30W"},
    {Model: "CNFE4+1SMSS2/SC", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSS2POE/SC", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "30W"},
    {Model: "CNFE5SMS", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "5 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE5SMSPOE", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "5 FE", Combo: "0", PoE: "30W"},
    {Model: "CWX28F4T24MPB", Hardened: "No", Managed: "Yes", Fiber: "4 10G", Copper: "24 GE", Combo: "0", PoE: "90W"},
  ];

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h1 className="faq-title">Switch</h1>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
            <div className="filter-options">
              {Object.entries(availableOptions).map(([filterType, options]) => (
                <div key={filterType}>
                  <h3>
                    {filterType}
                    {filters[filterType] && (
                      <button className="clear-filter" onClick={() => clearFilter(filterType)}>
                        X
                      </button>
                    )}
                  </h3>
                  {sortOptions(filterType, options).map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={filterType}
                        value={option}
                        checked={filters[filterType] === option}
                        onChange={() => handleFilterChange(filterType, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <div className="table-container">
              <table className="selector-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Hardened</th>
                    <th>Managed</th>
                    <th>PoE</th>
                    <th>Copper Ports</th>
                    <th>Fiber Ports</th>
                    <th>Combo Ports</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.Model}</td>
                      <td>{product.Hardened}</td>
                      <td>{product.Managed}</td>
                      <td>{product.PoE}</td>
                      <td>{product.Copper === "0" ? "-" : product.Copper}</td>
                      <td>{product.Fiber === "0" ? "-" : product.Fiber}</td>
                      <td>{product.Combo === "0" ? "-" : product.Combo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <p className="faq-title">Troubleshooting Common Issues</p>
        <div className="faq-list">
          {<NoPowerLight />}
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> No Link Light </button>
            {visibleAnswer === 'no-link-light' && (
              <div className="faq-answer">
                <p>1. For Devices with Built-in Optics:</p>
                <li>Confirm that the fiber in use is compatible with the device::</li>
                <li>Fiber Type: Multimode vs. Single Mode</li>
                <li>Fiber Strand Count: Single strand vs. Dual strand</li>
                <li>Connector Type: ST connector(s) vs. SC connector(s)</li>
                <p>2. For Devices Requring SFPs:</p>
                <li>Confirm that the SFPs are compatible with both the device and the fiber in use:</li>
                <li>Data Rate: Fast Ethernet vs. Gigabit Ethernet</li>
                <li>Fiber Type: Multimode vs Single mode</li>
                <li>Fiber Strand Count: Single strand vs. Dual strand</li>
                <li>Connector Type: LC connector(s) vs. SC connector(s)</li>
                <p>3. Test the Fiber with Another Device.</p>
                <li>Use the fiber with another device to determine if a link light is achieved.</li>
                <p>4. Swap out the device and SFPs (if applicable) on either end with an identical.</p>
                <li>This will determine which device on either end is failing.</li>
                <p>5. Fiber Optic Cleaning Kit:</p>
                <li>Use the lint-free wipes and cleaning pen from the optic cleaning kit to clean fiber connectors and the SFP cage gently. Ensure no debris remains before reconnecting.</li>
                <p>6. Optical Power Meter:</p>
                <li>Connect the power meter to the fiber cable and check the dBm reading. Compare this to the device’s recommended signal strength (available in the datasheet) to confirm it is within the expected range.</li>
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
            <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> No PoE </button>
            {visibleAnswer === 'no-poe' && (
              <div className="faq-answer">
                <p>1. Look up the data sheet of the device(s) powered by PoE and the data sheet of the device under test.</p>
                <li>Confirm that the powered device is compatible with the PoE standard of the device under test (i.e. 802.3af, 802.3at, 802.3bt).</li>
                <p>2. Confirm the power supply produces enough wattage for the device(s) powered by PoE and the device under test.</p>
                <p>3. Use a voltmeter to verify the power supply's is producing 48-56VDC.</p>
                <li>Connect the red probe to the voltmeter's positive terminal and the black probe to the negative (or ground) terminal.</li>
                <li>Set the voltmeter to DC voltage mode.</li>
                <li>Touch the the red probe to the positive terminal and the black probe to the negative terminal.</li>
                <li>Ensure the power supply delivers the required 48VDC-56VDC input voltage while connected to the device.</li>
                <p>3. If the power supply fails to provide the required voltage while connected:</p>
                <li>Test that the power supply is functional by using it to power another device.</li>
                <li>Switch to a different power source and repeat steps 2 and 3</li>
                <p>4. Test that the powered device gets powered on via another PoE source.</p>
                <p>5. Replace the Ethernet cable.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> No Communication </button>
            {visibleAnswer === 'no-communication' && (
              <div className="faq-answer">
                <p>1. Confirm the switch powers on.</p>
                <p>2. Verify access to the switch's GUI.</p>
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
        </div>

        <p className="faq-title">Relevant Information</p>
        <div className="faq-list">
        <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('relevant-switch-information')}>  Switches </button>
            {visibleAnswer === 'relevant-switch-information' && (
              <div className="faq-answer">
                <p>Layer 2 switches route data to devices in the LAN using their MAC address.</p>
                <p>Default IP: 192.168.10.1</p>
                <p>Default username: admin</p>
                <p>Default password: admin</p>
                <p>Auto MDI/MDIX (Medium Dependent Interface / Medium Dependent Interface Crossover)</p>
                <li>Automatically detects the type of Ethernet cable being used (straight-through vs. cross over)</li>
                <p>Protocols:</p>
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
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('putty')}>  PuTTY / Tera Term </button>
            {visibleAnswer === 'putty' && (
              <div className="faq-answer">
                <p>...</p>
              </div>
            )}
          </div>
          <Fiber />
          <PowerOverEthernet />
        </div>
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Switch;