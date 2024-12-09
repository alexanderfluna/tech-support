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

        <p className="faq-title">How To Troubleshoot Common Issues</p>
        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-power')}> The unit does not power on. </button>
            {visibleAnswer === 'no-power' && (
              <div className="faq-answer">
                <p>There may be an issue with the power supply or CPU board. Contact technical support for an RMA.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> There is no PoE or port activitiy. </button>
            {visibleAnswer === 'no-poe' && (
              <div className="faq-answer">
                <p>There may be an issue with the switch board. Contact technical support for an RMA.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('failed-disk')}> There is a failed hard drive. </button>
            {visibleAnswer === 'failed-disk' && (
              <div className="faq-answer">
                <p>Contact technical support for a replacement disk and assistance with reconfiguring the RAID array as needed.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('lost-windows-password')}> I have lost the Windows password. </button>
            {visibleAnswer === 'lost-windows-password' && (
              <div className="faq-answer">
                <p>Contact technical support for the Windows recovery files.</p>
              </div>
            )}
          </div>
        </div>
          

        <p className="faq-title">Frequently Asked Questions</p>
        <div className="faq-list">
        <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('ss32x')}>  SS32X </button>
            {visibleAnswer === 'ss32x' && (
              <div className="faq-answer">
                <a href="pdf/razberi/SS32_Data_Sheet.pdf" download>
                  <button style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px" }}>
                    Download SS32 Data Sheet
                  </button>
                </a>
                <p>Most relevant specs:</p>
                <li>32-port PoE switch</li>
                <li>Intel i5 processor</li>
                <li>Two M.2 SSDs with RAID 1</li>
                <li>RAM: 16GB, 32 GB</li>
                <li>Up to 88TB of storage</li>
                <li>GPU: GPU-T1000</li>
                <li>Operating System: Windows 10, Windows 11, Windows Server 2019, or Windows Server 2022</li>
                <li>RAID: 0, 1, 5, 6, or 10</li>
                <li>Available in long chassis: 'LX' in the part number</li>
                <li>Available as 2U: '2U' in the part number</li>
                <p>Default Configurations:</p>
                <li>Default switch IP: 192.168.50.1</li>
                <li>Default U1 / SFP1 combo port IP: 192.168.50.19</li>
                <li>Default U2 IP: DHCP</li>
                <li>Default SFP2 IP: DHCP</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('dell')}>  Dell Servers </button>
            {visibleAnswer === 'dell' && (
              <div className="faq-answer">
                <p>iDRAC (Integrated Dell Remote Access Controller)</p>
                <li>This tool allows one to remote into the server and maange it.</li>
                <p>BOSS (Boot Optimized Storage Solution)</p>
                <li>This card is designed for booting the server's operating system using two mirrored M.2 SATA SSDs.</li>
                <p>BOSS-N1</p>
                <li>NVMe (Non-Volatile Memory Express)</li>
                <li>NVMe-based M.2 SSDs</li>
                <li>Higher performance than BOSS-S1</li>
                <p>BOSS-S1</p>
                <li>SATA (Serial ATA)</li>
                <li>SATA-based M.2 SSDs</li>
                <li>Lower performance than BOSS-N1</li>
                <p>PERC (PowerEdge RAID Controller)</p>
                <li>This hardware RAID controller manages the RAID configuration.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('va4')}>  VA4 </button>
            {visibleAnswer === 'va4' && (
              <div className="faq-answer">
                <a href="pdf/razberi/VA4_Data_Sheet.pdf" download>
                  <button style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px" }}>
                    Download VA4 Data Sheet
                  </button>
                </a>
                <p>VA4-E2314</p>
                <li>Intel Xeon E2314</li>
                <li>RAM: 16GB / 32 GB</li>
                <li>4 bays. Up to 22TB per bay.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('v08')}>  V08 </button>
            {visibleAnswer === 'v08' && (
              <div className="faq-answer">
                <p>V08B-4310</p>
                <li>Intel Xeon Silver 4310</li>
                <li>RAM: 16GB / 32GB</li>
                <li>8 bays. Up to 22TB per bay.</li>
                <p>V08B-D4310</p>
                <li>Dual Intel Xeon Silver 310</li>
                <p>V08C-4410Y</p>
                <li>Intel Xeon Silver 4410Y</li>
                <li>RAM: 16GB / 32GB</li>
                <li>8 bays. Up to 22TB per bay.</li>
                <p>V08C-D4410Y</p>
                <li>Dual Intel Xeon Silver 4410Y</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('v12')}>  V12 </button>
            {visibleAnswer === 'v12' && (
              <div className="faq-answer">
                <p>V12B-4310</p>
                <li>Intel Xeon Silver 4310</li>
                <li>RAM: 16GB / 32GB</li>
                <p>V12B-D4310</p>
                <li>Dual Intel Xeon Silver 4310</li>
                <p>V12-4410Y</p>
                <li>12 bays. Up to 22TB per bay.</li>
                <li>Intel Xeon Silver 4410Y</li>
                <li>RAM: 16GB / 32GB</li>
                <p>V12C-D4410Y</p>
                <li>Dual Intel Xeon Silver 4410Y</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('v14')}>  V14 </button>
            {visibleAnswer === 'v14' && (
              <div className="faq-answer">
                <p>V14B-4310</p>
                <li>Intel Xeon Silver 4310</li>
                <li>RAM: 16GB / 32GB</li>
                <p>V14B-D4310</p>
                <li>Dual Intel Xeon Silver 4310</li>
                <p>V14C-4410Y</p>
                <li>14 bays. Up to 22TB per bay.</li>
                <li>Intel Xeon Silver 4410Y</li>
                <li>RAM: 16GB / 32GB</li>
                <p>V14C-D4410Y</p>
                <li>Dual Intel Xeon Silver 4410Y</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('v24')}>  V24 </button>
            {visibleAnswer === 'v24' && (
              <div className="faq-answer">
                <p>V24C-D4410Y</p>
                <li>24 bays. Up to 22TB per bay.</li>
                <li>Dual Intel Xeon Silver 4410Y</li>
                <li>RAM: 16GB / 32GB</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('defense')}>  Camera Defense and Appliance Defense </button>
            {visibleAnswer === 'defense' && (
              <div className="faq-answer">
                <p>Camera Defense:</p>
                <li>Bind ports to the MAC address of connected devices, disabling unused ports to reduce vulnerabilities.</li>
                <li>Configure the firewalls to allow only essential services or protocols, removing unnecessary ones.</li>
                <li>Restrict network traffic to known networks or approved devices with fixed IP addresses through whitelisting.</li>
                <li>Enforce secure password policies, disallowing default, prohibited, or common passwords.</li>
                <p>Appliance Defense (Cylance)</p>
                <li>Our Cylance antivirus and antimalware solution leverages artificial intelligence and machine learning to build predictive models, enabling it to detect even previously unknown malware in real time.</li>
                <li>Cylance is fully integrated into Razberi Monitor, providing real-time notifications on malware protection through the dashboard.</li>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer('RAID')}>  What is RAID? </button>
            {visibleAnswer === 'RAID' && (
              <div className="faq-answer">
                <p>RAID (Redundant Array of Independent Disks) is data storage technology that combines multiple hard drives or SSDs into a single unit to improve performance, redunancy, or both, depending on the RAID level used.</p>
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
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>RAID Level</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Minimum Required Drives</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Total Storage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { level: "RAID 0", drives: "At least 2", storage: "No configuration" },
                        { level: "RAID 1", drives: "At least 2", storage: "Half the # of drives" },
                        { level: "RAID 5", drives: "At least 3", storage: "Minus 1 drive" },
                        { level: "RAID 6", drives: "At least 4", storage: "Minus 2 drives" },
                        { level: "RAID 10", drives: "At least 4", storage: "Half the # of drives" },
                      ].map((item, index) => (
                        <tr
                          key={index}
                          style={{
                            backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                          }}
                        >
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.level}</td>
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.drives}</td>
                          <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.storage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
