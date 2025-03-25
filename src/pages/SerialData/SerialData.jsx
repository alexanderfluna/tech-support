import React, { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';
import products from './SerialDataProducts';
import '../../styles/Pages.css'

const SerialData = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showTable, setShowTable] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Number_Of_Fibers: [],
    fiber: [],
    optics: [],
    package: [],
  });

  const [filters, setFilters] = useState({
    Number_Of_Fibers: null,
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

  const toggleTable = () => {
    setShowTable(!showTable);
    setFilteredProducts(products);
    updateAvailableOptions(products);
    setFilters({ Number_Of_Fibers: null, fiber: null, optics: null, package: null }); 
  };

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
    setFilters({ Number_Of_Fibers: null, fiber: null, optics: null, package: null});
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const Number_Of_Fibers = [...new Set(filteredProducts.map((product) => product.Number_Of_Fibers))];
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const optics = [...new Set(filteredProducts.map((product) => product.optics))];
    const packageOptions = [...new Set(filteredProducts.map((product) => product.package))];

    setAvailableOptions({ Number_Of_Fibers, fiber, optics, package: packageOptions });
  };

  return (
    <div>
      <main className="faq-container">
        <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(135deg, rgb(54, 126, 208), rgb(77, 77, 77))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center"
          }}>Serial Data</h1>
        <button className="purple-button" onClick={toggleTable}>
          <h1>Selector Tool</h1>
          <p>Our Serial Data Selector Tool filters Comnet's serial data devices by the number of fiber strands, the type of fiber, the optical connector, and the package.</p>
        </button>
        {showTable && (
  <>

    <div className="filter-options" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px', 
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    }}>
          <button 
      className="reset-button" 
      onClick={resetFilters}
      style={{
        padding: '8px 15px',
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#e60000'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4d4d'}
    >
      Reset
    </button>
      {["Number_Of_Fibers", "fiber", "optics", "package"].map((filterType) => (
        <div key={filterType} style={{ width: '200px', minWidth: '150px' }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            {filters[filterType] && (
              <button
                className="clear-filter"
                onClick={() => clearFilter(filterType)}
                style={{
                  backgroundColor: '#ff4d4d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '5px 10px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e60000'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4d4d'}
              >
                X
              </button>
            )}
          </h3>

          <select
            value={filters[filterType] || ''}
            onChange={(e) => handleFilterChange(filterType, e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '0.875rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
              backgroundColor: '#fff',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease-in-out',
            }}
          >
            <option value="">Select {filterType}</option>
            {availableOptions[filterType].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>

    <div className="table-container" style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      overflowX: 'auto',
    }}>
      <table className="selector-table" style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
        textAlign: 'left',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <th style={{ padding: '12px', fontSize: '1rem' }}>Model</th>
            <th style={{ padding: '12px', fontSize: '1rem' }}>NumOfFibers</th>
            <th style={{ padding: '12px', fontSize: '1rem' }}>Fiber</th>
            <th style={{ padding: '12px', fontSize: '1rem' }}>Optics</th>
            <th style={{ padding: '12px', fontSize: '1rem' }}>Package</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index} style={{
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
              borderBottom: '1px solid #ddd',
              transition: 'background-color 0.3s ease',
            }}>
              <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Model}</td>
              <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Number_Of_Fibers}</td>
              <td style={{ padding: '12px', fontSize: '1rem' }}>{product.fiber}</td>
              <td style={{ padding: '12px', fontSize: '1rem' }}>{product.optics}</td>
              <td style={{ padding: '12px', fontSize: '1rem' }}>{product.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}

        
        <button className="purple-button" onClick={toggleFAQ}>
          <h1>FAQ</h1>
          <p>Our FAQ section contains answers to frequently asked questions and how to troubleshoot common issues regarding Comnet's serial data devices.</p>
        </button>
        {showFAQ && (
          <>
            <div className="faq-list">
              <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('rs232')}> Learn about RS-232. </button>
                  {visibleAnswers.has('rs232') && (
                    <div className="faq-answer">
                      <p><strong>RS-232</strong> is a standard for serial communication that allows full-duplex data transmission using just three wires: transmit (TX), receive (RX), and ground (GND). Full-duplex means data can be sent and received at the same time, with one wire dedicated to sending data and another for receiving. The ground wire serves as a reference point for distinguishing between binary 1s and 0s, which are determined by the voltage difference between the transmit or receive wire and the ground. However, because RS-232 uses an unbalanced (single-ended) signaling method, it is more susceptible to noise interference, as electrical noise can easily disrupt voltage differences and introduce errors. RS-232 is a point-to-point communication standard, meaning it connects only two devices directly without support for multiple devices on the same line. The maximum recommended cable length for RS-232 depends on the data transmission speed, but at a common baud rate of 9600 bps (bits per second), it can reliably transmit data up to 15 meters (about 50 feet). While RS-232 was widely used in older computer and networking hardware for connecting modems, printers, and other peripherals, it has largely been replaced by USB and other modern communication interfaces, though it is still used in industrial and legacy systems.</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('rs422')}> Learn about RS-422. </button>
                  {visibleAnswers.has('rs422') && (
                    <div className="faq-answer">
                      <p><strong>RS-422</strong> is a serial communication standard that supports full-duplex data transmission using four wires: two for transmitting (TX+ and TX-) and two for receiving (RX+ and RX-). Unlike RS-232, which uses single-ended signaling, RS-422 employs balanced (differential) signaling, meaning data is transmitted as the voltage difference between each pair of wires rather than a single voltage level referenced to ground. This design makes RS-422 highly resistant to electrical noise because any interference affects both wires equally, and the receiver only processes the difference between them, effectively canceling out external noise. RS-422 supports point-to-point connections but can also be used in multi-drop configurations where multiple receivers share a common transmitter, a feature useful for industrial and automation systems. Additionally, RS-422 supports add/drop/repeat functionality, allowing data signals to be relayed across long distances by intermediate devices. With its improved noise immunity and signal integrity, RS-422 can reliably transmit data up to 1200 meters (about 4000 feet) at a baud rate of 9600 bps, making it ideal for applications requiring long-distance and high-reliability communication, such as industrial automation, telemetry, and process control.</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('rs485')}> Learn about RS-485. </button>
                  {visibleAnswers.has('rs485') && (
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
              {<NoPowerLight />}
              {<NoOpticalLink />}
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('fdx60')}> The serial data is not passing on the FDX60. </button>
                {visibleAnswers.has('fdx60') && (
                  <div className="faq-answer">
                    <p><strong>[1] Document what lights are illuminated on the unit.</strong></p>
                    <img src="photos/FDX/fdx60-led.jpg"></img>
                    <p><strong>[2] If passing 2-wire RS485, ensure there is 120-omh resistor across pins 6 and 7 (+I/O and -I/O).</strong></p>
                    <li>An impedance mismatch occurs because of two electronic devices with different impedance values, meaning they resist alternating current differently. Without proper termination, a resistor that matches the cable's characteristic impedance, the signal is not properly absorbed, leading to ringing.</li>
                    <li>Ringing happens when a data signal reflects back and forth between devices instead of cleanly reaching its destination. In a lumped distance, where devices are very close together, the resistor can be placed at either end. In distributed distance systems, where devices are far apart, the terminating resistor must be placed at both ends.</li>
                    <p><strong>[3] Confirm the dip switches are set correctly. Cycle power after changing the dip switch configuration.</strong></p>
                    <img src="photos/FDX/fdx60-switches.jpg"></img>
                    <p><strong>[4] Verify the wires are connected properly.</strong></p>
                    <img src="photos/FDX/fdx60-wires.jpg"></img>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('cnfe3doe2')}> Configuring the CNFE3DOE2. </button>
                {visibleAnswers.has('cnfe3doe2') && (
                  <div className="faq-answer">
                    <a href="pdf/SerialData/CNFE3DOE2.pdf">Click the link to view the configuration manual.</a>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default SerialData;
