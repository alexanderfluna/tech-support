import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechSupport from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tech-support" element={<TechSupport />} />
      </Routes>
    </Router>
  );
};

export default App;
