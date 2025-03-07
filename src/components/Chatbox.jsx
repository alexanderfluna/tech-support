import React, { useState } from 'react';
import '../styles/Chatbox.css';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(''); // Store only the latest bot message

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (response) => {
    let botReply = '';

    if (response === 'learn') {
      botReply = 'Select the product category of the device you want to learn more about and choose the Frequently Asked Questions option.';
    } else if (response === 'part') {
      botReply = 'Select the product category of the device you want the part number for and choose the Selector Tool option.';
    } else if (response === 'troubleshoot') {
      botReply = 'Select the product category of the device you want to troubleshoot and select the Troubleshooting Common Issues option.';
    }

    setMessage(botReply); // Only store the latest response
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-button" onClick={toggleChat}>
        <span className="robot-icon">🤖</span>
      </div>

      {isOpen && (
        <div className="chatbox-popup">
          <div className="chatbox-header">
            <span>Comnet Bot</span>
            <button onClick={toggleChat} className="close-button">X</button>
          </div>

          {/* Buttons stay at the top */}
          <div className="chatbox-buttons">
            <button onClick={() => handleButtonClick('learn')}>
              I want to learn more about a Comnet product.
            </button>
            <button onClick={() => handleButtonClick('part')}>
              I need the appropriate part number for a Comnet product.
            </button>
            <button onClick={() => handleButtonClick('troubleshoot')}>
              I have a defective unit I want to troubleshoot.
            </button>
          </div>

          {/* Display only the latest bot message */}
          <div className="chatbox-content">
            {message && <div className="chat-message bot">{message}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
