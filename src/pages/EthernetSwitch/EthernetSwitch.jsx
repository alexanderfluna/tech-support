import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool'
import EthernetSwitchFAQ from './EthernetSwitchFAQ'
import '../../styles/Pages.css'

const EthernetSwitch = () => {
  return (
    <div>
      <main className="faq-container">
        <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(135deg, rgb(54, 126, 208), rgb(77, 77, 77))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center"
          }}>Ethernet Switch</h1>
        {<EthernetSwitchSelectorTool />}
        {<EthernetSwitchFAQ />}
      </main>
    </div>
  );
};

export default EthernetSwitch;