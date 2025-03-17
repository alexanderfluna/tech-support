import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import EthernetSwitchProducts from "./products/EthernetSwitchProducts";
import EthernetSwitchFAQ from '../pages/EthernetSwitch/EthernetSwitchFAQ';
import EthernetSwitchSelectorTool from '../pages/EthernetSwitch/EthernetSwitchSelectorTool';

const TechSupport = () => {
  const [modelName, setModelName] = useState(null);
  const [mainContent, setMainContent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showProducts, setShowProducts] = useState(false);
  const [showProducts2, setShowProducts2] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const displayContent = (content, model) => {
    setModelName(model);
    setMainContent(content);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    if (searchValue) {
      const filtered = EthernetSwitchProducts.filter(product =>
        product.Model.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filtered.slice(0, 5));
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductSelect = (model) => {
    const product = EthernetSwitchProducts.find(p => p.Model === model);
    if (product) {
      displayContent(<EthernetSwitchFAQ />, model);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "30%", padding: "10px", backgroundColor: "#f8f9fa", borderRight: "2px solid #ccc" }}>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <input
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Enter product number..."
              style={{ flex: 1, padding: "8px", border: "1px solid #ccc", borderRadius: "4px", marginRight: "5px" }}
            />
            <button
              style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "4px", cursor: "pointer" }}
              onClick={() => {
                const product = EthernetSwitchProducts.find(product => product.Model === searchTerm);
                if (product) {
                  displayContent(<EthernetSwitchFAQ />, product.Model);
                } else {
                  alert('Product not found!');
                }
              }}
            >
              Enter
            </button>
          </div>

          {/* Show filtered product suggestions */}
          {searchTerm && filteredProducts.length > 0 && (
            <div style={{ marginTop: "10px", maxHeight: "200px", overflowY: "auto" }}>
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  style={{
                    padding: "8px",
                    backgroundColor: "#f0f0f0",
                    marginBottom: "5px",
                    cursor: "pointer",
                    borderRadius: "4px"
                  }}
                  onClick={() => handleProductSelect(product.Model)}
                >
                  {product.Model}
                </div>
              ))}
            </div>
          )}

          <button
            style={{ backgroundColor: "#6a0dad", color: "#fff", border: "none", padding: "10px", marginBottom: "5px", cursor: "pointer", borderRadius: "4px" }}
            onClick={() => {
              setSelectedCategory("Ethernet Switch");
              setShowProducts(!showProducts)
            }}
          >
            Ethernet Switch
          </button>
          {showProducts && (
            <>
              <button onClick={() => { displayContent(<EthernetSwitchSelectorTool />) }} style={{ padding: "8px", marginBottom: "5px", backgroundColor: "#ddd", border: "none", borderRadius: "4px" }}>Selector Tool</button>
              <button onClick={() => { setShowProducts2(!showProducts2)}} style={{ padding: "8px", marginBottom: "5px", backgroundColor: "#ddd", border: "none", borderRadius: "4px" }}>Products</button>
              
              {showProducts2 && (
                <>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {EthernetSwitchProducts.map((product, index) => (
                      <button onClick={() => { displayContent(<EthernetSwitchFAQ />, product.Model) }} key={index} style={{ margin: "5px" }}>
                        {product.Model}
                      </button>
                    ))}
                  </div>
                </>
              )}

            </>
          )}

          {/* Other category buttons here */}
        </div>

        <div className="mainContent" style={{ border: "1px solid #ccc", width: "70%", textAlign: "center", padding: "20px", backgroundColor: "#fff", borderRadius: "5px" }}>
          {modelName}
          {mainContent}
        </div>
      </div>
    </div>
  );
};

export default TechSupport;
