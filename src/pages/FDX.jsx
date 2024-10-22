import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../styles/style.css';
import '../styles/Pages.css'; 

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
