import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Chatbox from './components/Chatbox';
import EthernetSwitch from './pages/EthernetSwitch/EthernetSwitch';
import EthernetSwitchProducts from "./pages/EthernetSwitch/EthernetSwitchProducts";
import MediaConverter from "./pages/MediaConverter/MediaConverter";
import MediaConverterProducts from "./pages/MediaConverter/MediaConverterProducts";
import SFP from "./pages/SFP/SFP"; 
import SFPProducts from "./pages/SFP/SFPProducts";
import Wireless from "./pages/Wireless/Wireless";
import WirelessProducts from "./pages/Wireless/WirelessProducts";
import EthernetExtender from "./pages/EthernetExtender/EthernetExtender";
import EthernetExtenderProducts from "./pages/EthernetExtender/EthernetExtenderProducts";
import ContactClosure from "./pages/ContactClosure/ContactClosure";
import ContactClosureProducts from "./pages/ContactClosure/ContactClosureProducts";
import SerialData from "./pages/SerialData/SerialData";
import SerialDataProducts from "./pages/SerialData/SerialDataProducts";
import Wiegand from "./pages/Wiegand/Wiegand";
import WiegandProducts from "./pages/Wiegand/WiegandProducts";
import PowerSupply from "./pages/PowerSupply/PowerSupply";
import PowerSupplyProducts from "./pages/PowerSupply/PowerSupplyProducts";
import PoeInjector from "./pages/PoeInjector/PoeInjector";
import PoeInjectorProducts from "./pages/PoeInjector/PoeInjectorProducts";
import Enclosures from "./pages/Enclosure/Enclosures";
import EnclosureProducts from "./pages/Enclosure/EnclosureProducts";

const productsConfig = {
  EthernetSwitch: {
    products: EthernetSwitchProducts,
    selectorTool: EthernetSwitch,
    faq: EthernetSwitch,
  },
  MediaConverter: {
    products: MediaConverterProducts,
    selectorTool: MediaConverter,
    faq: MediaConverter,
  },
  WirelessEthernet: {
    products: WirelessProducts,
    selectorTool: Wireless,
    faq: Wireless,
  },
  SFP: {
    products: SFPProducts,
    selectorTool: SFP,
    faq: SFP,
  },
  EthernetExtender: {
    products: EthernetExtenderProducts,
    selectorTool: EthernetExtender,
    faq: EthernetExtender,
  },
  ContactClosure: {
    products: ContactClosureProducts,
    selectorTool: ContactClosure,
    faq: ContactClosure,
  },
  SerialData: {
    products: SerialDataProducts,
    selectorTool: SerialData,
    faq: SerialData,
  },
  Wiegand: {
    products: WiegandProducts,
    selectorTool: Wiegand,
    faq: Wiegand,
  },
  PowerSupply: {
    products: PowerSupplyProducts,
    selectorTool: PowerSupply,
    faq: PowerSupply,
  },
  PoeInjector: {
    products: PoeInjectorProducts,
    selectorTool: PoeInjector,
    faq: PoeInjector,
  },
  Enclosure: {
    products: EnclosureProducts,
    selectorTool: Enclosures,
    faq: Enclosures,
  },
};

const Home = () => {
  const [modelName, setModelName] = useState(null);
  const [mainContent, setMainContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setMainContent(
      <>
        <h1 style={{ fontSize: "5rem", marginBottom: "20px" }}>Technical Support</h1>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Thank you for choosing Comnet. Our technical support page offers part number selector tools, answers to frequently asked questions, and how to troubleshoot common issues.</h2>
        <h2>The <a href="" style={{ color: "#1a237e", textDecoration: "none", fontWeight: "bold" }}>Product Selector Tool</a> contains the data sheet and installation manual for each unit.</h2>
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
      const allProducts = Object.values(productsConfig).flatMap(
        (config) => config.products
      );

      const filtered = allProducts.filter((product) =>
        product.Model.toLowerCase().includes(searchValue.toLowerCase())
      );

      setFilteredProducts(filtered.slice(0, 5));
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductSelect = (model) => {
    for (const [category, config] of Object.entries(productsConfig)) {
      const product = config.products.find((p) => p.Model === model);
      if (product) {
        displayContent(<config.faq />, model);
        return;
      }
    }
  };

  const handleCategorySelect = (category) => {
    const config = productsConfig[category];
    if (config) {
      displayContent(<config.selectorTool />);
    } else {
      displayContent(<h2 style={{ color: "#e74c3c" }}>Category Not Found</h2>);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row", maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "25%", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}>
            <input
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Enter product number..."
              style={{ flex: 1, padding: "10px", border: "1px solid #bdc3c7", borderRadius: "4px", marginRight: "10px", fontSize: "1rem" }}
            />
          </div>

          {searchTerm && filteredProducts.length > 0 && (
            <div style={{ marginTop: "10px", maxHeight: "200px", overflowY: "auto" }}>
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  style={{
                    padding: "10px",
                    backgroundColor: "#f0f0f0",
                    marginBottom: "5px",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.3s",
                  }}
                  onClick={() => handleProductSelect(product.Model)}
                >
                  {product.Model}
                </div>
              ))}
            </div>
          )}

          {Object.keys(productsConfig).map((category, index) => (
            <button
              key={index}
              style={{ 
                backgroundColor: "#1a237e", 
                color: "#fff", 
                border: "none", 
                padding: "12px", 
                marginBottom: "10px", 
                cursor: "pointer", 
                borderRadius: "4px", 
                fontSize: "1rem", 
                transition: "background-color 0.3s",
                background: "linear-gradient(135deg,rgb(35, 87, 150),rgb(158, 158, 158))"
              }}
              onClick={() => handleCategorySelect(category)}
            >
              {category.replace(/([a-z])([A-Z])/g, '$1 $2')}
            </button>
          ))}

        </div>

        <div className="mainContent" style={{ width: "75%", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginLeft: "20px" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a237e", marginBottom: "20px" }}>{modelName}</div>
          {mainContent}
        </div>
      </div>
      <Chatbox />
    </div>
  );
};

export default Home;