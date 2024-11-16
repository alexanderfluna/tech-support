import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../styles/Global.css';
import '../styles/Pages.css';

const FDC = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    fiber: [],
    latchingOrNonLatching: [],
    inputContactSupervision: [],
    summaryFaultRelay: [],
    numberOfChannels: [],
    bidirectional: [],
  });

  const products = [
    { model: "FDC80TM1 + FDC80NLRM1", fiber: "multimode", latchingOrNonLatching: "non-latching", inputContactSupervision: "yes", summaryFaultRelay: "yes", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC80TM1 + FDC80RM1", fiber: "multimode", latchingOrNonLatching: "latching", inputContactSupervision: "yes", summaryFaultRelay: "yes", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC80TS1 + FDC80NLRS1", fiber: "singlemode", latchingOrNonLatching: "non-latching", inputContactSupervision: "yes", summaryFaultRelay: "yes", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC80TS1 + FDC80RS1", fiber: "singlemode", latchingOrNonLatching: "latching", inputContactSupervision: "yes", summaryFaultRelay: "yes", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC8TM1 + FDC8NLRM1", fiber: "multimode", latchingOrNonLatching: "non-latching", inputContactSupervision: "no", summaryFaultRelay: "no", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC8TM1 + FDC8RM1", fiber: "multimode", latchingOrNonLatching: "latching", inputContactSupervision: "no", summaryFaultRelay: "no", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC8TS1 + FDC8NLRS1", fiber: "singlemode", latchingOrNonLatching: "non-latching", inputContactSupervision: "no", summaryFaultRelay: "no", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC8TS1 + FDC8RS1", fiber: "singlemode", latchingOrNonLatching: "latching", inputContactSupervision: "no", summaryFaultRelay: "no", numberOfChannels: 8, bidirectional: "no" },
  ];

  const [filters, setFilters] = useState({
    fiber: null,
    latchingOrNonLatching: null,
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
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleTable = () => {
    setShowTable(!showTable);
    setFilteredProducts(products);
    updateAvailableOptions(products);
    setFilters({ fiber: null, latchingOrNonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null }); // Reset all filters
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    // Filter products based on selected filters
    const newFilteredProducts = products.filter((product) =>
      Object.entries(newFilters).every(
        ([key, filterValue]) => !filterValue || product[key] === filterValue
      )
    );
    setFilteredProducts(newFilteredProducts);

    // Update available options based on the new filtered products
    updateAvailableOptions(newFilteredProducts);
  };

  const clearFilter = (filterType) => {
    const newFilters = { ...filters, [filterType]: null };
    setFilters(newFilters);
    handleFilterChange(filterType, null);
  };

  const resetFilters = () => {
    setFilters({ fiber: null, latchingOrNonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const latchingOrNonLatching = [...new Set(filteredProducts.map((product) => product.latchingOrNonLatching))];
    const inputContactSupervision = [...new Set(filteredProducts.map((product) => product.inputContactSupervision))];
    const summaryFaultRelay = [...new Set(filteredProducts.map((product) => product.summaryFaultRelay))];
    const numberOfChannels = [...new Set(filteredProducts.map((product) => product.numberOfChannels))];
    const bidirectional = [...new Set(filteredProducts.map((product) => product.bidirectional))];

    setAvailableOptions({ fiber, latchingOrNonLatching, inputContactSupervision, summaryFaultRelay, numberOfChannels, bidirectional });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">FDC</h2>
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
                  Latching or Non-Latching
                  {filters.latchingOrNonLatching && (
                    <button className="clear-filter" onClick={() => clearFilter("latchingOrNonLatching")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.latchingOrNonLatching.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="latchingOrNonLatching"
                      value={option}
                      checked={filters.latchingOrNonLatching === option}
                      onChange={() => handleFilterChange("latchingOrNonLatching", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Input Contact Supervision
                  {filters.inputContactSupervision && (
                    <button className="clear-filter" onClick={() => clearFilter("inputContactSupervision")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.inputContactSupervision.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="inputContactSupervision"
                      value={option}
                      checked={filters.inputContactSupervision === option}
                      onChange={() => handleFilterChange("inputContactSupervision", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Summary Fault Relay
                  {filters.summaryFaultRelay && (
                    <button className="clear-filter" onClick={() => clearFilter("summaryFaultRelay")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.summaryFaultRelay.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="summaryFaultRelay"
                      value={option}
                      checked={filters.summaryFaultRelay === option}
                      onChange={() => handleFilterChange("summaryFaultRelay", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Number of Channels
                  {filters.numberOfChannels && (
                    <button className="clear-filter" onClick={() => clearFilter("numberOfChannels")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.numberOfChannels.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="numberOfChannels"
                      value={option}
                      checked={filters.numberOfChannels === option}
                      onChange={() => handleFilterChange("numberOfChannels", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Bidirectional
                  {filters.bidirectional && (
                    <button className="clear-filter" onClick={() => clearFilter("bidirectional")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.bidirectional.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="bidirectional"
                      value={option}
                      checked={filters.bidirectional === option}
                      onChange={() => handleFilterChange("bidirectional", option)}
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
                    <th>Latching or Non-Latching</th>
                    <th>Input Contact Supervision</th>
                    <th>Summary Fault Relay</th>
                    <th>Number of Channels</th>
                    <th>Bidirectional</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.model}</td>
                      <td>{product.fiber}</td>
                      <td>{product.latchingOrNonLatching}</td>
                      <td>{product.inputContactSupervision}</td>
                      <td>{product.summaryFaultRelay}</td>
                      <td>{product.numberOfChannels}</td>
                      <td>{product.bidirectional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h1 className="faq-title">FAQ</h1>

        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('to-be-decided')}>
              To be decided 
            </button>
            {visibleAnswer === 'to-be-decided' && (
              <div className="faq-answer">
                <p>...</p> 
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

export default FDC;
