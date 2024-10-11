import PropTypes from "prop-types";

const ServiceContent = ({ title, description, img, points }) => {
  return (
    <div className="service flex flex-col sm:flex-row">
      <div className="service-info text-xs md:text-sm lg:text-base">
        <h3 className="text-teal-400">{title}</h3>
        <p className="font-light">{description}</p>
        {points && points.length > 0 && (
          <ul className="mt-4 list-disc list-inside italic font-thin text-xs lg:text-sm">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="service-img">
        <div className="img">
          <img src={img} alt={title} className="imge" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

ServiceContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceContent;
