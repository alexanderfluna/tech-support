import React, { useState, useEffect } from 'react';

const EthernetExtenderTroubleshooting = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);

  const toggleTroubleshooting = () => {
    setShowTroubleshooting(!showTroubleshooting);
  }

  const toggleAnswer = (questionId) => {
    setVisibleAnswers(prevAnswers => {
        const newAnswers = new Set(prevAnswers);
        if (newAnswers.has(questionId)) {
            newAnswers.delete(questionId);
        } else {
            newAnswers.add(questionId);
        }
        return newAnswers;
    });
  };

  return (
    <div>
      <button className="purple-button" onClick={toggleTroubleshooting}>
          <h1>Troubleshoot</h1>
        </button>
        {showTroubleshooting && (
          <>
            <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('CLFE(X)EO(U/C) to CLFE(X)EO(U/C)')}> Troubleshooting CLFE(X)EO(U/C) to CLFE(X)EO(U/C) </button>
                {visibleAnswers.has('CLFE(X)EO(U/C) to CLFE(X)EO(U/C)') && (
                  <div className="faq-answer">
                    <p><strong>[1] View the <a href="pdf/EthernetExtender/CLFE_X_EO_C-U.pdf" >installation manual</a>.</strong></p>
                    <li style={{paddingLeft: "40px"}}>Page 2: CLFE1EOC and CLFE1EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 3: CLFE4EOC images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 4: CLFE4EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 5: CLFE8EOC and CLFE8EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 6: CLFE16EOC images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 7: CLFE16EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 8: Application diagrams.</li>
                    <li style={{paddingLeft: "40px"}}>Page 9: Installation instructions, power table and LED table.</li>
                    <li style={{paddingLeft: "40px"}}>Page 10: Application notes, extended distance table, troubleshooting guide.</li>
                    <p><strong>[2] Note the following:</strong></p>
                    <li style={{paddingLeft: "40px"}}><strong>Local (CLL) vs. Remote (CLR):</strong> The devices with 1, 4, 8, or 16 channels that begin with <strong>CLL</strong> are the local units. The devices with 1 or 4 channels that begin with <strong>CLR</strong> are the remote units.</li>
                    <li style={{paddingLeft: "40px"}}><strong>PoE:</strong> The local or remote device can inject 48VDC at the 802.3at standard. There is no pass-through PoE when using one pair of UTP.</li>
                    <li style={{paddingLeft: "40px"}}><strong>LEDs:</strong> The entire setup must be connected for LEDs to be illuminated.</li>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)')}> Troubleshooting CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C) </button>
                {visibleAnswers.has('CLLFE(X)POE(U/C) to CLRFE(X)POE(U/C)') && (
                  <div className="faq-answer">
                    <p><strong>[1] View the <a href="pdf/EthernetExtender/CL_L-R_FE_X_POE_C-U.pdf" >installation manual</a>.</strong></p>
                    <li style={{paddingLeft: "40px"}}>Page 2: CLLFE1POEC and CLRFE1POEC images and dip switch.</li>
                    <li style={{paddingLeft: "40px"}}>Page 3: CLLFE1POEU and CLRFE1PEOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 4: CLLFE4POEC and CLRFE4PEOU images and dip switch.</li>
                    <li style={{paddingLeft: "40px"}}>Page 5: CLLFE4POEU and CLRFE4POEU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 6: CLLFE8EOC images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 7: CLLFE8EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 8: CLLFE16EOC images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 9: CLLFE16EOU images and dip switches.</li>
                    <li style={{paddingLeft: "40px"}}>Page 10: Application diagrams.</li>
                    <li style={{paddingLeft: "40px"}}>Page 11: Installation instructions, power table, LED table, and application notes.</li>
                    <li style={{paddingLeft: "40px"}}>Page 12: Extended distance table and troubleshooting guide</li>
                    <li style={{paddingLeft: "40px"}}>Page 13: Ferrite core</li>
                    <p><strong>[2] Note the following:</strong></p>
                    <li style={{paddingLeft: "40px"}}><strong>Local (CLL) vs. Remote (CLR):</strong> The devices with 1, 4, 8, or 16 channels that begin with <strong>CLL</strong> are the local units. The devices with 1 or 4 channels that begin with <strong>CLR</strong> are the remote units.</li>
                    <li style={{paddingLeft: "40px"}}><strong>PoE:</strong> The local or remote device can inject 48VDC at the 802.3at standard. There is no pass-through PoE when using one pair of UTP.</li>
                    <li style={{paddingLeft: "40px"}}><strong>LEDs:</strong> The entire setup must be connected for LEDs to be illuminated.</li>
                  </div>
                )}
            </div>
          </>
        )}
    </div>
  )
}

export default EthernetExtenderTroubleshooting