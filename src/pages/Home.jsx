import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../styles/Global.css';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const videoDesktopRef = useRef(null);
  const videoMobileRef = useRef(null);
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(true);

  useEffect(() => {
    const videoDesktop = videoDesktopRef.current;
    const videoMobile = videoMobileRef.current;

    if (videoDesktop && videoMobile) {
      const handleVideoEnd = () => {
        setIsDesktopPlaying((prev) => !prev);
      };

      videoDesktop.addEventListener('ended', handleVideoEnd);
      videoMobile.addEventListener('ended', handleVideoEnd);

      return () => {
        videoDesktop.removeEventListener('ended', handleVideoEnd);
        videoMobile.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  useEffect(() => {
    // Play the active video
    if (isDesktopPlaying && videoDesktopRef.current) {
      videoDesktopRef.current.play();
    } else if (videoMobileRef.current) {
      videoMobileRef.current.play();
    }
  }, [isDesktopPlaying]);

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
      <main className="main-content">
        <div className="middle-section">
        <div className="middle-section-left">
          <h1 className="header-title">Comnet by acre</h1>
          <h1 className="header-support">Technical Support</h1>
          <p className="description">
            Our technical support page features product selector tools, how to troubleshoot common
            issues, and answers to frequently asked questions.
          </p>
          <p className="scroll-text">
            Scroll down to select your product.
            <span className="arrow">↓</span>
          </p>
        </div>
          <div
            className="middle-section-right"
            style={{
              position: 'relative',
              height: '40em',
              width: '40em',
              'max-width': '100vw',
            }}
          >
            <video
              ref={videoDesktopRef}
              className="video"
              style={{
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                visibility: isDesktopPlaying ? 'visible' : 'hidden',
                zIndex: isDesktopPlaying ? 1 : 0,
              }}
              loop={false}
              muted
              playsInline
              disablePictureInPicture
              autoPlay
            >
              <source
                src="https://23532239.fs1.hubspotusercontent-na1.net/hubfs/23532239/Website/Pages/Homepage/dekstop-homepage-logo-animation.mp4"
                type="video/mp4"
              />
            </video>
            <video
              ref={videoMobileRef}
              className="video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                visibility: isDesktopPlaying ? 'hidden' : 'visible',
                zIndex: isDesktopPlaying ? 0 : 1,
              }}
              loop={false}
              muted
              playsInline
              disablePictureInPicture
              autoPlay
            >
              <source
                src="https://23532239.fs1.hubspotusercontent-na1.net/hubfs/23532239/Website/Pages/Homepage/mobile-homepage-logo-animation.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="button-container">
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
          ].map((product) => (
            <button
              key={product}
              className="product-button"
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