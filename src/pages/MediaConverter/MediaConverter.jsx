import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Chatbox from '../../components/Chatbox';
import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import MediaConverterTroubleshooting from './MediaConverterTroubleshooting';
import MediaConverterFrequentlyAskedQuestions from './MediaConverterFrequentlyAskedQuestions';
import '../../styles/Global.css';
import '../../styles/Pages.css';

const MediaConverter = () => {
  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Media Converter</h2>
        {<MediaConverterFrequentlyAskedQuestions />}
        {<MediaConverterSelectorTool />}
        {<MediaConverterTroubleshooting />}
      </main>
      <Button />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default MediaConverter;