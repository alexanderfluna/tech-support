import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Enclosures from './pages/Enclosures';
import CopperLine from './pages/CopperLine';
import ContactClosure from './pages/ContactClosure';
import SerialData from './pages/SerialData';
import Wiegand from './pages/Wiegand';
import MediaConverter from './pages/MediaConverter/MediaConverter';
import PoEInjector from './pages/PoEInjector';
import PowerSupply from './pages/PowerSupply';
import Razberi from './pages/Razberi';
import SFP from './pages/SFP';
import EthernetSwitch from './pages/EthernetSwitch/EthernetSwitch';
import Wireless from './pages/Wireless';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tech-support" element={<Home />} />
        <Route path="/tech-support/enclosures" element={<Enclosures />} />
        <Route path="/tech-support/copper-line" element={<CopperLine />} />
        <Route path="/tech-support/contact-closure" element={<ContactClosure />} />
        <Route path="/tech-support/serial-data" element={<SerialData />} />
        <Route path="/tech-support/Wiegand" element={<Wiegand />} />
        <Route path="/tech-support/media-converter" element={<MediaConverter />} />
        <Route path="/tech-support/poe-injector" element={<PoEInjector />} />
        <Route path="/tech-support/power-supply" element={<PowerSupply />} />
        <Route path="/tech-support/razberi" element={<Razberi />} />
        <Route path="/tech-support/sfp" element={<SFP />} />
        <Route path="/tech-support/ethernet-switch" element={<EthernetSwitch />} />
        <Route path="/tech-support/wireless" element={<Wireless />} />
      </Routes>
    </Router>
  );
};

export default App;
