import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/style.css';
import '../styles/Pages.css';

const FDW = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showSelectorText, setShowSelectorText] = useState(false); // New state for showing selector text

  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleTable = () => {
    setShowSelectorText(!showSelectorText); // Toggle visibility of selector text
    window.scrollTo(0, 0); // Scroll to the top of the page when the button is clicked
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">FDW</h2>
        <button className="selector-tool" onClick={toggleTable}>
          Selector Tool
        </button>
        
        {/* Show the selector tool text only when clicked */}
        {showSelectorText && (
          <div className="selector-placeholder">
            <p>Selector tool functionality coming soon...</p>
          </div>
        )}

        <h1 className="faq-title">FAQ</h1>

        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('to-be-decided')}>
              To be decided {/* Changed to a single button */}
            </button>
            {visibleAnswer === 'to-be-decided' && (
              <div className="faq-answer">
                <p>...</p> {/* Placeholder for the answer */}
              </div>
            )}
          </div>
        </div>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default FDW;
