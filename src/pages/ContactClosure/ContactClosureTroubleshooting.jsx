import React, { useState, useEffect } from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';

const ContactClosureTroubleshooting = () => {
    const [showTroubleshooting, setShowTroubleshooting] = useState(false);
    const [visibleAnswers, setVisibleAnswers] = useState(new Set());

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
              {<NoPowerLight />}
              {<NoOpticalLink />}
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('no-contacts')}> The contacts are not getting sent across the fiber. </button>
                  {visibleAnswers.has('no-contacts') && (
                    <div className="faq-answer">
                      <p><strong>[1] Ensure the wires are connected properly.</strong></p>
                      <p><strong>FDC10:</strong></p>
                      <img src="photos/FDC/fdc10.jpg" style={{"padding-right": "100px"}}></img>
                      <p><strong>FDC8 or FDC80:</strong></p>
                      <img src="photos/FDC/fdc80.jpg" style={{height: "600px"}}></img>
                      <p><strong>[2] Confirm the inputs are dry (volt-free) closures. It is not acceptable to have voltage across the input pair.</strong></p>
                      <p><strong>[3] If an ohmmeter is being used across the screwheads on the green terminal block and if the screws are not tightened, it will look like the relay is not responding. Be sure that there are wires in the terminal block and that the screws are tightened. If wires are not inserted into the terminal block, tighten the screws anyway and then measure across the screw heads.</strong></p>
                      <p><strong>[4] Cycle power on the unit.</strong></p>
                    </div>
                  )}
                </div>
                <div className="faq-item">
                  <button className="faq-question" onClick={() => toggleAnswer('cnfe3')}> Configuring the CNFE3FX1TX2C4DX/M. </button>
                  {visibleAnswers.has('cnfe3') && (
                    <div className="faq-answer">
                      <a href="pdf/ContactClosure/CNFE3FX1TX2C4.pdf">Click the link to view the configuration manual.</a>
                    </div>
                  )}
                </div>
          </>
        )}
    </div>
  )
}

export default ContactClosureTroubleshooting