import React, { useState, useEffect } from 'react';
import products from './SFPProducts'
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';
import '../../styles/Pages.css'

const SFP = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showTable, setShowTable] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
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
    setVisibleAnswers(prevAnswers => {
        const newAnswers = new Set(prevAnswers);
        if (newAnswers.has(questionId)) {
            newAnswers.delete(questionId);
        } else {
            newAnswers.add(questionId);
        }
        return newAnswers;
    });
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

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  }

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
      <main className="faq-container">
        <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(135deg, rgb(54, 126, 208), rgb(77, 77, 77))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center"
          }}>SFP</h1>
        <p style={{fontWeight: "bold"}}>______________________________________</p>
        <button className="purple-button" onClick={toggleTable}>
          <h1>Selector Tool</h1>
          <p>Our SFP Selector Tool filters Comnet's SFP modules by the data rate, transmission medium, number of fiber strands, optical connector, path length, transmission wavelength, and receiving wavelength.</p>
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

        <button className="purple-button" onClick={toggleFAQ}>
          <h1>FAQ</h1>
          <p>Our FAQ section contains answers to frequently asked questions and how to troubleshoot common issues regarding Comnet's SFP modules.</p>
        </button>
        {showFAQ && (
          <>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('sfp')}>
              Learn about SFPs.
            </button>
            {visibleAnswers.has('sfp') && (
              <div className="faq-answer">
                <p><strong>SFP (Small Form-Factor Pluggable</strong>) modules are compact, hot-swappable devices used in network equipment like switches and routers to send and receive data over fiber optic or copper cables. They support singlemode or multimode fiber for different distances and come in various speeds like Fast Ethernet (FE), Gigabit Ethernet (GE), and 10 Gigabit (10G). SFPs use different connectors, such as LC, SC, or RJ-45, depending on the cable type. They help expand network capabilities without replacing entire devices.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('sfp-chart')}>
              View Comnet's SFP chart.
            </button>
            {visibleAnswers.has('sfp-chart') && (
              <div className="faq-answer" style={{display: "flex", "flex-direction": "column"}}>
                <a href="pdf/SFP/sfp-modules.pdf">
                    <button style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px"}}>
                      View Comnet SFP Chart
                    </button>
                  </a>
                <img src="photos/SFP/SFP.png" alt="SFP Chart" />
              </div>
            )}
          </div>
          {<Fiber/>}
          <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('ddi')}>
                How can I view the status of an SFP module?
              </button>
              {visibleAnswers.has('ddi') && (
                <>
                  <div className="faq-answer">
                    <p><strong>It is possible to view the status of the SFP in any Comnet switch via the DDMI section or the SPF Status section.</strong></p>
                  </div>
                </>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('cisco')}>
                Will Comnet SFPs work with Cisco devices?
              </button>
              {visibleAnswers.has('cisco') && (
                <>
                  <div className="faq-answer">
                    <p><strong>ComNet SFP modules will optically communicate with properly matched Cisco SFPs when Cisco SFPs are installed in a Cisco switch. Note that ComNet SFPs will not operate when installed in a Cisco switch.</strong></p>
                  </div>
                </>
              )}
            </div>
          {<NoOpticalLink/>}
          </>
        )}      
      </main>
    </div>
  );
};

export default SFP;
