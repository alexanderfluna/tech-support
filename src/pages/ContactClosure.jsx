import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import NoPowerLight from '../relevant-information/NoPowerLight';
import Fiber from '../relevant-information/Fiber';
import '../styles/Global.css';
import '../styles/Pages.css';

const ContactClosure = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    fiber: [],
    latchingOrNonLatching: [],
    inputContactSupervision: [],
    summaryFaultRelay: [],
    numberOfChannels: [],
    bidirectional: [],
  });

  const products = [
    { model: "FDC80TM1 + FDC80NLRM1", fiber: "multimode", latchingOrNonLatching: "non-latching", inputContactSupervision: "yes", summaryFaultRelay: "yes", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC80TM1 + FDC80RM1", fiber: "multimode", latchingOrNonLatching: "latching", inputContactSupervision: "yes", summaryFaultRelay: "yes", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC80TS1 + FDC80NLRS1", fiber: "singlemode", latchingOrNonLatching: "non-latching", inputContactSupervision: "yes", summaryFaultRelay: "yes", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC80TS1 + FDC80RS1", fiber: "singlemode", latchingOrNonLatching: "latching", inputContactSupervision: "yes", summaryFaultRelay: "yes", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC8TM1 + FDC8NLRM1", fiber: "multimode", latchingOrNonLatching: "non-latching", inputContactSupervision: "no", summaryFaultRelay: "no", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC8TM1 + FDC8RM1", fiber: "multimode", latchingOrNonLatching: "latching", inputContactSupervision: "no", summaryFaultRelay: "no", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC8TS1 + FDC8NLRS1", fiber: "singlemode", latchingOrNonLatching: "non-latching", inputContactSupervision: "no", summaryFaultRelay: "no", numberOfChannels: 8, bidirectional: "no" },
    { model: "FDC8TS1 + FDC8RS1", fiber: "singlemode", latchingOrNonLatching: "latching", inputContactSupervision: "no", summaryFaultRelay: "no", numberOfChannels: 8, bidirectional: "no" },
  ];

  const [filters, setFilters] = useState({
    fiber: null,
    latchingOrNonLatching: null,
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
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleTable = () => {
    setShowTable(!showTable);
    setFilteredProducts(products);
    updateAvailableOptions(products);
    setFilters({ fiber: null, latchingOrNonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null }); // Reset all filters
  };

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
    setFilters({ fiber: null, latchingOrNonLatching: null, inputContactSupervision: null, summaryFaultRelay: null, numberOfChannels: null, bidirectional: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const fiber = [...new Set(filteredProducts.map((product) => product.fiber))];
    const latchingOrNonLatching = [...new Set(filteredProducts.map((product) => product.latchingOrNonLatching))];
    const inputContactSupervision = [...new Set(filteredProducts.map((product) => product.inputContactSupervision))];
    const summaryFaultRelay = [...new Set(filteredProducts.map((product) => product.summaryFaultRelay))];
    const numberOfChannels = [...new Set(filteredProducts.map((product) => product.numberOfChannels))];
    const bidirectional = [...new Set(filteredProducts.map((product) => product.bidirectional))];

    setAvailableOptions({ fiber, latchingOrNonLatching, inputContactSupervision, summaryFaultRelay, numberOfChannels, bidirectional });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Contact Closure</h2>
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
                  Latching or Non-Latching
                  {filters.latchingOrNonLatching && (
                    <button className="clear-filter" onClick={() => clearFilter("latchingOrNonLatching")}>
                      X
                    </button>
                  )}
                </h3>
                {availableOptions.latchingOrNonLatching.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="latchingOrNonLatching"
                      value={option}
                      checked={filters.latchingOrNonLatching === option}
                      onChange={() => handleFilterChange("latchingOrNonLatching", option)}
                    />
                    {option}
                  </label>
                ))}
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
                {availableOptions.inputContactSupervision.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="inputContactSupervision"
                      value={option}
                      checked={filters.inputContactSupervision === option}
                      onChange={() => handleFilterChange("inputContactSupervision", option)}
                    />
                    {option}
                  </label>
                ))}
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
                {availableOptions.summaryFaultRelay.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="summaryFaultRelay"
                      value={option}
                      checked={filters.summaryFaultRelay === option}
                      onChange={() => handleFilterChange("summaryFaultRelay", option)}
                    />
                    {option}
                  </label>
                ))}
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
                {availableOptions.numberOfChannels.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="numberOfChannels"
                      value={option}
                      checked={filters.numberOfChannels === option}
                      onChange={() => handleFilterChange("numberOfChannels", option)}
                    />
                    {option}
                  </label>
                ))}
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
                {availableOptions.bidirectional.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="bidirectional"
                      value={option}
                      checked={filters.bidirectional === option}
                      onChange={() => handleFilterChange("bidirectional", option)}
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
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
                      <td>{product.model}</td>
                      <td>{product.fiber}</td>
                      <td>{product.latchingOrNonLatching}</td>
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

        <p className="faq-title">How To Troubleshoot Common Issues</p>
        <div className="faq-list">
          {<NoPowerLight />}
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-link-light')}> There is no link light. </button>
            {visibleAnswer === 'no-link-light' && (
              <div className="faq-answer">
                <p>1. Test the Fiber with Another Device.</p>
                <li>Use the fiber with another device to determine if a link light is achieved.</li>
                <p>2. Swap out the device on either end with an identical.</p>
                <li>This will determine which device on either end is failing.</li>
                <p>3. Fiber Optic Cleaning Kit:</p>
                <li>Use the lint-free wipes and cleaning pen from the optic cleaning kit to clean fiber connectors and the SFP cage gently. Ensure no debris remains before reconnecting.</li>
                <p>4. Optical Power Meter:</p>
                <li>Connect the power meter to the fiber cable and check the dBm reading. Compare this to the device’s recommended signal strength (available in the datasheet) to confirm it is within the expected range.</li>
                <p>5. Optical Time-Domain Reflectometer (OTDR)</p>
                <li>Connect the OTDR to one end of the fiber cable. The OTDR will send light pulses through the fiber to analyze reflections and signal loss, producing a graph with detailed information on reflections, signal loss, and potential faults.</li>
                <li>Note the distance to any reflections or faults as shown on the OTDR report.</li>
                <p>6. Visual Fault Locator:</p>
                <li>Connect the visual fault locator to the fiber cable and check for any areas where red light escapes or dims.</li>
                <li>Inspect any detected light leaks for possible damage or poor connections.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-contacts')}> The contacts are not getting sent across the fiber. </button>
            {visibleAnswer === 'no-contacts' && (
              <div className="faq-answer">
                <p>1. Ensure the wires are connected properly.</p>
                <li>FDC10 and FDC8/FDC80</li>
                <img src="photos/FDC/fdc10.jpg" style={{"padding-right": "100px"}}></img>
                <img src="photos/FDC/fdc80.jpg" style={{height: "700px"}}></img>
                <p>2. Confirm the inputs are dry (volt-free) closures.</p>
                <li>It is not acceptable to have voltage across the input pair.</li>
                <p>3. If an ohmmeter is being used across the screwheads on the green terminal block and if the screws are not tightened, it will look like the relay is not responding. </p>
                <li>Be sure that there are wires in the terminal block and that the screws are tightened. If wires are not inserted into the terminal block, tighten the screws anyway and then measure across the screw heads.</li>
                <p>4. Cycle power on the unit.</p>
              </div>
            )}
          </div>
        </div>

        <p className="faq-title">Frequently Asked Questions</p>
        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('fdc10')}> What are the applications for the FDC10? </button>
            {visibleAnswer === 'fdc10' && (
              <div className="faq-answer">
                <p>Applications:</p>
                <li>Using multimode fiber: FDC10M1A or FDC10RM1A on one end. FDC10M1B or FDC10RM1B on the other.</li>
                <li>Using singlemode fiber: FDC10S1A or FDC10RS1A on one end. FDC10S1B or FDC10RS1B on the other.</li>
                <p>Relevant Info:</p> 
                <li>Only 1 fiber with an ST optic is required.</li>
                <li>'A' and 'B' pairs.</li>
                <li>There are two bidirectional contact closure channels.</li>
                <li>The 'R' in the model number is for 'regular'.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('fdc8')}> What are the applications for the FDC8? </button>
            {visibleAnswer === 'fdc8' && (
              <div className="faq-answer">
                <p>Applications:</p>
                <li>Using multimode fiber: FDC8TM1 on the transmit side. FDC8RM1 or FDC8NLRM1 on the receive side.</li>
                <li>Using singlemode fiber: FDC8TS1 on the transmit side. FDC8RS1 or FDC8NLRS1 on the receive side.</li>
                <p>Relevant Info:</p>
                <li>Only 1 fiber with an ST optic is required.</li>
                <li>'Transmit' and 'Receive' pairs.</li>
                <li>There are 8 contact closures going from the transmitter to the receiver.</li>
                <li>Latching (No 'NL' in the model number):</li>
                <li style={{"padding-left": "100px"}}>In the case of a loss of optical link, the relays will remain in the same state.</li>
                <li style={{"padding-left": "100px"}}>There is no summary fault relay.</li>
                <li>Non-latching (The 'NL' in the model number):</li>
                <li style={{"padding-left": "100px"}}>In the case of a loss of optical link, the relays will open.</li>
                <li style={{"padding-left": "100px"}}>There is no summary fault relay. However, it is possible to permanently close on of the relay channels, so that if it ever opens, it can be detected that there was a loss of optical link.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('fdc80')}> What are the applications for the FDC80? </button>
            {visibleAnswer === 'fdc80' && (
              <div className="faq-answer">
                <p>Applications:</p>
                <li>Using multimode fiber: FDC80TM1 on the transmit side. FDC80RM1 or FDC80NLRM1 on the receive side.</li>
                <li>Using singlemode fiber: FDC80RS1 on the transmit side. FDC80NLRS1 on the receive side.</li>
                <li>Using RS-485: FDC80T485 on the transmit side. FDC80R485 on the receive side.</li>
                <p>Relevant info:</p>
                <li>Only 1 fiber with an ST optic is required.</li>
                <li>'Transmit' and 'Receive' pairs.</li>
                <li>There are 8 contact closures going from the transmitter to the receiver.</li>
                <li>Latching (No 'NL' in the model number):</li>
                <li style={{"padding-left": "100px"}}>In the case of a loss of optical link, the relays will remain in the same state.</li>
                <li style={{"padding-left": "100px"}}>There is a summary fault relay.</li>
                <li>Non-latching (The 'NL' in the model number):</li>
                <li style={{"padding-left": "100px"}}>In the case of a loss of optical link, the relays will open.</li>
                <li style={{"padding-left": "100px"}}>There is a summary fault relay.</li>
                <p>Supervision</p>
                <li>The device can detect if there is a short circuit.</li>
                <li style={{"padding-left": "100px"}}>A slow fashing red LED indicates a short circuit.</li>
                <li>The device can detect if there are cut wires.</li>
                <li style={{"padding-left": "100px"}}>A fast fashing red LED indicates a cut wire.</li>
                <li>Transmitter</li>
                <li style={{"padding-left": "100px"}}>Flipping dip switch #1 on will allow for detection of short circuits.</li>
                <li style={{"padding-left": "100px"}}>Flipping dip switch #2 on will allow for detection of cut wires.</li>
                <li>Receiver</li>
                <li style={{"padding-left": "100px"}}>Flipping dip switch #1 on will add fiber loss to the summary fault relay.</li>
                <li style={{"padding-left": "100px"}}>Flipping dip switch #2 on will add contact faults to the summary fault relay.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('formA')}> What is a Form A relay? </button>
            {visibleAnswer === 'formA' && (
              <div className="faq-answer">
                <li>Form A relays are Single Pole Single Throw (SPST) normally open relays.</li>
                <li>When the relay coil in a Form A mechanical relay is not energized, or when there is no magnetic field nearby in a reed relay, the relay contacts are open.</li>
                <li>When the relay coil in a Form A relay is energized, or when a magnetic field exists nearby in a reed relay, the relay contacts close.</li>
                <li>Used in applications where you need to switch a circuit on when the relay is activated: common in simple on/off control circuits, like turning on a light or powering a device.</li>
                <img src="photos/FDC/FormA.png" style={{height: "400px"}}></img>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('formC')}> What is a Form C relay? </button>
            {visibleAnswer === 'formC' && (
              <div className="faq-answer">
                <li>Form C relays are Single Pole Double Throw (SPDT) relays with a normally open set of contacts and a normally closed set of contacts.</li>
                <li>When the relay coil is not energized, the relay contacts are open relative to normally open and common AND are closed relative to normally closed and common.</li>
                <li>When the relay coil is energized, the relay contacts are closed relative to normally open and common AND are open relative to normally closed and common.</li>
                <li>Form C relays are used in applications where you need to alternate between two circuits. It allows for switching between two states, such as toggling between two power sources or switching between two devices: like switching between a primary and backup power supply.</li>
                <img src="photos/FDC/FormC.png" style={{height: "400px"}}></img>
              </div>
            )}
          </div>
          <Fiber />
        </div>
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default ContactClosure;
