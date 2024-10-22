import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/style.css';
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
      {/* Main Content */}
      <main className='main-content'>
        <h1>PRE-RMA TROUBLESHOOTING</h1>

        <div className="middle-section"> 
          <div className="middle-section-left">
            <p>
              Thank you for choosing ComNet by acre. Before sending in the device for an RMA, let's do some troubleshooting.
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

        {/* Product Buttons */}
        <div className='button-container'>
          {[
            'Switch',
            'Media Converter',
            'Copper Line',
            'Wireless',
            'FDC',
            'FDW',
            'FDX',
            'SFP',
            'Power Supply Or PoE Injector',
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
