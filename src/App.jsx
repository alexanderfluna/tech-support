import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Switches from './components/Switches';
import Razberi from './components/Razberi';
import FDC from './components/FDC';
import FDW from './components/FDW';
import FDX from './components/FDX';
import MediaConverters from './components/Media_Converters';
import Wireless from './components/Wireless';
import SFP from './components/SFP';
import Copper_Line from './pages/Copper_Line';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copper-line" element={<Copper_Line />} />
        <Route path="/razberi" element={<Razberi />} />
        <Route path="/switches" element={<Switches />} />
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
