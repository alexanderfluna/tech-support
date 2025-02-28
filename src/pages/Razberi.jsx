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
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleTable = () => {
    setShowSelectorText(!showSelectorText); 
  };

  const toggleTroubleshooting = () => {
    setShowTroubleshooting(!showTroubleshooting);
  }

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  }

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Razberi</h2>
        <button className="purple-button" onClick={toggleTable}>
          Selector Tool
        </button>
        {showSelectorText && (
          <div className="selector-placeholder">
            <p>Selector tool functionality coming soon...</p>
          </div>
        )}

        <button className="purple-button" onClick={toggleTroubleshooting}>
          Troubleshooting Common Issues
        </button>
        {showTroubleshooting && (
          <>
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
                  <p>Contact technical support for the Windows recovery procedure.</p>
                </div>
              )}
            </div>
          </div>
          </>
        )}
        
          
        <button className="purple-button" onClick={toggleFAQ}>
          Frequently Asked Questions
        </button>
        {showFAQ && (
          <>
            <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('ss32x')}> What is the SS32X server switch? </button>
              {visibleAnswer === 'ss32x' && (
                <div className="faq-answer">
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
                  <a href="pdf/razberi/SS32_Data_Sheet.pdf" download>
                    <button style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px" }}>
                      Click to Download the SS32X Data Sheet
                    </button>
                  </a>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('dell')}>  What Dell servers does Comnet offer? </button>
              {visibleAnswer === 'dell' && (
                <div className="faq-answer">
                  <p>VA4-E2314</p>
                  <li>Intel Xeon E2314</li>
                  <li>RAM: 16GB / 32 GB</li>
                  <li>4 bays. Up to 22TB per bay.</li>
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
                  <p>V24C-D4410Y</p>
                  <li>24 bays. Up to 22TB per bay.</li>
                  <li>Dual Intel Xeon Silver 4410Y</li>
                  <li>RAM: 16GB / 32GB</li>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('defense')}>  What is Camera Defense and Appliance Defense? </button>
              {visibleAnswer === 'defense' && (
                <div className="faq-answer">
                  <p>Camera Defense:</p>
                  <li>Bind ports to the MAC address of connected devices, disabling unused ports to reduce vulnerabilities.</li>
                  <li>Configure the firewalls to allow only essential services or protocols, removing unnecessary ones.</li>
                  <li>Restrict network traffic to known networks or approved devices with fixed IP addresses through whitelisting.</li>
                  <li>Enforce secure password policies, disallowing default, prohibited, or common passwords.</li>
                  <p>Appliance Defense (Cylance)</p>
                  <li>The Cylance antivirus and antimalware solution leverages artificial intelligence and machine learning to build predictive models, enabling it to detect even previously unknown malware in real time.</li>
                  <li>Cylance is fully integrated into Razberi Monitor, providing real-time notifications on malware protection through the dashboard.</li>
                </div>
              )}
            </div>
            <PowerOverEthernet />
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('terminology')}>  Learn about servers. </button>
              {visibleAnswer === 'terminology' && (
                <div className="faq-answer">
                  <p>Definitions:</p>
                  <li>Hertz: One clock cycle.</li>
                  <li>Megahertz: One million clock cycles.</li>
                  <li>Gigahertz: One billion clock cycles.</li>
                  <li>Bandwidth: The total number of bits that can be sent at one time.</li>
                  <li>Throughput: The total number of bits being sent at one time.</li>
                  <li>Latency: The speed at which a bit arrives its destination.</li>
                  <p>CPU (Central Processing Unit)</p>
                  <li>Peforms the computations in a server.</li>
                  <li>CPU Cache (L1, L2, L3): Memory stored in the CPU for quick access.</li>
                  <li>CPU Cores: Each core is like its own CPU, which can independently execute a sequence of instructions.</li>
                  <li>CPU Threads: A core can have multiple threads, allowing more tasks the be managed at the same time.</li>
                  <li>(CPU Example #1) Intel Core i9-14900K: 24 cores and 32 threads </li>
                  <li>(CPU Example #1) AMD Ryzen 9 7950X: 16 cores and 32 threads.</li>
                  <p>GPU (Graphical Processing Unit)</p>
                  <li>A highly specialized processor designed to perform intensive graphical and parallel computations.</li>
                  <li>GPUs decode video by compressing video files and converting it into a format that can be displayed on a screen.</li>
                  <li>GPUs use dedicated hardware for decoding popular video codecs like H.264 and H.265. This reduces the CPU's worklaod, enabling it to focus on other tasks.</li>
                  <p>DRAM (Dynamic Random Access Memory)</p>
                  <li>DIMM (Dual In-Line Memory Module)</li>
                  <li>SODIMM (Small Outline Dual In-Line Memory Module)</li>
                  <li>Volatile memory that gets wiped upon power cycle.</li>
                  <li>Instructions to be executed get transfered from the hard drive to the RAM module for quick access by the CPU.</li>
                  <p>DDR (Double Data Rate)</p>
                  <li>DDR5: The latest generating, starting at speeds of 4800MT/s and reaching over 6000MT/s.</li>
                  <li>MT/s: Mega Transfers per second, a measurement of data transfer speeds in millions of transfers per second (the number of times data can be transmitted per second).</li>
                  <li>A DDR5 module rated at 4800MT/s can perform 4.8 billion data transfers per second.</li>
                  <li>DDR memory achives this by sending data on both the rising and falling edges of the clock cycle, effectively doubling the transfer rate compared to the clock speed.</li>
                  <p>PCH (Platform Controller Hub)</p>
                  <li>Chipset developed by Intel to act as a hub for managing and routing communication between the CPU and various peripherals and subsystems of the server.</li>
                  <li>This includes communication with I/O devices like USB, SATA (storage), PCIe (expansion cards).</li>
                  <li>Manages connections to hard drives and SSDS via SATA or NVMe</li>
                  <p>PCIe (Peripheral Component Interconnect Express)</p>
                  <li>The primary bus interface used in modern computers for connecting internal components like graphics cards, storage devices (e.g., NVMe SSDs), network cards, and more to the motherboard.</li>
                  <li>PCIe uses serial communcation for data transfer. Modern versions use multiple lanes (4, 8, 16) to increase bandwith.</li>
                  <li>PCIE 5.0: 32 GT/s (Gigatransfers per second), 4 GB/s per lane, 16 total GB/s.</li>
                  <li>PCIe M.2: A compact form factor for SSDs. M.2 slots support both SATA and NVMe drives but are usually used for NVMe devices in modern systems.</li>
                  <p>SATA (Serial ATA) SSDs</p>
                  <li>Typically a 2.5-inch SSD or mSATA for compact setups. The Serial ATA (SATA) interface connects storage devices to the motherboard. It uses a separate data cable and power cable.</li>
                  <li>SATA devices connect to dedicated SATA ports on the motherboard, making the interface universal but reliant on cables for connection.</li>
                  <li>Widely supported across older and newer systems, making SATA storage a good choice for compatibility with legacy systems.</li>
                  <li>Best for budget systems, secondary storage, or older systems with no NVMe support.</li>
                  <li>(SPEED) SATA III standard: Max of 6 Gb/s.</li>
                  <li>(LATENCY) Higher latency compared to NVMe because SATA is optimized for spinning hard drives, not modern flash storage.</li>
                  <li>(COST) Cheaper than NVMe.</li>
                  <p>NVMe (Non-Volatile Memory Express) SSDs</p>
                  <li>NVMe uses the PCIe (Peripheral Component Interconnect Express) interface. PCIe allows direct communication with the CPU, bypassing legacy storage controllers, for significantly faster speeds.</li>
                  <li>M.2 slot: The most common form factor for NVMe SSDs, connecting directly to the motherboard without cables.</li>
                  <li>PCIe Expansion Slot: Some NVMe drives come as expansion cards that fit into PCIe slots on the motherboard.</li>
                  <li>NVMe requires motherboards with M.2 slots or PCIe lanes, making it less compatible with older systems.</li>
                  <li>Best for high-performance tasks such as gaming, video editing, 3D rendering, and large data analysis.</li>
                  <li>(SPEED) PCIe 5.0: 4 GB/s per lane (Up to 16 Gb/s).</li>
                  <li>(LATENCY) Lower latency than SATA, making it ideal for devices that need rapid communication with the CPU, such as graphics cards and storage devices..</li>
                  <li>(COST) More expensive than SATA.</li>
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
                  <p>RAID (Redundant Array of Independent Disks)</p>
                  <li>A data storage technology that combines multiple hard drives or SSDs into a single unit to improve performance, redunancy, or both, depending on the RAID level used.</li>
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
          </div>
          </>
        )}
        
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Razberi;
