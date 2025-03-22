import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool'
import EthernetSwitchFAQ from './EthernetSwitchFAQ'

const EthernetSwitch = () => {
  return (
    <div>
      <main className="faq-container">
        <h1 className="faq-title">Ethernet Switch</h1>
        <p style={{fontWeight: "bold"}}>______________________________________</p>
        {<EthernetSwitchSelectorTool />}
        {<EthernetSwitchFAQ />}
      </main>
    </div>
  );
};

export default EthernetSwitch;