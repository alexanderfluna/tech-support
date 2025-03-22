import React, { useState, useEffect } from 'react';

const EthernetSwitchSelectorTool = () => {
    const [showTable, setShowTable] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [availableOptions, setAvailableOptions] = useState({
      Hardened: [],
      Managed: [],
      PoE: [],
      Copper_Ports: [],
      Fiber_Ports: [],
      Combo_Ports: [],
    });
  
    const sortOrders = {
      Hardened: ["No", "Yes"],
      Managed: ["No", "Yes"],
      PoE: ["No", "30W", "60W", "90W"],
      Copper_Ports: ["0", "2x FE", "4x FE", "5x FE", "7x FE", "8x FE", "3x GE", "4x GE", "8x GE", "12x GE", "16x GE", "22x GE", "24x GE", "48x GE"],
      Fiber_Ports: ["0", "1x FE", "2x FE", "4x FE", "1x GE", "2x GE", "3x GE", "4x GE", "8x GE", "12x GE", "24x GE", "2x 10G", "4x 10G"],
      Combo_Ports: ["0", "1x GE", "2x GE", "4x GE", "16x GE"],
    };
  
    const [filters, setFilters] = useState({
      Hardened: null,
      Managed: null,
      PoE: null,
      Copper_Ports: null,
      Fiber_Ports: null,
      Combo_Ports: null,
    });
  
        useEffect(() => {
      window.scrollTo(0, 0);
      setFilteredProducts(products);
      updateAvailableOptions(products);
    }, []);

    const toggleTable = () => {
      setShowTable(!showTable);
      setFilteredProducts(products);
      updateAvailableOptions(products);
      setFilters({
        Hardened: null,
        Managed: null,
        PoE: null,
        Copper_Ports: null,
        Fiber_Ports: null,
        Combo_Ports: null,
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
      setFilters({ Hardened: null, Managed: null, PoE: null, Copper_Ports: null, Fiber_Ports: null, Combo_Ports: null });
      setFilteredProducts(products);
      updateAvailableOptions(products);
    };

    const updateAvailableOptions = (filteredProducts) => {
      const options = {
        Hardened: [...new Set(filteredProducts.map((product) => product.Hardened))],
        Managed: [...new Set(filteredProducts.map((product) => product.Managed))],
        PoE: [...new Set(filteredProducts.map((product) => product.PoE))],
        Copper_Ports: [...new Set(filteredProducts.map((product) => product.Copper_Ports))],
        Fiber_Ports: [...new Set(filteredProducts.map((product) => product.Fiber_Ports))],
        Combo_Ports: [...new Set(filteredProducts.map((product) => product.Combo_Ports))],
      };
      setAvailableOptions(options);
    };

    const sortOptions = (filterType, options) => {
      const orderMap = sortOrders[filterType].reduce((acc, val, idx) => {
        acc[val] = idx;
        return acc;
      }, {});

      return options
        .filter(option => option !== "0" || filterType === "Fiber_Ports" || filterType === "Copper_Ports" || filterType === "Combo_Ports")
        .sort((a, b) => {
          const orderA = orderMap[a] ?? Infinity;
          const orderB = orderMap[b] ?? Infinity;
          return orderA - orderB;
        });
    };
  
    const products = [
      {Model: "CWGE10FX2TX8MS", Hardened: "No", Managed: "Yes", Fiber_Ports: "2x GE", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CWGE10FX2TX8MSPOE", Hardened: "No", Managed: "Yes", Fiber_Ports: "2x GE", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CWGE26FX2TX24MS", Hardened: "No", Managed: "Yes", Fiber_Ports: "2x GE", Copper_Ports: "24x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CWGE26FX2TX24MSPOE", Hardened: "No", Managed: "Yes", Fiber_Ports: "2x GE", Copper_Ports: "24x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CWGE26FX2TX24MSPOE+", Hardened: "No", Managed: "Yes", Fiber_Ports: "2x GE", Copper_Ports: "24x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CWGE28MS", Hardened: "No", Managed: "Yes", Fiber_Ports: "24x GE", Copper_Ports: "4x GE", Combo_Ports: "4x GE", PoE: "No"},
      {Model: "CNXE2GE2TX8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "2x 10G", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE2FE4SMS", Hardened: "Yes", Managed: "No", Fiber_Ports: "2x GE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE2FE4SMSPOE", Hardened: "Yes", Managed: "No", Fiber_Ports: "2x GE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE2FE4SMSPOEHO", Hardened: "Yes", Managed: "No", Fiber_Ports: "2x GE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "60W"},
      {Model: "CNGE2FE8MSPOE+", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "2x GE", Copper_Ports: "8x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE3FE7MS3", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "7x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE3FE8MS", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE3FE8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE3FE8MSPOE/24", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE3FE8MSPOEHO", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x FE", Combo_Ports: "0", PoE: "60W"},
      {Model: "CNGE4US", Hardened: "Yes", Managed: "No", Fiber_Ports: "4x GE", Copper_Ports: "0", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE4TX4US/M", Hardened: "Yes", Managed: "No", Fiber_Ports: "0", Copper_Ports: "4x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE4+2SMS/M", Hardened: "Yes", Managed: "No", Fiber_Ports: "2x GE", Copper_Ports: "4x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE4+2SMSPOE/M", Hardened: "Yes", Managed: "No", Fiber_Ports: "2x GE", Copper_Ports: "4x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE4+2SMSPOEHO/M", Hardened: "Yes", Managed: "No", Fiber_Ports: "2x GE", Copper_Ports: "4x GE", Combo_Ports: "0", PoE: "60W"},
      {Model: "CNGE5MS", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "0", Copper_Ports: "3x GE", Combo_Ports: "2x GE", PoE: "No"},
      {Model: "CNGE6FX2TX4POE", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x GE", Copper_Ports: "4x GE", Combo_Ports: "1x GE", PoE: "30W"},
      {Model: "CNGE6FX2TX4MSP", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "2x GE", Copper_Ports: "4x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE8US", Hardened: "Yes", Managed: "No", Fiber_Ports: "8x GE", Copper_Ports: "0", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE8MS", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "0", Copper_Ports: "4x GE", Combo_Ports: "4x GE", PoE: "No"},
      {Model: "CNGE8FX4TX4MS", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "4x GE", Copper_Ports: "4x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE11FX3TX8MS", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE11FX3TX8MSP/24", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE11FX3TX8MSPOE", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE11FX3TX8MSPOE/24", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE11FX3TX8MSPOEHO", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "3x GE", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "60W"},
      {Model: "CNGE20MS", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "12x GE", Copper_Ports: "8x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE20FX4TX16MS", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "4x GE", Copper_Ports: "16x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE20FX4TX16MSP", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "4x GE", Copper_Ports: "16x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE24MS2", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "8x GE", Copper_Ports: "0", Combo_Ports: "16x GE", PoE: "No"},
      {Model: "CNGE24FX12TX12MS", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "12x GE", Copper_Ports: "12x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE24FX12TX12MS/12", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "12x GE", Copper_Ports: "12x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNGE24FX12TX12MSPOE", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "12x GE", Copper_Ports: "12x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE24FX12TX12MSPOE/48", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "12x GE", Copper_Ports: "12x GE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNGE26FX2TX24MSP", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "2x GE", Copper_Ports: "24x GE", Combo_Ports: "2x GE", PoE: "30W"},
      {Model: "CNGE28FX4TX24MS2", Hardened: "Yes", Managed: "Yes", Fiber_Ports: "4x GE", Copper_Ports: "24x GE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE4SMS", Hardened: "Yes", Managed: "No", Fiber_Ports: "0", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE4SMSPOE", Hardened: "Yes", Managed: "No", Fiber_Ports: "0", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNFE4FX4US", Hardened: "Yes", Managed: "No", Fiber_Ports: "4x FE", Copper_Ports: "0", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE4FX2TX2US", Hardened: "Yes", Managed: "No", Fiber_Ports: "2x FE", Copper_Ports: "2x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE4+1SMSM2", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x FE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE4+1SMSM2POE", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x FE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNFE4+1SMSM2/SC", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x FE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE4+1SMSM2POE/SC", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x FE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNFE4+1SMSS2", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x FE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE4+1SMSS2POE", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x FE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNFE4+1SMSS2/SC", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x FE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE4+1SMSS2POE/SC", Hardened: "Yes", Managed: "No", Fiber_Ports: "1x FE", Copper_Ports: "4x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CNFE5SMS", Hardened: "Yes", Managed: "No", Fiber_Ports: "0", Copper_Ports: "5x FE", Combo_Ports: "0", PoE: "No"},
      {Model: "CNFE5SMSPOE", Hardened: "Yes", Managed: "No", Fiber_Ports: "0", Copper_Ports: "5x FE", Combo_Ports: "0", PoE: "30W"},
      {Model: "CWX28F4T24MPB", Hardened: "No", Managed: "Yes", Fiber_Ports: "4x 10G", Copper_Ports: "24x GE", Combo_Ports: "0", PoE: "90W"},
      {Model: "CWX52F4T48MP", Hardened: "No", Managed: "Yes", Fiber_Ports: "4x 10G", Copper_Ports: "48x GE", Combo_Ports: "0", PoE: "90W"},
    ];

  return (
    <div className="faq-list">
    <button className="purple-button" onClick={toggleTable}>
        <h1>Selector Tool</h1>
        <p>Our Ethernet Switch Selector Tool filters Comnet's switches by hardened, managed, PoE, number of copper ports, number of fiber ports, and number of combo ports.</p>
    </button>
    {showTable && (
        <>
        <div className="filter-options">
          <button className="reset-button" onClick={resetFilters}>
              Reset
          </button>
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
                <th>PoE</th>
                <th>Copper_Ports</th>
                <th>Fiber_Ports</th>
                <th>Combo_Ports</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product, index) => (
                <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
                    <td>{product.Model}</td>
                    <td>{product.Hardened}</td>
                    <td>{product.Managed}</td>
                    <td>{product.PoE}</td>
                    <td>{product.Copper_Ports === "0" ? "-" : product.Copper_Ports}</td>
                    <td>{product.Fiber_Ports === "0" ? "-" : product.Fiber_Ports}</td>
                    <td>{product.Combo_Ports === "0" ? "-" : product.Combo_Ports}</td>
                    
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </>
    )}
    </div>
  );
};

export default EthernetSwitchSelectorTool;
