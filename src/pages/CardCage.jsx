import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/style.css';
import '../styles/Pages.css';

const CardCage = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    slots: [],
    voltage: [],
    psu: [],
    power: [] // Added power to available options
  });

  // Product data array with updated voltage and added Output Voltage
  const products = [
    { model: "C1US", slots: 14, power: "70W", voltage: "90-264 VAC", psu: "1 PSU", outputVoltage: "12 VDC" },
    { model: "C2US", slots: 12, power: "70W", voltage: "90-264 VAC", psu: "2 Redundant PSU", outputVoltage: "12 VDC" },
    { model: "C3US", slots: 3, power: "70W", voltage: "12 VDC", psu: "2 Redundant PSU", outputVoltage: "12 VDC" }, // Added outputVoltage
  ];

  // State to track selected filters
  const [filters, setFilters] = useState({
    slots: null,
    voltage: null,
    psu: null,
    power: null, // Added power to filters
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
    setFilters({ slots: null, voltage: null, psu: null, power: null }); // Reset power filter
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
    const slots = [...new Set(filteredProducts.map((product) => product.slots))];
    const voltage = [...new Set(filteredProducts.map((product) => product.voltage))];
    const psu = [...new Set(filteredProducts.map((product) => product.psu))];
    const power = [...new Set(filteredProducts.map((product) => product.power))]; // Update power options
    setAvailableOptions({ slots, voltage, psu, power }); // Include power in available options
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
      <h2 className="faq-title">Card Cage</h2>
      <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <div className="filter-options">
              <div>
                <h3>
                  Slots
                  {filters.slots && (
                    <button className="clear-filter" onClick={() => clearFilter("slots")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.slots.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="slots"
                      value={option}
                      checked={filters.slots === option}
                      onChange={() => handleFilterChange("slots", option)}
                    />
                    {option} {/* Display just the number */}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Input Voltage {/* Changed from Voltage to Input Voltage */}
                  {filters.voltage && (
                    <button className="clear-filter" onClick={() => clearFilter("voltage")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.voltage.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="voltage"
                      value={option}
                      checked={filters.voltage === option}
                      onChange={() => handleFilterChange("voltage", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Output Voltage {/* New filter for Output Voltage */}
                  {filters.outputVoltage && (
                    <button className="clear-filter" onClick={() => clearFilter("outputVoltage")}>
                      X
                    </button>
                  )}
                </h3>
                <label>
                  <input
                    type="radio"
                    name="outputVoltage"
                    value="12 VDC" // Fixed value for Output Voltage
                    checked={filters.outputVoltage === "12 VDC"}
                    onChange={() => handleFilterChange("outputVoltage", "12 VDC")}
                  />
                  12 VDC
                </label>
              </div>

              <div>
                <h3>
                  Output Power {/* Changed from Power to Output Power */}
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
                  PSU
                  {filters.psu && (
                    <button className="clear-filter" onClick={() => clearFilter("psu")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.psu.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="psu"
                      value={option}
                      checked={filters.psu === option}
                      onChange={() => handleFilterChange("psu", option)}
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
                    <th>Slots</th>
                    <th>Input Voltage</th> {/* Changed from Voltage to Input Voltage */}
                    <th>Output Voltage</th> {/* New column for Output Voltage */}
                    <th>Output Power</th> {/* Changed from Power to Output Power */}
                    <th>PSU</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.model}</td>
                      <td>{product.slots}</td> {/* Display just the number */}
                      <td>{product.voltage}</td> {/* Display updated voltage */}
                      <td>{product.outputVoltage}</td> {/* Display Output Voltage */}
                      <td>{product.power}</td> {/* Display Output Power */}
                      <td>{product.psu}</td>
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

export default CardCage;
