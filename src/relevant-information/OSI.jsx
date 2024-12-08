import React, { useState } from 'react';

const OSI = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => toggleAnswer('osi')}>What is the OSI model?</button>
      {visibleAnswer === 'osi' && (
        <div className="faq-answer">
            <p>Layer 1 - Physical</p>
            <p>Layer 2 - Data Link</p>
            <p>Layer 3 - Network</p>
            <p>Layer 4 - Transport</p>
            <p>Layer 5 - Session</p>
            <p>Layer 6 - Presentation</p>
            <p>Layer 7 - Application</p>
        </div>
      )}
    </div>
  );
};

export default OSI;
