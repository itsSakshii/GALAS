import PropTypes from 'prop-types';
import WhatsAppIcon from '../../assets/svg/whatsapp-icon.svg';
import LinkedInIcon from '../../assets/svg/linkedin-icon.svg';
import FacebookIcon from '../../assets/svg/fb-icon.svg';
import InstagramIcon from '../../assets/svg/instagram-icon.svg';

const FooterContent = ({ logoSrc, contactEmail, contactNumber, iconLabels }) => {
  const iconMap = {
    whatsapp: { src: WhatsAppIcon, alt: 'WhatsApp icon' },
    linkedin: { src: LinkedInIcon, alt: 'LinkedIn icon' },
    facebook: { src: FacebookIcon, alt: 'Facebook icon' },
    instagram: { src: InstagramIcon, alt: 'Instagram icon' },
  };

  return (
    <>
      <div className="logo-brand flex justify-center md:justify-start">
        <img className="w-auto h-14 shadow-none" src={logoSrc} alt="Galas Entertainment" />
      </div>

      <div className="contact flex flex-col items-center md:items-start">
        <p>
          Mail us:
          <a href={`mailto:${contactEmail}`} className="text-blue-500 hover:underline">
            {contactEmail}
          </a>
        </p>
        <p>
          Contact No:
          <a href={`tel:${contactNumber}`} className="text-blue-500">
            {contactNumber}
          </a>
        </p>
      </div>

      {/* Social icons */}
      <div className="icons flex justify-center md:justify-start gap-4">
        {iconLabels.map((label, index) => {
          const iconData = iconMap[label.name.toLowerCase()];
          return (
            <a
              key={index}
              href={label.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-1 flex items-center justify-center w-5 h-5 transition-colors duration-300 " 
            >
              {iconData ? (
                <img 
                  src={iconData.src} 
                  alt={iconData.alt} 
                  className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-110 " 
                />
              ) : null}
            </a>
          );
        })}
      </div>
    </>
  );
};

FooterContent.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  iconLabels: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterContent;
