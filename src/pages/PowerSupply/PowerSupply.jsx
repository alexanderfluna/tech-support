import React, { useState, useEffect } from 'react';
import '../../styles/Pages.css'

const PowerSupply = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    voltage: [],
    watts: [],
  });

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

  const [filters, setFilters] = useState({
    voltage: null,
    watts: null,
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
    setFilters({ voltage: null, watts: null });
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
    setFilters({ voltage: null, watts: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const voltage = [...new Set(filteredProducts.map((product) => product.voltage))].sort((a, b) => parseInt(a) - parseInt(b));
    const watts = [...new Set(filteredProducts.map((product) => product.watts))].sort((a, b) => parseInt(a) - parseInt(b));
    setAvailableOptions({ voltage, watts });
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
          }}>Power Supply</h1>
        <button className="purple-button" onClick={toggleTable}>
          <h1>Selector Tool</h1>
          <p>Our Power Supply Selector Tool filters Comnet's power supplies by voltage and watts.</p>
        </button>
        {showTable && (
          <>
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
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
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
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
      </main>
    </div>
  );
};

export default PowerSupply;
