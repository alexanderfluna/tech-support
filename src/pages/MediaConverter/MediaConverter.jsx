import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Chatbox from '../../components/Chatbox';
import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import MediaConverterFAQ from './MediaConverterFAQ';
import '../../styles/Global.css';
import '../../styles/Pages.css';

const MediaConverter = () => {
  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h2 className="faq-title">Media Converter</h2>
        <p style={{fontWeight: "bold"}}>______________________________________</p>
        {<MediaConverterSelectorTool />}
        {<MediaConverterFAQ />}
      </main>
      <Button />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default MediaConverter;