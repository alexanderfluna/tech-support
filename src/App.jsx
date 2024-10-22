import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Switch from './pages/Switch';
import Razberi from './pages/Razberi';
import FDC from './pages/FDC';
import FDW from './pages/FDW';
import FDX from './pages/FDX';
import MediaConverters from './pages/MediaConverters';
import Wireless from './pages/Wireless';
import SFP from './pages/SFPs';
import Copper_Line from './pages/CopperLine';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copper-line" element={<Copper_Line />} />
        <Route path="/razberi" element={<Razberi />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/fdc" element={<FDC />} />
        <Route path="/fdw" element={<FDW />} />
        <Route path="/fdx" element={<FDX />} />
        <Route path="/media-converters" element={<MediaConverters />} />
        <Route path="/wireless" element={<Wireless />} />
        <Route path="/sfp" element={<SFP />} />
      </Routes>
    </Router>
  );
};

export default App;
