import React from 'react';
import NoPowerLight from '../../relevant-information/NoPowerLight';
import NoOpticalLink from '../../relevant-information/NoOpticalLink';

const ContactClosureTroubleshooting = () => {
  return (
    <div className="faq-list">
        <h1 className="faq-title">Troubleshooting Contact Closures</h1>

        <div className="table-of-contents">
          <h1>Table of Contents</h1>
          <li><a href="#no-power">Troubleshooting a unit that will not power on</a></li>
          <li><a href="#no-optical-link">Troubleshooting a unit that will not link optically</a></li>
          <li><a href="#no-contacts">Troubleshooting a unit that is not properly sending or receiving the status of the contact</a></li>
        </div>

        <div id="no-power" className="faq-answer">
          <h1>Troubleshooting a unit that will not power on</h1>
          {<NoPowerLight />}
          </div>

        <div id="no-optical-link" className="faq-answer">
          <h1>Troubleshooting a unit that will not link optically</h1>
          {<NoOpticalLink />}
        </div>

          <div id="no-contacts" className="faq-answer">
            <h1>Troubleshooting a unit that is not properly sending or receiving the status of the contact</h1>
            <p><strong>[1] Ensure the wires are connected properly.</strong></p>
            <p><strong>FDC10:</strong></p>
            <img src="photos/FDC/fdc10.jpg" style={{"padding-right": "100px"}}></img>
            <p><strong>FDC8 or FDC80:</strong></p>
            <img src="photos/FDC/fdc80.jpg" style={{height: "600px"}}></img>
            <p><strong>[2] Confirm the inputs are dry (volt-free) closures. It is not acceptable to have voltage across the input pair.</strong></p>
            <p><strong>[3] If an ohmmeter is being used across the screwheads on the green terminal block and if the screws are not tightened, it will look like the relay is not responding. Be sure that there are wires in the terminal block and that the screws are tightened. If wires are not inserted into the terminal block, tighten the screws anyway and then measure across the screw heads.</strong></p>
            <p><strong>[4] Cycle power on the unit.</strong></p>
          </div>
    </div>
  )
}

export default ContactClosureTroubleshooting