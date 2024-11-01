import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/style.css';
import '../styles/Pages.css';

const PowerSupply = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    voltage: [],
    watts: [],
  });

  // Product data array for Power Supplies
  const products = [
    { model: "PS-AMR1-12", voltage: "12VDC", watts: "10W" },
    { model: "PS-AMR5-12", voltage: "12VDC", watts: "72W" },
    { model: "PS-MORD1260", voltage: "12VDC", watts: "60W" },
    { model: "PS-AMR1-24", voltage: "24VDC", watts: "10W" },
    { model: "PS-MORD2460", voltage: "24VDC", watts: "60W" },
    { model: "PS-MORD24100", voltage: "24VDC", watts: "100W" },
    { model: "PS-AMR5-24", voltage: "24VDC", watts: "100W" },
    { model: "PS-DRA30-48A", voltage: "48VDC", watts: "30W" },
    { model: "PS-MORD4860", voltage: "48VDC", watts: "60W" },
    { model: "PS-DRA120-48A", voltage: "48VDC", watts: "120W" },
    { model: "PS-MORD48120", voltage: "48VDC", watts: "120W" },
    { model: "PS-MORD48240", voltage: "48VDC", watts: "240W" },
    { model: "PS48VDC-5A", voltage: "48VDC", watts: "240W" },
    { model: "PS48VDC-10A", voltage: "48VDC", watts: "480W" },
  ];

  // State to track selected filters
  const [filters, setFilters] = useState({
    voltage: null,
    watts: null,
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
    setFilters({ voltage: null, watts: null }); // Reset filters
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
    const voltage = [...new Set(filteredProducts.map((product) => product.voltage))].sort((a, b) => parseInt(a) - parseInt(b));
    const watts = [...new Set(filteredProducts.map((product) => product.watts))].sort((a, b) => parseInt(a) - parseInt(b));
    setAvailableOptions({ voltage, watts });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Power Supply</h2>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <div className="filter-options">
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
                  Watts
                  {filters.watts && (
                    <button className="clear-filter" onClick={() => clearFilter("watts")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.watts.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="watts"
                      value={option}
                      checked={filters.watts === option}
                      onChange={() => handleFilterChange("watts", option)}
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
                    <th>Voltage</th>
                    <th>Watts</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.model}</td>
                      <td>{product.voltage}</td>
                      <td>{product.watts}</td>
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

export default PowerSupply;
