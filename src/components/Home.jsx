import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (buttonText) => {
    const formattedText = buttonText.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${formattedText}`);
  };

  return (
    <div>
      <Navbar />
      {/* Main Content */}
      <main className='main-content'>
        <h1>FAQ</h1>
        <p>
          Thank you for choosing ComNet by acre. We understand you may have some questions.
        </p>
        <p>
          Select your product below ↓
        </p>

        <img
          src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-2.svg'
          alt='Wave divider'
          className='full-width-image'
        />

        {/* Product Buttons */}
        <div className='button-container'>
          {[
            'Switches',
            'Wireless',
            'Copper Line',
            'Media Converters',
            'FDC',
            'FDX',
            'FDW',
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

        <img
          src='https://acresecurity.com/hubfs/Website/Global/Images/Dividers/divider-1.svg'
          alt='Wave divider'
          className='full-width-image'
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
