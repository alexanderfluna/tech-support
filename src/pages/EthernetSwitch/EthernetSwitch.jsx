import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Chatbox from '../../components/Chatbox';
import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool'
import EthernetSwitchFAQ from './EthernetSwitchFAQ'
import '../../styles/Global.css';
import '../../styles/Pages.css';

const EthernetSwitch = () => {
  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h1 className="faq-title">Ethernet Switch</h1>
        <p style={{fontWeight: "bold"}}>______________________________________</p>
        {<EthernetSwitchSelectorTool />}
        {<EthernetSwitchFAQ />}
      </main>
      <Button />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default EthernetSwitch;