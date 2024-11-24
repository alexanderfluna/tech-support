import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PowerOverEthernet from '../relevant-information/PowerOverEthernet';
import '../styles/Global.css';
import '../styles/Pages.css';

const Razberi = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showSelectorText, setShowSelectorText] = useState(false); 

  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleTable = () => {
    setShowSelectorText(!showSelectorText); 
    window.scrollTo(0, 0); 
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Razberi</h2>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        
        {showSelectorText && (
          <div className="selector-placeholder">
            <p>Selector tool functionality coming soon...</p>
          </div>
        )}

        <p className="faq-title">Troubleshooting Common Issues</p>
        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-power')}> No Power </button>
            {visibleAnswer === 'no-power' && (
              <div className="faq-answer">
                <p>There may be an issue with the power supply or CPU board. Contact technical support for an RMA.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> No PoE or Port Activity </button>
            {visibleAnswer === 'no-poe' && (
              <div className="faq-answer">
                <p>There may be an issue with the switch board. Contact technical support for an RMA.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('failed-disk')}> Failed Disk </button>
            {visibleAnswer === 'failed-disk' && (
              <div className="faq-answer">
                <p>Contact technical support for a replacement disk and assistance with reconfiguring the RAID array as needed.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('lost-windows-password')}> Lost Windows Password </button>
            {visibleAnswer === 'lost-windows-password' && (
              <div className="faq-answer">
                <p>Contact technical support for the Windows recovery files.</p>
              </div>
            )}
          </div>
        </div>
          

        <p className="faq-title">Relevant Information</p>
        <div className="faq-list">
        <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('ss32x')}>  SS32X </button>
            {visibleAnswer === 'ss32x' && (
              <div className="faq-answer">
                <p>Specs:</p>
                <li>32-port PoE switch.</li>
                <li>i5 Intel processor</li>
                <li>2 mSatas with RAID 1.</li>
                <li>RAM: 16GB, 32 GB</li>
                <li>Up to 88TB of storage.</li>
                <li>GPU: GPU-T1000</li>
                <li>Operating System: Windows 10, Windows Server 2019, Windows Server 2022</li>
                <li>RAID: 0, 1, 5, 6, 10</li>
                <p>Available in long chassis: 'LX'</p>
                <p>Available as 2U.</p>
                <p>Default switch IP: 192.168.50.1</p>
                <p>Default U1 / SFP1 combo port IP: 192.168.50.19</p>
                <p>Default U2 IP: DHCP</p>
                <p>Default SFP2 IP: DHCP</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('core')}>  VA4, V08, V12, V14, V24 </button>
            {visibleAnswer === 'core' && (
              <div className="faq-answer">
                <p>VA4</p>
                <li>4 bays. Up to 22TB per bay.</li>
                <p>V08</p>
                <li>8 bays. Up to 22TB per bay.</li>
                <p>V12</p>
                <li>12 bays. Up to 22TB per bay.</li>
                <p>V14</p>
                <li>14 bays. Up to 22TB per bay.</li>
                <p>V24</p>
                <li>24 bays. Up to 22TB per bay.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('RAID')}>  RAID </button>
            {visibleAnswer === 'RAID' && (
              <div className="faq-answer">
                <p>RAID 0</p>
                <li>Requires at least 2 drives.</li>
                <li>No configuration.</li>
                <p>RAID 1</p>
                <li>Requires at least 2 drives.</li>
                <li>Total storage: Half the # of drives.</li>
                <p>RAID 5</p>
                <li>Requires at least 3 drives.</li>
                <li>Total storage: Minus 1 drive.</li>
                <p>RAID 6</p>
                <li>Requires at least 4 drives.</li>
                <li>Total storage: Minus 2 drives.</li>
                <p>RAID 10</p>
                <li>Requires at least 4 drives.</li>
                <li>Total storage: Half the # of drives.</li>
              </div>
            )}
          </div>
          <PowerOverEthernet />
        </div>
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Razberi;
