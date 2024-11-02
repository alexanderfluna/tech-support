import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/Global.css';
import '../styles/Pages.css';

const CopperLine = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    position: [],
    channels: [],
    formFactor: [],
    cable: [],
    poEPassthrough: [],
    poEInjection: []
  });

  const products = [
    { partNumber: "CLFE1EOC", position: "Local/Remote", channels: 1, formFactor: "Small Size", cable: "Coax", poEPassthrough: "Yes", poEInjection: "No" },
    { partNumber: "CLFE1EOU", position: "Local/Remote", channels: 1, formFactor: "Small Size", cable: "UTP", poEPassthrough: "Yes", poEInjection: "No" },
    { partNumber: "CLFE4EOC", position: "Local/Remote", channels: 4, formFactor: "ComFit (1 Slot)", cable: "Coax", poEPassthrough: "Yes", poEInjection: "No" },
    { partNumber: "CLFE4EOU", position: "Local/Remote", channels: 4, formFactor: "ComFit (1 Slot)", cable: "UTP", poEPassthrough: "Yes", poEInjection: "No" },
    { partNumber: "CLFE8EOC", position: "Local", channels: 8, formFactor: "1 RU 19” Rack Mount", cable: "Coax", poEPassthrough: "Yes", poEInjection: "No" },
    { partNumber: "CLFE8EOU", position: "Local", channels: 8, formFactor: "1 RU 19” Rack Mount", cable: "UTP", poEPassthrough: "Yes", poEInjection: "No" },
    { partNumber: "CLFE16EOC", position: "Local", channels: 16, formFactor: "1 RU 19” Rack Mount", cable: "Coax", poEPassthrough: "Yes", poEInjection: "No" },
    { partNumber: "CLFE16EOU", position: "Local", channels: 16, formFactor: "1 RU 19” Rack Mount", cable: "UTP", poEPassthrough: "Yes", poEInjection: "No" },
    { partNumber: "CLLFE1POEC", position: "Local", channels: 1, formFactor: "Small Size", cable: "Coax", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLRFE1POEC", position: "Remote", channels: 1, formFactor: "Small Size", cable: "Coax", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLLFE1POEU", position: "Local", channels: 1, formFactor: "Small Size", cable: "UTP", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLRFE1POEU", position: "Remote", channels: 1, formFactor: "Small Size", cable: "UTP", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLLFE4POEC", position: "Local", channels: 4, formFactor: "ComFit (1 Slot)", cable: "Coax", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLRFE4POEC", position: "Remote", channels: 4, formFactor: "ComFit (1 Slot)", cable: "Coax", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLLFE4POEU", position: "Local", channels: 4, formFactor: "ComFit (1 Slot)", cable: "UTP", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLRFE4POEU", position: "Remote", channels: 4, formFactor: "ComFit (1 Slot)", cable: "UTP", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLLFE8POEC", position: "Local", channels: 8, formFactor: "1 RU 19” Rack Mount", cable: "Coax", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLLFE8POEU", position: "Local", channels: 8, formFactor: "1 RU 19” Rack Mount", cable: "UTP", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLLFE16POEC", position: "Local", channels: 16, formFactor: "1 RU 19” Rack Mount", cable: "Coax", poEPassthrough: "Yes", poEInjection: "Yes" },
    { partNumber: "CLLFE16POEU", position: "Local", channels: 16, formFactor: "1 RU 19” Rack Mount", cable: "UTP", poEPassthrough: "Yes", poEInjection: "Yes" },
  ];

  const [filters, setFilters] = useState({
    position: null,
    channels: null,
    formFactor: null,
    cable: null,
    poEPassthrough: null,
    poEInjection: null
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
    setFilters({ position: null, channels: null, formFactor: null, cable: null, poEPassthrough: null, poEInjection: null }); 
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
    setFilters({ position: null, channels: null, formFactor: null, cable: null, poEPassthrough: null, poEInjection: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const position = [...new Set(filteredProducts.map((product) => product.position))];
    const channels = [...new Set(filteredProducts.map((product) => product.channels))];
    const formFactor = [...new Set(filteredProducts.map((product) => product.formFactor))];
    const cable = [...new Set(filteredProducts.map((product) => product.cable))];
    const poEPassthrough = [...new Set(filteredProducts.map((product) => product.poEPassthrough))];
    const poEInjection = [...new Set(filteredProducts.map((product) => product.poEInjection))];
    
    setAvailableOptions({ position, channels, formFactor, cable, poEPassthrough, poEInjection });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Copper Line</h2>
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
                  Position
                  {filters.position && (
                    <button className="clear-filter" onClick={() => clearFilter("position")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.position.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="position"
                      value={option}
                      checked={filters.position === option}
                      onChange={() => handleFilterChange("position", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Channels
                  {filters.channels && (
                    <button className="clear-filter" onClick={() => clearFilter("channels")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.channels.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="channels"
                      value={option}
                      checked={filters.channels === option}
                      onChange={() => handleFilterChange("channels", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Form Factor
                  {filters.formFactor && (
                    <button className="clear-filter" onClick={() => clearFilter("formFactor")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.formFactor.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="formFactor"
                      value={option}
                      checked={filters.formFactor === option}
                      onChange={() => handleFilterChange("formFactor", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  Cable
                  {filters.cable && (
                    <button className="clear-filter" onClick={() => clearFilter("cable")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.cable.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="cable"
                      value={option}
                      checked={filters.cable === option}
                      onChange={() => handleFilterChange("cable", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  PoE Pass Through
                  {filters.poEPassthrough && (
                    <button className="clear-filter" onClick={() => clearFilter("poEPassthrough")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.poEPassthrough.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="poEPassthrough"
                      value={option}
                      checked={filters.poEPassthrough === option}
                      onChange={() => handleFilterChange("poEPassthrough", option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <h3>
                  PoE Injection
                  {filters.poEInjection && (
                    <button className="clear-filter" onClick={() => clearFilter("poEInjection")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.poEInjection.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="poEInjection"
                      value={option}
                      checked={filters.poEInjection === option}
                      onChange={() => handleFilterChange("poEInjection", option)}
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
                    <th>Part Number</th>
                    <th>Position</th>
                    <th>Channels</th>
                    <th>Form Factor</th>
                    <th>Cable</th>
                    <th>PoE Pass Through</th>
                    <th>PoE Injection</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.partNumber}>
                      <td>{product.partNumber}</td>
                      <td>{product.position}</td>
                      <td>{product.channels}</td>
                      <td>{product.formFactor}</td>
                      <td>{product.cable}</td>
                      <td>{product.poEPassthrough}</td>
                      <td>{product.poEInjection}</td>
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

export default CopperLine;
