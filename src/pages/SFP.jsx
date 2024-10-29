import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../styles/style.css';
import '../styles/Pages.css'; 

const SFP = () => {
  // State to manage which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Dummy FAQ data (generic questions and answers)
  const faqData = [
    { question: "Selector tool", 
      answer: `...`
    },
  ];

  // Toggle function to open or close a question
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); // If clicked again, it closes the question
  };

  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">SFP</h2>
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

export default SFP;