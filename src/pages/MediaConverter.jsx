import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/style.css';
import '../styles/Pages.css'; 

const MediaConverter = () => {
  // State to manage which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Dummy FAQ data (generic questions and answers)
  const faqData = [
    { question: "No Power Light", 
      answer: `Typically, 8 to 24VDC is required for non-PoE.
      Typically, 48 to 57VDC is required for PoE.
      Use a voltmeter to determine if the polarity of the operating power connection is correct. Typically, a negative sign will show in the meter display if the red meter lead is connected to negative power and the black meter lead is connected to positive power.
      Use a voltmeter to determine that the power supply is delivering the required voltage while conencted to the device.
      Use a voltmeter to determine that the power supply is delivering the correct voltage when connected to a different device.
      Try using a different power supply to see if the issue persists.`
          
    },
    { question: "No Optical Link Light", 
      answer: `The mode of the fiber (multimode or single mode) must be compatabile with the device.
      The SFPs must be compatible with the unit and with the fiber. Fast Ethernet / Gigabit Ethernet, Multimode / Singlemode, 1/2 strands of fiber, LC/SC connector)
      Try using the same strands of fiber on another device to determine if you get a link light.
      Use a fiber optic cleaning kit.
      Use an optical power meter.
      Use a visual fault locator.
      Use an optical time-domain reflectometer (OTRD).` 
    },
    {
      question: "Selector Tool",
      answer: "..."
    }
  ];

  // Toggle function to open or close a question
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); // If clicked again, it closes the question
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Media Converter</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h3
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
              </h3>
              {openQuestion === index && (
                <ul className="faq-answer">
                  {item.answer.split('\n').map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
      <Button />
      <Footer />
    </div>
  );
};

export default MediaConverter;
