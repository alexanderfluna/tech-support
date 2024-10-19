import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const Razberi = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Razberi</h2>
        <p>This is the Razberi component!</p>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default Razberi;
