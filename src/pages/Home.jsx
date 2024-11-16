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
    navigate(`/${formattedText}`);
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
            <h1>ComNet Technical Support</h1>
            <p>
              Thank you for choosing ComNet by acre.
            </p>
            <p>
              Select your product below. ↓
            </p>
          </div>
          <div className="middle-section-right">
            <img
              src='https://acresecurity.com/hs-fs/hubfs/Website/Pages/Landing%20Page/Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp?width=1200&amp;height=1200&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp" alt="Product Selector Tool - ComNet by acre" loading="lazy" width="1200" height="1200" class="bg-img static md:bg-0 md:absolute order-1 md:order-2 ml-auto md:ml-auto right:0 md:-right-32 bottom-0 md:bottom-12 lg:-bottom-12 xl:-bottom-28 mb-5 md:mb-0 -mt-8 md:mt-0" srcset="https://acresecurity.com/hs-fs/hubfs/Website/Pages/Landing%20Page/Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp?width=600&amp;height=600&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp 600w, https://acresecurity.com/hs-fs/hubfs/Website/Pages/Landing%20Page/Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp?width=1200&amp;height=1200&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp 1200w, https://acresecurity.com/hs-fs/hubfs/Website/Pages/Landing%20Page/Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp?width=1800&amp;height=1800&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp 1800w, https://acresecurity.com/hs-fs/hubfs/Website/Pages/Landing%20Page/Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp?width=2400&amp;height=2400&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp 2400w, https://acresecurity.com/hs-fs/hubfs/Website/Pages/Landing%20Page/Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp?width=3000&amp;height=3000&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp 3000w, https://acresecurity.com/hs-fs/hubfs/Website/Pages/Landing%20Page/Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp?width=3600&amp;height=3600&amp;name=Product%20Selector%20Tool%20-%20ComNet%20by%20acre.webp'
              alt='Two people'
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
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
