import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import NoPowerLight from '../relevant-information/NoPowerLight';
import Fiber from '../relevant-information/Fiber';
import '../styles/Global.css';
import '../styles/Pages.css';

const Wiegand = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
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

        <p className="faq-title">How To Troubleshoot Common Issues</p>
        <div className="faq-list">
          {<NoPowerLight />}
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> There is no link light. </button>
            {visibleAnswer === 'no-link-light' && (
              <div className="faq-answer">
                <p>Swap the transmit and receive fiber strands.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> The central and remote are not communicating. </button>
            {visibleAnswer === 'no-communication' && (
              <div className="faq-answer">
                <p>Central with no expansions:</p>
                <li>Remove power and fiber strands.</li>
                <li>Flip all dip switches down.</li>
                <li>Flip dip switches 1, 4, 8 on.</li>
                <li>Apply power. There should be a green status LED. Remove power.</li>
                <li>Flip all dip switches down.</li>
                <li>Flip dip switch 3 on.</li>
                <li>Apply power.</li>
                <p>Remote with no expansions:</p>
                <li>Remove power and fiber strands.</li>
                <li>Flip all dip switches down.</li>
                <li>Flip dip switches 1, 4, 8 on.</li>
                <li>Apply power. There should be a green status LED. Remove power.</li>
                <li>Flip all dip switches off.</li>
                <li>Apply power.</li>
                <p>Ensure the correct wire configuration:</p>
                <img src="photos/FDW/FDW.jpg"></img>
              </div>
            )}
          </div>

          <p className="faq-title">Frequently Asked Questions</p>
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('wiegand')}> What is Wiegand? </button>
              {visibleAnswer === 'wiegand' && (
                <div className="faq-answer">
                  <li>Wiegand is a communication protocol commonly used in access control systems, where data from a credential (like a card or keypad) is transmitted as binary pulses over two wires (Data 0 and Data 1) to a controller for authentication and authorization.</li>
                </div>
              )}
            </div>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('osdp')}> What is OSDP? </button>
              {visibleAnswer === 'osdp' && (
                <div className="faq-answer">
                  <li>OSDP (Open Supervised Device Protocol) is a modern, secure communication protocol for access control systems that enables bidirectional data exchange, device supervision, and advanced encryption over a 2-wire RS-485 serial connection.</li>
                </div>
              )}
            </div>
            <Fiber />
          </div>
        </div>
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Wiegand;
