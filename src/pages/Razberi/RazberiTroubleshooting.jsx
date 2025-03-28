import React, { useState, useEffect } from 'react';

const RazberiTroubleshooting = () => {
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
    </div>
  )
}

export default RazberiTroubleshooting