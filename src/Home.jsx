import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Chatbox from './components/Chatbox';

// Ethernet Switch
import EthernetSwitch from './pages/EthernetSwitch/EthernetSwitch';
import EthernetSwitchProducts from "./pages/EthernetSwitch/EthernetSwitchProducts";
import EthernetSwitchTroubleshooting from './pages/EthernetSwitch/EthernetSwitchTroubleshooting';
import EthernetSwitchSelectorTool from './pages/EthernetSwitch/EthernetSwitchSelectorTool';
import EthernetSwitchFAQ from './pages/EthernetSwitch/EthernetSwitchFAQ';

// Media Converter
import MediaConverter from "./pages/MediaConverter/MediaConverter";
import MediaConverterProducts from "./pages/MediaConverter/MediaConverterProducts";
import MediaConverterTroubleshooting from './pages/MediaConverter/MediaConvererTroubleshooting';
import MediaConverterSelectorTool from './pages/MediaConverter/MediaConverterSelectorTool';
import MediaConverterFAQ from './pages/MediaConverter/MediaConverterFAQ';

// Wireless
import Wireless from "./pages/Wireless/Wireless";
import WirelessProducts from "./pages/Wireless/WirelessProducts";
import WirelessTroubleshooting from './pages/Wireless/WirelessTroubleshooting';
import WirelessSelectorTool from './pages/Wireless/WirelessSelectorTool';
import WirelessFAQ from './pages/Wireless/WirelessFAQ';

// SFP
import SFP from "./pages/SFP/SFP"; 
import SFPProducts from "./pages/SFP/SFPProducts";
import SFPSelectorTool from './pages/SFP/SFPSelectorTool';
import SFPFAQ from './pages/SFP/SFPFAQ';

// Razberi
import Razberi from "./pages/Razberi/Razberi";
import RazberiProducts from "./pages/Razberi/RazberiProducts";
import RazberiTroubleshooting from './pages/Razberi/RazberiTroubleshooting';
import RazberiSelectorTool from './pages/Razberi/RazberiSelectorTool';
import RazberiFAQ from './pages/Razberi/RazberiFAQ';

// Ethernet Extender
import EthernetExtender from "./pages/EthernetExtender/EthernetExtender";
import EthernetExtenderProducts from "./pages/EthernetExtender/EthernetExtenderProducts";
import EthernetExtenderTroubleshooting from './pages/EthernetExtender/EthernetExtenderTroubleshooting';
import EthernetExtenderSelectorTool from './pages/EthernetExtender/EthernetExtenderSelectorTool';
import EthernetExtenderFAQ from './pages/EthernetExtender/EthernetExtenderFAQ';

// Contact Closure
import ContactClosure from "./pages/ContactClosure/ContactClosure";
import ContactClosureProducts from "./pages/ContactClosure/ContactClosureProducts";
import ContactClosureTroubleshooting from './pages/ContactClosure/ContactClosureTroubleshooting';
import ContactClosureSelectorTool from './pages/ContactClosure/ContactClosureSelectorTool';
import ContactClosureFAQ from './pages/ContactClosure/ContactClosureFAQ';

// Serial Data
import SerialData from "./pages/SerialData/SerialData";
import SerialDataProducts from "./pages/SerialData/SerialDataProducts";
import SerialDataTroubleshooting from './pages/SerialData/SerialDataTroubleshooting';
import SerialDataSelectorTool from './pages/SerialData/SerialDataSelectorTool';
import SerialDataFAQ from './pages/SerialData/SerialDataFAQ';

// Wiegand
import Wiegand from "./pages/Wiegand/Wiegand";
import WiegandProducts from "./pages/Wiegand/WiegandProducts";
import WiegandSelectorTool from './pages/Wiegand/WiegandSelectorTool';
import WiegandFAQ from './pages/Wiegand/WiegandFAQ';

// Power Supply
import PowerSupply from "./pages/PowerSupply/PowerSupply";
import PowerSupplyProducts from "./pages/PowerSupply/PowerSupplyProducts";

// PoE Injector
import PoeInjector from "./pages/PoeInjector/PoeInjector";
import PoeInjectorProducts from "./pages/PoeInjector/PoeInjectorProducts";

// Enclosure
import Enclosures from "./pages/Enclosure/Enclosures";
import EnclosureProducts from "./pages/Enclosure/EnclosureProducts";
import "./styles/Home.css"

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
  const [mainContent, setMainContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setMainContent(
      <>
        <div className="container">
          <h1 className="title">
            Technical Support
          </h1>

          <h1 className="subtitle">
            Our technical support page offers selector tools, answers to frequently asked questions, and how to troubleshoot common issues. Enter a product number in the search box or click on one of the product categories.

          </h1>

          <h2 className="subtitle">
          </h2>

          <div className="image-container">
            <img
              src='https://acresecurity.com/hs-fs/hubfs/Landing%20pages/Landing%20Page%20Images/comnet%20by%20acre%20full%20product%20range.png?width=2000&height=1333&name=comnet%20by%20acre%20full%20product%20range.png'
              alt='Product Selector Tool - ComNet by acre'
              loading="lazy"
              className="image"
            />
          </div>
        </div>
      </>

    );
  }, []);

  const displayContent = (content, model) => {
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
    <div  style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <div  className="main">
        <div className="search-container">
          <div className="search-input-container">
            <input
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Enter product number..."
              className="search-input"
            />
          </div>

          {searchTerm && filteredProducts.length > 0 && (
            <div className="search-results">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="search-result-item"
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
              className="category-button"
              onClick={() => handleCategorySelect(category)}
            >
              {category.replace(/([a-z])([A-Z])/g, "$1 $2")}
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
