import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const Wireless = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Wireless</h2>
        <p>This is the Wireless component!</p>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default Wireless;
