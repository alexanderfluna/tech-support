import React, { useState, useEffect } from 'react';
import '../../styles/Pages.css'
import ContactClosureSelectorTool from './ContactClosureSelectorTool';
import ContactClosureFAQ from './ContactClosureFAQ';
import ContactClosureTroubleshooting from './ContactClosureTroubleshooting';

const ContactClosure = () => {
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
          }}>Contact Closure</h1>

          <ContactClosureTroubleshooting/>
          <ContactClosureSelectorTool/>
          <ContactClosureFAQ/>
      </main>
    </div>
  );
};

export default ContactClosure;
