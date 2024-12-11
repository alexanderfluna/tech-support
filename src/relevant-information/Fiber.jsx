import React, { useState } from 'react';

const Fiber = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  const standards = [
    { standard: "1000BASE-SX", wavelength: "850nm", distance: "0.55km" },
    { standard: "1000BASE-LX", wavelength: "1310nm", distance: "10km" },
    { standard: "1000BASE-LH", wavelength: "1310nm", distance: "20km" },
    { standard: "1000BASE-EX", wavelength: "1550nm", distance: "40km" },
    { standard: "1000BASE-ZX", wavelength: "1550nm", distance: "80km" },
    { standard: "1000BASE-BXU", wavelength: "1310nm TX / 1550nm RX", distance: "10km" },
    { standard: "1000BASE-BXD", wavelength: "1550nm TX / 1310nm RX", distance: "10km" },
  ];

  const data = [
    { dbm: -40, mW: "0.0001", microwatts: "0.1" },
    { dbm: -30, mW: "0.001", microwatts: "1" },
    { dbm: -20, mW: "0.01", microwatts: "10" },
    { dbm: -10, mW: "0.1", microwatts: "100" },
    { dbm: -3, mW: "0.5", microwatts: "500" },
    { dbm: 0, mW: "1", microwatts: "1,000" },
    { dbm: 10, mW: "10", microwatts: "10,000" },
    { dbm: 20, mW: "100", microwatts: "100,000" },
    { dbm: 30, mW: "1,000", microwatts: "1,000,000" },
    { dbm: 40, mW: "10,000", microwatts: "10,000,000" },
  ];

  return (
    <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('fiber')}>  What is fiber? </button>
            {visibleAnswer === 'fiber' && (
              <div className="faq-answer">
                <p>Core and Cladding</p>
                <img src="photos/Fiber/Fiber.jpg"></img>
                <li>The glass composition of the fiber makes it resistant to electromagnetic interference (EMI).</li>
                <p>Multimode Fiber</p>
                <li>Covers shorter distances than single mode (i.e. 2 miles at 100mbps)</li>
                <li>OM1 (62.5 micron core / 125 micron cladding): 275m at 1 Gbps</li>
                <li>OM2 or greater (50 micron core / 125 micron cladding): 550m at 1Gbps</li>
                <li>Modal Dispersion</li>
                <li style={{"padding-left": "100px"}}>Occurs in multimode fibers due to the existence of multiple light paths (modes) through the fiber core. Light traveling in different modes (e.g., straight through the center vs. bouncing at angles along the core) takes slightly different times to reach the end of the fiber, which can limit data transmission efficiency.</li>
                <p>Single Mode Fiber</p>
                <li>Capable of covering longer distances than multimode (i.e. upwards of 70 miles and more).</li>
                <li>OS1: More suitable for shorter ranges. (9 micron core / 125 micron cladding)</li>
                <li>OS2: More suitable for longer ranges. (9 micron core / 125 micron cladding)</li>
                <li>Chromatic dispersion</li>
                <li style={{"padding-left": "100px"}}>Occurs in both fiber types, single mode and multimode, due to the variation in the speed of light for different wavelengths (colors) in the fiber material, leading to signal distortion over long distances.</li>
                <p>Wavelengths</p>
                <li>850nm, 1310nm, 1550nm</li>
                <p>Spectral Width</p>
                <li>Margin of error for the wavelength.</li>
                <p>Wavelength Divsion Multiplexing (WDM)</p>
                <li>A technology that enables simultaneous transmission of multiple signals over a single optical fiber by user different wavelengths of light</li>
                <p>4 Types of Lasers</p>
                <li>LED (Light Emitting Diode)</li>
                <li>VCSL (Vertical-Cavity Surface-Emitting Laser)</li>
                <li>FP (Fabry-Pérot)</li>
                <li>DFB (Distributed Feedback)</li>
                <p>dBm (decibel-milliwatts)</p>
                <li>A unit of measurement used to express the power level of a signal.</li>
                <li>0 dBm = 1 mW (1000 microwatts) of power</li>
                <li>A decrease of 3 dBm halves the power output (i.e. -3dbm = 500 microwatts of power).</li>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead
                    style={{
                      backgroundColor: "rgb(106, 13, 173)",
                      color: "white",
                    }}
                  >
                    <tr>
                      <th
                        style={{
                          padding: "10px",
                          textAlign: "left",
                        }}
                      >
                        dBm
                      </th>
                      <th
                        style={{
                          padding: "10px",
                          textAlign: "left",
                        }}
                      >
                        Power (mW)
                      </th>
                      <th
                        style={{
                          padding: "10px",
                          textAlign: "left",
                        }}
                      >
                        Power (µW)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9",
                        }}
                      >
                        <td
                          style={{
                            padding: "10px",
                            border: "1px solid #ddd",
                            textAlign: "left",
                          }}
                        >
                          {row.dbm}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            border: "1px solid #ddd",
                            textAlign: "left",
                          }}
                        >
                          {row.mW}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            border: "1px solid #ddd",
                            textAlign: "left",
                          }}
                        >
                          {row.microwatts}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{"margin-top": "30px"}}>The fiber standards:</p>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff" }}>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Standard</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Wavelength</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Distance</th>
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
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.wavelength}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.distance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
  );
};

export default Fiber;
