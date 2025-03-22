import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Chatbox from './components/Chatbox';
import EthernetSwitchProducts from "./pages/EthernetSwitch/EthernetSwitchProducts";
import EthernetSwitchSelectorTool from './pages/EthernetSwitch/EthernetSwitchSelectorTool';
import EthernetSwitchFAQ from './pages/EthernetSwitch/EthernetSwitchFAQ';
import MediaConverterProducts from "./pages/MediaConverter/MediaConverterProducts";
import MediaConverterSelectorTool from "./pages/MediaConverter/MediaConverterSelectorTool";
import MediaConverterFAQ from "./pages/MediaConverter/MediaConverterFAQ";
import WirelessProducts from "./pages/Wireless/WirelessProducts";
import Wireless from "./pages/Wireless/Wireless";

const Home = () => {
  const [modelName, setModelName] = useState(null);
  const [mainContent, setMainContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryContent, setCategoryContent] = useState(null);

  useEffect(() => {
    setMainContent(
      <>
        <h1>Technical Support</h1>
        <h2>Thank you for choosing Comnet. Our technical support page offers part number selector tools, answers to frequently asked questions, and how to troubleshoot common issues.</h2>
        <a href="">Product Selector Tool</a>
      </>
    );
  }, []);

  const displayContent = (content, model) => {
    setModelName(model);
    setMainContent(content);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    if (searchValue) {
      const filteredEthernet = EthernetSwitchProducts.filter(product =>
        product.Model.toLowerCase().includes(searchValue.toLowerCase())
      );
      const filteredMediaConverters = MediaConverterProducts.filter(product =>
        product.Model.toLowerCase().includes(searchValue.toLowerCase())
      );
      const filteredWireless = WirelessProducts.filter(product =>
        product.Model.toLowerCase().includes(searchValue.toLowerCase())
      );

      // Combine all filtered arrays
      const combinedFiltered = [
        ...filteredEthernet,
        ...filteredMediaConverters,
        ...filteredWireless
      ];
      setFilteredProducts(combinedFiltered.slice(0, 5));
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductSelect = (model) => {
    const selectedEthernetProduct = EthernetSwitchProducts.find(p => p.Model === model);
    const selectedMediaConverterProduct = MediaConverterProducts.find(p => p.Model === model);
    const selectedWirelessProduct = WirelessProducts.find(p => p.Model === model);

    if (selectedEthernetProduct) {
      displayContent(<EthernetSwitchFAQ />, model);
    } else if (selectedMediaConverterProduct) {
      displayContent(<MediaConverterFAQ />, model);
    } else if (selectedWirelessProduct) {
      displayContent(<Wireless />, model);
    }
  };

  const handleCategorySelect = (category) => {
    setCategoryContent(category);
    if (category === 'Ethernet Switch') {
      displayContent(
        <>
          <EthernetSwitchSelectorTool />
          <EthernetSwitchFAQ />
        </>
      );
    } else if (category === 'Media Converter') {
      displayContent(
        <>
          <MediaConverterSelectorTool />
          <MediaConverterFAQ />
        </>
      );
    } else if (category === 'Wireless') {
      displayContent(
        <>
          <Wireless />
        </>
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>

        {/* Sidenav */}
        <div style={{ display: "flex", flexDirection: "column", width: "25%", padding: "10px", backgroundColor: "#f8f9fa", borderRight: "2px solid #ccc" }}>
          
          {/* Search box */}
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
                const product = [
                  ...EthernetSwitchProducts,
                  ...MediaConverterProducts,
                  ...WirelessProducts
                ].find(product => product.Model === searchTerm);
                if (product) {
                  displayContent(
                    product.Model.includes("Ethernet") ? <EthernetSwitchFAQ /> :
                    product.Model.includes("Media Converter") ? <MediaConverterFAQ /> :
                    <Wireless />,
                    product.Model
                  );
                }
              }}
            >
              Enter
            </button>
          </div>

          {searchTerm && filteredProducts.length > 0 && (
            <div style={{ marginTop: "10px", maxHeight: "200px" }}>
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

          {/* Ethernet Switches */}
          <button
            style={{ backgroundColor: "#6a0dad", color: "#fff", border: "none", padding: "10px", marginBottom: "5px", cursor: "pointer", borderRadius: "4px" }}
            onClick={() => handleCategorySelect('Ethernet Switch')}
          >
            Ethernet Switch
          </button>

          {/* Media Converters */}
          <button
            style={{ backgroundColor: "#6a0dad", color: "#fff", border: "none", padding: "10px", marginBottom: "5px", cursor: "pointer", borderRadius: "4px" }}
            onClick={() => handleCategorySelect('Media Converter')}
          >
            Media Converter
          </button>

          {/* Wireless */}
          <button
            style={{ backgroundColor: "#6a0dad", color: "#fff", border: "none", padding: "10px", marginBottom: "5px", cursor: "pointer", borderRadius: "4px" }}
            onClick={() => handleCategorySelect('Wireless')}
          >
            Wireless
          </button>

        </div>

        {/* Main Content */}
        <div className="mainContent" style={{ border: "1px solid #ccc", width: "75%", textAlign: "center", backgroundColor: "#fff", borderRadius: "5px" }}>
          <div style={{ fontSize: "36px", fontWeight: "bold" }}>{modelName}</div>
          {mainContent}
        </div>
      </div>
      <Chatbox />
    </div>
  );
};

export default Home;
