import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import NoPowerLight from '../relevant-information/NoPowerLight';
import Fiber from '../relevant-information/Fiber';
import '../styles/Global.css';
import '../styles/Pages.css';

const SerialData = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    numOfFibers: [],
    fiber: [],
    optics: [],
    package: [],
  });

  const products = [
    { model: "FDX60M2", numOfFibers: 2, fiber: "mm", optics: "ST", package: "ComFit" },
    { model: "FDX60M2M", numOfFibers: 2, fiber: "mm", optics: "ST", package: "Compact" },
    { model: "FDX60M2/SC", numOfFibers: 2, fiber: "mm", optics: "SC", package: "ComFit" },
    { model: "FDX60M2M/SC", numOfFibers: 2, fiber: "mm", optics: "SC", package: "Compact" },
    { model: "FDX60S2", numOfFibers: 2, fiber: "sm", optics: "ST", package: "ComFit" },
    { model: "FDX60S2M", numOfFibers: 2, fiber: "sm", optics: "ST", package: "Compact" },
    { model: "FDX60S2/SC", numOfFibers: 2, fiber: "sm", optics: "SC", package: "ComFit" },
    { model: "FDX60S2M/SC", numOfFibers: 2, fiber: "sm", optics: "SC", package: "Compact" },
    { model: "FDX60M1A", numOfFibers: 1, fiber: "mm", optics: "ST", package: "ComFit" },
    { model: "FDX60M1AM", numOfFibers: 1, fiber: "mm", optics: "ST", package: "Compact" },
    { model: "FDX60M1A/SC", numOfFibers: 1, fiber: "mm", optics: "SC", package: "ComFit" },
    { model: "FDX60M1AM/SC", numOfFibers: 1, fiber: "mm", optics: "SC", package: "Compact" },
    { model: "FDX60SM1A", numOfFibers: 1, fiber: "sm", optics: "ST", package: "ComFit" },
    { model: "FDX60S1AM", numOfFibers: 1, fiber: "sm", optics: "ST", package: "Compact" },
    { model: "FDX60S1A/SC", numOfFibers: 1, fiber: "sm", optics: "SC", package: "ComFit" },
    { model: "FDX60S1AM/SC", numOfFibers: 1, fiber: "sm", optics: "SC", package: "Compact" },
    { model: "FDX60M1B", numOfFibers: 1, fiber: "mm", optics: "ST", package: "ComFit" },
    { model: "FDX60M1BM", numOfFibers: 1, fiber: "mm", optics: "ST", package: "Compact" },
    { model: "FDX60M1B/SC", numOfFibers: 1, fiber: "mm", optics: "SC", package: "ComFit" },
    { model: "FDX60M1BM/SC", numOfFibers: 1, fiber: "mm", optics: "SC", package: "Compact" },
    { model: "FDX60SM1B", numOfFibers: 1, fiber: "sm", optics: "ST", package: "ComFit" },
    { model: "FDX60S1BM", numOfFibers: 1, fiber: "sm", optics: "ST", package: "Compact" },
    { model: "FDX60S1B/SC", numOfFibers: 1, fiber: "sm", optics: "SC", package: "ComFit" },
    { model: "FDX60S1BM/SC", numOfFibers: 1, fiber: "sm", optics: "SC", package: "Compact" },
  ];

  const [filters, setFilters] = useState({
    numOfFibers: null,
    fiber: null,
    optics: null,
    package: null,
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
    setFilters({ numOfFibers: null, fiber: null, optics: null, package: null }); 
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
    setFilters({ numOfFibers: null, fiber: null, optics: null, package: null});
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const numOfFibers = [...new Set(filteredProducts.map((product) => product.numOfFibers))];
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const optics = [...new Set(filteredProducts.map((product) => product.optics))];
    const packageOptions = [...new Set(filteredProducts.map((product) => product.package))];

    setAvailableOptions({ numOfFibers, fiber, optics, package: packageOptions });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Serial Data</h2>
        <button className="purple-button" onClick={toggleFAQ}>
          Frequently Asked Questions
        </button>
        {showFAQ && (
          <>
            <div className="faq-list">
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('rs232')}> Learn about RS-232. </button>
                {visibleAnswer === 'rs232' && (
                  <div className="faq-answer">
                    <p><strong>RS-232</strong> is a standard for serial communication that allows full-duplex data transmission using just three wires: transmit (TX), receive (RX), and ground (GND). Full-duplex means data can be sent and received at the same time, with one wire dedicated to sending data and another for receiving. The ground wire serves as a reference point for distinguishing between binary 1s and 0s, which are determined by the voltage difference between the transmit or receive wire and the ground. However, because RS-232 uses an unbalanced (single-ended) signaling method, it is more susceptible to noise interference, as electrical noise can easily disrupt voltage differences and introduce errors. RS-232 is a point-to-point communication standard, meaning it connects only two devices directly without support for multiple devices on the same line. The maximum recommended cable length for RS-232 depends on the data transmission speed, but at a common baud rate of 9600 bps (bits per second), it can reliably transmit data up to 15 meters (about 50 feet). While RS-232 was widely used in older computer and networking hardware for connecting modems, printers, and other peripherals, it has largely been replaced by USB and other modern communication interfaces, though it is still used in industrial and legacy systems.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('rs422')}> Learn about RS-422. </button>
                {visibleAnswer === 'rs422' && (
                  <div className="faq-answer">
                    <p><strong>RS-422</strong> is a serial communication standard that supports full-duplex data transmission using four wires: two for transmitting (TX+ and TX-) and two for receiving (RX+ and RX-). Unlike RS-232, which uses single-ended signaling, RS-422 employs balanced (differential) signaling, meaning data is transmitted as the voltage difference between each pair of wires rather than a single voltage level referenced to ground. This design makes RS-422 highly resistant to electrical noise because any interference affects both wires equally, and the receiver only processes the difference between them, effectively canceling out external noise. RS-422 supports point-to-point connections but can also be used in multi-drop configurations where multiple receivers share a common transmitter, a feature useful for industrial and automation systems. Additionally, RS-422 supports add/drop/repeat functionality, allowing data signals to be relayed across long distances by intermediate devices. With its improved noise immunity and signal integrity, RS-422 can reliably transmit data up to 1200 meters (about 4000 feet) at a baud rate of 9600 bps, making it ideal for applications requiring long-distance and high-reliability communication, such as industrial automation, telemetry, and process control.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('rs485')}> Learn about RS-485. </button>
                {visibleAnswer === 'rs485' && (
                  <div className="faq-answer">
                    <p><strong>RS-485</strong> is a serial communication standard designed for long-distance, high-speed, and noise-resistant data transmission. Unlike RS-232, RS-485 uses balanced (differential) signaling, where data is transmitted as the voltage difference between two wires, D+ and D-. This differential approach makes RS-485 highly resistant to electrical noise, as interference affects both wires equally, and the receiver only processes the voltage difference, effectively canceling out external noise. RS-485 is widely used in industrial automation, building management systems, and other applications where multiple devices need to communicate over long distances. It supports both two-wire and four-wire configurations, each with distinct advantages.</p>
                    <p>In a <strong>2-wire RS-485</strong> setup, communication is half-duplex, meaning the same pair of wires is used for both transmitting and receiving data, but not at the same time. Devices must switch between sending and receiving, which requires careful coordination to avoid collisions. Since RS-485 relies on differential signaling, binary 1s and 0s are determined by the voltage difference between the D+ and D- wires. The system can transmit data up to 1200 meters (about 4000 feet) at a baud rate of 9600 bps, making it ideal for industrial applications where long-distance communication is needed but full-duplex communication is not required.</p>
                    <p> <strong>4-wire RS-485</strong> configuration allows full-duplex communication, where two wires are dedicated to transmitting and two separate wires are used for receiving. This setup enables continuous two-way communication, as devices do not need to switch between sending and receiving. Similar to the 2-wire version, data is transmitted using differential signaling, making it highly resistant to noise. The 4-wire configuration is commonly used in point-to-point or bus-based systems where simultaneous two-way communication is needed. Like the 2-wire version, it also supports transmission over distances up to 1200 meters at 9600 bps.</p>
                    <p>RS-485 is designed for multi-device communication and operates on a <strong>bus topology</strong>, where multiple devices share the same communication lines. To enable multiple devices to coexist on the same bus, RS-485 devices have a high-impedance load mode, also known as "tri-state." In this mode, a device can completely disconnect from the bus when it is not transmitting or receiving, allowing other devices to communicate without interference. However, only one device can be in tri-state at a time, so proper coordination is necessary to avoid data collisions. Adding termination resistors across the bus helps maintain signal integrity by preventing reflections that could distort data transmission.</p>
                    <p>Another key feature of RS-485 is <strong>tri-state level detect</strong>, which ensures that a device only enters tri-state mode when a specific voltage threshold (such as 400 mV) is met. This prevents unintended bus conflicts. Additionally, turnaround time is an important factor in RS-485 networks, as devices need to be polled to determine when they are ready to transmit. Efficient turnaround timing is crucial in half-duplex systems, where devices must take turns communicating on the same wires.</p>
                    <p>Because of its robustness, long-distance capabilities, and ability to support multiple devices on the same bus, RS-485 is widely used in industrial control systems, HVAC controls, building automation, and other applications where reliable serial communication is essential.</p>
                  </div>
                )}
              </div>
              <Fiber />
            </div>
          </>
        )}
        <button className="purple-button" onClick={toggleTable}>
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
                  Number of Fibers
                  {filters.numOfFibers && (
                    <button className="clear-filter" onClick={() => clearFilter("numOfFibers")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.numOfFibers.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="numOfFibers"
                      value={option}
                      checked={filters.numOfFibers === option}
                      onChange={() => handleFilterChange("numOfFibers", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Fiber
                  {filters.fiber && (
                    <button className="clear-filter" onClick={() => clearFilter("fiber")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.fiber.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="fiber"
                      value={option}
                      checked={filters.fiber === option}
                      onChange={() => handleFilterChange("fiber", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Optics
                  {filters.optics && (
                    <button className="clear-filter" onClick={() => clearFilter("optics")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.optics.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="optics"
                      value={option}
                      checked={filters.optics === option}
                      onChange={() => handleFilterChange("optics", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Package
                  {filters.package && (
                    <button className="clear-filter" onClick={() => clearFilter("package")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.package.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="package"
                      value={option}
                      checked={filters.package === option}
                      onChange={() => handleFilterChange("package", option)}
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
                    <th>NumOfFibers</th>
                    <th>Fiber</th>
                    <th>Optics</th>
                    <th>Package</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
                      <td>{product.model}</td>
                      <td>{product.numOfFibers}</td>
                      <td>{product.fiber}</td>
                      <td>{product.optics}</td>
                      <td>{product.package}</td>
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
            {<NoPowerLight />}
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> There is no link light. </button>
              {visibleAnswer === 'no-link-light' && (
                <div className="faq-answer">
                    <p>[1] Confirm that the fiber in use is compatible with the device.</p>
                    <p>[2] Test if the fiber works with another device.</p>
                    <p>[3] Using a process of elimination, swap out the device on either end of the fiber with an identical device to determine which unit is failing.</p>
                    <p>[4] If an optical power meter is available, connect one end of the fiber to an optical power meter and connect the other end of the fiber to the device and check the dBm reading. Compare this to the device's recommended signal strength, available in the datasheet, to confirm it is within the expected range.</p>
                    <p>[5] If the link light is stuck green, remove and reinsert the fiber to verify if the link light reappears.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('fdx60')}> The serial data is not passing on the FDX60. </button>
              {visibleAnswer === 'fdx60' && (
                <div className="faq-answer">
                  <p><strong>[1] Document what lights are illuminated on the unit.</strong></p>
                  <img src="photos/FDX/fdx60-led.jpg"></img>
                  <p><strong>[2] Verify the wires are connected properly.</strong></p>
                  <img src="photos/FDX/fdx60-wires.jpg"></img>
                  <p><strong>[3] Confirm the dip switches are set correctly. Cycle power after changing the dip switch configuration.</strong></p>
                  <img src="photos/FDX/fdx60-switches.jpg"></img>
                  <p><strong>[4] If passing 2-wire RS485, ensure there are 120-omh resistors on the twisted pairs to prevent ringing.</strong></p>
                  <p>Impedance mismatch occurs when two interconnected electronic devices or components have different impedance values, which means they resist alternating current differently. This mismatch can cause signal integrity issues if not properly managed. Without proper termination, such as using a resistor that matches the cable's characteristic impedance, the signal energy is not absorbed correctly, leading to a phenomenon called ringing. Ringing happens when a data signal reflects back and forth between devices instead of cleanly reaching its destination, which can distort communication. The impact of termination placement depends on the distance between devices. In lumped distance systems, where devices are very close together, the resistor's exact placement is not critical. However, in distributed distance systems, where devices are far apart, the termination resistor must be placed at the end of the line to prevent reflections and ensure signal stability.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('cnfe3doe2')}> The serial data is not passing on the CNFE3DOE2. </button>
              {visibleAnswer === 'cnfe3doe2' && (
                <div className="faq-answer">
                  <a href="pdf/SerialData/CNFE3DOE2.pdf">Click the link to download the configuration manual.</a>
                </div>
              )}
            </div>
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

export default SerialData;
