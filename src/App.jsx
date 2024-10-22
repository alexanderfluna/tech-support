import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Switch from './pages/Switch';
import Razberi from './pages/Razberi';
import FDC from './pages/FDC';
import FDW from './pages/FDW';
import FDX from './pages/FDX';
import MediaConverter from './pages/MediaConverter';
import Wireless from './pages/Wireless';
import SFP from './pages/SFP';
import CopperLine from './pages/CopperLine';
import PowerSupplyPoEInjector from './pages/PowerSupply';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copper-line" element={<CopperLine />} />
        <Route path="/razberi" element={<Razberi />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/fdc" element={<FDC />} />
        <Route path="/fdw" element={<FDW />} />
        <Route path="/fdx" element={<FDX />} />
        <Route path="/media-converter" element={<MediaConverter />} />
        <Route path="/wireless" element={<Wireless />} />
        <Route path="/sfp" element={<SFP />} />
        <Route path="/power-supply-or-poe-injector" element={<PowerSupplyPoEInjector />} />
      </Routes>
    </Router>
  );
};

export default App;
