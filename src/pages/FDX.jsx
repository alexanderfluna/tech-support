import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/Global.css';
import '../styles/Pages.css';

const FDX = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    numOfFibers: [],
    fiber: [],
    optics: [],
    package: [],
  });

  const products = [
    { model: "FDX60M2", numOfFibers: 2, fiber: "mm", optics: "ST", package: "ComFit" },
    { model: "FDX60M2M", numOfFibers: 2, fiber: "mm", optics: "ST", package: "Compact" },
    { model: "FDX60M2/SC", numOfFibers: 2, fiber: "mm", optics: "SC", package: "ComFit" },
    { model: "FDX60M2M/SC", numOfFibers: 2, fiber: "mm", optics: "SC", package: "Compact" },
    { model: "FDX60S2", numOfFibers: 2, fiber: "sm", optics: "ST", package: "ComFit" },
    { model: "FDX60S2M", numOfFibers: 2, fiber: "sm", optics: "ST", package: "Compact" },
    { model: "FDX60S2/SC", numOfFibers: 2, fiber: "sm", optics: "SC", package: "ComFit" },
    { model: "FDX60S2M/SC", numOfFibers: 2, fiber: "sm", optics: "SC", package: "Compact" },
    { model: "FDX60M1A", numOfFibers: 1, fiber: "mm", optics: "ST", package: "ComFit" },
    { model: "FDX60M1AM", numOfFibers: 1, fiber: "mm", optics: "ST", package: "Compact" },
    { model: "FDX60M1A/SC", numOfFibers: 1, fiber: "mm", optics: "SC", package: "ComFit" },
    { model: "FDX60M1AM/SC", numOfFibers: 1, fiber: "mm", optics: "SC", package: "Compact" },
    { model: "FDX60SM1A", numOfFibers: 1, fiber: "sm", optics: "ST", package: "ComFit" },
    { model: "FDX60S1AM", numOfFibers: 1, fiber: "sm", optics: "ST", package: "Compact" },
    { model: "FDX60S1A/SC", numOfFibers: 1, fiber: "sm", optics: "SC", package: "ComFit" },
    { model: "FDX60S1AM/SC", numOfFibers: 1, fiber: "sm", optics: "SC", package: "Compact" },
    { model: "FDX60M1B", numOfFibers: 1, fiber: "mm", optics: "ST", package: "ComFit" },
    { model: "FDX60M1BM", numOfFibers: 1, fiber: "mm", optics: "ST", package: "Compact" },
    { model: "FDX60M1B/SC", numOfFibers: 1, fiber: "mm", optics: "SC", package: "ComFit" },
    { model: "FDX60M1BM/SC", numOfFibers: 1, fiber: "mm", optics: "SC", package: "Compact" },
    { model: "FDX60SM1B", numOfFibers: 1, fiber: "sm", optics: "ST", package: "ComFit" },
    { model: "FDX60S1BM", numOfFibers: 1, fiber: "sm", optics: "ST", package: "Compact" },
    { model: "FDX60S1B/SC", numOfFibers: 1, fiber: "sm", optics: "SC", package: "ComFit" },
    { model: "FDX60S1BM/SC", numOfFibers: 1, fiber: "sm", optics: "SC", package: "Compact" },
  ];

  const [filters, setFilters] = useState({
    numOfFibers: null,
    fiber: null,
    optics: null,
    package: null,
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
    setFilters({ numOfFibers: null, fiber: null, optics: null, package: null }); 
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
    setFilters({ numOfFibers: null, fiber: null, optics: null, package: null});
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const numOfFibers = [...new Set(filteredProducts.map((product) => product.numOfFibers))];
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const optics = [...new Set(filteredProducts.map((product) => product.optics))];
    const packageOptions = [...new Set(filteredProducts.map((product) => product.package))];

    setAvailableOptions({ numOfFibers, fiber, optics, package: packageOptions });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">FDX</h2>
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
                  Number of Fibers
                  {filters.numOfFibers && (
                    <button className="clear-filter" onClick={() => clearFilter("numOfFibers")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.numOfFibers.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="numOfFibers"
                      value={option}
                      checked={filters.numOfFibers === option}
                      onChange={() => handleFilterChange("numOfFibers", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

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

              <div>
                <h3>
                  Package
                  {filters.package && (
                    <button className="clear-filter" onClick={() => clearFilter("package")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.package.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="package"
                      value={option}
                      checked={filters.package === option}
                      onChange={() => handleFilterChange("package", option)}
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
                    <th>NumOfFibers</th>
                    <th>Fiber</th>
                    <th>Optics</th>
                    <th>Package</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.model}</td>
                      <td>{product.numOfFibers}</td>
                      <td>{product.fiber}</td>
                      <td>{product.optics}</td>
                      <td>{product.package}</td>
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

export default FDX;
