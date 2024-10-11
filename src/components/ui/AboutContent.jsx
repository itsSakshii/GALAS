import PropTypes from 'prop-types';
import arrow from '../../assets/svg/arrow-outward.svg'; 



const AboutContent = ({ content, image, imageAlt }) => {
  return (
    <div className="about-inner container mx-auto px-6 py-2 flex flex-col lg:flex-row gap-6 items-center">
      <article className="left-content w-full">
        <div className="left-inner w-full h-full flex flex-col gap-2">
          <div className="inner-up flex w-full">
            <div className="content w-1/2">
              <h2 className="text-teal-200">{content.heading}</h2>
              <div className="line-space"></div>
              <p className="text-justify">{content.description}</p>
              <div className="line-space"></div>
              <div className="icon flex justify-start">
                <a
                  href={content.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-teal-400 rounded-full p-2 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                  style={{ width: "40px", height: "40px" }}
                >
                  <img 
                    src={arrow} 
                    alt="Arrow Icon" 
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110" 
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="inner-down flex flex-row-reverse w-full">
            <div className="content w-1/2">
              <h3 className="text-teal-400">{content.subHeading}</h3>
              <div className="line-space"></div>
              <p className="text-justify italic text-sm">{content.subDescription}</p>
              <div className="line-space"></div>
              <div className="icon flex justify-end">
                <a
                  href={content.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-teal-400 rounded-full p-2  flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                  style={{ width: "40px", height: "40px" }}
                >
                  <img 
                    src={arrow} 
                    alt="Icon Description" 
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110" 
                    
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="right-content w-full">
        <div className="right-inner relative flex-1">
          <img src={image} alt={imageAlt} className="rounded-2xl object-cover shadow-sm h-full sm:h-[50vh] md:h-[70vh]" loading="lazy" />
        </div>
      </article>
    </div>
  );
};

AboutContent.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subDescription: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default AboutContent;
