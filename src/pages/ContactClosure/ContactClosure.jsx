import React, { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';
import products from "./ContactClosureProducts";
import '../../styles/Pages.css'

const ContactClosure = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showTable, setShowTable] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    fiber: [],
    Latching_Or_NonLatching: [],
    inputContactSupervision: [],
    summaryFaultRelay: [],
    numberOfChannels: [],
    bidirectional: [],
  });
  const [filters, setFilters] = useState({
    fiber: null,
    Latching_Or_NonLatching: null,
    inputContactSupervision: null,
    summaryFaultRelay: null,
    numberOfChannels: null,
    bidirectional: null,
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
    setFilters({ fiber: null, Latching_Or_NonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null }); // Reset all filters
  };

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  }

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

  const clearFilter = (filterType) => {
    const newFilters = { ...filters, [filterType]: null };
    setFilters(newFilters);
    handleFilterChange(filterType, null);
  };

  const resetFilters = () => {
    setFilters({ fiber: null, Latching_Or_NonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const Latching_Or_NonLatching = [...new Set(filteredProducts.map((product) => product.Latching_Or_NonLatching))];
    const inputContactSupervision = [...new Set(filteredProducts.map((product) => product.inputContactSupervision))];
    const summaryFaultRelay = [...new Set(filteredProducts.map((product) => product.summaryFaultRelay))];
    const numberOfChannels = [...new Set(filteredProducts.map((product) => product.numberOfChannels))];
    const bidirectional = [...new Set(filteredProducts.map((product) => product.bidirectional))];

    setAvailableOptions({ fiber, Latching_Or_NonLatching, inputContactSupervision, summaryFaultRelay, numberOfChannels, bidirectional });
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
          }}>Contact Closure</h1>
        <button className="purple-button" onClick={toggleTable}>
          <h1>Selector Tool</h1>
          <p>Our Contact Closure Selector Tool filters Comnet's contact closure devices by the type of fiber, latching or non-latching, input contact supervision, summary fault relay, number of channels, and bidirectional.</p>
        </button>
        {showTable && (
  <>
    <div className="filter-options">
      <button className="reset-button" onClick={resetFilters}>
        Reset
      </button>
      <div>
        <h3>
          Fiber
          {filters.fiber && (
            <button className="clear-filter" onClick={() => clearFilter("fiber")}>
              X
            </button>
          )}
        </h3>
        <div className="dropdown-group">
          <select
            name="fiber"
            value={filters.fiber || ""}
            onChange={(e) => handleFilterChange("fiber", e.target.value)}
          >
            <option value="">Select Fiber</option>
            {availableOptions.fiber.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <h3>
          Latching or Non-Latching
          {filters.Latching_Or_NonLatching && (
            <button className="clear-filter" onClick={() => clearFilter("Latching_Or_NonLatching")}>
              X
            </button>
          )}
        </h3>
        <div className="dropdown-group">
          <select
            name="Latching_Or_NonLatching"
            value={filters.Latching_Or_NonLatching || ""}
            onChange={(e) => handleFilterChange("Latching_Or_NonLatching", e.target.value)}
          >
            <option value="">Select Latching or Non-Latching</option>
            {availableOptions.Latching_Or_NonLatching.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <h3>
          Input Contact Supervision
          {filters.inputContactSupervision && (
            <button className="clear-filter" onClick={() => clearFilter("inputContactSupervision")}>
              X
            </button>
          )}
        </h3>
        <div className="dropdown-group">
          <select
            name="inputContactSupervision"
            value={filters.inputContactSupervision || ""}
            onChange={(e) => handleFilterChange("inputContactSupervision", e.target.value)}
          >
            <option value="">Select Input Contact Supervision</option>
            {availableOptions.inputContactSupervision.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <h3>
          Summary Fault Relay
          {filters.summaryFaultRelay && (
            <button className="clear-filter" onClick={() => clearFilter("summaryFaultRelay")}>
              X
            </button>
          )}
        </h3>
        <div className="dropdown-group">
          <select
            name="summaryFaultRelay"
            value={filters.summaryFaultRelay || ""}
            onChange={(e) => handleFilterChange("summaryFaultRelay", e.target.value)}
          >
            <option value="">Select Summary Fault Relay</option>
            {availableOptions.summaryFaultRelay.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <h3>
          Number of Channels
          {filters.numberOfChannels && (
            <button className="clear-filter" onClick={() => clearFilter("numberOfChannels")}>
              X
            </button>
          )}
        </h3>
        <div className="dropdown-group">
          <select
            name="numberOfChannels"
            value={filters.numberOfChannels || ""}
            onChange={(e) => handleFilterChange("numberOfChannels", e.target.value)}
          >
            <option value="">Select Number of Channels</option>
            {availableOptions.numberOfChannels.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <h3>
          Bidirectional
          {filters.bidirectional && (
            <button className="clear-filter" onClick={() => clearFilter("bidirectional")}>
              X
            </button>
          )}
        </h3>
        <div className="dropdown-group">
          <select
            name="bidirectional"
            value={filters.bidirectional || ""}
            onChange={(e) => handleFilterChange("bidirectional", e.target.value)}
          >
            <option value="">Select Bidirectional</option>
            {availableOptions.bidirectional.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

    <div className="table-container">
      <table className="selector-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Fiber</th>
            <th>Latching or Non-Latching</th>
            <th>Input Contact Supervision</th>
            <th>Summary Fault Relay</th>
            <th>Number of Channels</th>
            <th>Bidirectional</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff" }}>
              <td>{product.Model}</td>
              <td>{product.fiber}</td>
              <td>{product.Latching_Or_NonLatching}</td>
              <td>{product.inputContactSupervision}</td>
              <td>{product.summaryFaultRelay}</td>
              <td>{product.numberOfChannels}</td>
              <td>{product.bidirectional}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}



        <button className="purple-button" onClick={toggleFAQ}>
          <h1>FAQ</h1>
          <p>Our FAQ section contains answers to frequently asked questions and how to troubleshoot common issues regarding Comnet's contact closure devices.</p>
        </button>
        {showFAQ && (
          <>
            <div className="faq-list">
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('formA')}> Learn about form A relays. </button>
                {visibleAnswers.has('formA') && (
                  <div className="faq-answer">
                    <p><strong>Form A relays</strong> are Single Pole Single Throw (SPST) normally open relays. When the relay coil in a Form A mechanical relay is not energized, or when there is no magnetic field nearby in a reed relay, the relay contacts are open. When the relay coil in a Form A relay is energized, or when a magnetic field exists nearby in a reed relay, the relay contacts close. Used in applications where you need to switch a circuit on when the relay is activated: common in simple on/off control circuits, like turning on a light or powering a device.</p>
                    <img src="photos/FDC/FormA.png" style={{height: "400px"}}></img>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('formC')}> Lern about form C relays. </button>
                {visibleAnswers.has('formC') && (
                  <div className="faq-answer">
                    <p><strong>Form C relays</strong> are Single Pole Double Throw (SPDT) relays with a normally open set of contacts and a normally closed set of contacts. When the relay coil is not energized, the relay contacts are open relative to normally open and common AND are closed relative to normally closed and common. When the relay coil is energized, the relay contacts are closed relative to normally open and common AND are open relative to normally closed and common. Form C relays are used in applications where you need to alternate between two circuits. It allows for switching between two states, such as toggling between two power sources or switching between two devices: like switching between a primary and backup power supply.</p>
                    <img src="photos/FDC/FormC.png" style={{height: "400px"}}></img>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('latching')}> Learn about latching vs. non-latching. </button>
                {visibleAnswers.has('latching') && (
                  <div className="faq-answer">
                    <p>In the case of a loss of optical link, <strong>latching relays</strong> will remain in the same state, whereas <strong>non-latching</strong> relays will open.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('supervision')}> Learn about supervision. </button>
                {visibleAnswers.has('supervision') && (
                  <div className="faq-answer">
                    <p><strong>Supervision</strong> allows the device to detect if there is a short circuit or an open circuit. A slow fashing red LED indicates a short circuit, whereas a fast fashing red LED indicates an open circuit.</p>
                    <p><strong>On the FDC80 transmitter:</strong></p>
                    <li style={{"padding-left": "40px"}}>Flipping dip switch #1 on will allow for detection of short circuits.</li>
                    <li style={{"padding-left": "40px"}}>Flipping dip switch #2 on will allow for detection of cut wires.</li>
                    <p><strong>On the FDC80 receiver:</strong></p>
                    <li style={{"padding-left": "40px"}}>Flipping dip switch #1 on will add fiber loss to the summary fault relay.</li>
                    <li style={{"padding-left": "40px"}}>Flipping dip switch #2 on will add contact faults to the summary fault relay.</li>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('summary')}> Learn about summary fault relays. </button>
                {visibleAnswers.has('summary') && (
                  <div className="faq-answer">
                    <p>A <strong>summary fault relay</strong> is normally closed during normal conditions and will open upon loss of optical link. The <strong>FDC10</strong> is a good choice for monitoring the status of optical fiber.</p>
                  </div>
                )}
              </div>
              <Fiber />
              {<NoPowerLight />}
              {<NoOpticalLink />}
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('no-contacts')}> The contacts are not getting sent across the fiber. </button>
                  {visibleAnswers.has('no-contacts') && (
                    <div className="faq-answer">
                      <p><strong>[1] Ensure the wires are connected properly.</strong></p>
                      <p><strong>FDC10:</strong></p>
                      <img src="photos/FDC/fdc10.jpg" style={{"padding-right": "100px"}}></img>
                      <p><strong>FDC8 or FDC80:</strong></p>
                      <img src="photos/FDC/fdc80.jpg" style={{height: "600px"}}></img>
                      <p><strong>[2] Confirm the inputs are dry (volt-free) closures. It is not acceptable to have voltage across the input pair.</strong></p>
                      <p><strong>[3] If an ohmmeter is being used across the screwheads on the green terminal block and if the screws are not tightened, it will look like the relay is not responding. Be sure that there are wires in the terminal block and that the screws are tightened. If wires are not inserted into the terminal block, tighten the screws anyway and then measure across the screw heads.</strong></p>
                      <p><strong>[4] Cycle power on the unit.</strong></p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('cnfe3')}> Configuring the CNFE3FX1TX2C4DX/M. </button>
                  {visibleAnswers.has('cnfe3') && (
                    <div className="faq-answer">
                      <a href="pdf/ContactClosure/CNFE3FX1TX2C4.pdf">Click the link to view the configuration manual.</a>
                    </div>
                  )}
                </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ContactClosure;
