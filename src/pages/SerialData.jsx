import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import NoPowerLight from '../relevant-information/NoPowerLight';
import Fiber from '../relevant-information/Fiber';
import '../styles/Global.css';
import '../styles/Pages.css';

const SerialData = () => {
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
        <h2 className="faq-title">Serial Data</h2>
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
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
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
            <button className="faq-question" onClick={() => toggleAnswer('no-communication')}> The serial data is not getting sent over the fiber. </button>
            {visibleAnswer === 'no-communication' && (
              <div className="faq-answer">
                <p>1. Ensure there are 120-omh resistors on the twisted pairs to prevent ringing.</p>
                <li>Lumped distance:</li>
                <li style={{"padding-left": "100px"}}>Where the resistors is placed doesn't matter because the devices are so close.</li>
                <li>Distributed distance:</li>
                <li style={{"padding-left": "100px"}}>The resistor must be placed at the end because the distance is so far.</li>
                <li>Impedance mismatch:</li>
                <li style={{"padding-left": "100px"}}>Occurs where two interconnected electronic devices or components have different impedance values (resistance to alternating current).</li>
                <li>Ringing</li>
                <li style={{"padding-left": "100px"}}>Reflection from one device back to the other.</li>
                <p>2. Verify the wires are connected properly:</p>
                <img src="photos/FDX/fdx60-wires.jpg"></img>
                <p>3. Confirm the dip switches are set correctly. Cycle power after changing the dip switch configuration:</p>
                <img src="photos/FDX/fdx60-switches.jpg"></img>
                <img src="photos/FDX/fdx60-led.jpg"></img>
              </div>
            )}
          </div>
        </div>

        <p className="faq-title">Frequently Asked Questions</p>
        <div className="faq-list">
        <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('fdx60')}> FDX60 </button>
            {visibleAnswer === 'fdx60' && (
              <div className="faq-answer">
                <p>Applications:</p>
                <li>Using 1 strand of multimode fiber: FDX60M1A or FDX60M1AM on one end. FDX60M1B or FDX60M1BM on the other.</li>
                <li>Using 1 strands of singlemode fiber: FDX60S1A or FDX60S1AM on one end. FDX60S1B or FDX60S1BM on the other.</li>
                <li>Using 2 strands of multimode fiber: FDX60M2 or FDX60M2M on one end. FDX60M2 or FDX60M2M on the other.</li>
                <li>Using 2 strands of singlemode fiber: FDX60S2 or FDX60S2M on one end. FDX60S2 or FDX60S2M on the other.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('terminal-server')}> CNFE3DOE2/M </button>
            {visibleAnswer === 'terminal-server' && (
              <div className="faq-answer">
                <p>Terminal Server</p>
                <li>Serial to Ethernet or Ethernet to Serial.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('rs232')}> RS-232 </button>
            {visibleAnswer === 'rs232' && (
              <div className="faq-answer">
                <li>Full deplex over 3 wires</li>
                <li style={{"padding-left": "100px"}}>One wire is ground.</li>
                <li style={{"padding-left": "100px"}}>One wire is transmit.</li>
                <li style={{"padding-left": "100px"}}>One wire is receive.</li>
                <li style={{"padding-left": "100px"}}>When transmitting, 1s and 0s are distinguished by the difference in voltage between the ground and the transmit wire.</li>
                <li style={{"padding-left": "100px"}}>When receiving, 1s and 0s are distinguished by the difference in voltage between the ground and the receive wire.</li>
                <li style={{"padding-left": "100px"}}>Because of this, RS-232 data is more susceptible to noise interference.</li>
                <li>Unbalanced (single ended)</li>
                <li>Point-to-point</li>
                <li>15 meters at 9600 bps</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('rs422')}> RS-422 </button>
            {visibleAnswer === 'rs422' && (
              <div className="faq-answer">
                <li>Full duplex over 4 wires</li>
                <li style={{"padding-left": "100px"}}>Two wire are transmit.</li>
                <li style={{"padding-left": "100px"}}>Two wire are receive.</li>
                <li style={{"padding-left": "100px"}}>When transmitting, 1s and 0s are distinguished by the difference in voltage between the D+ and D- wire.</li>
                <li style={{"padding-left": "100px"}}>Because of this, external noise affects both wires equally, and the receiver only looks at the voltage difference, rejecting the noise.</li>
                <li>Balanced (differential)</li>
                <li>Add/drop/repeat</li>
                <li>1200 meters at 9600 bps</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('rs485')}> RS-485 </button>
            {visibleAnswer === 'rs485' && (
              <div className="faq-answer">
                <p>2-wire RS-485</p>
                <li>Half duplex on 2 wires</li>
                <li style={{"padding-left": "100px"}}>The two wires switch between transmitting and receiving.</li>
                <li style={{"padding-left": "100px"}}>When transmitting, 1s and 0s are distinguished by the difference in voltage between the D+ and D- wire.</li>
                <li style={{"padding-left": "100px"}}>When receiving, 1s and 0s are distinguished by the difference in voltage between the D+ and D- wire.</li>
                <li>Balanced (differential)</li>
                <li>1200 meters at 9600 bps</li>
                <p>4-wire RS-485</p>
                <li>Full duplex over 4 wires</li>
                <li style={{"padding-left": "100px"}}>Two wire are transmit.</li>
                <li style={{"padding-left": "100px"}}>Two wire are receive.</li>
                <li style={{"padding-left": "100px"}}>When transmitting, 1s and 0s are distinguished by the difference in voltage between the D+ and D- wire.</li>
                <li style={{"padding-left": "100px"}}>Because of this, external noise affects both wires equally, and the receiver only looks at the voltage difference, rejecting the noise.</li>
                <li>Balanced (differential)</li>
                <li>Bus</li>
                <li>1200 meters at 9600 bps</li>
                <p>RS-485 bus:</p>
                <li style={{"padding-left": "50px"}}>High Impedance Load:</li>
                <li style={{"padding-left": "100px"}}>True 485 devices go into tri-state when transmitting or receiving data.</li>
                <li style={{"padding-left": "100px"}}>There can only be one device in tri-state at a time.</li>
                <li style={{"padding-left": "100px"}}>Connecting a resistance across the bus makes it look like there is only one device at a time.</li>
                <li style={{"padding-left": "50px"}}>Tri-state level detect</li>
                <li style={{"padding-left": "100px"}}>A device can only go into tri-state if a certain load threshold is met (e.g. 400 mV).</li>
                <li style={{"padding-left": "50px"}}>Turnaround time</li>
                <li style={{"padding-left": "100px"}}>Polling the device to see if they are ready to transmit data.</li>
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

export default SerialData;
