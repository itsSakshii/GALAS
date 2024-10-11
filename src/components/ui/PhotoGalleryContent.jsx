import React from "react";
import PropTypes from "prop-types";

const PhotoGalleryContent = ({ image, index, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="carousel-item w-1/3 relative flex-shrink-0">
      <figure 
        className="card-content relative z-10 max-h-full overflow-hidden" 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
      >
        <img
          src={image}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-auto object-cover aspect-square rounded-lg img"
          loading="lazy"
        />
        <figcaption className="absolute bottom-0 left-0 p-6 w-full text-left">
          <h6 className="sub-title text-lg font-semibold"></h6>
        </figcaption>
      </figure>
    </div>
  );
};

PhotoGalleryContent.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired, 
  onMouseLeave: PropTypes.func.isRequired, 
};

export default PhotoGalleryContent;
