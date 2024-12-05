import React, { useState } from 'react';

const PowerOverEthernet = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  const standards = [
    { standard: "IEEE 802.3af", type: "Type 1", power: "12.5W / 15W", voltage: "48VDC - 47VDC" },
    { standard: "IEEE 802.3at", type: "Type 2", power: "25W / 30W", voltage: "50VDC - 57VDC" },
    { standard: "IEEE 802.3bt", type: "Type 3", power: "60W", voltage: "52VDC - 57VDC" },
    { standard: "IEEE 802.3bt", type: "Type 4", power: "90W", voltage: "52VDC - 57VDC" },
  ];

  const poeClasses = [
    { class: "Class 0", powerRange: "0.44W - 12.95W" },
    { class: "Class 1", powerRange: "0.44W - 3.84W" },
    { class: "Class 2", powerRange: "3.84W - 6.49W" },
    { class: "Class 3", powerRange: "6.49W - 12.95W" },
    { class: "Class 4", powerRange: "12.95W - 25.5W" },
    { class: "Class 5", powerRange: "25.5W - 40W" },
    { class: "Class 6", powerRange: "40W - 51W" },
    { class: "Class 7", powerRange: "51W - 62W" },
    { class: "Class 8", powerRange: "62W - 71.3W" },
  ];

  return (
    <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('power-over-ethernet')}> Power Over Ethernet </button>
            {visibleAnswer === 'power-over-ethernet' && (
              <div className="faq-answer">
                <p>PoE Standards</p>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    margin: "20px 0",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff" }}>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Standard</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Type</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Power (W)</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Voltage (VDC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standards.map((item, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                        }}
                      >
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.standard}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.type}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.power}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.voltage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>PoE classes</p>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    margin: "20px 0",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff" }}>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>PoE Class</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Power Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {poeClasses.map((item, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                        }}
                      >
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.class}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.powerRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Passthrough PoE</p>
                <li>The PoE is passed through the device.</li>
                <p>Passive PoE</p>
                <li>Always provides PoE even without a handshake</li>
              </div>
            )}
          </div>
  );
};

export default PowerOverEthernet;
