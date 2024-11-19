import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CardCage from './pages/CardCage';
import CopperLine from './pages/CopperLine';
import FDC from './pages/FDC';
import FDX from './pages/FDX';
import FDW from './pages/FDW';
import MediaConverter from './pages/MediaConverter';
import PoEInjector from './pages/PoEInjector';
import PowerSupply from './pages/PowerSupply';
import Razberi from './pages/Razberi';
import SFP from './pages/SFP';
import Switch from './pages/Switch';
import Wireless from './pages/Wireless';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tech-support" element={<Home />} />
        <Route path="/tech-support/card-cage" element={<CardCage />} />
        <Route path="/tech-support/copper-line" element={<CopperLine />} />
        <Route path="/tech-support/fdc" element={<FDC />} />
        <Route path="/tech-support/fdx" element={<FDX />} />
        <Route path="/tech-support/fdw" element={<FDW />} />
        <Route path="/tech-support/media-converter" element={<MediaConverter />} />
        <Route path="/tech-support/poe-injector" element={<PoEInjector />} />
        <Route path="/tech-support/power-supply" element={<PowerSupply />} />
        <Route path="/tech-support/razberi" element={<Razberi />} />
        <Route path="/tech-support/sfp" element={<SFP />} />
        <Route path="/tech-support/switch" element={<Switch />} />
        <Route path="/tech-support/wireless" element={<Wireless />} />
      </Routes>
    </Router>
  );
};

export default App;
