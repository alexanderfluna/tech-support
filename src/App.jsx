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
        <Route path="/" element={<Home />} />
        <Route path="/card-cage" element={<CardCage />} />
        <Route path="/copper-line" element={<CopperLine />} />
        <Route path="/fdc" element={<FDC />} />
        <Route path="/fdx" element={<FDX />} />
        <Route path="/fdw" element={<FDW />} />
        <Route path="/media-converter" element={<MediaConverter />} />
        <Route path="/poe-injector" element={<PoEInjector />} />
        <Route path="/power-supply" element={<PowerSupply />} />
        <Route path="/razberi" element={<Razberi />} />
        <Route path="/sfp" element={<SFP />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/wireless" element={<Wireless />} />
      </Routes>
    </Router>
  );
};

export default App;
