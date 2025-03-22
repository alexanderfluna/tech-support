import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import MediaConverterFAQ from './MediaConverterFAQ';

const MediaConverter = () => {
  return (
    <div>
      <main className="faq-container">
        <h2 className="faq-title">Media Converter</h2>
        <p style={{fontWeight: "bold"}}>______________________________________</p>
        {<MediaConverterSelectorTool />}
        {<MediaConverterFAQ />}
      </main>
    </div>
  );
};

export default MediaConverter;