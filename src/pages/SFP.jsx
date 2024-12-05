import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Fiber from '../relevant-information/Fiber';
import '../styles/Global.css';
import '../styles/Pages.css';

const SFP = () => {
  const products = [
    { itemNumber: "SFP-1", dataRate: "GE", txMedium: "Copper", fibers: "N/A", optics: "RJ-45", pathLength: "100 m", Tx: "N/A", Rx: "N/A" },
    { itemNumber: "SFP-10A", dataRate: "FE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "20 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-10B", dataRate: "FE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "20 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-10G-BX10-D", dataRate: "10G", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "10 km", Tx: "1330", Rx: "1270" },
    { itemNumber: "SFP-10G-BX10-U", dataRate: "10G", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "10 km", Tx: "1270", Rx: "1330" },
    { itemNumber: "SFP-10G-BX40-D", dataRate: "10G", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "40 km", Tx: "1330", Rx: "1270" },
    { itemNumber: "SFP-10G-BX40-U", dataRate: "10G", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "40 km", Tx: "1270", Rx: "1330" },
    { itemNumber: "SFP-10G-ER", dataRate: "10G", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "40 km", Tx: "1550", Rx: "1550" },
    { itemNumber: "SFP-10G-LR", dataRate: "10G", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "10 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-10G-SR", dataRate: "10G", txMedium: "Multimode", fibers: "2 strands", optics: "LC", pathLength: "26/300 m", Tx: "850", Rx: "850" },
    { itemNumber: "SFP-10G-ZR", dataRate: "10G", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "80 km", Tx: "1550", Rx: "1550" },
    { itemNumber: "SFP-12A", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "20 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-12B", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "20 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-14A", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "SC", pathLength: "20 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-14B", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "SC", pathLength: "20 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-16", dataRate: "GE", txMedium: "Multimode", fibers: "2 strands", optics: "LC", pathLength: "275/550 m", Tx: "850", Rx: "850" },
    { itemNumber: "SFP-18A", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "60 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-18B", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "60 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-1A", dataRate: "FE", txMedium: "Copper", fibers: "N/A", optics: "RJ-45", pathLength: "100 m", Tx: "N/A", Rx: "N/A" },
    { itemNumber: "SFP-2", dataRate: "FE", txMedium: "Multimode", fibers: "2 strands", optics: "LC", pathLength: "2 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-20A", dataRate: "FE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "60 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-20B", dataRate: "FE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "60 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-22A", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "SC", pathLength: "60 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-22B", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "SC", pathLength: "60 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-24A", dataRate: "FE", txMedium: "Singlemode", fibers: "1 strand", optics: "SC", pathLength: "60 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-24B", dataRate: "FE", txMedium: "Singlemode", fibers: "1 strand", optics: "SC", pathLength: "60 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-26A", dataRate: "FE", txMedium: "Multimode", fibers: "1 strand", optics: "SC", pathLength: "2 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-26B", dataRate: "FE", txMedium: "Multimode", fibers: "1 strand", optics: "SC", pathLength: "2 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-3", dataRate: "FE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "20 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-36A", dataRate: "FE", txMedium: "Singlemode", fibers: "1 strand", optics: "SC", pathLength: "20 km", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-36B", dataRate: "FE", txMedium: "Singlemode", fibers: "1 strand", optics: "SC", pathLength: "20 km", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-4", dataRate: "FE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "40 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-46", dataRate: "GE", txMedium: "Multimode", fibers: "2 strands", optics: "LC", pathLength: "2 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-48A", dataRate: "GE", txMedium: "Multimode", fibers: "1 strand", optics: "LC", pathLength: "275/550 m", Tx: "1310", Rx: "1550" },
    { itemNumber: "SFP-48B", dataRate: "GE", txMedium: "Multimode", fibers: "1 strand", optics: "LC", pathLength: "275/550 m", Tx: "1550", Rx: "1310" },
    { itemNumber: "SFP-5", dataRate: "FE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "80 km", Tx: "1550", Rx: "1550" },
    { itemNumber: "SFP-6", dataRate: "GE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "15 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-7", dataRate: "GE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "40 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-8", dataRate: "GE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "70 km", Tx: "1550", Rx: "1550" },
    { itemNumber: "SFP-9", dataRate: "GE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "120 km", Tx: "1550", Rx: "1550" },
    { itemNumber: "SFP-BX-D", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "10 km", Tx: "1490", Rx: "1310" },
    { itemNumber: "SFP-BX-U", dataRate: "GE", txMedium: "Singlemode", fibers: "1 strand", optics: "LC", pathLength: "10 km", Tx: "1310", Rx: "1490" },
    { itemNumber: "SFP-EX", dataRate: "GE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "40 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-LH", dataRate: "GE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "20 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-LX", dataRate: "GE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "10 km", Tx: "1310", Rx: "1310" },
    { itemNumber: "SFP-SX", dataRate: "GE", txMedium: "Multimode", fibers: "2 strands", optics: "LC", pathLength: "275/550 m", Tx: "850", Rx: "850" },
    { itemNumber: "SFP-ZX", dataRate: "GE", txMedium: "Singlemode", fibers: "2 strands", optics: "LC", pathLength: "70 km", Tx: "1550", Rx: "1550" }
  ];

  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [availableOptions, setAvailableOptions] = useState({
    dataRate: ['FE', 'GE', '10G'],
    txMedium: ['Copper', 'Singlemode', 'Multimode'],
    fibers: ['N/A', '1 strand', '2 strands'],
    optics: ['RJ-45', 'SC', 'LC'],
    pathLength: ['100m', '26/300m', '275/550m', '2km', '10km', '15km', '20km', '40km', '60km', '70km', '80km', '120km'],
    Tx: ['N/A', '850', '1270', '1310', '1330', '1490', '1550'],
    Rx: ['N/A', '850', '1270', '1310', '1330', '1490', '1550'],
  });

  const [filters, setFilters] = useState({
    dataRate: null,
    txMedium: null,
    fibers: null,
    optics: null,
    pathLength: null,
    Tx: null,
    Rx: null,
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
      dataRate: null,
      txMedium: null,
      fibers: null,
      optics: null,
      pathLength: null,
      Tx: null,
      Rx: null,
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
    setFilters({
      dataRate: null,
      txMedium: null,
      fibers: null,
      optics: null,
      pathLength: null,
      Tx: null,
      Rx: null,
    });
    setFilteredProducts(products);
    updateAvailableOptions(products);
  };

  const updateAvailableOptions = (filteredProducts) => {
    const getUniqueOptions = (key) => {
      return [...new Set(filteredProducts.map((product) => product[key]))];
    };

    setAvailableOptions({
      dataRate: getUniqueOptions('dataRate'),
      txMedium: getUniqueOptions('txMedium'),
      fibers: getUniqueOptions('fibers'),
      optics: getUniqueOptions('optics'),
      pathLength: getUniqueOptions('pathLength'),
      Tx: getUniqueOptions('Tx'),
      Rx: getUniqueOptions('Rx'),
    });
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
            <button className="reset-button" onClick={resetFilters}>
              Reset
            </button>
            <div className="filter-options">
              {['dataRate', 'txMedium', 'fibers', 'optics', 'pathLength', 'Tx', 'Rx'].map((filterKey) => (
                <div key={filterKey}>
                  <h3>
                    {filterKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    {filters[filterKey] && (
                      <button
                        className="clear-filter"
                        onClick={() => clearFilter(filterKey)}
                      >
                        X
                      </button>
                    )}
                  </h3>
                  {availableOptions[filterKey]?.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={filterKey}
                        value={option}
                        checked={filters[filterKey] === option}
                        onChange={() => handleFilterChange(filterKey, option)}
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
                    <th>Data Rate</th>
                    <th>Tx Medium</th>
                    <th># of Fibers</th>
                    <th>Optics</th>
                    <th>Path Length</th>
                    <th>Tx</th>
                    <th>Rx</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#fff',
                      }}
                    >
                      <td>{product.itemNumber}</td>
                      <td>{product.dataRate}</td>
                      <td>{product.txMedium}</td>
                      <td>{product.fibers}</td>
                      <td>{product.optics}</td>
                      <td>{product.pathLength}</td>
                      <td>{product.Tx}</td>
                      <td>{product.Rx}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <p className="faq-title">Frequently Asked Questions</p>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer('sfp-chart')}>
            SFP Chart
          </button>
          {visibleAnswer === 'sfp-chart' && (
            <div className="faq-answer">
              <img src="photos/SFP/SFP.png" alt="SFP Chart" />
            </div>
          )}
        </div>
        <Fiber />
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default SFP;
