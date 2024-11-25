import React, { useState } from 'react';

const PowerOverEthernet = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('power-over-ethernet')}> Power Over Ethernet </button>
            {visibleAnswer === 'power-over-ethernet' && (
              <div className="faq-answer">
                <p>IEEE 802.3af</p>
                <li>Type 1</li>
                <li>12.5W / 15W</li>
                <li>48VDC - 47VDC</li>
                <p>IEEE 802.3at</p>
                <li>Type 2</li>
                <li>25W / 30W</li>
                <li>50VDC - 57VDC</li>
                <p>IEEE 802.3bt</p>
                <li>Type 3: 60W</li>
                <li>Type 4: 90W</li>
                <li>52VDC - 57VDC</li>
                <p>Passthrough PoE</p>
                <li>The PoE is passed through the device.</li>
                <p>Passive PoE</p>
                <li>Always provides PoE even without a handshake</li>
                <p>PoE classes</p>
                <li>Class 0: .44W - 12.95W</li>
                <li>Class 1: .44W - 3.84W</li>
                <li>Class 2: 3.84W - 6.49W</li>
                <li>Class 3: 6.49W - 12.95W</li>
                <li>Class 4: 12.95W - 25.5W</li>
                <li>Class 5: 25.5W - 40W</li>
                <li>Class 6: 40W - 51WW</li>
                <li>Class 7: 51W - 62W</li>
                <li>Class 8: 62W - 71.3W</li>
              </div>
            )}
          </div>
  );
};

export default PowerOverEthernet;
