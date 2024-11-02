import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Global.css';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (buttonText) => {
    const formattedText = buttonText.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${formattedText}`);
  };

  return (
    <div>
      <Navbar />
      <main className='main-content'>
        <div className="middle-section"> 
          <div className="middle-section-left">
            <h1>Frequently Asked Questions</h1>
            <p>
              Thank you for choosing ComNet by acre.
            </p>
            <p>
              Select your product below. ↓
            </p>
          </div>
          <div className="middle-section-right">
            <img
              src='photos/image.jpg'
              alt='People looking at a phone'
              className='image-right'
            />
          </div> 
        </div>

        <div className='button-container'>
          {[
            'Switch',
            'Media Converter',
            'SFP',
            'Wireless',
            'Copper Line',
            'FDC',
            'FDX',
            'FDW',
            'Power Supply',
            'PoE Injector',
            'Card Cage',
            'Razberi',
          ].map(product => (
            <button
              key={product}
              className='product-button'
              onClick={() => handleButtonClick(product)}
            >
              {product}
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
