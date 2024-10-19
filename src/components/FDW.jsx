import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const FDW = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>FDW</h2>
        <p>This is the FDW component!</p>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default FDW;
