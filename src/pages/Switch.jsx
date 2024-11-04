import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/Global.css';
import '../styles/Pages.css';

const Switch = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    Hardened: [],
    Managed: [],
    Fiber: [],
    Copper: [],
    Combo: [],
    PoE: []
  });

  const sortOrders = {
    Hardened: ["No", "Yes"],
    Managed: ["No", "Yes"],
    Fiber: ["0", "1 FE", "2 FE", "4 FE", "1 GE", "2 GE", "3 GE", "4 GE", "8 GE", "12 GE", "24 GE", "2 2.5G + 2 10G"],
    Copper: ["0", "2 FE", "4 FE", "5 FE", "7 FE", "8 FE", "3 GE", "4 GE", "8 GE", "12 GE", "16 GE", "22 GE", "24 GE"],
    Combo: ["0", "1 GE", "2 GE", "4 GE", "16 GE"],
    PoE: ["No", "PoE", "PoEHo"]
  };

  const [filters, setFilters] = useState({
    Hardened: null,
    Managed: null,
    Fiber: null,
    Copper: null,
    Combo: null,
    PoE: null
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
    setFilters({
      Hardened: null,
      Managed: null,
      Fiber: null,
      Copper: null,
      Combo: null,
      PoE: null
    });
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
    setFilters({ Hardened: null,
      Managed: null,
      Fiber: null,
      Copper: null,
      Combo: null,
      PoE: null
    });
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const options = {
      Hardened: [...new Set(filteredProducts.map((product) => product.Hardened))],
      Managed: [...new Set(filteredProducts.map((product) => product.Managed))],
      Fiber: [...new Set(filteredProducts.map((product) => product.Fiber))],
      Copper: [...new Set(filteredProducts.map((product) => product.Copper))],
      Combo: [...new Set(filteredProducts.map((product) => product.Combo))],
      PoE: [...new Set(filteredProducts.map((product) => product.PoE))]
    };
    setAvailableOptions(options);
  };

  const sortOptions = (filterType, options) => {
    const orderMap = sortOrders[filterType].reduce((acc, val, idx) => {
      acc[val] = idx;
      return acc;
    }, {});

    return options
      .filter(option => option !== "0" || filterType === "Fiber" || filterType === "Copper" || filterType === "Combo")
      .sort((a, b) => {
        const orderA = orderMap[a] ?? Infinity;
        const orderB = orderMap[b] ?? Infinity;
        return orderA - orderB;
      });
  };

  const products = [
    {Model: "CWGE10FX2TX8MS", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "8 GE", Combo: "0", PoE: "No"},
    {Model: "CWGE10FX2TX8MSPOE", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "8 GE", Combo: "0", PoE: "PoE"},
    {Model: "CWGE26FX2TX24MS", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "24 GE", Combo: "0", PoE: "No"},
    {Model: "CWGE26FX2TX24MSPOE", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "24 GE", Combo: "0", PoE: "PoE"},
    {Model: "CWGE26FX2TX24MSPOE+", Hardened: "No", Managed: "Yes", Fiber: "2 GE", Copper: "24 GE", Combo: "0", PoE: "PoE"},
    {Model: "CWGE28MS", Hardened: "No", Managed: "Yes", Fiber: "24 GE", Copper: "4 GE", Combo: "4 GE", PoE: "No"},
    {Model: "CNXE2GE2TX8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber: "2 2.5G + 2 10G", Copper: "8 GE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE2FE4SMS", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNGE2FE4SMSPOE", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE2FE4SMSPOEHO", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 FE", Combo: "0", PoE: "PoEHo"},
    {Model: "CNGE2FE8MSPOE+", Hardened: "Yes", Managed: "Yes", Fiber: "2 GE", Copper: "8 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE3FE7MS3", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "7 FE", Combo: "0", PoE: "No"},
    {Model: "CNGE3FE8MS", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 FE", Combo: "0", PoE: "No"},
    {Model: "CNGE3FE8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE3FE8MSPOE/24", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE3FE8MSPOEHO", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 FE", Combo: "0", PoE: "PoEHo"},
    {Model: "CNGE4US", Hardened: "Yes", Managed: "No", Fiber: "4 GE", Copper: "0", Combo: "0", PoE: "No"},
    {Model: "CNGE4TX4US/M", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "4 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE4+2SMS/M", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE4+2SMSPOE/M", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 GE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE4+2SMSPOEHO/M", Hardened: "Yes", Managed: "No", Fiber: "2 GE", Copper: "4 GE", Combo: "0", PoE: "PoEHo"},
    {Model: "CNGE5MS", Hardened: "Yes", Managed: "Yes", Fiber: "0", Copper: "3 GE", Combo: "2 GE", PoE: "No"},
    {Model: "CNGE6FX2TX4POE", Hardened: "Yes", Managed: "No", Fiber: "1 GE", Copper: "4 FE", Combo: "1 GE", PoE: "PoE"},
    {Model: "CNGE6FX2TX4MSP", Hardened: "Yes", Managed: "Yes", Fiber: "2 GE", Copper: "4 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE8US", Hardened: "Yes", Managed: "No", Fiber: "8 GE", Copper: "0", Combo: "0", PoE: "No"},
    {Model: "CNGE8MS", Hardened: "Yes", Managed: "Yes", Fiber: "0", Copper: "4 GE", Combo: "4 GE", PoE: "No"},
    {Model: "CNGE8FX4TX4MS", Hardened: "Yes", Managed: "Yes", Fiber: "4 GE", Copper: "4 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE11FX3TX8MS", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE11FX3TX8MSP/24", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE11FX3TX8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE11FX3TX8MSPOE/24", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE11FX3TX8MSPOEHO", Hardened: "Yes", Managed: "Yes", Fiber: "3 GE", Copper: "8 GE", Combo: "0", PoE: "PoEHo"},
    {Model: "CNGE20MS", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "8 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE20FX4TX16MS", Hardened: "Yes", Managed: "Yes", Fiber: "4 GE", Copper: "16 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE20FX4TX16MSP", Hardened: "Yes", Managed: "Yes", Fiber: "4 GE", Copper: "16 GE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE24MS2", Hardened: "Yes", Managed: "Yes", Fiber: "8 GE", Copper: "0", Combo: "16 GE", PoE: "No"},
    {Model: "CNGE24FX12TX12MS", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "12 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE24FX12TX12MS/12", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "12 GE", Combo: "0", PoE: "No"},
    {Model: "CNGE24FX12TX12MSPOE", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "12 GE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE24FX12TX12MSPOE/48", Hardened: "Yes", Managed: "Yes", Fiber: "12 GE", Copper: "12 GE", Combo: "0", PoE: "PoE"},
    {Model: "CNGE26FX2TX24MSP", Hardened: "Yes", Managed: "Yes", Fiber: "2 GE", Copper: "22 GE", Combo: "2 GE", PoE: "PoE"},
    {Model: "CNGE28FX4TX24MS2", Hardened: "Yes", Managed: "Yes", Fiber: "4 GE", Copper: "24 GE", Combo: "0", PoE: "No"},
    {Model: "CNFE4SMS", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4SMSPOE", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "4 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNFE4FX4US", Hardened: "Yes", Managed: "No", Fiber: "4 FE", Copper: "0", Combo: "0", PoE: "No"},
    {Model: "CNFE4FX2TX2US", Hardened: "Yes", Managed: "No", Fiber: "2 FE", Copper: "2 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSM2", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSM2POE", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNFE4+1SMSM2/SC", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSM2POE/SC", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNFE4+1SMSS2", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSS2POE", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNFE4+1SMSS2/SC", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE4+1SMSS2POE/SC", Hardened: "Yes", Managed: "No", Fiber: "1 FE", Copper: "4 FE", Combo: "0", PoE: "PoE"},
    {Model: "CNFE5SMS", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "5 FE", Combo: "0", PoE: "No"},
    {Model: "CNFE5SMSPOE", Hardened: "Yes", Managed: "No", Fiber: "0", Copper: "5 FE", Combo: "0", PoE: "PoE"},
];

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h1 className="faq-title">Switch</h1>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        {showTable && (
          <>
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
            <div className="filter-options">
              {Object.entries(availableOptions).map(([filterType, options]) => (
                <div key={filterType}>
                  <h3>
                    {filterType}
                    {filters[filterType] && (
                      <button className="clear-filter" onClick={() => clearFilter(filterType)}>
                        X
                      </button>
                    )}
                  </h3>
                  {sortOptions(filterType, options).map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={filterType}
                        value={option}
                        checked={filters[filterType] === option}
                        onChange={() => handleFilterChange(filterType, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <div className="table-container">
              <table className="selector-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Hardened</th>
                    <th>Managed</th>
                    <th>Fiber Ports</th>
                    <th>Copper Ports</th>
                    <th>Combo Ports</th>
                    <th>PoE</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{product.Model}</td>
                      <td>{product.Hardened}</td>
                      <td>{product.Managed}</td>
                      <td>{product.Fiber === "0" ? "-" : product.Fiber}</td>
                      <td>{product.Copper === "0" ? "-" : product.Copper}</td>
                      <td>{product.Combo === "0" ? "-" : product.Combo}</td>
                      <td>{product.PoE}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <p className="faq-title">Troubleshooting Common Issues</p>
        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-power')}>
              No Power
            </button>
            {visibleAnswer === 'no-power' && (
              <div className="faq-answer">
                <li>Make sure that ...</li>
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

export default Switch;