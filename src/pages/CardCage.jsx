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
    psu: []
  });

  // Product data array
  const products = [
    { model: "C1US", slots: "14 slots", power: "70W", voltage: "VAC", psu: "1 PSU" },
    { model: "C2US", slots: "12 slots", power: "70W", voltage: "VAC", psu: "2 PSU" },
    { model: "C3US", slots: "3 slots", power: "70W", voltage: "VDC", psu: "2 PSU" },
  ];

  // State to track selected filters
  const [filters, setFilters] = useState({
    slots: null,
    voltage: null,
    psu: null,
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
    setFilters({ slots: null, voltage: null, psu: null });
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
    setAvailableOptions({ slots, voltage, psu });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
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
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Voltage
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
                    <th>Power</th>
                    <th>Voltage</th>
                    <th>PSU</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.model}</td>
                      <td>{product.slots}</td>
                      <td>{product.power}</td>
                      <td>{product.voltage}</td>
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
            <button className="faq-question" onClick={() => toggleAnswer('cl-to-cl')}>
              CL to CL
            </button>
            {visibleAnswer === 'cl-to-cl' && (
              <div className="faq-answer">
                <p>...</p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('cll-to-clr')}>
              CLL to CLR
            </button>
            {visibleAnswer === 'cll-to-clr' && (
              <div className="faq-answer">
                <p>...</p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-lights')}>
              No Lights
            </button>
            {visibleAnswer === 'no-lights' && (
              <div className="faq-answer">
                <p>You need to have the entire setup connected for you to see LEDs on.</p>
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
