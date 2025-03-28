import React, { useState, useEffect } from 'react';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';
import Fiber from '../../relevant-information/Fiber';

const SFPFAQ = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showFAQ, setShowFAQ] = useState(false);
  
  const toggleAnswer = (questionId) => {
    setVisibleAnswers((prevAnswers) => {
      const newAnswers = new Set(prevAnswers);
      newAnswers.has(questionId) ? newAnswers.delete(questionId) : newAnswers.add(questionId);
      return newAnswers;
    });
  };

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div>
      <button className="purple-button" onClick={toggleFAQ}>
          <h1>Relevant Information</h1>
        </button>
        {showFAQ && (
        <>
            {<NoOpticalLink/>}
            <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('ddi')}>
                  How can I view the status of an SFP module?
                </button>
                {visibleAnswers.has('ddi') && (
                  <>
                    <div className="faq-answer">
                      <p><strong>It is possible to view the status of the SFP in any Comnet switch via the DDMI section or the SPF Status section.</strong></p>
                    </div>
                  </>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('cisco')}>
                  Will Comnet SFPs work with Cisco devices?
                </button>
                {visibleAnswers.has('cisco') && (
                  <>
                    <div className="faq-answer">
                      <p><strong>ComNet SFP modules will optically communicate with properly matched Cisco SFPs when Cisco SFPs are installed in a Cisco switch. Note that ComNet SFPs will not operate when installed in a Cisco switch.</strong></p>
                    </div>
                  </>
                )}
              </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('sfp')}>
                Learn about SFPs.
              </button>
              {visibleAnswers.has('sfp') && (
                <div className="faq-answer">
                  <p><strong>SFP (Small Form-Factor Pluggable</strong>) modules are compact, hot-swappable devices used in network equipment like switches and routers to send and receive data over fiber optic or copper cables. They support singlemode or multimode fiber for different distances and come in various speeds like Fast Ethernet (FE), Gigabit Ethernet (GE), and 10 Gigabit (10G). SFPs use different connectors, such as LC, SC, or RJ-45, depending on the cable type. They help expand network capabilities without replacing entire devices.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('sfp-chart')}>
                View Comnet's SFP chart.
              </button>
              {visibleAnswers.has('sfp-chart') && (
                <div className="faq-answer" style={{display: "flex", "flex-direction": "column"}}>
                  <a href="pdf/SFP/sfp-modules.pdf">
                      <button style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px"}}>
                        View Comnet SFP Chart
                      </button>
                    </a>
                  <img src="photos/SFP/SFP.png" alt="SFP Chart" />
                </div>
              )}
            </div>
            {<Fiber/>}
          </>
        )}
    </div>
  )
}

export default SFPFAQ