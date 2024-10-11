import PropTypes from "prop-types";

const PreloaderContent = ({vdoContent,alignment,contentRef}) => (
    <div className={`inner-contents h-full flex ${alignment}`} ref={contentRef}>
        {vdoContent && (
      <div className="w-auto h-[60%] sm:h-[90%] sm:w-2/3 transition-transform duration-300 ease-in-out">
        <video
          src={vdoContent.src}
          className="w-full h-full object-cover rounded-lg vdoData"
          alt={vdoContent.alt}
          autoPlay
          loop
          muted
          preload="metadata" 
          style={{ opacity: 0, willChange: "opacity, transform" }} 
        />
      </div>
    )}
    </div>    
); 

PreloaderContent.propTypes = {
    vdoContent: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    alignment: PropTypes.string.isRequired,
    contentRef: PropTypes.oneOfType([
      PropTypes.func, 
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
  };
  
  export default PreloaderContent;