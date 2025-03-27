import React, { useState, useEffect } from 'react';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import '../../styles/Pages.css'

const Razberi = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(new Set());
  const [showSelector, setShowSelector] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);
  const [selected, setSelected] = useState("");


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

  const toggleSelector = () => {
    setShowSelector(!showSelector);
    setSelected("");
  };

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  }

  const toggleTroubleshooting = () => {
    setShowTroubleshooting(!showTroubleshooting);
  }

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <main className="faq-container">
        <h1 style={{
            fontSize: "5rem",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(135deg, rgb(54, 126, 208), rgb(77, 77, 77))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center"
          }}>Razberi Server</h1>

        <button className="purple-button" onClick={toggleTroubleshooting}>
          <h1>Troubleshoot</h1>
        </button>
        {showTroubleshooting && (
          <>
            <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('no-power-ss32x')}> Troubleshooting power issues on an SS32X. </button>
                {visibleAnswers.has('no-power-ss32x') && (
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
                {visibleAnswers.has('no-power-core') && (
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
                {visibleAnswers.has('no-poe') && (
                  <div className="faq-answer">
                    <p>[1] Verify the unit is receiving 100-120VAC.</p>
                    <p>[2] If a UPS is in use, consider removing it to see if the issue persists and try replacing the power cable to rule it out.</p>
                    <p>[3] Confirm the powered devices are 802.3af/at compliant.</p>
                    <p>[4] Ensure the switch is not producing more PoE than the PoE budget allows.</p>
                    <p>[5] Disable and enable PoE on the port.</p>
                    <p>[6] While the server is powered on, default the switch by placing a jumper between ports 1 and 2.</p>
                    <p>[7] Attempt pinging the switch from the command prompt on the server.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('RAID')}> Troubleshooting RAID or HDD issues. </button>
                {visibleAnswers.has('RAID') && (
                  <div className="faq-answer">
                    <p><strong>[1] Confirm that the HDD or RAID has failed and what the current RAID configuration is using one of the following:</strong></p>
                    <li>Razberi Monitor Cloud</li>
                    <li>Razberi Monitor: System Info</li>
                    <li>Device Manager</li>
                    <li>Intel Rapid Storage Technology</li>
                    <li>iDRAC</li>
                    <li>Diskpart</li>
                    <li>BIOS</li>
                    <p><strong>[2] If a HDD has failed, contact technical support to determine if the unit is under warranty. If so, a replacement HDD can be sent. Otherwise, a new HDD will need to be purchased. Please note:</strong></p>
                    <li>RAID 0 requires at least 2 drives. One drive failing corrupts the entire RAID.</li>
                    <li>RAID 1 requires at least 2 drives and allows for the loss of half. Replacing the drive(s) should automatically rebuild the RAID.</li>
                    <li>RAID 5 requires at least 3 drives and allows for the loss of one. Replacing the drive should automatically rebuild the RAID.</li>
                    <li>RAID 6 requires at least 4 drives and allows for the loss of two. Replacing the drive(s) should automatically rebuild the RAID.</li>
                    <li>RAID 10 requires at least 4 drives and allows for the loss of half. Replacing the drive(s) should automatically rebuild the RAID.</li>
                    <p><strong>[3] If the RAID is corrupted, delete the virtual disk, create a new virtual disk, and format the volume as NTFS using the following: </strong></p>
                    <li>BIOS</li>
                    <li>Disk Management</li>
                    <li>Intel Rapid Storage Technology</li>
                    <li>iDRAC</li>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('NIC')}> Troubleshooting NIC issues. </button>
                {visibleAnswers.has('NIC') && (
                  <div className="faq-answer">
                    <p>[1] Enter "View network status and tasks" in the Windows search box.</p>
                    <p>[2] Click "Change adapter settings".</p>
                    <p>[3] Disable and enable the NIC</p>
                    <p>[4] Diagnose the NIC connection</p>
                    <p>[5] In Device Manager, verify the NIC has the necessary drivers.</p>
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleAnswer('windows-os')}> Troubleshooting Windows OS issues. </button>
                {visibleAnswers.has('windows-os') && (
                  <div className="faq-answer">
                    <p>[1] Review the Razberi Monitor Alert Logs.</p>
                    <p>[2] Review the errors in Event Viewer.</p>
                    <p>[3] Review the iDRAC alert logs</p>
                    <p>[4] Review the CPU utilization and processes in Task Manager</p>
                    <p>[5] Perform a recovery of the operaitng system.</p>
                  </div>
                )}
              </div>
          </>
        )}
            

      <button className="purple-button" onClick={toggleSelector}>
        <h1>Selector Tool</h1>
      </button>
      {showSelector && (
        <div className="selector-placeholder" >
          <div className="selector-options" style={{width: "70%"}}>
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
                <div className="faq-answer">
                  <a href="pdf/razberi/SS32_Data_Sheet.pdf">
                    <button style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", marginBottom: "20px" }}>
                      Click to View the SS32X Data Sheet
                    </button>
                  </a>
                  <p>The <strong>SS32X server switch</strong> is a high-performance networking device designed for enterprise environments. It features a <strong>32-port PoE switch,</strong> powered by an <strong>Intel I5 processor</strong> for reliable performance. It includes two <strong>M.2 SSDs</strong> in RAID 1 for redundancy, with up to <strong>88TB</strong> of total capacity with <strong>RAID</strong> configurations of 0, 1, 5, 6, or 10 for storage flexibility. Users can choose between <strong>16GB or 32GB of RAM</strong>. It supports Windows 10, Windows 11, Windows Server 2019, and Windows Server 2022. The SS32X is also available in two form factors: a <strong>long chassis</strong> version, marked with "LX" in the part number, and a <strong>2U rack-mounted</strong> model, identified by "2U."</p>
                  <p>By default, the SS32X server switch is configured for easy deployment. The <strong>switch IP</strong> is set to 192.168.50.1, with a dedicated <strong>Admin Uplink IP</strong> of 192.168.50.19 for management access. The <strong>U2</strong> port is set to receive IP addresses via DHCP, allowing for seamless integration into dynamic network environments.</p>
                  <p><strong>Camera Defense</strong> allows the binding of ports to the MAC address of connected devices, disabling unused ports to reduce vulnerabilities. The firewall can be configured to allow only essential services or protocols, removing unnecessary ones. Network traffic can be restricted to known networks or approved devices with fixed IP addresses through whitelisting. It enforces secure password policies, disallowing default, prohibited, or common passwords.</p>
                  <p><strong>Appliance Defense (Cylance)</strong> is an  antimalware solution that leverages artificial intelligence and machine learning to build predictive models, enabling it to detect even previously unknown malware in real time. Cylance is fully integrated into Razberi Monitor, providing real-time notifications on malware protection through the dashboard.</p>
                </div>
              )}
              {selected === "Server" && (
                <div className="faq-answer">
                   <p>Purchasing a <strong>Razberi recording server</strong> is a smart choice for reliable, scalable, high-performance video storage. Dell PowerEdge servers offer RAID configurations for data protection, critical for continuous recording and long-term storage. With support for large drives and SSDs, they handle large video archives while ensuring fast access. Their compatibility with video management software (VMS) makes them ideal for security applications. Remote management tools like Dell <strong>iDRAC</strong> enable easy monitoring and maintenance, reducing downtime. These servers offer the performance, security, and scalability needed for both small and large surveillance systems. They can also include <strong>10 GbE Ethernet or 10GbE SFP+ ports</strong> for faster data rates.</p>
                   <p>The <strong>Xeon processor</strong> is perfect for managing camera footage with its 24/7 reliability, multiple cores, and ECC memory for error-free operation. It quickly processes video files and offers fast access to stored footage. Xeon CPUs are built for long-term use, making them ideal for continuous security systems. A <strong>dual Xeon setup</strong> doubles processing power, enabling faster video processing, smoother performance, and better multitasking. This setup enhances redundancy, supports more camera streams, and improves video analytics and AI-driven surveillance, making it ideal for high-performance security systems.</p>
                </div>
              )}
            </div>
          )}
          {!selected && <p className="placeholder-text"></p>}
        </div>
      )}

        <button className="purple-button" onClick={toggleFAQ}>
          <h1>Relevant Information</h1>
        </button>
        {showFAQ && (
          <>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('terminology')}>  Learn about computing. </button>
              {visibleAnswers.has('terminology') && (
                <div className="faq-answer">
                  <p><strong>CPU (Central Processing Unit):</strong> The central processing unit (CPU) is the primary component of a computer responsible for executing instructions and performing computations. It acts as the brain of the system, handling everything from running operating system processes to executing user applications. The efficiency of a CPU is determined by factors such as clock speed, core count, cache size, and instruction set architecture.</p>
                  <p><strong>CPU Cache (L1, L2, L3):</strong> The CPU cache is a small amount of high-speed memory located within the processor, designed to store frequently accessed data and instructions. L1 cache is the smallest but fastest, situated closest to the processing cores. L2 cache is slightly larger but slower, while L3 cache is the largest and shared among multiple cores, improving overall efficiency by reducing the need to fetch data from main memory.</p>
                  <p><strong>CPU Cores:</strong> Modern processors contain multiple cores, each functioning as an independent processing unit capable of executing its own set of instructions. A dual-core processor has two cores, a quad-core has four, etc. More cores enable better multitasking and improved performance in multi-threaded applications.</p>
                  <p><strong>CPU Threads:</strong> A CPU thread represents a sequence of instructions that a core can execu modern CPUs support simultaneous multithreading (SMT), commonly referred to as hyper-threading in Intel processors. This allows a single core to handle multiple threads at once, improving efficiency by maximizing core utilization.</p>
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
                      <tr style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff" }}>
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
              <button className="faq-question" onClick={() => toggleAnswer('RDP')}>  How to Set Up a Remote Desktop Connection to a Server.  </button>
              {visibleAnswers.has('RDP') && (
                <div className="faq-answer">
                  <p>[1] Enable Remote Desktop in the server's settings.</p>
                  <p>[2] Connect a laptop to a NIC on the server.</p>
                  <p>[3] Open the Remote Desktop Connection software on the laptop.</p>
                  <p>[4] Enter the IP address of the server's NIC.</p>
                  <p>[5] Enter the Windows username and password.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('lost-windows-password')}> I Forgot the Windows Password. </button>
              {visibleAnswers.has('lost-windows-password') && (
                <div className="faq-answer">
                  <p><strong>There is no way to reset the Windows password. A recovery of the operating system will need to be performed. Contact technical support for the Windows recovery procedure.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('registration')}> I Want to Skip the Registration on My Server. </button>
              {visibleAnswers.has('registration') && (
                <div className="faq-answer">
                  <p><strong>While on the registrate. Sometion page, hold down: Ctrl + Shift + Alt + F11.</strong></p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('camera-defense')}> Setting Up CameraDefense. </button>
              {visibleAnswers.has('camera-defense') && (
                <div className="faq-answer">
                  <p><strong>Device Binding</strong></p>
                  <li>Master Device Binding: Enable or Disable All</li>
                  <li>Bind a specific port to the MAC address of the connected device.</li>
                  <p><strong>Device Groups</strong></p>
                  <li>A device group is a set of similar devices assigned the same security policies. By default, all active ports are assigned to the "Cameras" device group. If cameras are the only devices connected to the SSIQ then hit "Save" to save the settings, otherwise:</li>
                  <li>Create a new device group or modify existing device group(s) giving each device group a unique name.</li>
                  <li>Add or modify the ports to be associated with each device group.</li>
                  <li>Review all changes and then hit "Save" to save the settings.</li>
                  <li>Note: Deleting an existing device group removes its firewall and whitelist settings. Changing the name of an existing device group causes that device group to be deleted and a new device group to be created.</li>
                  <p><strong>Firewall</strong></p>
                  <li>Use the firewall feature to limit traffic to video services and to disable discovery services. For each device group:</li>
                  <li>Select HTTP, HTTPS, and RTSP (Real-Time Streaming Protocol) services for device groups with cameras.</li>
                  <li>Disable discovery services to prevent cyber attackers from finding devices: Ping, DHCP, NTP, Telnet, DNS, FTP, TFTP, SSH, SMTP, Bonjour</li>
                  <li>Allow additional services as needed providing the name, protocol, and port.</li>
                  <p><strong>Internet Protection</strong></p>
                  <li>A whitelist limits traffic to specified networks by device group. The default option of Internet Protection prevents devices from communicating over routable networks such as the Internet.</li>
                  <li>Use Internet Protection to prevent devices from reaching routable networks, otherwise</li>
                  <li>Specify the allowed networks using sub-masks and/or individual IP addresses.</li>
                  <li>Enable alerts for devices that attempt to communicate outside of the whitelist.</li>
                  <p><strong>Password Protection</strong></p>
                  <li>Enable Password Monitoring: This feature monitors your devices to ensure they are not using default, user prohibited, or common passwords found on the NIST Bad Password List. By default, Password Protection is enabled.</li>
                  <li>Device default and common passwords are tested by default. You can optionally add additional prohibited passwords below. (Limit 48)</li>
                </div>
              )}
            </div>
            <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer('switch')}>  Pinging the Switch From a Laptop  </button>
              {visibleAnswers.has('switch') && (
                <div className="faq-answer">
                  <p><strong>On an SSIQ24 unit:</strong></p>
                  <li>The switch can be pinged from any port on the switch.</li>
                  <li>The switch can be pinged from the U1 Uplink port.</li>
                  <li>The switch cannot be pinged from the U2 Uplink port.</li>
                </div>
              )}
            </div>
          </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Razberi;
