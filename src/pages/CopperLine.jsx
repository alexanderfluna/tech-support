import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Chatbox from '../components/Chatbox';
import '../styles/Global.css';
import '../styles/Pages.css';

const CopperLine = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableOptions, setAvailableOptions] = useState({
    position: [],
    channels: [],
    formFactor: [],
    cable: [],
    poEInjection: []
  });

  const products = [
    { partNumber: "CLFE1EOC", position: "Local/Remote", channels: 1, formFactor: "Small Size", cable: "Coax",  poEInjection: "No" },
    { partNumber: "CLFE1EOU", position: "Local/Remote", channels: 1, formFactor: "Small Size", cable: "UTP",  poEInjection: "No" },
    { partNumber: "CLFE4EOC", position: "Local/Remote", channels: 4, formFactor: "ComFit (1 Slot)", cable: "Coax",  poEInjection: "No" },
    { partNumber: "CLFE4EOU", position: "Local/Remote", channels: 4, formFactor: "ComFit (1 Slot)", cable: "UTP",  poEInjection: "No" },
    { partNumber: "CLFE8EOC", position: "Local", channels: 8, formFactor: "1 RU 19” Rack Mount", cable: "Coax",  poEInjection: "No" },
    { partNumber: "CLFE8EOU", position: "Local", channels: 8, formFactor: "1 RU 19” Rack Mount", cable: "UTP",  poEInjection: "No" },
    { partNumber: "CLFE16EOC", position: "Local", channels: 16, formFactor: "1 RU 19” Rack Mount", cable: "Coax",  poEInjection: "No" },
    { partNumber: "CLFE16EOU", position: "Local", channels: 16, formFactor: "1 RU 19” Rack Mount", cable: "UTP",  poEInjection: "No" },
    { partNumber: "CLLFE1POEC", position: "Local", channels: 1, formFactor: "Small Size", cable: "Coax",  poEInjection: "Yes" },
    { partNumber: "CLRFE1POEC", position: "Remote", channels: 1, formFactor: "Small Size", cable: "Coax",  poEInjection: "Yes" },
    { partNumber: "CLLFE1POEU", position: "Local", channels: 1, formFactor: "Small Size", cable: "UTP",  poEInjection: "Yes" },
    { partNumber: "CLRFE1POEU", position: "Remote", channels: 1, formFactor: "Small Size", cable: "UTP",  poEInjection: "Yes" },
    { partNumber: "CLLFE4POEC", position: "Local", channels: 4, formFactor: "ComFit (1 Slot)", cable: "Coax",  poEInjection: "Yes" },
    { partNumber: "CLRFE4POEC", position: "Remote", channels: 4, formFactor: "ComFit (1 Slot)", cable: "Coax",  poEInjection: "Yes" },
    { partNumber: "CLLFE4POEU", position: "Local", channels: 4, formFactor: "ComFit (1 Slot)", cable: "UTP",  poEInjection: "Yes" },
    { partNumber: "CLRFE4POEU", position: "Remote", channels: 4, formFactor: "ComFit (1 Slot)", cable: "UTP",  poEInjection: "Yes" },
    { partNumber: "CLLFE8POEC", position: "Local", channels: 8, formFactor: "1 RU 19” Rack Mount", cable: "Coax",  poEInjection: "Yes" },
    { partNumber: "CLLFE8POEU", position: "Local", channels: 8, formFactor: "1 RU 19” Rack Mount", cable: "UTP",  poEInjection: "Yes" },
    { partNumber: "CLLFE16POEC", position: "Local", channels: 16, formFactor: "1 RU 19” Rack Mount", cable: "Coax",  poEInjection: "Yes" },
    { partNumber: "CLLFE16POEU", position: "Local", channels: 16, formFactor: "1 RU 19” Rack Mount", cable: "UTP",  poEInjection: "Yes" },
  ];

  const [filters, setFilters] = useState({
    position: null,
    channels: null,
    formFactor: null,
    cable: null,
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
    setFilters({ position: null, channels: null, formFactor: null, cable: null,  poEInjection: null }); 
  };

  const toggleTroubleshooting = () => {
    setShowTroubleshooting(!showTroubleshooting);
  }

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
    setFilters({ position: null, channels: null, formFactor: null, cable: null, poEInjection: null});
    setFilteredProducts(products); 
    updateAvailableOptions(products); 
  };

  const updateAvailableOptions = (filteredProducts) => {
    const position = [...new Set(filteredProducts.map((product) => product.position))];
    const channels = [...new Set(filteredProducts.map((product) => product.channels))];
    const formFactor = [...new Set(filteredProducts.map((product) => product.formFactor))];
    const cable = [...new Set(filteredProducts.map((product) => product.cable))];
    const poEInjection = [...new Set(filteredProducts.map((product) => product.poEInjection))];
    
    setAvailableOptions({ position, channels, formFactor, cable, poEInjection });
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Ethernet Extender</h2>
        <button className="purple-button" onClick={toggleFAQ}>
          Frequently Asked Questions
        </button>
        {showFAQ && (
          <>
            <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('CLFE(X)EO(U/C) to CLFE(X)EO(U/C)')}> CLFE(X)EO(U/C) to CLFE(X)EO(U/C) </button>
              {visibleAnswer === 'CLFE(X)EO(U/C) to CLFE(X)EO(U/C)' && (
                <div className="faq-answer">
                  <p><strong>Local vs. Remote:</strong> The units with 1 or 4 channels can be set as local or remote via the dip switch. The units with 8 or 16 channels can only be set as local.</p>
                  <p><strong>PoE:</strong> The devices cannot inject 48VDC. Instead, they support pass-through PoE at the 802.3af standard. There is no pass-through PoE when using one pair of UTP.</p>
                  <p><strong>LEDs:</strong> The entire setup must be connected for LEDs to be illuminated.</p>
                  <p><strong>Type the model number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a> to view the installation manual.</strong></p>
                  <li>Page 2: CLFE1EOC and CLFE1EOU images and dip switches.</li>
                  <li>Page 3: CLFE4EOC images and dip switches.</li>
                  <li>Page 4: CLFE4EOU images and dip switches.</li>
                  <li>Page 5: CLFE8EOC and CLFE8EOU images and dip switches.</li>
                  <li>Page 6: CLFE16EOC images and dip switches.</li>
                  <li>Page 7: CLFE16EOU images and dip switches.</li>
                  <li>Page 8: Application diagrams.</li>
                  <li>Page 9: Installation instructions, power table and LED table.</li>
                  <li>Page 10: Application notes, extended distance table, troubleshooting guide.</li>
                  <p><strong>The tables below shows the maximum distances Comnet's devices can extend Ethernet over coax, a single pair of UTP, or four pairs of UTP.</strong></p>
                  <li><strong>CLFE(X)EO(U/C) to CLFE(X)EO(U/C)</strong></li>
                  <img src="photos/CopperLine/Distance1.png" alt="CopperLine distance chart 1"></img>
                  <li><strong>CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)</strong></li>
                  <img src="photos/CopperLine/Distance2.png" alt="CopperLine distance chart 2"></img>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)')}> CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C) </button>
              {visibleAnswer === 'CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)' && (
                <div className="faq-answer">
                  <p><strong>Local (CLL) vs. Remote (CLR):</strong> The devices with 1, 4, 8, or 16 channels that begin with <strong>CLL</strong> are the local units. The devices with 1 or 4 channels that begin with <strong>CLR</strong> are the remote units.</p>
                  <p><strong>PoE:</strong> The local or remote device can inject 48VDC at the 802.3at standard. There is no pass-through PoE when using one pair of UTP.</p>
                  <p><strong>LEDs:</strong> The entire setup must be connected for LEDs to be illuminated.</p>
                  <p><strong>Type the model number into the <a href="https://acresecurity.com/secure-communications-networking-and-server-solutions/product-selector-tool">Product Selector Tool</a> to view the installation manual.</strong></p>
                  <li>Page 2: CLLFE1POEC and CLRFE1POEC images and dip switch.</li>
                  <li>Page 3: CLLFE1POEU and CLRFE1PEOU images and dip switches.</li>
                  <li>Page 4: CLLFE4POEC and CLRFE4PEOU images and dip switch.</li>
                  <li>Page 5: CLLFE4POEU and CLRFE4POEU images and dip switches.</li>
                  <li>Page 6: CLLFE8EOC images and dip switches.</li>
                  <li>Page 7: CLLFE8EOU images and dip switches.</li>
                  <li>Page 8: CLLFE16EOC images and dip switches.</li>
                  <li>Page 9: CLLFE16EOU images and dip switches.</li>
                  <li>Page 10: Application diagrams.</li>
                  <li>Page 11: Installation instructions, power table, LED table, and application notes.</li>
                  <li>Page 12: Extended distance table and troubleshooting guide</li>
                  <li>Page 13: Ferrite core</li>
                  <p><strong>The tables below shows the maximum distances Comnet's devices can extend Ethernet over coax, a single pair of UTP, or four pairs of UTP.</strong></p>
                  <li><strong>CLFE(X)EO(U/C) to CLFE(X)EO(U/C)</strong></li>
                  <img src="photos/CopperLine/Distance1.png" alt="CopperLine distance chart 1"></img>
                  <li><strong>CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)</strong></li>
                  <img src="photos/CopperLine/Distance2.png" alt="CopperLine distance chart 2"></img>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('copper')}> Learn about UTP </button>
              {visibleAnswer === 'copper' && (
                <div className="faq-answer">
                  <p><strong>Unshielded Twisted Pair (UTP)</strong> copper cables have a standard maximum transmission distance of 100 meters (328 feet) for Ethernet networks. This limitation exists because electrical signals weaken as they travel through the copper wires. The resistance in the cable causes signal loss, known as attenuation, which reduces the strength and quality of the transmitted data. Over longer distances, the receiving end may struggle to correctly interpret the signals, leading to data loss or transmission errors.</p>
                  <p>Another challenge with copper cables is their vulnerability to <strong>electromagnetic interference (EMI)</strong>. Nearby electrical devices, power lines, and even other network cables can introduce noise into the signal, causing disruptions and reducing overall performance. Over long distances, this interference becomes more noticeable, further degrading the signal quality and making communication unreliable.</p>
                  <p>For applications that require longer transmission distances without the need for fiber optics, extended copper solutions exist. Using technologies like <strong>DSL (Digital Subscriber Line)</strong> or <strong>BroadR-Reach,</strong> specialized network extenders can transmit data up to 2,000 feet. These solutions often require signal repeaters or amplification to maintain data integrity over such extended distances.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('coax')}> Learn about Coax </button>
              {visibleAnswer === 'coax' && (
                <div className="faq-answer">
                  <p><strong>BNC Connector:</strong> The BNC (Bayonet Neill-Concelman) connector is a small, quick-connect, twist-and-lock coaxial cable connector used in video, radio, and data transmission applications. It provides a secure connection and is commonly found in CCTV systems, radio communications, and older analog video setups. Unlike threaded connectors, the BNC’s bayonet-style design allows for quick installation and removal, making it ideal for professional video and networking environments.</p>
                  <p><strong>Coaxial Cable Transmission Distance:</strong> One of the advantages of coaxial cables is their ability to carry signals over longer distances compared to standard twisted-pair copper cables. This makes coax a viable option for legacy surveillance systems and specialized communication networks. However, over long distances, signal loss (attenuation) occurs, and amplifiers or repeaters may be needed to maintain signal integrity.</p>
                  <p><strong>Types of Coaxial Cables:</strong> Coaxial cables come in various types, each suited for specific applications. The most common types include RG11, RG6, and RG59, which differ in size, impedance, and usage. These cables are used in applications such as television broadcasting, security camera systems, and broadband internet. The impedance of a coaxial cable, usually 50 or 75 ohms, determines its electrical resistance and suitability for different signal types. Thicker cables like RG11 offer lower signal loss and longer transmission distances, while thinner cables like RG59 are more flexible and easier to install in tight spaces.</p>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "18px",
                      textAlign: "left",
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff" }}>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Cable Type</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Applications</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Impedance</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Size</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Max Distance</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Signal Loss</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "RG11", applications: "Used in long-distance video and internet connections", impedance: "75 Ohms", size: "Large", maxDistance: "Up to 1,500 ft", signalLoss: "Low" },
                        { type: "RG6", applications: "Used in satellite TV, cable systems, and broadband internet", impedance: "75 Ohms", size: "Medium", maxDistance: "Up to 1,000 ft", signalLoss: "Medium" },
                        { type: "RG59", applications: "Used in analog video applications, CCTV", impedance: "75 Ohms", size: "Small", maxDistance: "Up to 750 ft", signalLoss: "High" },
                        { type: "RG58", applications: "Used in radio and data communication", impedance: "50 Ohms", size: "Small", maxDistance: "Up to 500 ft", signalLoss: "Higher" },
                      ].map((item, index) => (
                        <tr
                          key={index}
                          style={{
                            backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                          }}
                        >
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.type}</td>
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.applications}</td>
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.impedance}</td>
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.size}</td>
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.maxDistance}</td>
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.signalLoss}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          </>
        )}
        <button className="purple-button" onClick={toggleTable}>
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
                    <th>PoE Injection</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff"}}>
                      <td>{product.partNumber}</td>
                      <td>{product.position}</td>
                      <td>{product.channels}</td>
                      <td>{product.formFactor}</td>
                      <td>{product.cable}</td>
                      <td>{product.poEInjection}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
      <Button />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default CopperLine;
