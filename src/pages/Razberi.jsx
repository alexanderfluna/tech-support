import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Chatbox from '../components/Chatbox';
import PowerOverEthernet from '../relevant-information/PowerOverEthernet';
import '../styles/Global.css';
import '../styles/Pages.css';

const Razberi = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [showSelector, setShowSelector] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [selected, setSelected] = useState("");


  const toggleAnswer = (questionId) => {
    setVisibleAnswer(visibleAnswer === questionId ? null : questionId);
  };

  const toggleSelector = () => {
    setShowSelector(!showSelector);
    setSelected("");
  };

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
        <h2 className="faq-title">Razberi Server</h2>
        <p style={{fontWeight: "bold"}}>______________________________________</p>

      <button className="purple-button" onClick={toggleSelector}>
        <h1>Selector Tool</h1>
        <p>The Razberi Server selector tool is still a work in progress.</p>
      </button>
      {showSelector && (
        <div className="selector-placeholder">
          <div className="selector-options">
            <button
              className={`selector-button ${selected === "Server Switch" ? "selected" : ""}`}
              onClick={() => setSelected("Server Switch")}
            >
              Server Switch
            </button>
            <span className="separator"></span>
            <button
              className={`selector-button ${selected === "Server" ? "selected" : ""}`}
              onClick={() => setSelected("Server")}
            >
              Server
            </button>
          </div>

          {selected && (
            <div>
              <p className="selected-text">{selected}</p>
              {selected === "Server Switch" && (
                <p className="additional-info">
                  It's great that the server comes with a switch! This integration helps simplify your network setup by allowing your devices to connect seamlessly without the need for additional network equipment.
                </p>
              )}
              {selected === "Server" && (
                <p className="additional-info">
                  The server provides ample storage space, making it perfect for handling large files, data backups, or running multiple applications with ease. Enjoy better performance and scalability!
                </p>
              )}
            </div>
          )}
          {!selected && <p className="placeholder-text"></p>}
        </div>
      )}

        <button className="purple-button" onClick={toggleFAQ}>
          <h1>FAQ</h1>
          <p>Our FAQ section contains answers to frequently asked questions and how to troubleshoot common issues regarding Comnet's Razberi servers.</p>
        </button>
        {showFAQ && (
          <>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('terminology')}>  Learn about computing. </button>
              {visibleAnswer === 'terminology' && (
                <div className="faq-answer">
                  <p><strong>CPU (Central Processing Unit):</strong> The central processing unit (CPU) is the primary component of a computer responsible for executing instructions and performing computations. It acts as the brain of the system, handling everything from running operating system processes to executing user applications. The efficiency of a CPU is determined by factors such as clock speed, core count, cache size, and instruction set architecture.</p>
                  <p><strong>CPU Cache (L1, L2, L3):</strong> The CPU cache is a small amount of high-speed memory located within the processor, designed to store frequently accessed data and instructions. L1 cache is the smallest but fastest, situated closest to the processing cores. L2 cache is slightly larger but slower, while L3 cache is the largest and shared among multiple cores, improving overall efficiency by reducing the need to fetch data from main memory.</p>
                  <p><strong>CPU Cores:</strong> Modern processors contain multiple cores, each functioning as an independent processing unit capable of executing its own set of instructions. A dual-core processor has two cores, a quad-core has four, etc. More cores enable better multitasking and improved performance in multi-threaded applications.</p>
                  <p><strong>CPU Threads:</strong> A CPU thread represents a sequence of instructions that a core can execute. Some modern CPUs support simultaneous multithreading (SMT), commonly referred to as hyper-threading in Intel processors. This allows a single core to handle multiple threads at once, improving efficiency by maximizing core utilization.</p>
                  <p><strong>(CPU Example #1) Intel Core i9-14900K:</strong> This high-performance Intel processor features 24 cores and 32 threads, using a hybrid architecture that combines performance and efficiency cores. It is designed for demanding tasks like gaming, video editing, and software development.</p>
                  <p><strong>(CPU Example #2) AMD Ryzen 9 7950X:</strong> A powerful AMD processor with 16 cores and 32 threads, optimized for high-performance computing, gaming, and content creation. It features a high clock speed and advanced power management for energy efficiency.</p>
                  <p><strong>GPU (Graphical Processing Unit):</strong> A GPU is a specialized processor designed for parallel processing, making it ideal for handling complex graphics rendering and compute-intensive tasks. Unlike CPUs, which focus on sequential task execution, GPUs excel at processing multiple data streams simultaneously. This makes them essential for gaming, 3D rendering, AI training, and scientific simulations. Modern GPUs are equipped with dedicated hardware for video decoding and encoding, allowing them to compress and decompress video files efficiently. This reduces the load on the CPU, improving overall system performance. Popular video codecs, such as H.264 and H.265, are commonly supported by GPUs for smooth playback of high-definition and ultra-high-definition (UHD) content.</p>
                  <p><strong>DRAM (Dynamic Random Access Memory):</strong> DRAM is a type of volatile memory that temporarily stores data that a CPU actively uses. It requires continuous power to retain data and is significantly faster than traditional storage devices like hard drives and SSDs.</p>
                  <p><strong>DIMM (Dual In-Line Memory Module):</strong> A DIMM is the standard form factor for RAM in desktops and servers, providing high-capacity and high-speed memory modules.</p>
                  <p><strong>SODIMM (Small Outline Dual In-Line Memory Module):</strong> SODIMM modules are smaller versions of DIMMs, primarily used in laptops and compact computing devices.</p>
                  <p><strong>DDR (Double Data Rate) Memory:</strong> DDR memory technology allows for high-speed data transfer by transmitting data on both the rising and falling edges of the clock cycle, effectively doubling the memory bandwidth. DDR5, the latest generation, offers speeds starting at 4800 MT/s and exceeding 6000 MT/s in high-end configurations.</p>
                  <p><strong>MT/s (Mega Transfers per Second):</strong> This metric measures how many millions of transfers occur per second, providing a more accurate representation of memory performance compared to clock speed.</p>
                  <p><strong>PCH (Platform Controller Hub):</strong> The PCH is a chipset developed by Intel that acts as an intermediary between the CPU and various system peripherals. It manages communication with I/O devices, such as USB ports, SATA storage interfaces, and PCIe expansion slots, ensuring efficient data flow across the system.</p>
                  <p><strong>PCIe (Peripheral Component Interconnect Express):</strong> PCIe is the standard interface for connecting high-speed internal components to a computer’s motherboard. It enables fast communication between the CPU and peripherals like graphics cards, storage devices, and network adapters. <strong>PCIe 5.0</strong> is the latest generation of PCIe offers speeds of 32 GT/s (gigatransfers per second), with each lane providing up to 4 GB/s of bandwidth.</p>
                  <p><strong>NVMe (Non-Volatile Memory Express) SSDs:</strong> NVMe SSDs use the PCIe interface to deliver extremely fast storage speeds compared to traditional SATA SSDs. By bypassing older storage controllers, NVMe drives significantly reduce latency and increase throughput.</p>
                  <p><strong>M.2 NVMe SSDs:</strong> These compact SSDs connect directly to a motherboard’s M.2 slot, eliminating the need for cables and offering high-speed storage for modern computers.</p>
                  <p><strong>SATA (Serial ATA) SSDs:</strong> Typically, a SATA (Serial ATA) SSD is a 2.5-inch solid-state drive or an mSATA module designed for compact setups. The SATA interface is a widely adopted standard for connecting storage devices to the motherboard, relying on separate data and power cables to establish the connection. Although newer, faster storage technologies exist, SATA remains a viable option due to its broad compatibility across various systems. SATA devices connect to dedicated SATA ports on the motherboard, which makes them universally supported. However, unlike NVMe drives, which connect directly to the motherboard via M.2 slots, SATA drives require cabling, which can contribute to system clutter and potential airflow restrictions. One of the key advantages of SATA SSDs is their widespread support across both older and newer computer systems. This compatibility makes them a great choice for upgrading legacy machines that lack NVMe support while still offering a significant performance boost over traditional hard drives. SATA SSDs are ideal for budget-friendly builds, secondary storage, or systems that do not support NVMe storage solutions. Although they offer lower speeds compared to NVMe SSDs, their affordability and reliability make them a popular choice for general computing tasks.</p>
                  <p><strong>BOSS (Boot Optimized Storage Solution):</strong> The Boot Optimized Storage Solution (BOSS) is a dedicated storage controller designed specifically for booting a server's operating system. It uses two mirrored M.2 SATA SSDs in a RAID 1 configuration, ensuring redundancy and data protection. By offloading boot storage to a dedicated module, BOSS helps free up primary storage slots for higher-capacity or high-performance drives used for applications and data. NVMe-based M.2 SSDs utilized in BOSS-N1 offer much lower latency and higher bandwidth, making them more suitable for modern, high-performance servers. This upgrade allows servers to boot faster and perform system operations more efficiently.</p>
                  <p><strong>BOSS-N1: </strong> The BOSS-N1 is the NVMe-based version of the Boot Optimized Storage Solution. Unlike its SATA-based counterpart, it leverages NVMe (Non-Volatile Memory Express) technology, which significantly improves read and write speeds compared to traditional SATA drives. Overall, the BOSS-N1 provides higher performance than the BOSS-S1, making it a preferred choice for workloads that require fast boot times and enhanced reliability.</p>
                  <p><strong>BOSS-S1:</strong> The BOSS-S1 is the SATA-based version of the Boot Optimized Storage Solution. Unlike the BOSS-N1, which utilizes NVMe technology, the BOSS-S1 relies on SATA-based M.2 SSDs. This makes it a cost-effective solution for boot drives while maintaining redundancy through RAID 1 mirroring. While BOSS-S1 offers reliable performance for booting a server’s operating system, it does not provide the same speed advantages as NVMe-based solutions. However, its affordability and compatibility with older systems make it a practical choice for many server configurations. Overall, BOSS-S1 is a lower-performance alternative to BOSS-N1 but remains a dependable solution for managing boot drives in server environments.</p>
                  <p><strong>PERC (PowerEdge RAID Controller): </strong> The PowerEdge RAID Controller (PERC) is a hardware RAID controller used in Dell servers to manage RAID configurations. It provides redundancy, performance optimization, and data protection by allowing multiple hard drives or SSDs to be configured in RAID arrays. By handling RAID operations at the hardware level, PERC reduces the processing load on the CPU and improves storage efficiency. It supports various RAID levels, including RAID 0 (striping), RAID 1 (mirroring), RAID 5 (striping with parity), and RAID 10 (a combination of mirroring and striping), among others. PERC ensures that critical server data remains accessible even in the event of a drive failure, making it an essential component in enterprise-level storage management.</p>
                  <p><strong>RAID (Redundant Array of Independent Disks): </strong> A data storage technology that combines multiple physical hard drives or SSDs into a single logical unit. Depending on the RAID level used, it can improve performance, provide redundancy, or achieve both. Different RAID levels offer varying benefits. For instance, RAID 0 uses disk striping to increase performance but lacks redundancy, while RAID 1 mirrors data across two drives to ensure fault tolerance. RAID 5 and RAID 6 incorporate parity data for redundancy while still maintaining good performance. RAID 10 (a combination of RAID 1 and RAID 0) offers both speed and redundancy, making it a popular choice for enterprise applications. RAID technology is widely used in servers, data centers, and high-performance computing environments to enhance storage reliability and efficiency. It plays a crucial role in safeguarding data against drive failures while optimizing read and write operations.</p>
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
                        { level: "RAID 0", drives: "At least 2", storage: "Total storage" },
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
                  <p><strong>Hertz:</strong> A hertz (Hz) is the fundamental unit of frequency in the International System of Units (SI), representing one cycle per second. In computing and electronics, it refers to the number of oscillations or clock cycles occurring in one second. For instance, a CPU with a frequency of 3 GHz (gigahertz) executes three billion cycles per second. This measurement is crucial in determining the speed and efficiency of processors and other digital circuits.</p>
                  <p><strong>Megahertz:</strong> A megahertz (MHz) equals one million hertz or one million cycles per second. It is commonly used to measure the clock speed of older processors, memory modules, and radio frequencies. In earlier computing generations, processors operated in the range of tens to hundreds of megahertz, whereas modern systems function in the gigahertz range.</p>
                  <p><strong>Gigahertz:</strong> A gigahertz (GHz) equals one billion hertz or one billion cycles per second. Most modern processors, whether for desktops, laptops, or servers, operate in the multi-gigahertz range, with clock speeds typically between 2 GHz and 5 GHz. The higher the clock speed, the more instructions a processor can execute per second, though overall performance depends on other factors like core count and architecture.</p>
                  <p><strong>Bandwidth:</strong> Bandwidth refers to the maximum amount of data that can be transmitted over a network connection or data bus in a given period. It is measured in bits per second (bps), with common units including megabits per second (Mbps) and gigabits per second (Gbps). High bandwidth is essential for tasks that involve transferring large amounts of data, such as streaming high-definition videos or running data-intensive applications.</p>
                  <p><strong>Throughput:</strong> While bandwidth represents the theoretical maximum data transfer rate, throughput refers to the actual rate at which data is successfully transmitted and received. Factors like network congestion, protocol overhead, and hardware limitations affect throughput. For example, a 1 Gbps internet connection may only achieve an actual throughput of 800 Mbps due to network inefficiencies.</p>
                  <p><strong>Latency:</strong> Latency measures the delay between sending and receiving data, often expressed in milliseconds (ms). It is a crucial factor in applications like gaming, video conferencing, and financial transactions. Lower latency means faster response times, which is essential for real-time communication. High latency can be caused by network congestion, long physical distances between devices, or inefficient routing.</p>
                  <p><strong>iDRAC (Integrated Dell Remote Access Controller):</strong> iDRAC is Dell’s proprietary remote management solution for servers, allowing administrators to monitor, configure, and troubleshoot systems remotely.</p>
                </div>
              )}
            </div>
            <PowerOverEthernet />
              <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('ss32x')}> Why choose an SS32X server switch? </button>
              {visibleAnswer === 'ss32x' && (
                <div className="faq-answer">
                  <a href="pdf/razberi/SS32_Data_Sheet.pdf" download>
                    <button style={{ backgroundColor: "rgb(106, 13, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", marginBottom: "20px" }}>
                      Click to Download the SS32X Data Sheet
                    </button>
                  </a>
                  <p>The <strong>SS32X</strong> is a powerful and versatile network video recording (NVR) solution, designed specifically for large-scale surveillance systems that require both high storage capacity and efficient power distribution. It comes equipped with a built-in 32-port Power over Ethernet Plus (PoE+) switch, allowing it to power and connect multiple IP cameras without the need for additional power sources or injectors. This simplifies installation and reduces cable clutter, making it an ideal choice for businesses, campuses, and security-conscious facilities. With a maximum storage capacity of up to 88TB, the SS32X can accommodate extensive video archives, ensuring that high-resolution footage is retained for extended periods. This is particularly beneficial for compliance with security regulations or for organizations that require long-term video retention.</p>
                  <p><strong>The most relevant SS32X server switch specs are:</strong></p>
                  <li>32-port PoE switch</li>
                  <li>Intel i5 processor</li>
                  <li>Two M.2 SSDs with RAID 1</li>
                  <li>RAM: 16GB, 32 GB</li>
                  <li>Up to 88TB of storage</li>
                  <li>GPU: GPU-T400 or GPU-T1000</li>
                  <li>Operating System: Windows 10, Windows 11, Windows Server 2019, or Windows Server 2022</li>
                  <li>RAID: 0, 1, 5, 6, or 10</li>
                  <li>Available in long chassis with 'LX' in the part number</li>
                  <li>Available as 2U with '2U' in the part number</li>
                  <p><strong>The default configurations of the SS32X server switch are:</strong></p>
                  <li>Default switch IP: 192.168.50.1</li>
                  <li>Default Admin Uplink IP: 192.168.50.19</li>
                  <li>Default U2 IP: DHCP</li>
                  <li>Default SFP2 IP: DHCP</li>
                  <p><strong>Camera Defense</strong> allows the binding of ports to the MAC address of connected devices, disabling unused ports to reduce vulnerabilities. The firewall can be configured to allow only essential services or protocols, removing unnecessary ones. Network traffic can be restricted to known networks or approved devices with fixed IP addresses through whitelisting. It enforces secure password policies, disallowing default, prohibited, or common passwords.</p>
                  <p><strong>Appliance Defense (Cylance)</strong> is an  antimalware solution that leverages artificial intelligence and machine learning to build predictive models, enabling it to detect even previously unknown malware in real time. Cylance is fully integrated into Razberi Monitor, providing real-time notifications on malware protection through the dashboard.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('dell')}>  Why choose a Razberi recording server? </button>
              {visibleAnswer === 'dell' && (
                <div className="faq-answer">
                  <p>Purchasing a <strong>Razberi recording server</strong> for storing camera footage is a smart investment due to its reliability, scalability, and enterprise-grade features designed for high-performance storage. The Dell PowerEdge servers offer robust RAID configurations, ensuring data redundancy and protection against drive failures, which is crucial for surveillance systems that require continuous recording and long-term storage. With support for large-capacity hard drives and SSDs, the servers can accommodate extensive video archives while maintaining fast access speeds. Additionally, their compatibility with video management software (VMS) makes them an ideal choice for security applications. Advanced remote management tools, such as Dell iDRAC, allow for efficient monitoring and maintenance, reducing downtime and ensuring smooth operation. Whether for small businesses or large-scale surveillance deployments, the servers provides the performance, security, and expandability needed to handle high-resolution camera footage effectively. The core servers have the option of including <strong>10 GbE Ethernet ports or 10GbE SFP+ ports</strong> for greater data rates.</p>
                  <p>The <strong>Xeon processor</strong> is a great choice for storing and managing camera footage. Built for 24/7 use, it ensures smooth performance even with heavy workloads. With multiple cores and threads, it can process video files quickly, while ECC memory support helps prevent errors, keeping the footage safe and accurate. Its large cache and fast memory speeds allow for quick access to stored video. Unlike regular processors, Xeon CPUs are made for reliability and long-term use, making them perfect for security systems that need to run without interruption. A <strong>dual Xeon processor</strong> setup is ideal for storing and managing camera footage because it doubles the processing power, allowing for faster video processing, smoother performance, and better multitasking. With two CPUs, the server can handle more camera streams at once, ensuring high-quality recording and playback without lag. It also improves redundancy and reliability, so if one processor is overloaded, the other can help manage the workload. Additionally, more CPU cores and threads mean better support for advanced video analytics, AI-driven surveillance, and large-scale data storage, making a dual Xeon setup perfect for high-performance security systems.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('RDP')}>  I Wabt to Set Up a Remote Desktop Connection.  </button>
              {visibleAnswer === 'RDP' && (
                <div className="faq-answer">
                  <p><strong>[1] Enable RDP in the server's settings.</strong></p>
                  <p><strong>[2] Connect a laptop to a NIC on the server.</strong></p>
                  <p><strong>[3] Open the Remote Desktop Connection software on the laptop.</strong></p>
                  <p><strong>[4] Enter the IP address of the server's NIC.</strong></p>
                  <p><strong>[5] Enter the Windows username and password.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('lost-windows-password')}> I Forgot the Windows Password. </button>
              {visibleAnswer === 'lost-windows-password' && (
                <div className="faq-answer">
                  <p><strong>There is no way to reset the Windows password. A recovery of the operating system will need to be performed. Contact technical support for the Windows recovery procedure.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('registration')}> I Want to Skip the Registration on My Server. </button>
              {visibleAnswer === 'registration' && (
                <div className="faq-answer">
                  <p><strong>While on the registration page, hold down: Ctrl + Shift + Alt + F11.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('camera-defense')}> How do I Set Up CameraDefense? </button>
              {visibleAnswer === 'camera-defense' && (
                <div className="faq-answer">
                  <p><strong>Attach CameraDefense pictures here...</strong></p>
                </div>
              )}
            </div>
            <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('no-power-ss32x')}> Troubleshooting power issues on an SS32X. </button>
              {visibleAnswer === 'no-power-ss32x' && (
                <div className="faq-answer">
                  <p><strong>[1] Determine if the unit boots up at all or how frequently the unit powers off.</strong></p>
                  <p><strong>[2] Verify the unit is receiving 100-120VAC.</strong></p>
                  <p><strong>[3] If a UPS is in use, consider removing it to see if the issue persists and try replacing the power cable to rule it out.</strong></p>
                  <p><strong>[4] Verify a healthy OS, RAID, and switch.</strong></p>
                  <p><strong>[5] Confirm the following settings in BIOS.</strong></p>
                  <li>Check that the boot order is correct. Windows Boot Manager should be option #1.</li>
                  <li>In "Advanced" -- "ACPI Settings", make sure "Enable Hibernation" is disabled.</li>
                  <li>In "Advanced" -- "ACPI Settings", make sure "ACPI Sleep State" is set to "Suspend Disabled"</li>
                  <li>In "Chipset" -- "PCH-IO Configuration" -- "SATA and RST Configuration", make sure all the hard drives are detected. There should be 4 of them (but it will show up as 0, 1, 2, and 3).</li>
                  <li>In "Chipset" -- "Board Configuration", make sure "PWR-On After PWR-Fail" is set to "Last state" or "On".</li>
                  <p><strong>[6] Perform a recovery of the OS.</strong></p>
                  <p><strong>[7] If the issue persists, there may be an issue with the power supply or CPU board. Please contact technical support for further assistance.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('no-power-core')}> Troubleshooting power issues on a Core Server. </button>
              {visibleAnswer === 'no-power-core' && (
                <div className="faq-answer">
                  <p><strong>[1] Determine if the unit boots up at all or how frequently the unit powers off.</strong></p>
                  <p><strong>[2] Verify the unit is receiving 100-120VAC.</strong></p>
                  <p><strong>[3] If a UPS is in use, consider removing it to see if the issue persists and try replacing the power cable to rule it out.</strong></p>
                  <p><strong>[4] Verify a healthy OS and RAID.</strong></p>
                  <p><strong>[5] Enter the System Setup when booting into the server.</strong></p>
                  <li>Change the <strong>Thermal Profile</strong> to <strong>Minimum Power (Performance per Watt Optimized).</strong></li>
                  <li>The power of the server can be capped by specifing the watts, BTU/hr, and by a percentage. A lower power consumption typically means lower heat output, which can reduce cooling requirements. The fans may run at a lower speed, making the server quieter. Lower power usage can also reduce the thermal stress, potentially extending the life of components like CPUs and power supplies. However, if the server is power capped too aggressively, the CPU and memory performance may be throttled to stay within the limit.</li>
                  <p><strong>[6] Perform a recovery of the OS.</strong></p>
                  <p><strong>[7] Perform a hardware diagnostic on the server. This can be done in the <strong>Lifecycle Controller</strong> under the <strong>Hardware Diagnostics</strong> tab and <strong>Run Hardware Diagnostics</strong> button.</strong></p>
                  <p><strong>[8] If the issue persists, there may be an issue with the power supply or CPU board. Please contact technical support for further assistance.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('no-poe')}> Troubleshooting PoE switch issues. </button>
              {visibleAnswer === 'no-poe' && (
                <div className="faq-answer">
                  <p><strong>[1] Confirm the powered devices are 802.3af/at compliant.</strong></p>
                  <p><strong>[2] Ensure the switch is not producing more PoE than the PoE budget allows.</strong></p>
                  <p><strong>[3] While the server is powered on, default the switch by placing a jumper between ports 1 and 2.</strong></p>
                  <p><strong>[4] In the command prompt on the server, attempt pinging the switch at 192.168.50.1.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('failed-disk')}> Troubleshooting a failed hard drive. </button>
              {visibleAnswer === 'failed-disk' && (
                <div className="faq-answer">
                  <p><strong>[1] Confirm the hard drive has failed in one of the following:</strong></p>
                  <li>Device Manager</li>
                  <li>Diskpart</li>
                  <li>Intel Rapid Storage Technology</li>
                  <li>iDRAC</li>
                  <p><strong>[2] Contact technical support to determine if the unit is under warranty. If so, we can send out a replacement hard drive and provide assistance with reconfiguring the RAID array as needed. If the unit is not under warranty, consider purchasing a new hard drive for replacement, and we can provide assistance with reconfiguring the RAID array as needed.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('RAID')}> Troubleshooting RAID issues. </button>
              {visibleAnswer === 'RAID' && (
                <div className="faq-answer">
                  <p><strong>If the RAID array has failed: </strong>Delete the virtual disk, create a new virtual disk, and format the volume as NTFS using one of the following.</p>
                  <li>Disk Management</li>
                  <li>Intel Rapid Storage Technology</li>
                  <li>iDRAC</li>
                  <li>BIOS</li>
                  <p><strong>RAID 0:</strong> Requires at least 2 drives. One drive failing corrupts the entire RAID.</p>
                  <p><strong>RAID 1:</strong> Requires at least 2 drives and allows for the loss of half. Replacing the drive(s) will automatically rebuild the RAID.</p>
                  <p><strong>RAID 5:</strong> Requires at least 3 drives and allows for the loss of one. Replacing the drive will automatically rebuild the RAID.</p>
                  <p><strong>RAID 6:</strong> Requires at least 4 drives and allows for the loss of two. Replacing the drive(s) will automatically rebuild the RAID.</p>
                  <p><strong>RAID 10:</strong> Requires at least 4 drives and allows for the loss of half. Replacing the drive(s) will automatically rebuild the RAID.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('NIC')}> Troubleshooting NIC issues. </button>
              {visibleAnswer === 'NIC' && (
                <div className="faq-answer">
                  <p>[1] Enter "View network status and tasks" in the Windows search box.</p>
                  <p>[2] Disable and enable the NIC</p>
                  <p>[3] Diagnose the NIC connection</p>
                  <p>[4] In Device Manager, verify the NIC has the necessary drivers.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('windows-os')}> Troubleshooting Windows OS issues. </button>
              {visibleAnswer === 'windows-os' && (
                <div className="faq-answer">
                  <li>Event Viewer</li>
                  <li>Task Manager</li>
                  <li>Razberi Monitor or iDRAC alert logs</li>
                  <li>OS recovery</li>
                </div>
              )}
            </div>
          </div>
          </>
        )}
      </main>
      <Button />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default Razberi;
