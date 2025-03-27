// Explain dip switch #4 is for the status of loss of optical link
    // Beofre you start

import React, { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import Fiber from '../../relevant-information/Fiber';
import WiegandConfigurationTool from './WiegandConfigurationTool';
import '../../styles/Pages.css'

const Wiegand = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showTable, setShowTable] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    fiber: [],
    Central_Remote: []
  });

  const products = [
    { model: "FDW1000M/C", fiber: "Multimode", Central_Remote: "Central" },
    { model: "FDW1000M/R", fiber: "Multimode", Central_Remote: "Remote" },
    { model: "FDW1000S/C", fiber: "Single mode", Central_Remote: "Central" },
    { model: "FDW1000S/R", fiber: "Single mode", Central_Remote: "Remote" },
    { model: "EXP101/C", fiber: "Multimode", Central_Remote: "Central"},
    { model: "EXP101/C", fiber: "Single mode", Central_Remote: "Central"},
    { model: "EXP101/R", fiber: "Multimode", Central_Remote: "Remote"},
    { model: "EXP101/R", fiber: "Single mode", Central_Remote: "Remote"},
  ];

  const [filters, setFilters] = useState({
    fiber: null,
    Central_Remote: null,
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
    setFilters({ fiber: null, Central_Remote: null });
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
    setFilters({ fiber: null, Central_Remote: null });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const Central_Remote = [...new Set(filteredProducts.map((product) => product.Central_Remote))];
    setAvailableOptions({ fiber, Central_Remote });
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
          }}>Wiegand</h1>
        <button className="purple-button" onClick={toggleTable}>
          <h1>Selector Tool</h1>
          <p>Our Wiegand Selector Tool filters Comnet's wiegand devices by the type of fiber and whether a central or remote is needed.</p>
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

      {["fiber", "Central_Remote"].map((filterType) => (
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
          <div className="dropOFF-group">
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
              <option value="">Select {filterType.charAt(0).toUpperCase() + filterType.slice(1)}</option>
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
            <th style={{ padding: '12px', fontSize: '1rem' }}>Central/Remote</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index} style={{
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
              borderBottom: '1px solid #ddd',
              transition: 'background-color 0.3s ease',
            }}>
              <td style={{ padding: '12px', fontSize: '1rem' }}>{product.model}</td>
              <td style={{ padding: '12px', fontSize: '1rem' }}>{product.fiber}</td>
              <td style={{ padding: '12px', fontSize: '1rem' }}>{product.Central_Remote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}

        <button className="purple-button" onClick={toggleFAQ}>
          <h1>FAQ</h1>
          <p>Our FAQ section contains answers to frequently asked questions and how to troubleshoot common issues regarding Comnet's wiegand devices.</p>
        </button>
        {showFAQ && (
          <>
            <div className="faq-list">
              <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('wiegand')}> Learn about Wiegand. </button>
                  {visibleAnswers.has('wiegand') && (
                    <div className="faq-answer">
                      <p><strong>Wiegand</strong> is a communication protocol commonly used in access control systems, where data from a credential (like a card or keypad) is transmitted as binary pulses over two wires (Data 0 and Data 1) to a controller for authentication and authorization.</p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('osdp')}> Learn about OSDP. </button>
                  {visibleAnswers.has('osdp') && (
                    <div className="faq-answer">
                      <p><strong>OSDP (Open Supervised Device Protocol)</strong> is a modern, secure communication protocol for access control systems that enables bidirectional data exchange, device supervision, and advanced encryption over a 2-wire RS-485 serial connection.</p>
                    </div>
                  )}
                </div>
                <Fiber />
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> Configuring the Wiegand devices. </button>
                  {visibleAnswers.has('no-communication') && (
                    <div className="faq-answer">
                      <p><strong>[1] Default the FDW1000/C.</strong></p>
                      <p style={{paddingLeft: "40px"}}>[1.1] Remove the power, fiber strands, and metal housing to expose the DIP switches.</p>
                      <p style={{paddingLeft: "40px"}}>[1.2] Flip all dip switches OFF.</p>
                      <p style={{paddingLeft: "40px"}}>[1.3] Flip the following dip switches ON accordingly.</p>
                      <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switches 1, 4, and 8 ON.</li>
                      <li style={{paddingLeft: "60px"}}>Else, if it is a reader and keypad combination, flip dip switches 1, 4, and 7 ON.</li>
                      <p style={{paddingLeft: "40px"}}>[1.4] Apply power (There should be a green STATUS LED).</p>
                      <p style={{paddingLeft: "40px"}}>[1.5] Remove power.</p>
                      <p style={{paddingLeft: "40px"}}>[1.6] Flip all dip switches OFF.</p>
                      <p><strong>[2] Configure the FDW1000/C.</strong></p>
                      <p>[2.1] Flip dip switch 3 ON.</p>
                      <p>[2.2] If EXP101/C expansion modules will be used, configure dip switches 6, 7, and 8 accordingly.</p>
                      <img src="photos/FDW/Configure.png" alt="FDW1000" style={{width: "80%"}}/>
                      <p>[2.3] Apply power (The FDW1000/C is now ready to use).</p>
                      <p><strong>[3] Configure the EXP101/C expansion modules as needed.</strong></p>
                      <p style={{paddingLeft: "40px"}}>[3.1] Remove the power, fiber strands, and metal housing to expose the DIP switches.</p>
                      <p style={{paddingLeft: "40px"}}>[3.2] Flip all dip switches OFF.</p>
                      <p style={{paddingLeft: "40px"}}>[3.3] Flip dip switch 2 ON.</p>
                      <p style={{paddingLeft: "40px"}}>[3.4] Flip the following dip switch ON accordingly.</p>
                      <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switch 5 ON.</li>
                      <li style={{paddingLeft: "60px"}}>Else, if it is a reader and keypad combination, flip dip switch 4 ON.</li>
                      <p style={{paddingLeft: "40px"}}>[3.5]Configure dip switches 6, 7, and 8 accordingly.</p>
                      <img src="photos/FDW/Configure2.png" alt="EXP101" style={{width: "75%"}}></img>
                      <p><strong>[4] Default the FDW1000/R.</strong></p>
                      <p style={{paddingLeft: "40px"}}>[4.1] Remove the power, fiber strands, and metal housing to expose the DIP switches.</p>
                      <p style={{paddingLeft: "40px"}}>[4.2] Flip all dip switches OFF.</p>
                      <p style={{paddingLeft: "40px"}}>[4.3] Flip the following dip switches ON accordingly.</p>
                      <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switches 1, 4, and 8 ON.</li>
                      <li style={{paddingLeft: "60px"}}>Else, if it is a reader and keypad, flip dip switches 1, 4, and 7 ON.</li>
                      <p style={{paddingLeft: "40px"}}>[4.4] Apply power (There should be a green STATUS LED).</p>
                      <p style={{paddingLeft: "40px"}}>[4.5] Remove power.</p>
                      <p style={{paddingLeft: "40px"}}>[4.6] Flip all dip switches OFF.</p>
                      <p><strong>[5] Configure the FDW1000/R.</strong></p>
                      <p>[5.1] If EXP101/R expansion modules will be used, configure dip switches 6, 7, and 8 accordingly.</p>
                      <img src="photos/FDW/Configure.png" alt="FDW1000" style={{width: "75%"}}/>
                      <p>[5.2] Apply power (The FDW1000/R is now ready to use).</p>
                      <p><strong>[6] Configure the EXP101/R expansion modules as needed.</strong></p>
                      <p style={{paddingLeft: "40px"}}>[6.1] Remove the power, fiber strands, and metal housing to expose the DIP switches.</p>
                      <p style={{paddingLeft: "40px"}}>[6.2] Flip all dip switches OFF.</p>
                      <p style={{paddingLeft: "40px"}}>[6.3] Flip the following dip switch ON accordingly.</p>
                      <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switch 5 ON.</li>
                      <li style={{paddingLeft: "60px"}}>Else, if it is a reader and keypad combination, flip dip switch 4 ON.</li>
                      <p style={{paddingLeft: "40px"}}>[6.4] Configure dip switches 6, 7, and 8 accordingly.</p>
                      <img src="photos/FDW/Configure2.png" alt="EXP101" style={{width: "75%"}}></img>
                      <p><strong>[7] Ensure the correct wire configuration.</strong></p>
                      <p style={{color: "red"}}><strong>Please note there must be a common ground between the central unit(s) and the panel and there must be a common ground between the remote unit(s) and reader(s)!</strong></p>
                      <img src="photos/FDW/FDW.png" alt="FDW1000 wiring"style={{width: "75%"}}></img>
                      <img></img>
                    </div>
                  )}
                </div>
                {<NoPowerLight />}
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> Troubleshooting a unit with no link light. </button>
                  {visibleAnswers.has('no-link-light') && (
                    <div className="faq-answer">
                      <p><strong>[1] Swap the transmit and receive fiber strands.</strong></p>
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

export default Wiegand;
