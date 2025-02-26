import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../styles/Global.css';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (buttonText) => {
    const formattedText = buttonText.toLowerCase().replace(/\s+/g, '-');
    navigate(`/tech-support/${formattedText}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <main className='main-content'>
        <div className="middle-section"> 
          <div className="middle-section-left">
            <h1 style={{"font-size": "72px", color: "#22132B"}}>Technical Support</h1>
            <p>Our technical support page features product selector tools, how to troubleshoot common
            issues, and answers to frequently asked questions.</p>
            <p>Select your product below. ↓</p>
          </div>
          <div className="middle-section-right">
            <img
              src='https://acresecurity.com/hs-fs/hubfs/Landing%20pages/Landing%20Page%20Images/comnet%20by%20acre%20full%20product%20range.png?width=2000&height=1333&name=comnet%20by%20acre%20full%20product%20range.png" alt="Product Selector Tool - ComNet by acre" loading="lazy" 20by%20acre.webp?width=3000&amp;height=3000&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp 3000w, https://acresecurity.com/hs-fs/hubfs/Website/Pages/Landing%20Page/Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp?width=3600&amp;height=3600&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp'
              alt='Comnet devices'
              className='image-right'
            />
          </div> 
        </div>

        <div className='button-container'>
          {[
            'Ethernet Switch',
            'Media Converter',
            'Wireless',
            'Razberi',
            'SFP',
            'Copper Line',
            'Contact Closure',
            'Serial Data',
            'Wiegand',
            'Power Supply',
            'PoE Injector',
            'Enclosures',
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
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;