import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../styles/style.css';
import '../styles/Pages.css'; 

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
