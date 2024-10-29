import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/style.css';
import '../styles/Pages.css';

const Wireless = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    quantity: [],
    size: [],
    beamwidth: [],
    continent: []
  });

  // Product data array based on the provided details
  const products = [
    { model: "NW1", quantity: "Single", size: "Full", beamwidth: "17°", continent: "North America" },
    { model: "NW1/M", quantity: "Single", size: "Mini", beamwidth: "30°", continent: "North America" },
    { model: "NW1/M/IA870", quantity: "Single", size: "Mini", beamwidth: "30°", continent: "North America" },
    { model: "NWK1", quantity: "Kit", size: "Full", beamwidth: "17°", continent: "North America" },
    { model: "NWK1/M", quantity: "Kit", size: "Mini", beamwidth: "30°", continent: "North America" },
    { model: "NW2", quantity: "Single", size: "Full", beamwidth: "17°", continent: "Europe" },
    { model: "NW2/M", quantity: "Single", size: "Mini", beamwidth: "30°", continent: "Europe" },
    { model: "NWK2", quantity: "Kit", size: "Full", beamwidth: "17°", continent: "Europe" },
    { model: "NWK2/M", quantity: "Kit", size: "Mini", beamwidth: "30°", continent: "Europe" },
    { model: "NW9", quantity: "Single", size: "Full", beamwidth: "17°", continent: "North America" },
    { model: "NW9E", quantity: "Single", size: "Full", beamwidth: "17°", continent: "Europe" },
    { model: "NWK9", quantity: "Kit", size: "Full", beamwidth: "17°", continent: "North America" },
    { model: "NWK11/M", quantity: "Kit", size: "Mini", beamwidth: "30°", continent: "North America" },
  ];

  // State to track selected filters
  const [filters, setFilters] = useState({
    quantity: null,
    size: null,
    beamwidth: null,
    continent: null
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
    setFilters({ quantity: null, size: null, beamwidth: null, continent: null }); // Reset filters
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
    const quantity = [...new Set(filteredProducts.map((product) => product.quantity))];
    const size = [...new Set(filteredProducts.map((product) => product.size))];
    const beamwidth = [...new Set(filteredProducts.map((product) => product.beamwidth))];
    const continent = [...new Set(filteredProducts.map((product) => product.continent))];
    setAvailableOptions({ quantity, size, beamwidth, continent });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Wireless</h2>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <div className="filter-options">
              <div>
                <h3>
                  Quantity
                  {filters.quantity && (
                    <button className="clear-filter" onClick={() => clearFilter("quantity")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.quantity.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="quantity"
                      value={option}
                      checked={filters.quantity === option}
                      onChange={() => handleFilterChange("quantity", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Size
                  {filters.size && (
                    <button className="clear-filter" onClick={() => clearFilter("size")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.size.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="size"
                      value={option}
                      checked={filters.size === option}
                      onChange={() => handleFilterChange("size", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Beamwidth
                  {filters.beamwidth && (
                    <button className="clear-filter" onClick={() => clearFilter("beamwidth")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.beamwidth.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="beamwidth"
                      value={option}
                      checked={filters.beamwidth === option}
                      onChange={() => handleFilterChange("beamwidth", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Continent
                  {filters.continent && (
                    <button className="clear-filter" onClick={() => clearFilter("continent")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.continent.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="continent"
                      value={option}
                      checked={filters.continent === option}
                      onChange={() => handleFilterChange("continent", option)}
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
                    <th>Quantity</th>
                    <th>Size</th>
                    <th>Beamwidth</th>
                    <th>Continent</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.model}</td>
                      <td>{product.quantity}</td>
                      <td>{product.size}</td>
                      <td>{product.beamwidth}</td>
                      <td>{product.continent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h1 className="faq-title">FAQ</h1>
        <div className="faq-list">
          {/* You can replace this section with your specific FAQ questions */}
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-power')}>
              No Power
            </button>
            {visibleAnswer === 'no-power' && (
              <div className="faq-answer">
                <p>...</p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-communication')}>
              No Communication
            </button>
            {visibleAnswer === 'no-communication' && (
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

export default Wireless;
