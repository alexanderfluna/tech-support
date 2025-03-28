import MediaConverterTroubleshooting from './MediaConvererTroubleshooting';
import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import MediaConverterFAQ from './MediaConverterFAQ';
import '../../styles/Pages.css'

const MediaConverter = () => {
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
          }}>Media Converter</h1>
        <MediaConverterTroubleshooting/>
        <MediaConverterSelectorTool />
        <MediaConverterFAQ />
      </main>
    </div>
  );
};

export default MediaConverter;