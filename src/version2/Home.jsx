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
import Razberi from "./pages/Razberi/Razberi";
import RazberiProducts from "./pages/Razberi/RazberiProducts";  // Import Razberi products
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
  RazberiServer: { 
    products: RazberiProducts,
    selectorTool: Razberi,
    faq: Razberi,
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
      <div style={{
          backgroundColor: '#f5f5f5', 
          width: '75%', 
          margin: '0 auto', 
          padding: '40px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          textAlign: 'center'
        }}>
        
        <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(135deg, rgb(35, 87, 150), rgb(158, 158, 158))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center"
          }}>
            Technical Support
        </h1>

        <h2 style={{
          fontSize: "1.1rem", 
          color: "#555", 
          marginBottom: "30px", 
          lineHeight: "1.6", 
          fontWeight: "500"
        }}>
          Our technical support page offers part number selector tools, answers to frequently asked questions, and how to troubleshoot common issues.
        </h2>

        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '20px',
          flexDirection: 'column',
        }}>
          <img
            src='https://acresecurity.com/hs-fs/hubfs/Landing%20pages/Landing%20Page%20Images/comnet%20by%20acre%20full%20product%20range.png?width=2000&height=1333&name=comnet%20by%20acre%20full%20product%20range.png'
            alt='Product Selector Tool - ComNet by acre'
            loading="lazy"
            style={{
              width: '100%', 
              maxWidth: '700px', 
              height: 'auto', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              marginTop: '20px'
            }} 
          />
        </div>
      </div> 
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
        setSearchTerm(''); // Clear the search input field after selection
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
      <div style={{ display: "flex", flexDirection: "row", maxWidth: "1500px", margin: "0 auto", padding: "20px 0px", backgroundColor: '#f5f5f5' }}>
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

        <div className="mainContent" style={{ width: "75%", backgroundColor: '#f5f5f5', borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginLeft: "20px" }}>
          {mainContent}
        </div>
      </div>
      <Chatbox />
    </div>
  );
};

export default Home;
