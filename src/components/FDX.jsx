import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const FDX = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>FDX</h2>
        <p>This is the FDX component!</p>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default FDX;
