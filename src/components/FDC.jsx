import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const FDC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>FDC</h2>
        <p>This is the FDC component!</p>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default FDC;
