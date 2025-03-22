import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Version 1
import Home from './version1/pages/Home';
import Enclosures from './version1/pages/Enclosures';
import CopperLine from './version1/pages/CopperLine';
import ContactClosure from './version1/pages/ContactClosure';
import SerialData from './version1/pages/SerialData';
import Wiegand from './version1/pages/Wiegand';
import MediaConverter from './version1/pages/MediaConverter/MediaConverter';
import PoEInjector from './version1/pages/PoEInjector';
import PowerSupply from './version1/pages/PowerSupply';
import Razberi from './version1/pages/Razberi';
import SFP from './version1/pages/SFP';
import EthernetSwitch from './version1/pages/EthernetSwitch/EthernetSwitch';
import Wireless from './version1/pages/Wireless/Wireless';

// Version 2
import TechSupport from './version2/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/TechSupport" element={<Home />} />
        <Route path="/TechSupport/enclosures" element={<Enclosures />} />
        <Route path="/TechSupport/ethernet-extender" element={<CopperLine />} />
        <Route path="/TechSupport/contact-closure" element={<ContactClosure />} />
        <Route path="/TechSupport/serial-data" element={<SerialData />} />
        <Route path="/TechSupport/Wiegand" element={<Wiegand />} />
        <Route path="/TechSupport/media-converter" element={<MediaConverter />} />
        <Route path="/TechSupport/poe-injector" element={<PoEInjector />} />
        <Route path="/TechSupport/power-supply" element={<PowerSupply />} />
        <Route path="/TechSupport/razberi-server" element={<Razberi />} />
        <Route path="/TechSupport/sfp" element={<SFP />} />
        <Route path="/TechSupport/ethernet-switch" element={<EthernetSwitch />} />
        <Route path="/TechSupport/wireless-ethernet" element={<Wireless />} />

        <Route path="/tech-support" element={<TechSupport />} />
      </Routes>
    </Router>
  );
};

export default App;
