import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../styles/Global.css';
import '../styles/Pages.css';

const CardCage = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    slots: [],
    voltage: [],
    psu: [],
    power: []
  });

  const products = [
    { model: "C1US", slots: 14, power: "70W", voltage: "90-264 VAC", psu: "1 PSU", outputVoltage: "12 VDC" },
    { model: "C2US", slots: 12, power: "70W", voltage: "90-264 VAC", psu: "2 Redundant PSU", outputVoltage: "12 VDC" },
    { model: "C3US", slots: 3, power: "70W", voltage: "12 VDC", psu: "2 Redundant PSU", outputVoltage: "12 VDC" },
  ];

  const [filters, setFilters] = useState({
    slots: null,
    voltage: null,
    psu: null,
    power: null,
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
    setFilters({ slots: null, voltage: null, psu: null, power: null });
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
    setFilters({ slots: null, voltage: null, psu: null, power: null });
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const slots = [...new Set(filteredProducts.map((product) => product.slots))];
    const voltage = [...new Set(filteredProducts.map((product) => product.voltage))];
    const psu = [...new Set(filteredProducts.map((product) => product.psu))];
    const power = [...new Set(filteredProducts.map((product) => product.power))];
    setAvailableOptions({ slots, voltage, psu, power });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Enclosures</h2>
        <button className="selector-tool" onClick={toggleTable}>
          Card Cage Selector Tool
        </button>
        {showTable && (
          <>
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
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
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Input Voltage
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
                  Output Voltage
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
                    value="12 VDC"
                    checked={filters.outputVoltage === "12 VDC"}
                    onChange={() => handleFilterChange("outputVoltage", "12 VDC")}
                  />
                  12 VDC
                </label>
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
                    <th>Input Voltage</th>
                    <th>Output Voltage</th>
                    <th>Output Power</th>
                    <th>PSU</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.model}</td>
                      <td>{product.slots}</td>
                      <td>{product.voltage}</td>
                      <td>{product.outputVoltage}</td>
                      <td>{product.power}</td>
                      <td>{product.psu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h1 className="faq-title">Relevant Information</h1>

        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('enclosures')}>
              Enclosures
            </button>
            {visibleAnswer === 'enclosures' && (
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

export default CardCage;
