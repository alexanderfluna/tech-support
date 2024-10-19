import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const SFP = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>SFP</h2>
        <p>This is the SFP component!</p>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default SFP;
