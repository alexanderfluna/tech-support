import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool'
import EthernetSwitchTroubleshooting from './EthernetSwitchTroubleshooting'
import EthernetSwitchFrequentlyAskedQuestions from './EthernetSwitchFrequentlyAskedQuestions'
import '../../styles/Global.css';
import '../../styles/Pages.css';

const EthernetSwitch = () => {
  return (
    <div>
      <Navbar />
      <main className="faq-container">
        <h1 className="faq-title">Ethernet Switch</h1>
        {<EthernetSwitchFrequentlyAskedQuestions />}
        {<EthernetSwitchSelectorTool />}
        {<EthernetSwitchTroubleshooting />}
      </main>
      <Button />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default EthernetSwitch;