import React, { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';
import products from "./ContactClosureProducts";
import '../../styles/Pages.css'

const ContactClosure = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showTable, setShowTable] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    fiber: [],
    Latching_Or_NonLatching: [],
    inputContactSupervision: [],
    summaryFaultRelay: [],
    numberOfChannels: [],
    bidirectional: [],
  });
  const [filters, setFilters] = useState({
    fiber: null,
    Latching_Or_NonLatching: null,
    inputContactSupervision: null,
    summaryFaultRelay: null,
    numberOfChannels: null,
    bidirectional: null,
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
    setFilters({ fiber: null, Latching_Or_NonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null }); // Reset all filters
  };

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  }

  const toggleTroubleshooting = () => {
    setShowTroubleshooting(!showTroubleshooting);
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
    setFilters({ fiber: null, Latching_Or_NonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const Latching_Or_NonLatching = [...new Set(filteredProducts.map((product) => product.Latching_Or_NonLatching))];
    const inputContactSupervision = [...new Set(filteredProducts.map((product) => product.inputContactSupervision))];
    const summaryFaultRelay = [...new Set(filteredProducts.map((product) => product.summaryFaultRelay))];
    const numberOfChannels = [...new Set(filteredProducts.map((product) => product.numberOfChannels))];
    const bidirectional = [...new Set(filteredProducts.map((product) => product.bidirectional))];

    setAvailableOptions({ fiber, Latching_Or_NonLatching, inputContactSupervision, summaryFaultRelay, numberOfChannels, bidirectional });
  };

  return (
    <div>
      <main className="faq-container">
        <h1 style={{
            fontSize: "5rem",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(135deg, rgb(54, 126, 208), rgb(77, 77, 77))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center"
          }}>Contact Closure</h1>

        <button className="purple-button" onClick={toggleTroubleshooting}>
          <h1>Troubleshooting</h1>
        </button>
        {showTroubleshooting && (
          <>
              {<NoPowerLight />}
              {<NoOpticalLink />}
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('no-contacts')}> The contacts are not getting sent across the fiber. </button>
                  {visibleAnswers.has('no-contacts') && (
                    <div className="faq-answer">
                      <p><strong>[1] Ensure the wires are connected properly.</strong></p>
                      <p><strong>FDC10:</strong></p>
                      <img src="photos/FDC/fdc10.jpg" style={{"padding-right": "100px"}}></img>
                      <p><strong>FDC8 or FDC80:</strong></p>
                      <img src="photos/FDC/fdc80.jpg" style={{height: "600px"}}></img>
                      <p><strong>[2] Confirm the inputs are dry (volt-free) closures. It is not acceptable to have voltage across the input pair.</strong></p>
                      <p><strong>[3] If an ohmmeter is being used across the screwheads on the green terminal block and if the screws are not tightened, it will look like the relay is not responding. Be sure that there are wires in the terminal block and that the screws are tightened. If wires are not inserted into the terminal block, tighten the screws anyway and then measure across the screw heads.</strong></p>
                      <p><strong>[4] Cycle power on the unit.</strong></p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('cnfe3')}> Configuring the CNFE3FX1TX2C4DX/M. </button>
                  {visibleAnswers.has('cnfe3') && (
                    <div className="faq-answer">
                      <a href="pdf/ContactClosure/CNFE3FX1TX2C4.pdf">Click the link to view the configuration manual.</a>
                    </div>
                  )}
                </div>
          </>
        )}

        <button className="purple-button" onClick={toggleTable}>
          <h1>Selector Tool</h1>
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

              {["fiber", "Latching_Or_NonLatching", "inputContactSupervision", "summaryFaultRelay", "numberOfChannels", "bidirectional"].map((filterType) => (
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
                    {filterType.replace(/([A-Z])/g, ' $1').toUpperCase()}
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
                  <div className="dropdown-group">
                    <select
                      name={filterType}
                      value={filters[filterType] || ""}
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
                      <option value="">Select {filterType.replace(/([A-Z])/g, ' $1')}</option>
                      {availableOptions[filterType]?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Fiber</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Latching or Non-Latching</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Input Contact Supervision</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Summary Fault Relay</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Number of Channels</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Bidirectional</th>
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
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.fiber}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Latching_Or_NonLatching}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.inputContactSupervision}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.summaryFaultRelay}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.numberOfChannels}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.bidirectional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}




        <button className="purple-button" onClick={toggleFAQ}>
          <h1>Relevant Information</h1>
        </button>
        {showFAQ && (
          <>
            <div className="faq-list">
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('formA')}> Learn about form A relays. </button>
                {visibleAnswers.has('formA') && (
                  <div className="faq-answer">
                    <p><strong>Form A relays</strong> are Single Pole Single Throw (SPST) normally open relays. When the relay coil in a Form A mechanical relay is not energized, or when there is no magnetic field nearby in a reed relay, the relay contacts are open. When the relay coil in a Form A relay is energized, or when a magnetic field exists nearby in a reed relay, the relay contacts close. Used in applications where you need to switch a circuit on when the relay is activated: common in simple on/off control circuits, like turning on a light or powering a device.</p>
                    <img src="photos/FDC/FormA.png" style={{height: "400px"}}></img>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('formC')}> Lern about form C relays. </button>
                {visibleAnswers.has('formC') && (
                  <div className="faq-answer">
                    <p><strong>Form C relays</strong> are Single Pole Double Throw (SPDT) relays with a normally open set of contacts and a normally closed set of contacts. When the relay coil is not energized, the relay contacts are open relative to normally open and common AND are closed relative to normally closed and common. When the relay coil is energized, the relay contacts are closed relative to normally open and common AND are open relative to normally closed and common. Form C relays are used in applications where you need to alternate between two circuits. It allows for switching between two states, such as toggling between two power sources or switching between two devices: like switching between a primary and backup power supply.</p>
                    <img src="photos/FDC/FormC.png" style={{height: "400px"}}></img>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('latching')}> Learn about latching vs. non-latching. </button>
                {visibleAnswers.has('latching') && (
                  <div className="faq-answer">
                    <p>In the case of a loss of optical link, <strong>latching relays</strong> will remain in the same state, whereas <strong>non-latching</strong> relays will open.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('supervision')}> Learn about supervision. </button>
                {visibleAnswers.has('supervision') && (
                  <div className="faq-answer">
                    <p><strong>Supervision</strong> allows the device to detect if there is a short circuit or an open circuit. A slow fashing red LED indicates a short circuit, whereas a fast fashing red LED indicates an open circuit.</p>
                    <p><strong>On the FDC80 transmitter:</strong></p>
                    <li style={{"padding-left": "40px"}}>Flipping dip switch #1 on will allow for detection of short circuits.</li>
                    <li style={{"padding-left": "40px"}}>Flipping dip switch #2 on will allow for detection of cut wires.</li>
                    <p><strong>On the FDC80 receiver:</strong></p>
                    <li style={{"padding-left": "40px"}}>Flipping dip switch #1 on will add fiber loss to the summary fault relay.</li>
                    <li style={{"padding-left": "40px"}}>Flipping dip switch #2 on will add contact faults to the summary fault relay.</li>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('summary')}> Learn about summary fault relays. </button>
                {visibleAnswers.has('summary') && (
                  <div className="faq-answer">
                    <p>A <strong>summary fault relay</strong> is normally closed during normal conditions and will open upon loss of optical link. The <strong>FDC10</strong> is a good choice for monitoring the status of optical fiber.</p>
                  </div>
                )}
              </div>
              <Fiber />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ContactClosure;
