import React, { useState, useEffect } from 'react';
import products from "./EthernetExtenderProducts";
import '../../styles/Pages.css'

const EthernetExtender = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showTable, setShowTable] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    position: [],
    channels: [],
    formFactor: [],
    cable: [],
    poeInjection: []
  });

  const [filters, setFilters] = useState({
    position: null,
    channels: null,
    formFactor: null,
    cable: null,
    poeInjection: null
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
    setFilters({ position: null, channels: null, formFactor: null, cable: null,  poeInjection: null }); 
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
    setFilters({ position: null, channels: null, formFactor: null, cable: null, poeInjection: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const position = [...new Set(filteredProducts.map((product) => product.position))];
    const channels = [...new Set(filteredProducts.map((product) => product.channels))];
    const formFactor = [...new Set(filteredProducts.map((product) => product.formFactor))];
    const cable = [...new Set(filteredProducts.map((product) => product.cable))];
    const poeInjection = [...new Set(filteredProducts.map((product) => product.poeInjection))];
 
    setAvailableOptions({ position, channels, formFactor, cable, poeInjection });
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
          }}>Ethernet Extender</h1>

        <button className="purple-button" onClick={toggleTroubleshooting}>
          <h1>Troubleshoot</h1>
        </button>
        {showTroubleshooting && (
          <>
            <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('CLFE(X)EO(U/C) to CLFE(X)EO(U/C)')}> Troubleshooting CLFE(X)EO(U/C) to CLFE(X)EO(U/C) </button>
                {visibleAnswers.has('CLFE(X)EO(U/C) to CLFE(X)EO(U/C)') && (
                  <div className="faq-answer">
                    <p><strong>[1] View the <a href="pdf/EthernetExtender/CLFE_X_EO_C-U.pdf" >installation manual</a>.</strong></p>
                    <li style={{paddingLeft: "40px"}}>Page 2: CLFE1EOC and CLFE1EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 3: CLFE4EOC images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 4: CLFE4EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 5: CLFE8EOC and CLFE8EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 6: CLFE16EOC images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 7: CLFE16EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 8: Application diagrams.</li>
                    <li style={{paddingLeft: "40px"}}>Page 9: Installation instructions, power table and LED table.</li>
                    <li style={{paddingLeft: "40px"}}>Page 10: Application notes, extended distance table, troubleshooting guide.</li>
                    <p><strong>[2] Note the following:</strong></p>
                    <li style={{paddingLeft: "40px"}}><strong>Local (CLL) vs. Remote (CLR):</strong> The devices with 1, 4, 8, or 16 channels that begin with <strong>CLL</strong> are the local units. The devices with 1 or 4 channels that begin with <strong>CLR</strong> are the remote units.</li>
                    <li style={{paddingLeft: "40px"}}><strong>PoE:</strong> The local or remote device can inject 48VDC at the 802.3at standard. There is no pass-through PoE when using one pair of UTP.</li>
                    <li style={{paddingLeft: "40px"}}><strong>LEDs:</strong> The entire setup must be connected for LEDs to be illuminated.</li>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)')}> Troubleshooting CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C) </button>
                {visibleAnswers.has('CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)') && (
                  <div className="faq-answer">
                    <p><strong>[1] View the <a href="pdf/EthernetExtender/CL_L-R_FE_X_POE_C-U.pdf" >installation manual</a>.</strong></p>
                    <li style={{paddingLeft: "40px"}}>Page 2: CLLFE1POEC and CLRFE1POEC images and dip switch.</li>
                    <li style={{paddingLeft: "40px"}}>Page 3: CLLFE1POEU and CLRFE1PEOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 4: CLLFE4POEC and CLRFE4PEOU images and dip switch.</li>
                    <li style={{paddingLeft: "40px"}}>Page 5: CLLFE4POEU and CLRFE4POEU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 6: CLLFE8EOC images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 7: CLLFE8EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 8: CLLFE16EOC images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 9: CLLFE16EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 10: Application diagrams.</li>
                    <li style={{paddingLeft: "40px"}}>Page 11: Installation instructions, power table, LED table, and application notes.</li>
                    <li style={{paddingLeft: "40px"}}>Page 12: Extended distance table and troubleshooting guide</li>
                    <li style={{paddingLeft: "40px"}}>Page 13: Ferrite core</li>
                    <p><strong>[2] Note the following:</strong></p>
                    <li style={{paddingLeft: "40px"}}><strong>Local (CLL) vs. Remote (CLR):</strong> The devices with 1, 4, 8, or 16 channels that begin with <strong>CLL</strong> are the local units. The devices with 1 or 4 channels that begin with <strong>CLR</strong> are the remote units.</li>
                    <li style={{paddingLeft: "40px"}}><strong>PoE:</strong> The local or remote device can inject 48VDC at the 802.3at standard. There is no pass-through PoE when using one pair of UTP.</li>
                    <li style={{paddingLeft: "40px"}}><strong>LEDs:</strong> The entire setup must be connected for LEDs to be illuminated.</li>
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

              {['position', 'channels', 'formFactor', 'cable', 'poeInjection'].map((filterKey) => (
                <div key={filterKey} style={{ width: '200px', minWidth: '150px' }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    {filterKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    {filters[filterKey] && (
                      <button
                        className="clear-filter"
                        onClick={() => clearFilter(filterKey)}
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
                      name={filterKey}
                      value={filters[filterKey] || ""}
                      onChange={(e) => handleFilterChange(filterKey, e.target.value)}
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
                      <option value="">Select {filterKey.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
                      {availableOptions[filterKey]?.map((option) => (
                        <option key={option} value={option}>{option}</option>
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
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Part Number</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Position</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Channels</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Form Factor</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Cable</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Poe Injection</th>
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
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.position}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.channels}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.formFactor}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.cable}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.poeInjection}</td>
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
                <button className="faq-question" onClick={() => toggleAnswer('copper')}> Learn about UTP </button>
                {visibleAnswers.has('copper') && (
                  <div className="faq-answer">
                    <p><strong>Unshielded Twisted Pair (UTP)</strong> copper cables have a standard maximum transmission distance of 100 meters (328 feet) for Ethernet networks. This limitation exists because electrical signals weaken as they travel through the copper wires. The resistance in the cable causes signal loss, known as attenuation, which reduces the strength and quality of the transmitted data. Over longer distances, the receiving end may struggle to correctly interpret the signals, leading to data loss or transmission errors.</p>
                    <p>Another challenge with copper cables is their vulnerability to <strong>electromagnetic interference (EMI)</strong>. Nearby electrical devices, power lines, and even other network cables can introduce noise into the signal, causing disruptions and reducing overall performance. Over long distances, this interference becomes more noticeable, further degrading the signal quality and making communication unreliable.</p>
                    <p>For applications that require longer transmission distances without the need for fiber optics, extended copper solutions exist. Using technologies like <strong>DSL (Digital Subscriber Line)</strong> or <strong>BroadR-Reach,</strong> specialized network extenders can transmit data up to 2,000 feet. These solutions often require signal repeaters or amplification to maintain data integrity over such extended distances.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('coax')}> Learn about Coax </button>
                {visibleAnswers.has('coax') && (
                  <div className="faq-answer">
                    <p><strong>BNC Connector:</strong> The BNC (Bayonet Neill-Concelman) connector is a small, quick-connect, twist-and-lock coaxial cable connector used in video, radio, and data transmission applications. It provides a secure connection and is commonly found in CCTV systems, radio communications, and older analog video setups. Unlike threaded connectors, the BNC’s bayonet-style design allows for quick installation and removal, making it ideal for professional video and networking environments.</p>
                    <p><strong>Coaxial Cable Transmission Distance:</strong> One of the advantages of coaxial cables is their ability to carry signals over longer distances compared to standard twisted-pair copper cables. This makes coax a viable option for legacy surveillance systems and specialized communication networks. However, over long distances, signal loss (attenuation) occurs, and amplifiers or repeaters may be needed to maintain signal integrity.</p>
                    <p><strong>Types of Coaxial Cables:</strong> Coaxial cables come in various types, each suited for specific applications. The most common types include RG11, RG6, and RG59, which differ in size, impedance, and usage. These cables are used in applications such as television broadcasting, security camera systems, and broadband internet. The impedance of a coaxial cable, usually 50 or 75 ohms, determines its electrical resistance and suitability for different signal types. Thicker cables like RG11 offer lower signal loss and longer transmission distances, while thinner cables like RG59 are more flexible and easier to install in tight spaces.</p>
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "18px",
                        textAlign: "left",
                      }}
                    >
                      <thead>
                        <tr style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff" }}>
                          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Cable Type</th>
                          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Applications</th>
                          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Impedance</th>
                          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Size</th>
                          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Max Distance</th>
                          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Signal Loss</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: "RG11", applications: "Used in long-distance video and internet connections", impedance: "75 Ohms", size: "Large", maxDistance: "Up to 1,500 ft", signalLoss: "Low" },
                          { type: "RG6", applications: "Used in satellite TV, cable systems, and broadband internet", impedance: "75 Ohms", size: "Medium", maxDistance: "Up to 1,000 ft", signalLoss: "Medium" },
                          { type: "RG59", applications: "Used in analog video applications, CCTV", impedance: "75 Ohms", size: "Small", maxDistance: "Up to 750 ft", signalLoss: "High" },
                          { type: "RG58", applications: "Used in radio and data communication", impedance: "50 Ohms", size: "Small", maxDistance: "Up to 500 ft", signalLoss: "Higher" },
                        ].map((item, index) => (
                          <tr
                            key={index}
                            style={{
                              backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                            }}
                          >
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.type}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.applications}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.impedance}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.size}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.maxDistance}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.signalLoss}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default EthernetExtender;
