import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/style.css';
import '../styles/Pages.css';

const SFP = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    dataRate: ['FE', 'GE', '10G'], // Updated order
    txMedium: ['Cu', 'mm', 'sm'], // Updated order
    fibers: ['1', '2', 'n/a'], // Updated order
    optics: ['RJ-45', 'LC', 'SC'], // Updated order
  });

  const products = [
    { itemNumber: "SFP-1", dataRate: "GE", txMedium: "Cu", fibers: "n/a", optics: "RJ-45", pathLength: "100 m", txLambda: "n/a", rxLambda: "n/a" },
    { itemNumber: "SFP-10A", dataRate: "FE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "20 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-10B", dataRate: "FE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "20 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-10G-BX10-D", dataRate: "10G", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "10 km", txLambda: "1330", rxLambda: "1270" },
    { itemNumber: "SFP-10G-BX10-U", dataRate: "10G", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "10 km", txLambda: "1270", rxLambda: "1330" },
    { itemNumber: "SFP-10G-BX40-D", dataRate: "10G", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "40 km", txLambda: "1330", rxLambda: "1270" },
    { itemNumber: "SFP-10G-BX40-U", dataRate: "10G", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "40 km", txLambda: "1270", rxLambda: "1330" },
    { itemNumber: "SFP-10G-ER", dataRate: "10G", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "40 km", txLambda: "1550", rxLambda: "1550" },
    { itemNumber: "SFP-10G-LR", dataRate: "10G", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "10 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-10G-SR", dataRate: "10G", txMedium: "mm", fibers: 2, optics: "LC", pathLength: "26/300 m", txLambda: "850", rxLambda: "850" },
    { itemNumber: "SFP-10G-ZR", dataRate: "10G", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "80 km", txLambda: "1550", rxLambda: "1550" },
    { itemNumber: "SFP-12A", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "20 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-12B", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "20 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-14A", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "SC", pathLength: "20 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-14B", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "SC", pathLength: "20 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-16", dataRate: "GE", txMedium: "mm", fibers: 2, optics: "LC", pathLength: "275/550 m", txLambda: "850", rxLambda: "850" },
    { itemNumber: "SFP-18A", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "60 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-18B", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "60 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-1A", dataRate: "FE", txMedium: "Cu", fibers: "n/a", optics: "RJ-45", pathLength: "100 m", txLambda: "n/a", rxLambda: "n/a" },
    { itemNumber: "SFP-2", dataRate: "FE", txMedium: "mm", fibers: 2, optics: "LC", pathLength: "2 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-20A", dataRate: "FE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "60 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-20B", dataRate: "FE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "60 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-22A", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "SC", pathLength: "60 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-22B", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "SC", pathLength: "60 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-24A", dataRate: "FE", txMedium: "sm", fibers: 1, optics: "SC", pathLength: "60 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-24B", dataRate: "FE", txMedium: "sm", fibers: 1, optics: "SC", pathLength: "60 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-26A", dataRate: "FE", txMedium: "mm", fibers: 1, optics: "SC", pathLength: "2 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-26B", dataRate: "FE", txMedium: "mm", fibers: 1, optics: "SC", pathLength: "2 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-3", dataRate: "FE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "20 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-36A", dataRate: "FE", txMedium: "sm", fibers: 1, optics: "SC", pathLength: "20 km", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-36B", dataRate: "FE", txMedium: "sm", fibers: 1, optics: "SC", pathLength: "20 km", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-4", dataRate: "FE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "40 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-46", dataRate: "GE", txMedium: "mm", fibers: 2, optics: "LC", pathLength: "2 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-48A", dataRate: "GE", txMedium: "mm", fibers: 1, optics: "LC", pathLength: "275/550 m", txLambda: "1310", rxLambda: "1550" },
    { itemNumber: "SFP-48B", dataRate: "GE", txMedium: "mm", fibers: 1, optics: "LC", pathLength: "275/550 m", txLambda: "1550", rxLambda: "1310" },
    { itemNumber: "SFP-5", dataRate: "FE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "80 km", txLambda: "1550", rxLambda: "1550" },
    { itemNumber: "SFP-6", dataRate: "GE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "15 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-7", dataRate: "GE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "40 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-8", dataRate: "GE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "70 km", txLambda: "1550", rxLambda: "1550" },
    { itemNumber: "SFP-9", dataRate: "GE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "120 km", txLambda: "1550", rxLambda: "1550" },
    { itemNumber: "SFP-BX-D", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "10 km", txLambda: "1490", rxLambda: "1310" },
    { itemNumber: "SFP-BX-U", dataRate: "GE", txMedium: "sm", fibers: 1, optics: "LC", pathLength: "10 km", txLambda: "1310", rxLambda: "1490" },
    { itemNumber: "SFP-EX", dataRate: "GE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "40 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-LH", dataRate: "GE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "20 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-LX", dataRate: "GE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "10 km", txLambda: "1310", rxLambda: "1310" },
    { itemNumber: "SFP-SX", dataRate: "GE", txMedium: "mm", fibers: 2, optics: "LC", pathLength: "275/550 m", txLambda: "850", rxLambda: "850" },
    { itemNumber: "SFP-ZX", dataRate: "GE", txMedium: "sm", fibers: 2, optics: "LC", pathLength: "70 km", txLambda: "1550", rxLambda: "1550" }
  ];

  const [filters, setFilters] = useState({
    dataRate: null,
    txMedium: null,
    fibers: null,
    optics: null,
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
    setFilters({ dataRate: null, txMedium: null, fibers: null, optics: null });
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

  const updateAvailableOptions = (filteredProducts) => {
    const dataRate = [...new Set(filteredProducts.map((product) => product.dataRate))];
    const txMedium = [...new Set(filteredProducts.map((product) => product.txMedium))];
    const fibers = [...new Set(filteredProducts.map((product) => product.fibers))];
    const optics = [...new Set(filteredProducts.map((product) => product.optics))];
    setAvailableOptions({ dataRate, txMedium, fibers, optics });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">SFP</h2>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <div className="filter-options">
              <div>
                <h3>
                  TX Medium
                  {filters.txMedium && (
                    <button className="clear-filter" onClick={() => clearFilter("txMedium")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.txMedium.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="txMedium"
                      value={option}
                      checked={filters.txMedium === option}
                      onChange={() => handleFilterChange("txMedium", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

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
                  # of Fibers
                  {filters.fibers && (
                    <button className="clear-filter" onClick={() => clearFilter("fibers")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.fibers.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="fibers"
                      value={option}
                      checked={filters.fibers === option}
                      onChange={() => handleFilterChange("fibers", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Optics
                  {filters.optics && (
                    <button className="clear-filter" onClick={() => clearFilter("optics")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.optics.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="optics"
                      value={option}
                      checked={filters.optics === option}
                      onChange={() => handleFilterChange("optics", option)}
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
                    <th>TX Medium</th>
                    <th>Data Rate</th>
                    <th># of Fibers</th>
                    <th>Optics</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.itemNumber}</td> {/* Changed from 'product.model' to 'product.itemNumber' */}
                      <td>{product.txMedium}</td>
                      <td>{product.dataRate}</td>
                      <td>{product.fibers}</td>
                      <td>{product.optics}</td>
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
      <Footer />
    </div>
  );

};

export default SFP;
