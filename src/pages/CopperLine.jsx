import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../styles/style.css';
import '../styles/Pages.css'; 

const CopperLine = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Copper Line</h2>
        <p>This is the copper line component!</p>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default CopperLine;
