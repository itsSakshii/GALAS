import { useState, memo } from "react";
import PropTypes from "prop-types";
import useMenuAnim from "../../hooks/useMenuAnim";
import { Link } from "react-router-dom";
import galas from "../../assets/image/logo/galas.webp";


const Nav = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuRef] = useMenuAnim(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full relative ">
      {/* Mobile Menu */}
      <ul
        ref={menuRef}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-0 top-0 w-full  bg-customGray mb-2 md:hidden flex flex-col gap-2 sm:gap-4 justify-center items-center sm:space-y-4  py-4 transition-transform transform  ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 10 }}
      >
        {/* Close Button */}
        <div className="self-end p-1">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="text-white text-lg hover:text-teal-200 ">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-center">
        {links.slice(0, 3).map((link, index) => (
          <li key={index}>
            <a href={link.path} className="text-white hover:text-teal-200">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <Link to="/" aria-label="Homepage" className="flex items-center">
          <img
            className="w-auto h-14 shadow-none"
            src={galas}
            alt="Galas Entertainment"
          />
        </Link>

      <ul className="hidden md:flex space-x-8">
        {links.slice(3).map((link, index) => (
          <li key={index}>
            <a href={link.path} className="text-white hover:text-teal-200">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div className="md:hidden order-2">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default memo(Nav);