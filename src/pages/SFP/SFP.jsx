import React, { useState, useEffect } from 'react';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import products from './SFPProducts'
import Fiber from '../../relevant-information/Fiber';
import '../../styles/Pages.css'

const SFP = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showTable, setShowTable] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [availableOptions, setAvailableOptions] = useState({
    dataRate: ['FE', 'GE', '10G'],
    txMedium: ['Copper', 'Singlemode', 'Multimode'],
    fibers: ['N/A', '1 strand', '2 strands'],
    optics: ['RJ-45', 'SC', 'LC'],
    pathLength: ['100m', '26/300m', '275/550m', '2km', '10km', '15km', '20km', '40km', '60km', '70km', '80km', '120km'],
    Tx: ['N/A', '850', '1270', '1310', '1330', '1490', '1550'],
    Rx: ['N/A', '850', '1270', '1310', '1330', '1490', '1550'],
  });

  const [filters, setFilters] = useState({
    dataRate: null,
    txMedium: null,
    fibers: null,
    optics: null,
    pathLength: null,
    Tx: null,
    Rx: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredProducts(products);
    updateAvailableOptions(products);
  }, []);

  const toggleAnswer = (questionId) => {
    setVisibleAnswers((prevAnswers) => {
      const newAnswers = new Set(prevAnswers);
      newAnswers.has(questionId) ? newAnswers.delete(questionId) : newAnswers.add(questionId);
      return newAnswers;
    });
  };

  const toggleTable = () => {
    setShowTable(!showTable);
    resetFilters();
  };

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value || null };
    setFilters(newFilters);

    const newFilteredProducts = products.filter((product) =>
      Object.entries(newFilters).every(([key, filterValue]) => !filterValue || product[key] === filterValue)
    );

    setFilteredProducts(newFilteredProducts);
    updateAvailableOptions(newFilteredProducts);
  };

  const clearFilter = (filterType) => {
    handleFilterChange(filterType, null);
  };

  const resetFilters = () => {
    setFilters({
      dataRate: null,
      txMedium: null,
      fibers: null,
      optics: null,
      pathLength: null,
      Tx: null,
      Rx: null,
    });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const getUniqueOptions = (key) => [...new Set(filteredProducts.map((product) => product[key]))];

    setAvailableOptions({
      dataRate: getUniqueOptions('dataRate'),
      txMedium: getUniqueOptions('txMedium'),
      fibers: getUniqueOptions('fibers'),
      optics: getUniqueOptions('optics'),
      pathLength: getUniqueOptions('pathLength'),
      Tx: getUniqueOptions('Tx'),
      Rx: getUniqueOptions('Rx'),
    });
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
          }}>SFP</h1>
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

              {['dataRate', 'txMedium', 'fibers', 'optics', 'pathLength', 'Tx', 'Rx'].map((filterKey) => (
                <div key={filterKey} className="dropdown-container" style={{ width: '200px', minWidth: '150px' }}>
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
                      <option value="">All</option>
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
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Model</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Data Rate</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Tx Medium</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}># of Fibers</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Optics</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Path Length</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Tx</th>
                    <th style={{ padding: '12px', fontSize: '1rem' }}>Rx</th>
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
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.dataRate}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.txMedium}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.fibers}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.optics}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.pathLength}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Tx}</td>
                      <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Rx}</td>
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
            {<NoOpticalLink/>}
            <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('ddi')}>
                  How can I view the status of an SFP module?
                </button>
                {visibleAnswers.has('ddi') && (
                  <>
                    <div className="faq-answer">
                      <p><strong>It is possible to view the status of the SFP in any Comnet switch via the DDMI section or the SPF Status section.</strong></p>
                    </div>
                  </>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('cisco')}>
                  Will Comnet SFPs work with Cisco devices?
                </button>
                {visibleAnswers.has('cisco') && (
                  <>
                    <div className="faq-answer">
                      <p><strong>ComNet SFP modules will optically communicate with properly matched Cisco SFPs when Cisco SFPs are installed in a Cisco switch. Note that ComNet SFPs will not operate when installed in a Cisco switch.</strong></p>
                    </div>
                  </>
                )}
              </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('sfp')}>
                Learn about SFPs.
              </button>
              {visibleAnswers.has('sfp') && (
                <div className="faq-answer">
                  <p><strong>SFP (Small Form-Factor Pluggable</strong>) modules are compact, hot-swappable devices used in network equipment like switches and routers to send and receive data over fiber optic or copper cables. They support singlemode or multimode fiber for different distances and come in various speeds like Fast Ethernet (FE), Gigabit Ethernet (GE), and 10 Gigabit (10G). SFPs use different connectors, such as LC, SC, or RJ-45, depending on the cable type. They help expand network capabilities without replacing entire devices.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('sfp-chart')}>
                View Comnet's SFP chart.
              </button>
              {visibleAnswers.has('sfp-chart') && (
                <div className="faq-answer" style={{display: "flex", "flex-direction": "column"}}>
                  <a href="pdf/SFP/sfp-modules.pdf">
                      <button style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px"}}>
                        View Comnet SFP Chart
                      </button>
                    </a>
                  <img src="photos/SFP/SFP.png" alt="SFP Chart" />
                </div>
              )}
            </div>
            {<Fiber/>}
          </>
        )}      
      </main>
    </div>
  );
};

export default SFP;
