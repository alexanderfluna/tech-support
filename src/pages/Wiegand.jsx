import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Chatbox from '../components/Chatbox';
import NoPowerLight from '../relevant-information/NoPowerLight';
import Fiber from '../relevant-information/Fiber';
import '../styles/Global.css';
import '../styles/Pages.css';

const Wiegand = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    fiber: [],
    centralRemote: []
  });

  const products = [
    { model: "FDW1000M/C", fiber: "Multimode", centralRemote: "Central" },
    { model: "FDW1000M/R", fiber: "Multimode", centralRemote: "Remote" },
    { model: "FDW1000S/C", fiber: "Single mode", centralRemote: "Central" },
    { model: "FDW1000S/R", fiber: "Single mode", centralRemote: "Remote" },
  ];

  const [filters, setFilters] = useState({
    fiber: null,
    centralRemote: null,
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
    setFilters({ fiber: null, centralRemote: null });
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
    setFilters({ fiber: null, centralRemote: null });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const centralRemote = [...new Set(filteredProducts.map((product) => product.centralRemote))];
    setAvailableOptions({ fiber, centralRemote });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Wiegand</h2>
        <p style={{fontWeight: "bold"}}>______________________________________</p>        
        <button className="purple-button" onClick={toggleTable}>
          <h1>Selector Tool</h1>
          <p>Our Wiegand Selector Tool filters Comnet's wiegand devices by the type of fiber and whether a central or remote is needed.</p>
        </button>
        {showTable && (
          <>
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
            <div className="filter-options">
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
                  Central/Remote
                  {filters.centralRemote && (
                    <button className="clear-filter" onClick={() => clearFilter("centralRemote")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.centralRemote.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="centralRemote"
                      value={option}
                      checked={filters.centralRemote === option}
                      onChange={() => handleFilterChange("centralRemote", option)}
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
                    <th>Fiber</th>
                    <th>Central/Remote</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
                      <td>{product.model}</td>
                      <td>{product.fiber}</td>
                      <td>{product.centralRemote}</td>
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
            {<NoPowerLight />}
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> There is no link light. </button>
                {visibleAnswer === 'no-link-light' && (
                  <div className="faq-answer">
                    <p><strong>[1] Swap the transmit and receive fiber strands.</strong></p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> The central and remote are not communicating. </button>
                {visibleAnswer === 'no-communication' && (
                  <div className="faq-answer">
                    <p><strong>[1] Default the FDW1000/C.</strong></p>
                    <p style={{paddingLeft: "40px"}}>[1.1] Remove power and fiber strands.</p>
                    <p style={{paddingLeft: "40px"}}>[1.2] Flip all dip switches down.</p>
                    <p style={{paddingLeft: "40px"}}>[1.3] Flip the following dip switches up.</p>
                    <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switches 1, 4, 8 on.</li>
                    <li style={{paddingLeft: "60px"}}>If it is a reader and keypad, flip dip switches 1, 4, 7 on.</li>
                    <p style={{paddingLeft: "40px"}}>[1.4] Apply power. (There should be a green status LED)</p>
                    <p style={{paddingLeft: "40px"}}>[1.5] Remove power.</p>
                    <p style={{paddingLeft: "40px"}}>[1.6] Flip all dip switches down.</p>
                    <p><strong>[2] Configure the FDW1000/C.</strong></p>
                    <img src="photos/FDW/Configure.png"></img>
                    <p><strong>[3] Configure the EXP101/C expansion modules as needed.</strong></p>
                    <img src="photos/FDW/Configure2.png"></img>
                    <p><strong>[4] Default the FDW1000/R.</strong></p>
                    <p style={{paddingLeft: "40px"}}>[4.1] Remove power and fiber strands.</p>
                    <p style={{paddingLeft: "40px"}}>[4.2] Flip all dip switches down.</p>
                    <p style={{paddingLeft: "40px"}}>[4.3] Flip the following dip switches up.</p>
                    <li style={{paddingLeft: "60px"}}>If it is a reader only, flip dip switches 1, 4, 8 on.</li>
                    <li style={{paddingLeft: "60px"}}>If it is a reader and keypad, flip dip switches 1, 4, 7 on.</li>
                    <p style={{paddingLeft: "40px"}}>[4.4] Apply power. (There should be a green status LED)</p>
                    <p style={{paddingLeft: "40px"}}>[4.5] Remove power.</p>
                    <p style={{paddingLeft: "40px"}}>[4.6] Flip all dip switches down.</p>
                    <p><strong>[5] Configure the FDW1000/R.</strong></p>
                    <img src="photos/FDW/Configure.png"></img>
                    <p><strong>[6] Configure the EXP101/R expansion modules as needed.</strong></p>
                    <img src="photos/FDW/Configure2.png"></img>
                    <p><strong>[7] Ensure the correct wire configuration.</strong></p>
                    <img src="photos/FDW/FDW.png"></img>
                    <img></img>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('wiegand')}> What is Wiegand? </button>
                {visibleAnswer === 'wiegand' && (
                  <div className="faq-answer">
                    <p><strong>Wiegand</strong> is a communication protocol commonly used in access control systems, where data from a credential (like a card or keypad) is transmitted as binary pulses over two wires (Data 0 and Data 1) to a controller for authentication and authorization.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('osdp')}> What is OSDP? </button>
                {visibleAnswer === 'osdp' && (
                  <div className="faq-answer">
                    <p><strong>OSDP (Open Supervised Device Protocol)</strong> is a modern, secure communication protocol for access control systems that enables bidirectional data exchange, device supervision, and advanced encryption over a 2-wire RS-485 serial connection.</p>
                  </div>
                )}
              </div>
              <Fiber />
            </div>
          </>
        )} 
      </main>
      <Button />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default Wiegand;
