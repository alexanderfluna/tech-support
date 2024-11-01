import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/style.css';
import '../styles/Pages.css';

const PoEInjector = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    dataRate: [],
    ieee: [],
    power: [],
    outputVoltage: [],
    inputVoltage: [],
  });

  // Product data array for PoE Injectors
  const products = [
    { model: "CNGE1IPS", dataRate: "GE", ieee: "802.3at", power: "35W", outputVoltage: "56VDC", inputVoltage: "90-240VAC" },
    { model: "CNGE1IPS75AC", dataRate: "GE", ieee: "802.3at", power: "75W", outputVoltage: "56VDC", inputVoltage: "90-240VAC" },
    { model: "CNGE1IPS95AC", dataRate: "GE", ieee: "802.3at", power: "95W", outputVoltage: "56VDC", inputVoltage: "90-240VAC" },
    { model: "CN1IPSBT-DC", dataRate: "GE", ieee: "802.3bt", power: "90W", outputVoltage: "52-56VDC", inputVoltage: "52-56VDC" },
    { model: "NWPM1248GE", dataRate: "GE", ieee: "802.3af", power: "15W", outputVoltage: "48VDC", inputVoltage: "9-36VDC" },
    { model: "NWPM2448GE", dataRate: "GE", ieee: "802.3at", power: "35W", outputVoltage: "56VDC", inputVoltage: "18-36VDC" },
    { model: "NWPM4848GE", dataRate: "GE", ieee: "802.3at", power: "35W", outputVoltage: "56VDC", inputVoltage: "36-72VDC" },
    { model: "PIM1", dataRate: "FE", ieee: "Not required", power: "30W", outputVoltage: "12-48VDC or 24VAC", inputVoltage: "12-48VDC or 24 VAC" },
    { model: "CWPOEIPS-15", dataRate: "FE", ieee: "802.3af", power: "15W", outputVoltage: "48VDC", inputVoltage: "90-240VAC" },
  ];

  // State to track selected filters
  const [filters, setFilters] = useState({
    dataRate: null,
    ieee: null,
    power: null,
    outputVoltage: null,
    inputVoltage: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredProducts(products); // Show all products initially
    updateAvailableOptions(products);
  }, []);

  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleTable = () => {
    setShowTable(!showTable);
    setFilteredProducts(products);
    updateAvailableOptions(products);
    setFilters({ dataRate: null, ieee: null, power: null, outputVoltage: null, inputVoltage: null }); // Reset filters
  };

  // Handle filter change and update displayed products
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

  // Function to clear a specific filter
  const clearFilter = (filterType) => {
    const newFilters = { ...filters, [filterType]: null };
    setFilters(newFilters);
    handleFilterChange(filterType, null);
  };

  // Update available options based on current filtered products
  const updateAvailableOptions = (filteredProducts) => {
    const dataRate = [...new Set(filteredProducts.map((product) => product.dataRate))];
    const ieee = [...new Set(filteredProducts.map((product) => product.ieee))];
    const power = [...new Set(filteredProducts.map((product) => product.power))];
    const outputVoltage = [...new Set(filteredProducts.map((product) => product.outputVoltage))];
    const inputVoltage = [...new Set(filteredProducts.map((product) => product.inputVoltage))];
    setAvailableOptions({ dataRate, ieee, power, outputVoltage, inputVoltage });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">PoE Injector</h2>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <div className="filter-options">
              <div>
                <h3>
                  Data Rate
                  {filters.dataRate && (
                    <button className="clear-filter" onClick={() => clearFilter("dataRate")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.dataRate.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="dataRate"
                      value={option}
                      checked={filters.dataRate === option}
                      onChange={() => handleFilterChange("dataRate", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  IEEE
                  {filters.ieee && (
                    <button className="clear-filter" onClick={() => clearFilter("ieee")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.ieee.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="ieee"
                      value={option}
                      checked={filters.ieee === option}
                      onChange={() => handleFilterChange("ieee", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Output Power
                  {filters.power && (
                    <button className="clear-filter" onClick={() => clearFilter("power")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.power.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="power"
                      value={option}
                      checked={filters.power === option}
                      onChange={() => handleFilterChange("power", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Output Voltage
                  {filters.outputVoltage && (
                    <button className="clear-filter" onClick={() => clearFilter("outputVoltage")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.outputVoltage.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="outputVoltage"
                      value={option}
                      checked={filters.outputVoltage === option}
                      onChange={() => handleFilterChange("outputVoltage", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Input Voltage
                  {filters.inputVoltage && (
                    <button className="clear-filter" onClick={() => clearFilter("inputVoltage")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.inputVoltage.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="inputVoltage"
                      value={option}
                      checked={filters.inputVoltage === option}
                      onChange={() => handleFilterChange("inputVoltage", option)}
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
                    <th>Data Rate</th>
                    <th>IEEE</th>
                    <th>Output Power</th>
                    <th>Output Voltage</th>
                    <th>Input Voltage</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.model}</td>
                      <td>{product.dataRate}</td>
                      <td>{product.ieee}</td>
                      <td>{product.power}</td>
                      <td>{product.outputVoltage}</td>
                      <td>{product.inputVoltage}</td>
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
              To be decided {/* Changed to a single button */}
            </button>
            {visibleAnswer === 'to-be-decided' && (
              <div className="faq-answer">
                <p>...</p> {/* Placeholder for the answer */}
              </div>
            )}
          </div>
        </div>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default PoEInjector;
